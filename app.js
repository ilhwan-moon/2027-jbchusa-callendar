(function () {
  'use strict';
  var D = window.CAL_DATA, Y = D.YEAR;
  var LANGS = ['ko', 'en', 'es'];
  var MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var MONTH_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  var T = {
    ko: {
      church: '생명의말씀선교회 USA', appSub: '2027 선교회 달력', appName: '2027 달력', calendar: '달력', prevMonth: '이전 달', nextMonth: '다음 달',
      textSize: '글씨 크기', sizeHint: '글씨가 작으신가요? 오른쪽 위 큰 「가」를 누르세요.', ok: '알겠어요',
      themeN: { auto: '화면: 자동', light: '화면: 밝게', dark: '화면: 어둡게' }, textSizeN: ['보통 글씨', '큰 글씨', '아주 큰 글씨'],
      swipeHint: '옆으로 밀면 다른 달로 넘어갑니다', monthEvents: '이달의 행사', holidays: '공휴일·기념일', upcoming: '다가오는 행사',
      noEvents: '이달에는 선교회 행사가 없습니다.', noDay: '이날은 행사가 없습니다.', today: '오늘', dday: 'D-{n}', ongoing: '진행 중',
      addAll: '내 휴대폰 달력에 모두 넣기', addAllHint: '아이폰은 「모두 추가」, 안드로이드는 받은 파일을 구글 캘린더로 여세요.',
      days: '{n}일간',
      wallTitle: '배경화면 만들기', wallLead: '{m}의 달력과 말씀으로 휴대폰·컴퓨터 배경화면을 만들어 드립니다. 웹사이트가 배경화면을 직접 바꿀 수는 없어서, <b>이미지를 저장한 뒤 아래 방법대로 설정</b>하시면 됩니다.',
      wallLeadArt: '달력 없이 <b>그림만</b> 휴대폰·컴퓨터 화면 크기에 맞춰 드립니다. 저장한 뒤 아래 방법대로 배경화면으로 설정하세요.', posTitle: '그림 위치 조정', posHint: '미리보기 그림을 손가락(마우스)으로 끌어서 옮길 수도 있어요.', posX: '좌우', posY: '위아래', posZ: '확대', posReset: '처음대로', posYHint: '「확대」를 키우면 위아래로도 움직일 수 있어요. 아래쪽 글씨를 화면 밖으로 밀어낼 수 있습니다.', whichMonth: '어느 달 배경화면', noUpcoming: '남은 행사가 없습니다.', kind: '만들 종류', kindCal: '달력 + 그림', kindArt: '그림만', picture: '그림', picMonth: '이달의 그림', picCover: '표지', picBack: '뒤표지 (별하늘)', fitFill: '화면 가득', fitWhole: '그림 전체 (잘림 없이)', device: '기기', size: '화면 크기', background: '배경', include: '넣을 내용', optVerse: '이달의 말씀', optEvents: '행사 표시', optLogo: '선교회 로고',
      bgArt: '이달의 그림', bgSharp: '그림 선명하게', bgStars: '별하늘', bgColor: '단색 테마',
      devIphone: '아이폰', devAndroid: '안드로이드', devWin: '윈도우 PC', devMac: '맥',
      saveShare: '사진에 저장하기', download: '이미지 내려받기', making: '만드는 중…', showSafe: '시계·독 자리 보기',
      saveHintPhone: '저장 창이 뜨면 <b>「이미지 저장」</b>을 누르세요. 안 되면 위 그림을 <b>길게 눌러</b> 「사진 앱에 저장」을 누르세요.',
      saveHintPc: '받은 파일은 「다운로드」 폴더에 저장됩니다.',
      saved: '저장했어요', guideTitle: '{d} 배경화면 설정 방법',
      guide: {
        iphone: ['<b>사진</b> 앱을 열고 방금 저장한 달력 그림을 누르세요', '왼쪽 아래 <b>공유</b> {share} 버튼을 누르세요', '목록을 올려 <b>「배경화면으로 사용」</b>을 누르세요', '위치를 맞추고 오른쪽 위 <b>「추가」</b> → <b>「배경화면 쌍으로 설정」</b>을 누르면 끝!'],
        android: ['<b>갤러리</b>(또는 구글 포토) 앱에서 달력 그림을 여세요', '오른쪽 위(또는 아래) <b>⋮</b> 를 누르세요', '<b>「배경화면으로 설정」</b>을 누르세요 (구글 포토: 「다음으로 사용」 → 배경화면)', '<b>잠금화면 / 홈 화면 / 둘 다</b> 중 고르고 <b>「완료」</b>'],
        win: ['<b>다운로드</b> 폴더에서 받은 그림을 찾으세요', '그림을 <b>마우스 오른쪽 버튼</b>으로 누르세요', '<b>「바탕 화면 배경으로 설정」</b>을 누르면 끝!', '또는 설정 → 개인 설정 → 배경 → <b>「사진 찾아보기」</b>'],
        mac: ['<b>시스템 설정</b> {apple} → <b>배경화면</b>으로 가세요', '<b>「사진 추가…」</b> 또는 「폴더 추가…」를 누르세요', '<b>다운로드</b> 폴더의 달력 그림을 고르세요', '사파리라면 위 미리보기를 <b>오른쪽 클릭 → 「이미지를 데스크탑 사진으로 사용」</b>도 됩니다'],
      },
      installTitle: '홈 화면에 달력 바로가기 만들기', installSub: '앱처럼 바로 열 수 있어요', installed: '홈 화면에 추가되었습니다',
      iosTitle: '🍎 아이폰: 홈 화면에 추가하기', iosSteps: ['사파리 아래 <b>주소창 왼쪽 아이콘</b> {menu} 을 누르세요', '메뉴에서 <b>「공유」</b>를 누르세요', '목록을 위로 올려 <b>「홈 화면에 추가」</b>를 누르세요', '오른쪽 위 <b>「추가」</b>를 누르면 끝!'],
      andTitle: '🤖 안드로이드: 홈 화면에 추가하기', andSteps: ['크롬 오른쪽 위 <b>⋮ (점 3개)</b> 를 누르세요', '<b>「홈 화면에 추가」</b> 또는 <b>「앱 설치」</b>를 누르세요', '<b>「설치」</b>(또는 「추가」)를 누르면 끝!'],
      inappTitle: '먼저 사파리/크롬으로 열어 주세요', inappSteps: ['오른쪽 위(또는 아래) <b>메뉴</b>를 누르세요', '<b>「다른 브라우저로 열기」</b> 또는 <b>「Safari로 열기」</b>를 누르세요', '열린 화면에서 이 버튼을 다시 누르세요'],
      share: '공유', website: '선교회 홈페이지', qr: 'QR 코드', toTop: '맨 위로', close: '닫기', copied: '링크를 복사했습니다', qrTitle: '휴대폰 카메라로 찍으면 달력이 열립니다',
      source: '그림·말씀·행사: 생명의말씀선교회 USA 2027 탁상달력 · 한국어 성경: 개역한글', updatedReload: '최신 버전으로 바뀌었습니다',
      nav: { cal: '달력', events: '행사', wall: '배경화면', today: '오늘' },
      monthName: function (m) { return m + '월'; }, monthTitle: function (m) { return Y + '년 ' + m + '월'; },
      dayTitle: function (m, d, w) { return m + '월 ' + d + '일 (' + '일월화수목금토'[w] + ')'; },
      dow: ['일', '월', '화', '수', '목', '금', '토'],
    },
    en: {
      church: 'Life Word Mission USA', appSub: '2027 Mission Calendar', appName: 'Calendar 2027', calendar: 'Calendar', prevMonth: 'Previous month', nextMonth: 'Next month',
      textSize: 'Text size', sizeHint: 'Text too small? Tap a bigger “A” at the top right.', ok: 'Got it',
      themeN: { auto: 'Theme: auto', light: 'Theme: light', dark: 'Theme: dark' }, textSizeN: ['Normal text', 'Large text', 'Extra large text'],
      swipeHint: 'Swipe sideways to change the month', monthEvents: 'Events this month', holidays: 'Holidays', upcoming: 'Coming up',
      noEvents: 'No mission events this month.', noDay: 'No events on this day.', today: 'Today', dday: 'In {n} days', ongoing: 'Happening now',
      addAll: 'Add all to my phone calendar', addAllHint: 'iPhone: tap “Add All”. Android: open the file with Google Calendar.',
      days: '{n} days',
      wallTitle: 'Make a wallpaper', wallLead: 'Create a phone or computer wallpaper with the {m} calendar and verse. A website can’t change your wallpaper directly, so <b>save the image, then set it</b> as shown below.',
      wallLeadArt: 'Get <b>just the artwork</b>, sized for your phone or computer. Save it, then set it as your wallpaper as shown below.', posTitle: 'Adjust position', posHint: 'You can also drag the preview with your finger (or mouse).', posX: 'Left/Right', posY: 'Up/Down', posZ: 'Zoom', posReset: 'Reset', posYHint: 'Increase “Zoom” to move up and down too — you can push the text at the bottom off the screen.', whichMonth: 'Which month', noUpcoming: 'No more events this year.', kind: 'Type', kindCal: 'Calendar + art', kindArt: 'Art only', picture: 'Picture', picMonth: 'Monthly art', picCover: 'Cover', picBack: 'Back cover (stars)', fitFill: 'Fill screen', fitWhole: 'Whole picture (no crop)', device: 'Device', size: 'Screen size', background: 'Background', include: 'Include', optVerse: 'Verse of the month', optEvents: 'Mark events', optLogo: 'Mission logo',
      bgArt: 'Monthly art', bgSharp: 'Sharp art', bgStars: 'Starry sky', bgColor: 'Color theme',
      devIphone: 'iPhone', devAndroid: 'Android', devWin: 'Windows PC', devMac: 'Mac',
      saveShare: 'Save to Photos', download: 'Download image', making: 'Making…', showSafe: 'Show clock & dock areas',
      saveHintPhone: 'When the share sheet opens, tap <b>“Save Image”</b>. Or <b>press and hold</b> the picture above and choose “Save to Photos”.',
      saveHintPc: 'The file is saved to your Downloads folder.',
      saved: 'Saved', guideTitle: 'How to set it on {d}',
      guide: {
        iphone: ['Open the <b>Photos</b> app and tap the calendar picture', 'Tap <b>Share</b> {share} at the bottom left', 'Scroll and tap <b>“Use as Wallpaper”</b>', 'Adjust, tap <b>“Add”</b> → <b>“Set as Wallpaper Pair”</b>. Done!'],
        android: ['Open the picture in <b>Gallery</b> (or Google Photos)', 'Tap <b>⋮</b> at the top (or bottom) right', 'Tap <b>“Set as wallpaper”</b> (Google Photos: “Use as” → Wallpaper)', 'Choose <b>Lock screen / Home screen / Both</b> and tap <b>Done</b>'],
        win: ['Find the picture in your <b>Downloads</b> folder', '<b>Right-click</b> the picture', 'Choose <b>“Set as desktop background”</b>. Done!', 'Or Settings → Personalization → Background → <b>“Browse photos”</b>'],
        mac: ['Open <b>System Settings</b> {apple} → <b>Wallpaper</b>', 'Click <b>“Add Photo…”</b> or “Add Folder…”', 'Choose the calendar picture in <b>Downloads</b>', 'In Safari you can also <b>right-click the preview → “Use Image as Desktop Picture”</b>'],
      },
      installTitle: 'Add the calendar to your Home Screen', installSub: 'Open it like an app', installed: 'Added to Home Screen',
      iosTitle: '🍎 iPhone: Add to Home Screen', iosSteps: ['Tap the <b>icon on the left of the address bar</b> {menu} at the bottom of Safari', 'Tap <b>“Share”</b> in the menu', 'Scroll up and tap <b>“Add to Home Screen”</b>', 'Tap <b>“Add”</b> at the top right. Done!'],
      andTitle: '🤖 Android: Add to Home Screen', andSteps: ['Tap <b>⋮ (3 dots)</b> at the top right of Chrome', 'Tap <b>“Add to Home screen”</b> or <b>“Install app”</b>', 'Tap <b>“Install”</b> (or “Add”). Done!'],
      inappTitle: 'Please open in Safari/Chrome first', inappSteps: ['Tap the <b>menu</b> at the top (or bottom) right', 'Tap <b>“Open in browser”</b> or <b>“Open in Safari”</b>', 'Then tap this button again'],
      share: 'Share', website: 'Mission website', qr: 'QR code', toTop: 'Top', close: 'Close', copied: 'Link copied', qrTitle: 'Scan with your phone camera to open the calendar',
      source: 'Art, verses & events: Life Word Mission USA 2027 desk calendar · Bible: NKJV', updatedReload: 'Updated to the latest version',
      nav: { cal: 'Calendar', events: 'Events', wall: 'Wallpaper', today: 'Today' },
      monthName: function (m) { return MONTH_EN[m - 1]; }, monthTitle: function (m) { return MONTH_EN[m - 1] + ' ' + Y; },
      dayTitle: function (m, d, w) { return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][w] + ', ' + MONTH_EN[m - 1] + ' ' + d; },
      dow: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    },
    es: {
      church: 'Life Word Mission USA', appSub: 'Calendario 2027 de la Misión', appName: 'Calendario 2027', calendar: 'Calendario', prevMonth: 'Mes anterior', nextMonth: 'Mes siguiente',
      textSize: 'Tamaño de letra', sizeHint: '¿Letra pequeña? Toque una “A” más grande arriba a la derecha.', ok: 'Entendido',
      themeN: { auto: 'Tema: automático', light: 'Tema: claro', dark: 'Tema: oscuro' }, textSizeN: ['Letra normal', 'Letra grande', 'Letra muy grande'],
      swipeHint: 'Deslice de lado para cambiar de mes', monthEvents: 'Eventos del mes', holidays: 'Días festivos', upcoming: 'Próximos eventos',
      noEvents: 'No hay eventos de la misión este mes.', noDay: 'No hay eventos este día.', today: 'Hoy', dday: 'En {n} días', ongoing: 'En curso',
      addAll: 'Agregar todo al calendario del teléfono', addAllHint: 'iPhone: toque «Agregar todo». Android: abra el archivo con Google Calendar.',
      days: '{n} días',
      wallTitle: 'Crear fondo de pantalla', wallLead: 'Cree un fondo para su teléfono o computadora con el calendario y el versículo de {m}. Una página web no puede cambiar el fondo directamente: <b>guarde la imagen y luego configúrela</b> como se indica abajo.',
      wallLeadArt: 'Obtenga <b>solo el arte</b>, del tamaño de su teléfono o computadora. Guárdelo y póngalo como fondo como se indica abajo.', posTitle: 'Ajustar posición', posHint: 'También puede arrastrar la vista previa con el dedo (o el ratón).', posX: 'Izq./Der.', posY: 'Arriba/Abajo', posZ: 'Zoom', posReset: 'Restablecer', posYHint: 'Aumente el «Zoom» para moverla también arriba y abajo; así puede sacar de la pantalla el texto de abajo.', whichMonth: '¿Qué mes?', noUpcoming: 'No quedan eventos este año.', kind: 'Tipo', kindCal: 'Calendario + arte', kindArt: 'Solo el arte', picture: 'Imagen', picMonth: 'Arte del mes', picCover: 'Portada', picBack: 'Contraportada (estrellas)', fitFill: 'Llenar pantalla', fitWhole: 'Imagen completa (sin recortar)', device: 'Dispositivo', size: 'Tamaño de pantalla', background: 'Fondo', include: 'Incluir', optVerse: 'Versículo del mes', optEvents: 'Marcar eventos', optLogo: 'Logo de la misión',
      bgArt: 'Arte del mes', bgSharp: 'Arte nítido', bgStars: 'Cielo estrellado', bgColor: 'Color del mes',
      devIphone: 'iPhone', devAndroid: 'Android', devWin: 'PC Windows', devMac: 'Mac',
      saveShare: 'Guardar en Fotos', download: 'Descargar imagen', making: 'Creando…', showSafe: 'Ver zonas del reloj y dock',
      saveHintPhone: 'Cuando se abra el menú, toque <b>«Guardar imagen»</b>. O <b>mantenga presionada</b> la imagen y elija «Guardar en Fotos».',
      saveHintPc: 'El archivo se guarda en la carpeta Descargas.',
      saved: 'Guardado', guideTitle: 'Cómo ponerlo en {d}',
      guide: {
        iphone: ['Abra la app <b>Fotos</b> y toque la imagen del calendario', 'Toque <b>Compartir</b> {share} abajo a la izquierda', 'Deslice y toque <b>«Usar como fondo de pantalla»</b>', 'Ajuste, toque <b>«Añadir»</b> → <b>«Definir como par de fondos»</b>. ¡Listo!'],
        android: ['Abra la imagen en <b>Galería</b> (o Google Fotos)', 'Toque <b>⋮</b> arriba (o abajo) a la derecha', 'Toque <b>«Establecer como fondo de pantalla»</b> (Google Fotos: «Usar como» → Fondo)', 'Elija <b>Bloqueo / Inicio / Ambas</b> y toque <b>Listo</b>'],
        win: ['Busque la imagen en la carpeta <b>Descargas</b>', 'Haga <b>clic derecho</b> en la imagen', 'Elija <b>«Establecer como fondo de escritorio»</b>. ¡Listo!', 'O Configuración → Personalización → Fondo → <b>«Examinar fotos»</b>'],
        mac: ['Abra <b>Configuración del Sistema</b> {apple} → <b>Fondo de pantalla</b>', 'Haga clic en <b>«Añadir foto…»</b> o «Añadir carpeta…»', 'Elija la imagen del calendario en <b>Descargas</b>', 'En Safari también puede hacer <b>clic derecho en la vista previa → «Usar imagen como fondo de escritorio»</b>'],
      },
      installTitle: 'Agregar el calendario a la pantalla de inicio', installSub: 'Ábralo como una app', installed: 'Agregado a la pantalla de inicio',
      iosTitle: '🍎 iPhone: Agregar a inicio', iosSteps: ['Toque el <b>ícono a la izquierda de la barra de dirección</b> {menu} abajo en Safari', 'Toque <b>«Compartir»</b> en el menú', 'Deslice y toque <b>«Agregar a inicio»</b>', 'Toque <b>«Agregar»</b> arriba a la derecha. ¡Listo!'],
      andTitle: '🤖 Android: Agregar a inicio', andSteps: ['Toque <b>⋮ (3 puntos)</b> arriba a la derecha en Chrome', 'Toque <b>«Agregar a la pantalla principal»</b> o <b>«Instalar app»</b>', 'Toque <b>«Instalar»</b> (o «Agregar»). ¡Listo!'],
      inappTitle: 'Primero ábralo en Safari/Chrome', inappSteps: ['Toque el <b>menú</b> arriba (o abajo) a la derecha', 'Toque <b>«Abrir en el navegador»</b> o <b>«Abrir en Safari»</b>', 'Luego toque este botón otra vez'],
      share: 'Compartir', website: 'Sitio de la misión', qr: 'Código QR', toTop: 'Arriba', close: 'Cerrar', copied: 'Enlace copiado', qrTitle: 'Escanee con la cámara del teléfono para abrir el calendario',
      source: 'Arte, versículos y eventos: calendario 2027 de Life Word Mission USA · Biblia: RVR1960', updatedReload: 'Actualizado a la última versión',
      nav: { cal: 'Calendario', events: 'Eventos', wall: 'Fondo', today: 'Hoy' },
      monthName: function (m) { return MONTH_ES[m - 1]; }, monthTitle: function (m) { var s = MONTH_ES[m - 1]; return s[0].toUpperCase() + s.slice(1) + ' ' + Y; },
      dayTitle: function (m, d, w) { return ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'][w] + ', ' + d + ' de ' + MONTH_ES[m - 1]; },
      dow: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
    },
  };

  var ICONS = {
    calendar: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>',
    image: '<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M6.5 15l3.5-3.5 3 3 2-2 2 2"/><circle cx="14.5" cy="7.5" r="1.3"/></svg>',
    today: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><circle cx="12" cy="15" r="2.2"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5"/><path d="M4.5 16.5v3h15v-3"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',
    share: '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/></svg>',
    qr: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1"/><path d="M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM18 14h2.5M14 18v2.5"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17"/></svg>',
    up: '<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg>',
    auto: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17z" fill="currentColor"/></svg>',
    pageMenu: '<svg viewBox="0 0 24 24"><rect x="3" y="4.5" width="6.5" height="6.5" rx="1.2"/><path d="M13 6h8M13 9.5h8M3 14.5h18M3 19h12"/></svg>',
    iosShare: '<svg viewBox="0 0 24 24"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M7 10H5.5v10.5h13V10H17"/></svg>',
    apple: '<svg viewBox="0 0 24 24"><path d="M15.5 3.5c0 1.6-1.3 3-2.8 3 0-1.6 1.3-3 2.8-3zM12 8c1.2 0 2-.8 3.4-.8 1.2 0 2.5.7 3.2 1.9-2.8 1.5-2.3 5.6.4 6.6-.6 1.6-1.9 3.8-3.3 3.8-1.2 0-1.5-.7-2.9-.7s-1.9.7-3 .7c-1.6 0-4.3-3.6-4.3-7.3 0-3 2-4.9 3.9-4.9C10.5 7.3 11 8 12 8z"/></svg>',
  };

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var $ = function (id) { return document.getElementById(id); };
  var params = new URLSearchParams(location.search);
  var UA = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(UA);
  var isMac = /Macintosh/.test(UA) && !isIOS;
  var isKakao = /KAKAOTALK/i.test(UA);
  var isInApp = isKakao || /FBAN|FBAV|Instagram|Line\/|NAVER\(inapp|DaumApps|Band\//i.test(UA);
  var isPhone = isIOS || isAndroid;

  /* ── 오늘 / 처음 보여 줄 달 ── */
  function todayISO() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function pad(n) { return String(n).padStart(2, '0'); }
  function iso(m, d) { return Y + '-' + pad(m) + '-' + pad(d); }
  function dn(s) { var p = s.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]) / 864e5; }
  function defaultMonth() { var t = new Date(); return t.getFullYear() < Y ? 1 : t.getFullYear() > Y ? 12 : t.getMonth() + 1; }

  /* ── 언어 (소식지와 같은 규칙) ── */
  function saveLang(l) { store('cal_lang', l); try { document.cookie = 'cal_lang=' + l + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {} }
  function savedLang() {
    var s = store('cal_lang'); if (LANGS.indexOf(s) !== -1) return s;
    var m = (document.cookie || '').match(/(?:^|;\s*)cal_lang=(ko|en|es)/); return m ? m[1] : null;
  }
  function launchedFromHome() { return params.get('source') === 'home' || (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
  function pickLang() {
    var p = params.get('lang');
    if (LANGS.indexOf(p) !== -1) { var sv = launchedFromHome() ? savedLang() : null; if (sv) return sv; saveLang(p); return p; }
    var s = savedLang(); if (s) { saveLang(s); return s; }
    var n = (navigator.language || 'ko').slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) !== -1 ? n : 'ko';
  }

  // 주소의 m(보던 달)은 일반 브라우저에서 새로고침할 때만 씀.
  // 홈 화면 앱으로 열면 항상 이번 달로 엽니다 (아이폰은 추가할 때의 주소를 그대로 저장하기 때문).
  var pm = launchedFromHome() ? 0 : Number(params.get('m'));
  var state = {
    lang: pickLang(),
    size: Number(store('cal_size') || 1),
    month: pm >= 1 && pm <= 12 ? pm : defaultMonth(),
    day: null,
    dev: store('cal_dev') || (isIOS ? 'iphone' : isAndroid ? 'android' : isMac ? 'mac' : 'win'),
    bg: store('cal_bg') || 'art',
    kind: store('cal_kind') || 'cal',
    pic: store('cal_pic') || 'month',
    fit: store('cal_fit') || 'fill',
  };
  function L() { return T[state.lang]; }
  function t(k) { var v = L()[k]; return v == null ? T.ko[k] : v; }
  function fmt(s, o) { return String(s).replace(/\{(\w+)\}/g, function (_, k) { return o[k] == null ? '' : o[k]; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ── 화면 모드 ── */
  function themeMode() { var m = store('cal_theme') || ((document.cookie.match(/(?:^|;\s*)cal_theme=(light|dark|auto)/) || [])[1]); return m === 'light' || m === 'dark' ? m : 'auto'; }
  function applyTheme(m) {
    if (m === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', m);
    $('themeIco').innerHTML = ICONS[m === 'light' ? 'sun' : m === 'dark' ? 'moon' : 'auto'];
    $('themeLabel').textContent = L().themeN[m];
    $('themeBtn').setAttribute('title', L().themeN[m]); $('themeBtn').setAttribute('aria-label', L().themeN[m]);
  }

  function renderStatic() {
    var Lg = state.lang;
    applyTheme(themeMode());
    document.documentElement.lang = Lg;
    document.title = t('appName') + ' · ' + t('church');
    var mf = document.querySelector('link[rel="manifest"]'), mfHref = Lg === 'ko' ? 'manifest.webmanifest' : 'manifest.' + Lg + '.webmanifest';
    if (mf && mf.getAttribute('href') !== mfHref) mf.setAttribute('href', mfHref);
    var at = document.querySelector('meta[name="apple-mobile-web-app-title"]'); if (at) at.setAttribute('content', t('appName'));
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-ico]').forEach(function (el) { el.innerHTML = ICONS[el.getAttribute('data-ico')] || ''; el.setAttribute('aria-hidden', 'true'); });
    document.querySelectorAll('#langSeg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === Lg)); });
    $('sizeSeg').setAttribute('aria-label', L().textSize); $('sizeSeg').setAttribute('title', L().textSize);
    document.querySelectorAll('#sizeSeg button').forEach(function (bt) {
      var n = Number(bt.getAttribute('data-size'));
      bt.setAttribute('aria-pressed', String(n === state.size)); bt.setAttribute('aria-label', L().textSizeN[n - 1]);
      bt.querySelector('.g').textContent = Lg === 'ko' ? '가' : 'A';
    });
    $('sizeHintText').textContent = L().sizeHint;
    document.documentElement.setAttribute('data-size', String(state.size));
    $('bottomnav').innerHTML = [['cal', '#sec-cal', 'calendar'], ['events', '#sec-events', 'bell'], ['wall', '#sec-wall', 'image'], ['today', '', 'today']].map(function (n) {
      return n[0] === 'today'
        ? '<button type="button" id="navToday"><span class="ico" aria-hidden="true">' + ICONS[n[2]] + '</span><span>' + esc(L().nav[n[0]]) + '</span></button>'
        : '<a href="' + n[1] + '"><span class="ico" aria-hidden="true">' + ICONS[n[2]] + '</span><span>' + esc(L().nav[n[0]]) + '</span></a>';
    }).join('');
    $('navToday').addEventListener('click', goToday);
  }

  /* ── 달 그리기 ── */
  function monthEvents(m) {
    var a = dn(iso(m, 1)), b = dn(iso(m, new Date(Y, m, 0).getDate()));
    return D.EVENTS.filter(function (e) { return dn(e.e || e.s) >= a && dn(e.s) <= b; });
  }
  var HOL = {}; D.HOLIDAYS.forEach(function (h) { HOL[h.d] = h; });
  function rangeLabel(e) {
    var s = e.s.split('-'), f = +s[1] + '/' + +s[2];
    if (!e.e) return f;
    var x = e.e.split('-'); return f + ' – ' + (+x[1] === +s[1] ? +x[2] : +x[1] + '/' + +x[2]);
  }
  function subName(e) { var k = state.lang === 'ko' ? 'en' : state.lang === 'en' ? 'ko' : 'en'; return e[k]; }

  function render() {
    var m = state.month, info = D.MONTHS[m - 1], c = info.c, Lg = state.lang;
    var root = document.documentElement.style;
    root.setProperty('--m-bg', c.bg); root.setProperty('--m-on', c.on); root.setProperty('--m-num', c.num); root.setProperty('--m-acc', c.acc);
    $('monthTitle').textContent = L().monthTitle(m);
    $('prevMonth').disabled = m === 1; $('nextMonth').disabled = m === 12;
    $('strip').innerHTML = D.MONTHS.map(function (x) {
      return '<button type="button" role="tab" data-m="' + x.m + '" aria-selected="' + (x.m === m) + '" style="--c:' + x.c.acc + '">' + esc(Lg === 'ko' ? x.m + '월' : (Lg === 'en' ? MONTH_EN[x.m - 1] : MONTH_ES[x.m - 1]).slice(0, 3)) + '</button>';
    }).join('');
    var sel = $('strip').querySelector('[aria-selected="true"]');
    if (sel) { var st = $('strip'); st.scrollLeft = sel.offsetLeft - st.clientWidth / 2 + sel.offsetWidth / 2; }

    $('artImg').src = 'img/art-' + pad(m) + '-s.jpg';
    $('artImg').alt = info.fig[Lg] + ' — ' + info.theme[Lg];
    $('bnNum').textContent = pad(m);
    $('bnScript').textContent = MONTH_EN[m - 1];
    $('bnFig').textContent = info.fig[Lg];
    $('bnTheme').textContent = info.theme[Lg];
    $('bnVerse').textContent = info.verse[Lg];
    $('bnRef').textContent = info.ref[Lg];

    [m - 1, m + 1].forEach(function (k) { if (k >= 1 && k <= 12) { var im = new Image(); im.src = 'img/art-' + pad(k) + '-s.jpg'; } });
    renderGrid();
    renderDay();
    renderLists();
    renderWall();
    syncUrl();
  }

  function renderGrid() {
    var m = state.month, first = new Date(Y, m - 1, 1).getDay(), days = new Date(Y, m, 0).getDate();
    var rows = Math.ceil((first + days) / 7), start = dn(iso(m, 1)) - first;
    var evs = monthEvents(m), today = todayISO(), Lg = state.lang;
    $('dow').innerHTML = L().dow.map(function (d, i) { return '<span class="' + (i === 0 ? 'sun' : i === 6 ? 'sat' : '') + '">' + esc(d) + '</span>'; }).join('');
    var html = '';
    for (var r = 0; r < rows; r++) {
      var ws = start + r * 7, we = ws + 6;
      // 이 주에 걸친 행사를 줄(lane)에 배치
      var lanes = [], bars = [];
      evs.forEach(function (e, k) {
        var s = dn(e.s), en = dn(e.e || e.s);
        if (en < ws || s > we) return;
        var a = Math.max(s, ws), b = Math.min(en, we), lane = 0;
        while (lanes[lane] && lanes[lane].some(function (x) { return !(b < x[0] || a > x[1]); })) lane++;
        (lanes[lane] = lanes[lane] || []).push([a, b]);
        bars.push({ e: e, k: k, c0: a - ws, c1: b - ws, lane: lane, cont: s < ws, more: en > we });
      });
      var nl = Math.max(1, lanes.length);
      html += '<div class="week" style="--lanes:' + nl + '">';
      for (var c = 0; c < 7; c++) {
        var dnum = ws + c, dt = new Date(dnum * 864e5), ds = dt.toISOString().slice(0, 10), d = dt.getUTCDate();
        var out = dt.getUTCMonth() + 1 !== m || dt.getUTCFullYear() !== Y;
        var h = HOL[ds];
        var cls = 'day' + (c === 0 ? ' sun' : c === 6 ? ' sat' : '') + (out ? ' out' : '') + (h ? ' hol' : '') + (ds === today ? ' today' : '') + (ds === state.day ? ' sel' : '');
        var label = L().dayTitle(dt.getUTCMonth() + 1, d, c) + (h ? ', ' + h[Lg] : '');
        html += '<button type="button" class="' + cls + '" style="grid-column:' + (c + 1) + '" data-d="' + ds + '" aria-label="' + esc(label) + '"' + (ds === state.day ? ' aria-pressed="true"' : '') + '>' +
          '<span class="dn">' + d + '</span>' + (h && !out ? '<span class="hn">' + esc(h[Lg]) + '</span>' : '') + '</button>';
      }
      bars.forEach(function (b) {
        html += '<span class="bar' + (b.cont ? ' cont' : '') + (b.more ? ' more' : '') + '" style="grid-column:' + (b.c0 + 1) + ' / ' + (b.c1 + 2) + ';grid-row:' + (b.lane + 2) + '" aria-hidden="true"><span>' + esc(b.e[Lg]) + '</span></span>';
      });
      html += '</div>';
    }
    $('weeks').innerHTML = html;
  }

  function eventsOn(ds) { var x = dn(ds); return D.EVENTS.filter(function (e) { return dn(e.s) <= x && dn(e.e || e.s) >= x; }); }

  function renderDay() {
    var box = $('dayDetail');
    if (!state.day) { box.hidden = true; return; }
    box.hidden = false;
    var p = state.day.split('-'), dt = new Date(+p[0], +p[1] - 1, +p[2]);
    var h = HOL[state.day], evs = eventsOn(state.day), Lg = state.lang;
    var items = (h ? '<li class="hol"><b>' + esc(h[Lg]) + '</b></li>' : '') + evs.map(function (e) {
      return '<li><span class="ev-date">' + esc(rangeLabel(e)) + '</span><b>' + esc(e[Lg]) + '</b><small>' + esc(subName(e)) + '</small></li>';
    }).join('');
    box.innerHTML = '<h3 class="dd-title">' + esc(L().dayTitle(dt.getMonth() + 1, dt.getDate(), dt.getDay())) + (state.day === todayISO() ? ' <span class="tag">' + esc(t('today')) + '</span>' : '') + '</h3>' +
      (items ? '<ul class="dd-list">' + items + '</ul>' : '<p class="empty">' + esc(t('noDay')) + '</p>');
  }

  function evItem(e, extra) {
    var len = e.e ? dn(e.e) - dn(e.s) + 1 : 0;
    return '<li><span class="ev-date">' + esc(rangeLabel(e)) + '</span><span class="ev-body"><b>' + esc(e[state.lang]) + '</b><small>' + esc(subName(e)) + (len ? ' · ' + esc(fmt(t('days'), { n: len })) : '') + '</small></span>' + (extra || '') + '</li>';
  }
  function renderLists() {
    var m = state.month, Lg = state.lang, evs = monthEvents(m);
    $('evList').innerHTML = evs.length ? evs.map(function (e) { return evItem(e); }).join('') : '<li class="empty">' + esc(t('noEvents')) + '</li>';
    var hols = D.HOLIDAYS.filter(function (h) { return +h.d.slice(5, 7) === m; });
    $('holBlock').hidden = !hols.length;
    $('holList').innerHTML = hols.map(function (h) { var d = h.d.split('-'); return '<li><span class="hol-d">' + (+d[1]) + '/' + (+d[2]) + '</span>' + esc(h[Lg]) + '</li>'; }).join('');
    var td = todayISO(), x = dn(td) < dn(Y + '-01-01') ? dn(Y + '-01-01') : dn(td);
    var up = D.EVENTS.filter(function (e) { return dn(e.e || e.s) >= x; }).slice(0, 5);
    $('upList').innerHTML = up.map(function (e) {
      var s = dn(e.s), n = s - dn(td);
      var tag = s <= dn(td) ? '<span class="dday now">' + esc(t('ongoing')) + '</span>' : '<span class="dday">' + esc(fmt(t('dday'), { n: n })) + '</span>';
      return evItem(e, tag);
    }).join('');
    if (!up.length) $('upList').innerHTML = '<li class="empty">' + esc(t('noUpcoming')) + '</li>';
  }

  /* ── 배경화면 ── */
  var DEVICES = {
    iphone: [['1179x2556', 'iPhone 14·15·16'], ['1290x2796', 'iPhone Plus·Pro Max'], ['1206x2622', 'iPhone 16 Pro'], ['1320x2868', 'iPhone 16 Pro Max'], ['1170x2532', 'iPhone 12·13']],
    android: [['1080x2400', 'Galaxy S·A · Pixel'], ['1440x3120', 'Galaxy Ultra'], ['1080x2340', 'Galaxy A·Pixel']],
    win: [['1920x1080', 'Full HD'], ['2560x1440', 'QHD'], ['3840x2160', '4K']],
    mac: [['2880x1800', 'MacBook Pro 15"'], ['2560x1664', 'MacBook Air 13"'], ['3024x1964', 'MacBook Pro 14"'], ['5120x2880', 'iMac 5K']],
  };
  var wall = { size: store('cal_wsize') || '', blob: null, file: null, url: null, seq: 0, timer: null };
  function wallSize() {
    var list = DEVICES[state.dev];
    if (!list.some(function (x) { return x[0] === wall.size; })) {
      // 휴대폰이면 실제 화면 크기와 가장 가까운 것을 고름
      var best = list[0][0];
      if ((state.dev === 'iphone' && isIOS) || (state.dev === 'android' && isAndroid)) {
        var pw = Math.round(screen.width * (window.devicePixelRatio || 1)), ph = Math.round(screen.height * (window.devicePixelRatio || 1));
        var sw = Math.min(pw, ph), sh = Math.max(pw, ph), bd = 1e9;
        list.forEach(function (x) { var p = x[0].split('x'), d = Math.abs(p[0] - sw) + Math.abs(p[1] - sh); if (d < bd) { bd = d; best = x[0]; } });
      }
      wall.size = best;
    }
    var p = wall.size.split('x'); return { w: +p[0], h: +p[1] };
  }
  function renderWallControls() {
    var Lg = L();
    $('wallLead').innerHTML = state.kind === 'art' ? Lg.wallLeadArt : fmt(Lg.wallLead, { m: esc(Lg.monthName(state.month)) });
    $('devSeg').innerHTML = [['iphone', 'devIphone'], ['android', 'devAndroid'], ['win', 'devWin'], ['mac', 'devMac']].map(function (d) {
      return '<button type="button" data-dev="' + d[0] + '" aria-pressed="' + (state.dev === d[0]) + '">' + esc(t(d[1])) + '</button>';
    }).join('');
    $('wallMonth').innerHTML = D.MONTHS.map(function (x) { return '<option value="' + x.m + '"' + (x.m === state.month ? ' selected' : '') + '>' + esc(Lg.monthTitle(x.m) + ' · ' + x.fig[state.lang]) + '</option>'; }).join('');
    var phoneDev = state.dev === 'iphone' || state.dev === 'android';
    function seg(list, cur, attr) { return list.map(function (d) { return '<button type="button" data-' + attr + '="' + d[0] + '" aria-pressed="' + (cur === d[0]) + '">' + esc(t(d[1])) + '</button>'; }).join(''); }
    $('kindSeg').innerHTML = seg([['cal', 'kindCal'], ['art', 'kindArt']], state.kind, 'kind');
    $('picSeg').innerHTML = seg([['month', 'picMonth'], ['cover', 'picCover'], ['back', 'picBack']], state.pic, 'pic');
    $('fitSeg').innerHTML = seg([['fill', 'fitFill'], ['whole', 'fitWhole']], state.fit, 'fit');
    var artOnly = state.kind === 'art';
    $('picOpt').hidden = !artOnly; $('bgOpt').hidden = artOnly; $('incOpt').hidden = artOnly;
    if (!phoneDev && state.bg === 'artSharp') state.bg = 'art';
    $('bgSeg').innerHTML = [['art', 'bgArt']].concat(phoneDev ? [['artSharp', 'bgSharp']] : [], [['stars', 'bgStars'], ['color', 'bgColor']]).map(function (d) {
      return '<button type="button" data-bg="' + d[0] + '" aria-pressed="' + (state.bg === d[0]) + '">' + esc(t(d[1])) + '</button>';
    }).join('');
    wallSize();
    $('sizeSel').innerHTML = DEVICES[state.dev].map(function (x) {
      return '<option value="' + x[0] + '"' + (x[0] === wall.size ? ' selected' : '') + '>' + x[1] + ' (' + x[0].replace('x', '×') + ')</option>';
    }).join('');
    var phone = state.dev === 'iphone' || state.dev === 'android';
    var canShare = phone && isPhone && !!navigator.share;
    $('saveTxt').textContent = canShare ? t('saveShare') : t('download');
    $('dlBtn').hidden = !canShare;
    $('saveHint').innerHTML = phone && isPhone ? Lg.saveHintPhone : Lg.saveHintPc;
    $('frame').className = 'frame ' + (phone ? 'phone' : 'desk') + ' dev-' + state.dev;
    $('safeDate').textContent = Lg.dayTitle(state.month, 1, new Date(Y, state.month - 1, 1).getDay());
    var devName = t({ iphone: 'devIphone', android: 'devAndroid', win: 'devWin', mac: 'devMac' }[state.dev]);
    $('guide').innerHTML = '<h3 class="sub2">' + esc(fmt(Lg.guideTitle, { d: devName })) + '</h3><ol class="g-steps">' + Lg.guide[state.dev].map(function (s, i) {
      return '<li><span class="g-n">' + (i + 1) + '</span><span class="g-t">' + s.replace('{share}', '<span class="ins-ico">' + ICONS.iosShare + '</span>').replace('{apple}', '<span class="ins-ico">' + ICONS.apple + '</span>') + '</span>' + guideArt(state.dev, i) + '</li>';
    }).join('') + '</ol>';
  }
  // (위치 조정 칸 표시는 renderWall 에서)
  // 단계별 작은 그림 (실제 메뉴 모양을 흉내 낸 그림)
  function guideArt(dev, i) {
    var Lg = state.lang;
    var W = {
      iphone: [
        '<div class="ga ga-phone"><div class="ga-photos">' + '<i></i><i></i><i class="hl"></i><i></i><i></i><i></i>' + '</div></div>',
        '<div class="ga ga-phone"><div class="ga-pic"></div><div class="ga-bar"><span class="hl">' + ICONS.iosShare + '</span><span>♡</span><span>ⓘ</span><span>🗑</span></div></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '복사', en: 'Copy', es: 'Copiar' }[Lg]) + '</p><p class="hl">' + esc({ ko: '배경화면으로 사용', en: 'Use as Wallpaper', es: 'Usar como fondo de pantalla' }[Lg]) + '</p><p>' + esc({ ko: '파일에 저장', en: 'Save to Files', es: 'Guardar en Archivos' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p class="hl">' + esc({ ko: '배경화면 쌍으로 설정', en: 'Set as Wallpaper Pair', es: 'Definir como par de fondos' }[Lg]) + '</p><p>' + esc({ ko: '홈 화면 사용자화', en: 'Customize Home Screen', es: 'Personalizar inicio' }[Lg]) + '</p></div>',
      ],
      android: [
        '<div class="ga ga-phone"><div class="ga-photos"><i class="hl"></i><i></i><i></i><i></i><i></i><i></i></div></div>',
        '<div class="ga ga-phone"><div class="ga-pic"></div><div class="ga-bar"><span>♡</span><span>✎</span><span>⇪</span><span class="hl">⋮</span></div></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '세부 정보', en: 'Details', es: 'Detalles' }[Lg]) + '</p><p class="hl">' + esc({ ko: '배경화면으로 설정', en: 'Set as wallpaper', es: 'Establecer como fondo' }[Lg]) + '</p><p>' + esc({ ko: '인쇄', en: 'Print', es: 'Imprimir' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '잠금화면', en: 'Lock screen', es: 'Pantalla de bloqueo' }[Lg]) + '</p><p>' + esc({ ko: '홈 화면', en: 'Home screen', es: 'Pantalla de inicio' }[Lg]) + '</p><p class="hl">' + esc({ ko: '잠금화면 및 홈 화면', en: 'Lock and Home screens', es: 'Bloqueo e inicio' }[Lg]) + '</p></div>',
      ],
      win: [
        '<div class="ga ga-win"><p>📁 ' + esc({ ko: '다운로드', en: 'Downloads', es: 'Descargas' }[Lg]) + '</p><p class="hl">🖼 2027-' + pad(state.month) + '.jpg</p></div>',
        '<div class="ga ga-win"><p class="hl">🖱 ' + esc({ ko: '오른쪽 클릭', en: 'Right-click', es: 'Clic derecho' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '열기', en: 'Open', es: 'Abrir' }[Lg]) + '</p><p class="hl">' + esc({ ko: '바탕 화면 배경으로 설정', en: 'Set as desktop background', es: 'Establecer como fondo de escritorio' }[Lg]) + '</p><p>' + esc({ ko: '회전', en: 'Rotate', es: 'Girar' }[Lg]) + '</p></div>',
        '',
      ],
      mac: [
        '<div class="ga ga-sheet"><p>' + esc({ ko: '일반', en: 'General', es: 'General' }[Lg]) + '</p><p class="hl">' + esc({ ko: '배경화면', en: 'Wallpaper', es: 'Fondo de pantalla' }[Lg]) + '</p><p>' + esc({ ko: '디스플레이', en: 'Displays', es: 'Pantallas' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p class="hl">' + esc({ ko: '사진 추가…', en: 'Add Photo…', es: 'Añadir foto…' }[Lg]) + '</p><p>' + esc({ ko: '폴더 추가…', en: 'Add Folder…', es: 'Añadir carpeta…' }[Lg]) + '</p></div>',
        '<div class="ga ga-win"><p>📁 ' + esc({ ko: '다운로드', en: 'Downloads', es: 'Descargas' }[Lg]) + '</p><p class="hl">🖼 2027-' + pad(state.month) + '.jpg</p></div>',
        '',
      ],
    };
    return (W[dev] && W[dev][i]) || '';
  }
  /* ── 그림 위치 조정 (가로 위치·위아래·확대) ── */
  var adjMap = {};
  try { adjMap = JSON.parse(store('cal_adj') || '{}') || {}; } catch (e) { adjMap = {}; }
  function isPhoneDev() { return state.dev === 'iphone' || state.dev === 'android'; }
  function adjustable() { return (state.kind === 'art' && state.fit === 'fill') || (state.kind === 'cal' && state.bg === 'artSharp' && isPhoneDev()); }
  function adjKey() { return (isPhoneDev() ? 'p' : 'd') + '-' + (state.kind === 'art' ? state.pic + (state.pic === 'month' ? state.month : '') : 'm' + state.month); }
  function adjGeom() {
    var s = wallSize(), inf = window.Wallpaper.info({ kind: state.kind, pic: state.pic, month: state.month });
    var a = adjMap[adjKey()] || {}, z = a.z || 1, r = s.w / s.h;
    var visX = Math.min(1, r / inf.ar) / z, visY = Math.min(1, inf.ar / r) / z;
    function cl(v, vis) { return vis >= 1 ? .5 : Math.max(vis / 2, Math.min(1 - vis / 2, v)); }
    return { z: z, visX: visX, visY: visY, fx: cl(a.x != null ? a.x : inf.fx, visX), fy: cl(a.y != null ? a.y : .5, visY), cl: cl };
  }
  function setAdj(p) {
    var k = adjKey(), a = adjMap[k] || {}; Object.keys(p).forEach(function (x) { a[x] = p[x]; }); adjMap[k] = a;
    store('cal_adj', JSON.stringify(adjMap));
  }
  function syncPos() {
    var on = adjustable();
    $('posBox').hidden = !on; $('frame').classList.toggle('adj', on);
    if (!on) return;
    var g = adjGeom();
    $('posX').disabled = g.visX >= 1; $('posY').disabled = g.visY >= 1;
    $('posX').value = g.visX >= 1 ? 50 : Math.round((g.fx - g.visX / 2) / (1 - g.visX) * 100);
    $('posY').value = g.visY >= 1 ? 50 : Math.round((g.fy - g.visY / 2) / (1 - g.visY) * 100);
    $('posZ').value = Math.round(g.z * 100);
    $('posYHint').hidden = g.visY < 1;
  }
  function posFromSliders() {
    var z = +$('posZ').value / 100; setAdj({ z: z });
    var g = adjGeom();
    var p = { z: z };
    if (g.visX < 1) p.x = g.visX / 2 + (+$('posX').value / 100) * (1 - g.visX);
    if (g.visY < 1) p.y = g.visY / 2 + (+$('posY').value / 100) * (1 - g.visY);
    setAdj(p); syncPos(); renderWall();
  }
  ['posX', 'posY', 'posZ'].forEach(function (id) { $(id).addEventListener('input', posFromSliders); });
  $('posReset').addEventListener('click', function () { delete adjMap[adjKey()]; store('cal_adj', JSON.stringify(adjMap)); syncPos(); renderWall(); });
  // 미리보기를 끌어서 옮기기
  (function () {
    var fr = $('frame'), img = $('wallImg'), st = null;
    fr.addEventListener('pointerdown', function (e) {
      if (!adjustable()) return;
      st = { x: e.clientX, y: e.clientY, g: adjGeom(), w: fr.clientWidth, h: fr.clientHeight };
      fr.classList.add('dragging'); try { fr.setPointerCapture(e.pointerId); } catch (er) {}
      e.preventDefault();
    });
    fr.addEventListener('pointermove', function (e) {
      if (!st) return;
      var g = st.g, dx = e.clientX - st.x, dy = e.clientY - st.y;
      // 움직일 수 있는 만큼만 따라 움직임
      var nx = g.cl(g.fx - dx / st.w * g.visX, g.visX), ny = g.cl(g.fy - dy / st.h * g.visY, g.visY);
      var px = -(nx - g.fx) / g.visX * st.w, py = -(ny - g.fy) / g.visY * st.h;
      img.style.transform = 'translate(' + px + 'px,' + py + 'px)';
      st.nx = nx; st.ny = ny;
    });
    function end() {
      if (!st) return;
      fr.classList.remove('dragging');
      if (st.nx != null) { var p = {}; if (st.g.visX < 1) p.x = st.nx; if (st.g.visY < 1) p.y = st.ny; setAdj(p); syncPos(); renderWall(); }
      else img.style.transform = '';
      st = null;
    }
    fr.addEventListener('pointerup', end); fr.addEventListener('pointercancel', end);
  })();
  function wallOpts() {
    var s = wallSize();
    var adj = adjustable() ? adjGeom() : null;
    return { fx: adj ? adj.fx : null, fy: adj ? adj.fy : null, z: adj ? adj.z : 1, w: s.w, h: s.h, month: state.month, lang: state.lang, kind: state.kind, pic: state.pic, fit: state.fit, bg: state.bg, verse: $('optVerse').checked, events: $('optEvents').checked, logo: $('optLogo').checked };
  }
  function wallName(o) { return '2027-' + (o.kind === 'art' ? (o.pic === 'month' ? pad(o.month) + '-art' : o.pic) : pad(o.month)) + '-' + state.dev + '-' + o.w + 'x' + o.h + '.jpg'; }
  var wallVisible = false;
  function renderWall() {
    renderWallControls(); syncPos();
    if (!wallVisible) return;
    clearTimeout(wall.timer);
    wall.timer = setTimeout(makeWall, 60);
  }
  function makeWall() {
    var o = wallOpts(), seq = ++wall.seq;
    $('wallLoading').hidden = false;
    wall.file = null;
    $('frame').style.aspectRatio = o.w + ' / ' + o.h;
    window.Wallpaper.draw(o).then(function (cv) {
      if (seq !== wall.seq) return;
      cv.toBlob(function (blob) {
        if (seq !== wall.seq || !blob) return;
        if (wall.url) URL.revokeObjectURL(wall.url);
        wall.blob = blob; wall.url = URL.createObjectURL(blob);
        try { wall.file = new File([blob], wallName(o), { type: 'image/jpeg' }); } catch (e) { wall.file = null; }
        wall.name = wallName(o);
        $('wallImg').src = wall.url; $('wallImg').style.transform = '';
        $('wallLoading').hidden = true;
      }, 'image/jpeg', 0.92);
    }).catch(function () { $('wallLoading').hidden = true; });
  }
  function download() {
    if (!wall.url) return;
    var a = document.createElement('a'); a.href = wall.url; a.download = wall.name || 'calendar.jpg';
    document.body.appendChild(a); a.click(); a.remove();
    toast(t('saved'));
  }
  $('saveBtn').addEventListener('click', function () {
    var phone = (state.dev === 'iphone' || state.dev === 'android') && isPhone;
    if (phone && wall.file && navigator.canShare && navigator.canShare({ files: [wall.file] })) {
      navigator.share({ files: [wall.file] }).catch(function () {});
      return;
    }
    download();
  });
  $('dlBtn').addEventListener('click', download);
  $('devSeg').addEventListener('click', function (e) {
    var b = e.target.closest('[data-dev]'); if (!b) return;
    state.dev = b.getAttribute('data-dev'); store('cal_dev', state.dev); wall.size = ''; renderWall();
  });
  $('bgSeg').addEventListener('click', function (e) {
    var b = e.target.closest('[data-bg]'); if (!b) return;
    state.bg = b.getAttribute('data-bg'); store('cal_bg', state.bg); renderWall();
  });
  [['kindSeg', 'kind'], ['picSeg', 'pic'], ['fitSeg', 'fit']].forEach(function (x) {
    $(x[0]).addEventListener('click', function (e) {
      var b = e.target.closest('[data-' + x[1] + ']'); if (!b) return;
      state[x[1]] = b.getAttribute('data-' + x[1]); store('cal_' + x[1], state[x[1]]); renderWall();
    });
  });
  $('wallMonth').addEventListener('change', function () {
    // 달을 바꿔도 보고 있던 자리(배경화면 칸)가 그대로 있도록
    var el = $('wallMonth'), before = el.getBoundingClientRect().top;
    setMonth(+el.value);
    window.scrollBy({ top: el.getBoundingClientRect().top - before, behavior: 'instant' });
  });
  $('sizeSel').addEventListener('change', function () { wall.size = $('sizeSel').value; store('cal_wsize', wall.size); renderWall(); });
  ['optVerse', 'optEvents', 'optLogo'].forEach(function (id) { $(id).addEventListener('change', renderWall); });
  $('optSafe').addEventListener('change', function () { $('safe').hidden = !$('optSafe').checked; });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { if (en.some(function (x) { return x.isIntersecting; }) && !wallVisible) { wallVisible = true; renderWall(); } }, { rootMargin: '600px' }).observe($('sec-wall'));
  } else { wallVisible = true; }

  /* ── .ics (휴대폰 달력에 넣기) ── */
  function icsFile() {
    var Lg = state.lang, now = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    function d8(s) { return s.replace(/-/g, ''); }
    function next(s) { var d = new Date(dn(s) * 864e5 + 864e5); return d.toISOString().slice(0, 10).replace(/-/g, ''); }
    function escI(s) { return String(s).replace(/([,;\\])/g, '\\$1'); }
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Life Word Mission USA//Calendar 2027//EN', 'CALSCALE:GREGORIAN', 'X-WR-CALNAME:' + escI(t('appSub'))];
    D.EVENTS.forEach(function (e, i) {
      lines.push('BEGIN:VEVENT', 'UID:lwm2027-' + i + '-' + d8(e.s) + '@jbchusa', 'DTSTAMP:' + now, 'DTSTART;VALUE=DATE:' + d8(e.s), 'DTEND;VALUE=DATE:' + next(e.e || e.s),
        'SUMMARY:' + escI(e[Lg]), 'DESCRIPTION:' + escI(subName(e) + ' · Life Word Mission USA'), 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }
  $('icsBtn').addEventListener('click', function () {
    var blob = new Blob([icsFile()], { type: 'text/calendar;charset=utf-8' });
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = 'LWM-2027-' + state.lang + '.ics';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 30000);
  });

  /* ── 이동 ── */
  function setMonth(m, keepDay) {
    if (m < 1 || m > 12 || m === state.month) return;
    var dir = m > state.month ? 'swap-next' : 'swap-prev', sc = $('sec-cal');
    state.month = m; if (!keepDay) state.day = null;
    if (!keepDay && todayISO().slice(0, 7) === iso(m, 1).slice(0, 7)) state.day = todayISO();
    render();
    sc.classList.remove('swap-next', 'swap-prev'); void sc.offsetWidth; sc.classList.add(dir);
    window.Wallpaper.preload(m);
  }
  function goToday() {
    var td = todayISO(), p = td.split('-');
    if (+p[0] === Y) { state.month = +p[1]; state.day = td; render(); }
    else { state.month = defaultMonth(); state.day = todayISO().slice(0, 4) === String(Y) ? todayISO() : null; render(); }
    $('sec-cal').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  $('prevMonth').addEventListener('click', function () { setMonth(state.month - 1); });
  $('nextMonth').addEventListener('click', function () { setMonth(state.month + 1); });
  $('strip').addEventListener('click', function (e) { var b = e.target.closest('[data-m]'); if (b) setMonth(+b.getAttribute('data-m')); });
  $('weeks').addEventListener('click', function (e) {
    var b = e.target.closest('.day'); if (!b) return;
    var ds = b.getAttribute('data-d'), m = +ds.slice(5, 7);
    if (+ds.slice(0, 4) !== Y) return;
    state.day = state.day === ds ? null : ds;
    if (m !== state.month) { state.month = m; render(); } else { renderGrid(); renderDay(); }
  });
  // 옆으로 밀어 달 넘기기
  (function () {
    var sx = 0, sy = 0, on = false, el = $('calCard');
    el.addEventListener('touchstart', function (e) { if (e.touches.length !== 1) return; on = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (!on) return; on = false;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dy) < 50) setMonth(state.month + (dx < 0 ? 1 : -1));
    }, { passive: true });
  })();
  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input,select,textarea,dialog')) return;
    if (e.key === 'ArrowLeft') setMonth(state.month - 1); else if (e.key === 'ArrowRight') setMonth(state.month + 1);
  });
  $('artBtn').addEventListener('click', function () {
    var info = D.MONTHS[state.month - 1];
    $('artFull').src = 'img/art-' + pad(state.month) + '.jpg'; $('artFull').alt = info.fig[state.lang];
    $('artDialog').showModal();
  });
  $('artClose').addEventListener('click', function () { $('artDialog').close(); });
  $('artDialog').addEventListener('click', function (e) { if (e.target === $('artDialog') || e.target === $('artFull')) $('artDialog').close(); });

  /* ── 주소 (언어는 항상 남김) ── */
  function syncUrl() {
    var p = new URLSearchParams(location.search);
    p.set('lang', state.lang); p.delete('source');
    if (state.month !== defaultMonth()) p.set('m', String(state.month)); else p.delete('m');
    try { history.replaceState(null, '', location.pathname + '?' + p.toString() + location.hash); } catch (e) {}
  }
  function goWithLang() {
    if (!isInApp) return false;
    var p = new URLSearchParams(location.search);
    if (p.get('lang') === state.lang) return false;
    p.set('lang', state.lang); p.delete('source');
    location.replace(location.pathname + '?' + p.toString() + location.hash);
    return true;
  }
  function toast(msg) { var el = $('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { el.classList.remove('show'); }, 2200); }
  function measure() { document.documentElement.style.setProperty('--topbar-h', document.querySelector('.topbar').offsetHeight + 'px'); }
  function shareUrl() { return location.origin + location.pathname + '?lang=' + state.lang; }

  document.querySelectorAll('#langSeg button').forEach(function (b) {
    b.addEventListener('click', function () {
      state.lang = b.getAttribute('data-lang'); saveLang(state.lang);
      if (goWithLang()) return;
      renderStatic(); render(); measure();
    });
  });
  document.querySelectorAll('#sizeSeg button').forEach(function (bt) {
    bt.addEventListener('click', function () {
      state.size = Number(bt.getAttribute('data-size')); store('cal_size', String(state.size));
      store('cal_hint', '1'); $('sizeHint').hidden = true;
      renderStatic(); measure(); toast(L().textSizeN[state.size - 1]);
    });
  });
  if (!store('cal_hint') && state.size === 1) {
    $('sizeHint').hidden = false;
    setTimeout(function () { store('cal_hint', '1'); }, 5000);
    setTimeout(function () { $('sizeHint').hidden = true; }, 12000);
  }
  $('sizeHintClose').addEventListener('click', function () { $('sizeHint').hidden = true; store('cal_hint', '1'); });
  $('themeBtn').addEventListener('click', function () {
    var next = { auto: 'light', light: 'dark', dark: 'auto' }[themeMode()];
    store('cal_theme', next); try { document.cookie = 'cal_theme=' + next + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {}
    applyTheme(next); toast(L().themeN[next]);
  });
  if (window.matchMedia) { var mq = matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', function () { applyTheme(themeMode()); }); }
  $('shareBtn').addEventListener('click', function () {
    var url = shareUrl();
    if (navigator.share) { navigator.share({ title: document.title, url: url }).catch(function () {}); return; }
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function () { toast(t('copied')); }, function () { prompt('URL', url); });
  });
  $('qrBtn').addEventListener('click', function () {
    var url = shareUrl(); $('qrUrl').textContent = url;
    var box = $('qrCode');
    var draw = function () { box.innerHTML = ''; new window.QRCode(box, { text: url, width: 440, height: 440, correctLevel: window.QRCode.CorrectLevel.M }); };
    if (window.QRCode) draw(); else { var s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'; s.onload = draw; document.head.appendChild(s); }
    $('qrDialog').showModal();
  });
  $('qrClose').addEventListener('click', function () { $('qrDialog').close(); });
  window.addEventListener('resize', measure);

  /* ── 다시 열었을 때 사이트가 바뀌었으면 새로고침 (ETag 확인) ── */
  var APP_FILES = ['index.html', 'app.js', 'styles.css', 'data.js', 'wallpaper.js'];
  var fileSigs = null, lastResume = Date.now(), lastDay = todayISO();
  function readSigs() {
    return Promise.all(APP_FILES.map(function (f) {
      return fetch(f + '?v=' + Date.now(), { method: 'HEAD', cache: 'no-store' }).then(function (r) { return r.ok ? (r.headers.get('etag') || r.headers.get('last-modified') || '') : ''; }).catch(function () { return ''; });
    })).then(function (a) { return a.join('|'); });
  }
  function onResume() {
    if (document.hidden) return;
    lastResume = Date.now();
    // 날짜가 바뀌었으면(예: 1월 31일 → 2월 1일) 이번 달로 이동하고 오늘 표시도 갱신
    if (todayISO() !== lastDay) { lastDay = todayISO(); state.month = defaultMonth(); state.day = todayISO().slice(0, 4) === String(Y) ? todayISO() : null; render(); }
    readSigs().then(function (sig) {
      if (!sig.replace(/\|/g, '')) return;
      if (fileSigs === null) { fileSigs = sig; return; }
      if (sig !== fileSigs) { store('cal_updated', '1'); location.reload(); return; }
    });
  }
  document.addEventListener('visibilitychange', onResume);
  window.addEventListener('pageshow', function (e) { if (e.persisted) onResume(); });
  window.addEventListener('focus', function () { if (Date.now() - lastResume > 60000) onResume(); });
  setTimeout(function () { readSigs().then(function (s) { fileSigs = s; }); }, 1500);
  if (store('cal_updated')) { try { localStorage.removeItem('cal_updated'); } catch (e) {} setTimeout(function () { toast(t('updatedReload')); }, 600); }

  /* ── 홈 화면에 추가 ── */
  var deferredPrompt = null;
  function isStandalone() { return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
  function updateInstallBtn() { $('installBtn').hidden = isStandalone(); }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; updateInstallBtn(); });
  window.addEventListener('appinstalled', function () { deferredPrompt = null; $('installBtn').hidden = true; toast(t('installed')); });
  function showGuide(kind) {
    var Lg = L();
    $('insTitle').textContent = Lg[kind + 'Title'];
    $('insSteps').innerHTML = Lg[kind + 'Steps'].map(function (s) { return '<li>' + s.replace('{menu}', '<span class="ins-ico">' + ICONS.pageMenu + '</span>') + '</li>'; }).join('');
    $('installDialog').showModal();
  }
  $('installBtn').addEventListener('click', function () {
    if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(function () { deferredPrompt = null; }).catch(function () {}); return; }
    if (isKakao) { location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(location.href.split('#')[0]); setTimeout(function () { showGuide('inapp'); }, 800); return; }
    if (isInApp) { showGuide('inapp'); return; }
    showGuide(isIOS ? 'ios' : 'and');
  });
  $('insClose').addEventListener('click', function () { $('installDialog').close(); });
  updateInstallBtn();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(function (reg) { if (reg && reg.update) reg.update(); }).catch(function () {}); });
  }

  if (goWithLang()) return;
  if (todayISO().slice(0, 7) === iso(state.month, 1).slice(0, 7)) state.day = todayISO();   // 이번 달이면 오늘 일정을 바로 보여 줌
  renderStatic();
  render();
  measure();
  window.Wallpaper.preload(state.month);
})();
