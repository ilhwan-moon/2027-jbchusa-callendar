/* 배경화면 이미지 만들기 (브라우저 canvas)
 * 휴대폰: 위쪽(시계·위젯)과 아래쪽(독·손전등/카메라 버튼) 자리를 비우고 달력을 가운데 아래에 둡니다.
 * PC: 왼쪽에 이달의 그림 전체, 오른쪽에 달력과 말씀을 둡니다. */
(function () {
  var D = window.CAL_DATA;
  var imgCache = {};
  function loadImg(src) {
    if (!imgCache[src]) imgCache[src] = new Promise(function (ok, no) {
      var im = new Image(); im.decoding = 'async';
      im.onload = function () { ok(im); }; im.onerror = no; im.src = src;
    });
    return imgCache[src];
  }
  var fontsReady = null;
  function loadFonts() {
    if (!fontsReady) {
      fontsReady = !document.fonts ? Promise.resolve() : Promise.all([
        '200 80px Poppins', '300 80px Poppins', '500 80px Poppins', '600 80px Poppins', '80px "Great Vibes"',
        '400 80px "Noto Sans KR"', '500 80px "Noto Sans KR"', '700 80px "Noto Sans KR"',
      ].map(function (f) { return document.fonts.load(f, 'Aa가1').catch(function () {}); })).then(function () {});
    }
    return fontsReady;
  }

  var MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var DOW = { ko: ['일', '월', '화', '수', '목', '금', '토'], en: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'], es: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'] };
  var RED = '#c42d47', BLUE = '#2f55a4';
  var SANS = '"Noto Sans KR", -apple-system, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif';
  var POP = 'Poppins, ' + SANS;

  function iso(y, m, d) { return y + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0'); }
  function dayNum(s) { var p = s.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]) / 864e5; }

  function hexA(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')';
  }
  function shade(hex, f) { // f<0 어둡게
    var n = parseInt(hex.slice(1), 16), r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    function c(v) { return Math.round(f < 0 ? v * (1 + f) : v + (255 - v) * f); }
    return 'rgb(' + c(r) + ',' + c(g) + ',' + c(b) + ')';
  }
  function isLight(hex) { var n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16 & 255) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) > 170; }
  function rr(ctx, x, y, w, h, r) {
    r = Math.min(r, h / 2, w / 2);
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function cover(ctx, im, x, y, w, h, fx, fy) {
    var s = Math.max(w / im.width, h / im.height), sw = w / s, sh = h / s;
    var sx = Math.max(0, Math.min(im.width - sw, im.width * fx - sw / 2));
    var sy = Math.max(0, Math.min(im.height - sh, im.height * fy - sh / 2));
    ctx.drawImage(im, sx, sy, sw, sh, x, y, w, h);
  }
  // 흐린 배경 (작게 줄였다 키우는 방식: 모든 브라우저에서 동작)
  function blurCover(ctx, im, x, y, w, h, fx, fy) {
    var a = document.createElement('canvas'); a.width = Math.max(6, Math.round(w / 70)); a.height = Math.max(6, Math.round(h / 70));
    cover(a.getContext('2d'), im, 0, 0, a.width, a.height, fx, fy);
    var m = document.createElement('canvas'); m.width = a.width * 3; m.height = a.height * 3;
    var mc = m.getContext('2d'); mc.imageSmoothingQuality = 'high'; mc.drawImage(a, 0, 0, m.width, m.height);
    var b = document.createElement('canvas'); b.width = m.width * 3; b.height = m.height * 3;
    var bc = b.getContext('2d'); bc.imageSmoothingQuality = 'high'; bc.drawImage(m, 0, 0, b.width, b.height);
    ctx.save(); ctx.imageSmoothingQuality = 'high'; ctx.drawImage(b, x, y, w, h); ctx.restore();
  }
  // 줄바꿈 (한국어는 띄어쓰기 단위, 너무 긴 단어는 글자 단위)
  function wrap(ctx, text, maxW) {
    var words = String(text).split(/\s+/), lines = [], cur = '';
    words.forEach(function (w) {
      var t = cur ? cur + ' ' + w : w;
      if (ctx.measureText(t).width <= maxW || !cur) cur = t; else { lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);
    return lines;
  }

  function monthModel(m) {
    var Y = D.YEAR, first = new Date(Y, m - 1, 1).getDay(), days = new Date(Y, m, 0).getDate();
    var rows = Math.ceil((first + days) / 7);
    var hol = {}; D.HOLIDAYS.forEach(function (h) { hol[h.d] = h; });
    var evs = D.EVENTS.filter(function (e) {
      var s = dayNum(e.s), en = dayNum(e.e || e.s);
      return en >= dayNum(iso(Y, m, 1)) && s <= dayNum(iso(Y, m, days));
    });
    return { Y: Y, m: m, first: first, days: days, rows: rows, hol: hol, evs: evs };
  }

  /* 달력 그리기: (x,y) 위치, 너비 w, 칸 높이 ch */
  function drawGrid(ctx, M, x, y, w, ch, o) {
    var cw = w / 7, L = o.lang, acc = o.c.acc;
    var dow = DOW[L] || DOW.en;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '600 ' + Math.round(ch * .34) + 'px ' + (L === 'ko' ? SANS : POP);
    dow.forEach(function (d, i) { ctx.fillStyle = i === 0 ? RED : i === 6 ? BLUE : o.ink2; ctx.fillText(d, x + cw * (i + .5), y + ch * .4); });
    ctx.fillStyle = hexA(acc, .9); ctx.fillRect(x, y + ch * .8, w, Math.max(2, ch * .03));
    var gy = y + ch * 1.05;
    // 행사 막대 (같은 주 안에서 이어지는 칸을 둥근 띠로)
    if (o.events) {
      var start0 = dayNum(iso(M.Y, M.m, 1)) - M.first;
      M.evs.forEach(function (e, k) {
        var s = dayNum(e.s), en = dayNum(e.e || e.s);
        for (var r = 0; r < M.rows; r++) {
          var ws = start0 + r * 7, we = ws + 6;
          var a = Math.max(s, ws, dayNum(iso(M.Y, M.m, 1))), b = Math.min(en, we, dayNum(iso(M.Y, M.m, M.days)));
          if (a > b) continue;
          var c0 = a - ws, c1 = b - ws;
          ctx.fillStyle = hexA(acc, .26);
          rr(ctx, x + cw * c0 + cw * .06, gy + ch * r + ch * .14, cw * (c1 - c0 + 1) - cw * .12, ch * .72, ch * .36);
          ctx.fill();
        }
      });
    }
    ctx.font = '400 ' + Math.round(ch * .42) + 'px ' + POP;
    for (var d = 1; d <= M.days; d++) {
      var idx = M.first + d - 1, r2 = Math.floor(idx / 7), c = idx % 7;
      var hd = M.hol[iso(M.Y, M.m, d)];
      ctx.fillStyle = c === 0 || hd ? RED : c === 6 ? BLUE : o.ink;
      ctx.fillText(String(d), x + cw * (c + .5), gy + ch * r2 + ch * .52);
    }
    return gy + ch * M.rows;
  }

  function evLines(M, L) {
    return M.evs.map(function (e) {
      var a = e.s.slice(5).replace('-', '/').replace(/^0/, '').replace('/0', '/');
      var b = e.e ? e.e.slice(5).replace('-', '/').replace(/^0/, '').replace('/0', '/') : '';
      return { d: b ? a + '–' + b : a, t: e[L] || e.en };
    });
  }

  function drawLogo(ctx, logo, x, y, size, color, align) {
    ctx.save();
    ctx.font = '500 ' + Math.round(size * .5) + 'px ' + POP; ctx.textBaseline = 'middle';
    var label = 'LIFE WORD MISSION USA', tw = ctx.measureText(label).width, total = size + size * .3 + tw;
    var lx = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
    if (logo) ctx.drawImage(logo, lx, y - size / 2, size, size);
    ctx.fillStyle = color; ctx.textAlign = 'left'; ctx.fillText(label, lx + size * 1.3, y + size * .03);
    ctx.restore();
  }

  function draw(o) {
    var W = o.w, H = o.h, M = monthModel(o.month), info = D.MONTHS[o.month - 1];
    o.c = info.c;
    if (o.kind === 'art') {
      // 그림만 (달력 없이)
      var src = o.pic === 'cover' ? 'img/cover.jpg' : o.pic === 'back' ? 'img/back.jpg' : 'img/art-' + String(o.month).padStart(2, '0') + '.jpg';
      var fx = o.pic === 'cover' ? .32 : o.pic === 'back' ? .5 : info.focus;
      return loadImg(src).then(function (im) {
        var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
        var ctx = cv.getContext('2d'); ctx.imageSmoothingQuality = 'high';
        if (o.fit === 'whole') {
          // 그림 전체가 보이게: 남는 곳은 같은 그림을 흐리게 채움
          blurCover(ctx, im, 0, 0, W, H, fx, .5);
          ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, 0, W, H);
          var k = Math.min(W / im.width, H / im.height), dw = im.width * k, dh = im.height * k;
          var dy = H > W ? Math.min(H - dh, Math.max(0, H * .56 - dh / 2)) : (H - dh) / 2;
          ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.4)'; ctx.shadowBlur = Math.round(Math.max(W, H) * .015);
          ctx.drawImage(im, (W - dw) / 2, dy, dw, dh); ctx.restore();
        } else {
          cover(ctx, im, 0, 0, W, H, fx, .5);
        }
        return cv;
      });
    }
    return loadFonts().then(function () {
      var need = [loadImg('logo.png')];
      if (o.bg === 'art' || o.bg === 'artSharp') need.push(loadImg('img/art-' + String(o.month).padStart(2, '0') + '.jpg'));
      if (o.bg === 'stars') need.push(loadImg('img/back.jpg'));
      return Promise.all(need.map(function (p) { return p.catch(function () { return null; }); }));
    }).then(function (ims) {
      var logo = ims[0], bgImg = ims[1];
      var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
      var ctx = cv.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      if (H > W) phone(ctx, W, H, o, M, info, logo, bgImg); else desk(ctx, W, H, o, M, info, logo, bgImg);
      return cv;
    });
  }

  function paintColorBg(ctx, x, y, w, h, c) {
    var g = ctx.createLinearGradient(x, y, x + w * .3, y + h);
    g.addColorStop(0, shade(c.bg, .18)); g.addColorStop(.55, c.bg); g.addColorStop(1, shade(c.bg, -.35));
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  }

  /* ── 휴대폰 ── */
  function phone(ctx, W, H, o, M, info, logo, bgImg) {
    var S = W / 1179, L = o.lang;
    if (bgImg) {
      if (o.bg === 'art') blurCover(ctx, bgImg, 0, 0, W, H, info.focus, .5);
      else cover(ctx, bgImg, 0, 0, W, H, o.bg === 'artSharp' ? info.focus : .5, .5);
      var g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'rgba(0,0,0,.30)'); g.addColorStop(.3, 'rgba(0,0,0,.05)');
      g.addColorStop(.55, 'rgba(0,0,0,.25)'); g.addColorStop(1, 'rgba(0,0,0,.6)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    } else {
      paintColorBg(ctx, 0, 0, W, H, info.c);
      ctx.save(); ctx.globalAlpha = isLight(info.c.bg) ? .16 : .12; ctx.fillStyle = isLight(info.c.bg) ? info.c.num : '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.font = '200 ' + Math.round(W * .9) + 'px ' + POP; ctx.fillText(String(o.month).padStart(2, '0'), W / 2, H * .36); ctx.restore();
    }
    // 안전 영역: 위 0~35% 시계·위젯, 아래 86%~ 독/버튼
    var top = H * .355, bottom = H * .855;
    var cardX = W * .06, cardW = W * .88, pad = 44 * S;
    var lines = o.events ? evLines(M, L) : [];
    var verseLines = [], vSize = 40 * S;
    ctx.font = '500 ' + vSize + 'px ' + SANS;
    if (o.verse) verseLines = wrap(ctx, info.verse[L], W * .84);
    while (verseLines.length > 4 && vSize > 30 * S) { vSize -= 2 * S; ctx.font = '500 ' + vSize + 'px ' + SANS; verseLines = wrap(ctx, info.verse[L], W * .84); }
    var verseH = o.verse ? verseLines.length * vSize * 1.45 + 46 * S + 30 * S : 0;
    var ch = 92 * S;
    var head = 150 * S;
    var lineH = 44 * S;
    function cardH(n) { return pad + head + ch * (M.rows + 1.05) + (n ? 26 * S + n * lineH : 0) + (o.logo ? 70 * S : 0) + pad * .7; }
    var maxLines = Math.min(lines.length, 5);
    while (maxLines > 0 && top + cardH(maxLines) + verseH > bottom) maxLines--;
    while (top + cardH(maxLines) + verseH > bottom && ch > 70 * S) ch -= 2 * S;
    var cardY = Math.max(top, bottom - verseH - cardH(maxLines));
    var hgt = cardH(maxLines);

    // 카드
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,.25)'; ctx.shadowBlur = 40 * S; ctx.shadowOffsetY = 10 * S;
    ctx.fillStyle = 'rgba(255,255,255,.95)'; rr(ctx, cardX, cardY, cardW, hgt, 46 * S); ctx.fill();
    ctx.restore();
    var ix = cardX + pad, iw = cardW - pad * 2, y = cardY + pad;
    var numColor = shade(info.c.acc, -.15);
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.fillStyle = numColor;
    ctx.font = '200 ' + Math.round(150 * S) + 'px ' + POP; ctx.fillText(String(o.month).padStart(2, '0'), ix - 6 * S, y + 118 * S);
    ctx.textAlign = 'right';
    ctx.font = Math.round(84 * S) + 'px "Great Vibes", cursive'; ctx.fillText(MONTH_EN[o.month - 1], ix + iw, y + 72 * S);
    ctx.font = '300 ' + Math.round(46 * S) + 'px ' + POP; ctx.fillText(String(M.Y), ix + iw, y + 124 * S);
    y += head;
    y = drawGrid(ctx, M, ix, y, iw, ch, { lang: L, c: info.c, ink: '#22262b', ink2: '#555c63', events: o.events });
    if (maxLines) {
      y += 26 * S;
      ctx.textBaseline = 'middle';
      for (var i = 0; i < maxLines; i++) {
        var ln = lines[i], ly = y + lineH * i + lineH / 2;
        ctx.textAlign = 'left'; ctx.font = '600 ' + Math.round(28 * S) + 'px ' + POP; ctx.fillStyle = numColor;
        ctx.fillText(ln.d, ix, ly);
        ctx.font = '500 ' + Math.round(30 * S) + 'px ' + SANS; ctx.fillStyle = '#2a2f35';
        var t = ln.t, tx = ix + 190 * S, maxw = iw - 190 * S;
        while (ctx.measureText(t).width > maxw && t.length > 3) t = t.slice(0, -2) + '…';
        ctx.fillText(t, tx, ly);
      }
      if (lines.length > maxLines) { ctx.textAlign = 'right'; ctx.fillStyle = '#888'; ctx.font = '500 ' + Math.round(24 * S) + 'px ' + SANS; ctx.fillText('+' + (lines.length - maxLines), ix + iw, y + lineH * (maxLines - .5)); }
      y += lineH * maxLines;
    }
    if (o.logo) drawLogo(ctx, logo, cardX + cardW / 2, y + 48 * S, 40 * S, '#59606a', 'center');

    // 말씀 (카드 아래)
    if (o.verse) {
      var vy = cardY + hgt + 46 * S;
      var dk = !bgImg && isLight(info.c.bg);
      ctx.save(); ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = dk ? info.c.on : '#fff';
      if (!dk) { ctx.shadowColor = 'rgba(0,0,0,.55)'; ctx.shadowBlur = 14 * S; }
      ctx.font = '500 ' + vSize + 'px ' + SANS;
      verseLines.forEach(function (l, i) { ctx.fillText(l, W / 2, vy + i * vSize * 1.45); });
      ctx.font = '500 ' + Math.round(30 * S) + 'px ' + SANS; ctx.globalAlpha = .9;
      ctx.fillText(info.ref[L], W / 2, vy + verseLines.length * vSize * 1.45 + 8 * S);
      ctx.restore();
    }
  }

  /* ── PC (가로) ── */
  function desk(ctx, W, H, o, M, info, logo, bgImg) {
    var S = H / 1080, L = o.lang, c = info.c;
    var panelX;
    if ((o.bg === 'art' || o.bg === 'artSharp') && bgImg) {
      blurCover(ctx, bgImg, 0, 0, W, H, info.focus, .5);
      ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.fillRect(0, 0, W, H);
      // 그림 전체를 액자처럼 (잘리지 않게)
      var fw = W * .54, fh = fw * bgImg.height / bgImg.width, maxH = H * .78;
      if (fh > maxH) { fh = maxH; fw = fh * bgImg.width / bgImg.height; }
      var fx0 = W * .05, fy0 = (H - fh) / 2 - H * .02;
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.45)'; ctx.shadowBlur = 40 * S; ctx.shadowOffsetY = 12 * S;
      rr(ctx, fx0, fy0, fw, fh, 18 * S); ctx.fillStyle = '#000'; ctx.fill(); ctx.restore();
      ctx.save(); rr(ctx, fx0, fy0, fw, fh, 18 * S); ctx.clip(); ctx.drawImage(bgImg, fx0, fy0, fw, fh); ctx.restore();
      panelX = fx0 + fw;
    } else if (bgImg) {
      // 별하늘: 높이에 맞춰 왼쪽에 두고, 오른쪽은 거울처럼 이어 붙임 (로고가 달력에 가리지 않게)
      var iw = H * bgImg.width / bgImg.height, sx0 = Math.min(0, (W * .52) - iw * .5 - W * .2);
      ctx.drawImage(bgImg, sx0, 0, iw, H);
      ctx.save(); ctx.translate(sx0 + iw * 2, 0); ctx.scale(-1, 1); ctx.drawImage(bgImg, 0, 0, iw, H); ctx.restore();
      panelX = W * .56;
    } else {
      paintColorBg(ctx, 0, 0, W, H, c);
      panelX = W * .56;
      ctx.save(); ctx.fillStyle = isLight(c.bg) ? c.on : '#fff'; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.globalAlpha = .14; ctx.font = '200 ' + Math.round(H * .8) + 'px ' + POP; ctx.fillText(String(o.month).padStart(2, '0'), W * .03, H * .78);
      ctx.globalAlpha = 1; ctx.font = '600 ' + Math.round(110 * S) + 'px ' + POP; ctx.fillText(info.fig.en, W * .06, H * .74);
      ctx.font = '500 ' + Math.round(40 * S) + 'px ' + SANS; ctx.globalAlpha = .85; ctx.fillText(info.theme[L], W * .06, H * .74 + 64 * S);
      ctx.restore();
    }
    var pw = W - panelX, cx = panelX + pw * .08, cw = Math.min(pw * .84, 760 * S);
    cx = panelX + (pw - cw) / 2;
    var darkText = o.bg === 'color' && isLight(c.bg), onBg = darkText ? c.on : '#ffffff';
    var top = H * .07, y = top;
    // 제목
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.fillStyle = darkText ? c.num : '#fff';
    ctx.save(); if (!darkText) { ctx.shadowColor = 'rgba(0,0,0,.45)'; ctx.shadowBlur = 12 * S; }
    ctx.font = '200 ' + Math.round(140 * S) + 'px ' + POP; ctx.fillText(String(o.month).padStart(2, '0'), cx - 6 * S, y + 120 * S);
    ctx.textAlign = 'right'; ctx.fillStyle = onBg;
    ctx.font = Math.round(80 * S) + 'px "Great Vibes", cursive'; ctx.fillText(MONTH_EN[o.month - 1], cx + cw, y + 70 * S);
    ctx.font = '300 ' + Math.round(42 * S) + 'px ' + POP; ctx.fillText(String(M.Y), cx + cw, y + 118 * S);
    ctx.restore();
    y += 160 * S;
    // 카드
    var lines = o.events ? evLines(M, L) : [];
    var ch = 64 * S, pad = 30 * S, lineH = 34 * S;
    var maxLines = Math.min(lines.length, 5);
    var vSize = 26 * S, verseLines = [];
    ctx.font = '500 ' + vSize + 'px ' + SANS;
    if (o.verse) verseLines = wrap(ctx, info.verse[L], cw);
    var verseH = o.verse ? verseLines.length * vSize * 1.5 + 50 * S : 0;
    var bottom = H * .9 - (o.logo ? 50 * S : 0);
    function cardH(n) { return pad * 2 + ch * (M.rows + 1.05) + (n ? 16 * S + n * lineH : 0); }
    while (maxLines > 0 && y + cardH(maxLines) + verseH > bottom) maxLines--;
    while (y + cardH(maxLines) + verseH > bottom && ch > 44 * S) ch -= 2 * S;
    var hgt = cardH(maxLines);
    ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.22)'; ctx.shadowBlur = 30 * S; ctx.shadowOffsetY = 8 * S;
    ctx.fillStyle = 'rgba(255,255,255,.95)'; rr(ctx, cx, y, cw, hgt, 26 * S); ctx.fill(); ctx.restore();
    var gy = drawGrid(ctx, M, cx + pad, y + pad, cw - pad * 2, ch, { lang: L, c: c, ink: '#22262b', ink2: '#555c63', events: o.events });
    var numColor = shade(c.acc, -.15);
    if (maxLines) {
      gy += 16 * S; ctx.textBaseline = 'middle';
      for (var i = 0; i < maxLines; i++) {
        var ly = gy + lineH * i + lineH / 2;
        ctx.textAlign = 'left'; ctx.font = '600 ' + Math.round(20 * S) + 'px ' + POP; ctx.fillStyle = numColor; ctx.fillText(lines[i].d, cx + pad, ly);
        ctx.font = '500 ' + Math.round(21 * S) + 'px ' + SANS; ctx.fillStyle = '#2a2f35';
        var t = lines[i].t, maxw = cw - pad * 2 - 140 * S; while (ctx.measureText(t).width > maxw && t.length > 3) t = t.slice(0, -2) + '…';
        ctx.fillText(t, cx + pad + 140 * S, ly);
      }
    }
    y += hgt;
    if (o.verse) {
      ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = onBg;
      if (!darkText) { ctx.shadowColor = 'rgba(0,0,0,.5)'; ctx.shadowBlur = 10 * S; }
      ctx.font = '500 ' + vSize + 'px ' + SANS;
      verseLines.forEach(function (l, i) { ctx.fillText(l, cx, y + 30 * S + i * vSize * 1.5); });
      ctx.globalAlpha = .85; ctx.font = '500 ' + Math.round(20 * S) + 'px ' + SANS;
      ctx.fillText(info.ref[L], cx, y + 30 * S + verseLines.length * vSize * 1.5 + 4 * S);
      ctx.restore();
    }
    if (o.logo) { ctx.save(); if (!darkText) { ctx.shadowColor = 'rgba(0,0,0,.5)'; ctx.shadowBlur = 8 * S; } drawLogo(ctx, logo, cx + cw, H * .9, 34 * S, onBg, 'right'); ctx.restore(); }
  }

  window.Wallpaper = { draw: draw, preload: function (m) { loadFonts(); loadImg('img/art-' + String(m).padStart(2, '0') + '.jpg').catch(function () {}); } };
})();
