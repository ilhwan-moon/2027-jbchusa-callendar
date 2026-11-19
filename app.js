(function () {
  'use strict';
  var D = window.CAL_DATA, Y = D.YEAR;
  var LANGS = ['ko', 'en', 'es', 'zh'];
  var MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var MONTH_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  var T = {
    ko: {
      church: '생명의말씀선교회 USA', appSub: '2027 선교회 달력', appName: '2027 달력', calendar: '달력', prevMonth: '이전 달', nextMonth: '다음 달',
      todayBefore: '오늘은 {d}입니다. 2027년 달력은 {n}일 뒤에 시작해요.', todayAfter: '2027년 달력이 끝났습니다.', myChurch: '내 교회', noChurch: '선택 안 함 (선교회 일정만)', churchNote: '교회를 고르면 그 교회 일정이 달력에 다른 색으로 함께 보입니다.', churchSoon: '⏳ {c} 일정은 곧 준비됩니다. 준비되면 이 달력에 자동으로 함께 보입니다.', churchLoading: '교회 일정을 불러오는 중…', churchErr: '교회 일정을 불러오지 못했습니다. 인터넷 연결을 확인해 주세요.', churchEmpty: '이달에는 교회 일정이 없습니다.', churchUpdated: '{t} 기준', churchSched: '{c} 일정', subscribe: '내 구글 캘린더에서 구독하기', allDay: '종일', settingsPc: '설정', settings: '언어·글씨 설정', setTitle: '설정', welcome: '처음 오셨네요! 편한 언어와 글씨 크기를 골라 주세요.', langLbl: '언어', screenLbl: '화면', done: '완료', themeShort: { auto: '자동', light: '밝게', dark: '어둡게' }, textSize: '글씨 크기', sizeHint: '글씨가 작으신가요? 오른쪽 위 큰 「가」를 누르세요.', ok: '알겠어요',
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
      todayBefore: 'Today is {d}. The 2027 calendar starts in {n} days.', todayAfter: 'The 2027 calendar has ended.', myChurch: 'My church', noChurch: 'None (mission events only)', churchNote: 'Pick your church to see its events on the calendar in another color.', churchSoon: '⏳ {c} events are coming soon. They’ll appear on this calendar automatically once ready.', churchLoading: 'Loading church events…', churchErr: 'Couldn’t load church events. Please check your connection.', churchEmpty: 'No church events this month.', churchUpdated: 'As of {t}', churchSched: '{c} events', subscribe: 'Subscribe in Google Calendar', allDay: 'All day', settingsPc: 'Settings', settings: 'Language & text settings', setTitle: 'Settings', welcome: 'Welcome! Choose your language and text size.', langLbl: 'Language', screenLbl: 'Screen', done: 'Done', themeShort: { auto: 'Auto', light: 'Light', dark: 'Dark' }, textSize: 'Text size', sizeHint: 'Text too small? Tap a bigger “A” at the top right.', ok: 'Got it',
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
      todayBefore: 'Hoy es {d}. El calendario 2027 empieza en {n} días.', todayAfter: 'El calendario 2027 ha terminado.', myChurch: 'Mi iglesia', noChurch: 'Ninguna (solo eventos de la misión)', churchNote: 'Elija su iglesia para ver sus eventos en otro color.', churchSoon: '⏳ Los eventos de {c} estarán listos pronto. Aparecerán aquí automáticamente.', churchLoading: 'Cargando eventos de la iglesia…', churchErr: 'No se pudieron cargar los eventos de la iglesia. Revise su conexión.', churchEmpty: 'No hay eventos de la iglesia este mes.', churchUpdated: 'Actualizado: {t}', churchSched: 'Eventos de {c}', subscribe: 'Suscribirse en Google Calendar', allDay: 'Todo el día', settingsPc: 'Configuración', settings: 'Idioma y tamaño de letra', setTitle: 'Configuración', welcome: '¡Bienvenido! Elija su idioma y tamaño de letra.', langLbl: 'Idioma', screenLbl: 'Pantalla', done: 'Listo', themeShort: { auto: 'Auto', light: 'Claro', dark: 'Oscuro' }, textSize: 'Tamaño de letra', sizeHint: '¿Letra pequeña? Toque una “A” más grande arriba a la derecha.', ok: 'Entendido',
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
    zh: {
      church: 'Life Word Mission USA', appSub: '2027 宣教会日历', appName: '2027 日历', calendar: '日历', prevMonth: '上个月', nextMonth: '下个月',
      todayBefore: '今天是{d}。2027年日历还有{n}天开始。', todayAfter: '2027年日历已经结束。', myChurch: '我的教会', noChurch: '不选择（只看宣教会活动）', churchNote: '选择教会后，该教会的活动会以另一种颜色显示在日历上。', churchSoon: '⏳ {c}的日程即将准备好，准备好后会自动显示在这个日历上。', churchLoading: '正在加载教会日程…', churchErr: '无法加载教会日程，请检查网络连接。', churchEmpty: '本月没有教会日程。', churchUpdated: '{t} 更新', churchSched: '{c}日程', subscribe: '在 Google 日历中订阅', allDay: '全天', settingsPc: '设置', settings: '语言和字体设置', setTitle: '设置', welcome: '欢迎！请选择语言和字体大小。', langLbl: '语言', screenLbl: '画面', done: '完成', themeShort: { auto: '自动', light: '明亮', dark: '深色' }, textSize: '字体大小', sizeHint: '字太小吗？请点右上角较大的「字」。', ok: '知道了',
      themeN: { auto: '画面：自动', light: '画面：明亮', dark: '画面：深色' }, textSizeN: ['普通字体', '大字体', '特大字体'],
      swipeHint: '左右滑动可切换月份', monthEvents: '本月活动', holidays: '节假日', upcoming: '即将到来的活动',
      noEvents: '本月没有宣教会活动。', noDay: '这一天没有活动。', today: '今天', dday: '{n}天后', ongoing: '进行中',
      addAll: '全部加入我的手机日历', addAllHint: 'iPhone：点「全部添加」。Android：用 Google 日历打开下载的文件。',
      days: '{n}天',
      wallTitle: '制作壁纸', wallLead: '用{m}的日历和经文为手机或电脑制作壁纸。网页无法直接更换壁纸，请<b>先保存图片，再按下面的方法设置</b>。',
      wallLeadArt: '不带日历，<b>只保存图画</b>，按手机或电脑的屏幕大小制作。保存后按下面的方法设为壁纸。', posTitle: '调整图片位置', posHint: '也可以用手指（或鼠标）拖动预览图。', posX: '左右', posY: '上下', posZ: '放大', posReset: '还原', posYHint: '放大后也可以上下移动，可以把下方的文字移到屏幕外。', whichMonth: '哪个月的壁纸', noUpcoming: '今年已没有其他活动。', kind: '制作类型', kindCal: '日历 + 图画', kindArt: '只要图画', picture: '图画', picMonth: '本月图画', picCover: '封面', picBack: '封底（星空）', fitFill: '铺满屏幕', fitWhole: '完整图画（不裁切）', device: '设备', size: '屏幕大小', background: '背景', include: '包含内容', optVerse: '本月经文', optEvents: '标示活动', optLogo: '宣教会标志',
      bgArt: '本月图画', bgSharp: '清晰图画', bgStars: '星空', bgColor: '单色主题',
      devIphone: 'iPhone', devAndroid: '安卓', devWin: 'Windows 电脑', devMac: 'Mac',
      saveShare: '存储到照片', download: '下载图片', making: '制作中…', showSafe: '显示时钟和程序坞位置',
      saveHintPhone: '出现共享菜单时，请点<b>「存储图像」</b>。若不行，请<b>长按</b>上面的图片，选择「存储到照片」。',
      saveHintPc: '文件会保存在「下载」文件夹。',
      saved: '已保存', guideTitle: '在{d}上设置壁纸的方法',
      guide: {
        iphone: ['打开<b>照片</b> App，点刚才保存的日历图片', '点左下角的<b>共享</b> {share} 按钮', '向上滑动，点<b>「用作墙纸」</b>', '调整位置后点右上角<b>「添加」</b> → <b>「设为墙纸组合」</b>即可！'],
        android: ['在<b>相册</b>（或 Google 相册）中打开日历图片', '点右上角（或下方）的<b>⋮</b>', '点<b>「设为壁纸」</b>（Google 相册：「用作」→ 壁纸）', '选择<b>锁定屏幕 / 主屏幕 / 两者</b>，再点<b>「完成」</b>'],
        win: ['在<b>下载</b>文件夹中找到图片', '用<b>鼠标右键</b>点图片', '选择<b>「设置为桌面背景」</b>即可！', '或：设置 → 个性化 → 背景 → <b>「浏览照片」</b>'],
        mac: ['打开<b>系统设置</b> {apple} → <b>墙纸</b>', '点<b>「添加照片…」</b>或「添加文件夹…」', '在<b>下载</b>文件夹中选择日历图片', '如果用 Safari，也可以<b>右键点预览图 → 「将图像用作桌面图片」</b>'],
      },
      installTitle: '把日历添加到主屏幕', installSub: '像 App 一样直接打开', installed: '已添加到主屏幕',
      iosTitle: '🍎 iPhone：添加到主屏幕', iosSteps: ['点 Safari 下方<b>地址栏左边的图标</b> {menu}', '在菜单中点<b>「共享」</b>', '向上滑动，点<b>「添加到主屏幕」</b>', '点右上角<b>「添加」</b>即可！'],
      andTitle: '🤖 安卓：添加到主屏幕', andSteps: ['点 Chrome 右上角的<b>⋮（三个点）</b>', '点<b>「添加到主屏幕」</b>或<b>「安装应用」</b>', '点<b>「安装」</b>（或「添加」）即可！'],
      inappTitle: '请先用 Safari / Chrome 打开', inappSteps: ['点右上角（或下方）的<b>菜单</b>', '点<b>「在浏览器中打开」</b>或<b>「在 Safari 中打开」</b>', '在打开的页面中再点一次这个按钮'],
      share: '分享', website: '宣教会网站', qr: '二维码', toTop: '回到顶部', close: '关闭', copied: '链接已复制', qrTitle: '用手机相机扫描即可打开日历',
      source: '图画·经文·活动：Life Word Mission USA 2027 台历 · 圣经：和合本', updatedReload: '已更新到最新版本',
      nav: { cal: '日历', events: '活动', wall: '壁纸', today: '今天' },
      monthName: function (m) { return m + '月'; }, monthTitle: function (m) { return Y + '年' + m + '月'; },
      dayTitle: function (m, d, w) { return m + '月' + d + '日（周' + '日一二三四五六'[w] + '）'; },
      dow: ['日', '一', '二', '三', '四', '五', '六'],
    },
  };

  var ICONS = {
    calendar: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>',
    image: '<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M6.5 15l3.5-3.5 3 3 2-2 2 2"/><circle cx="14.5" cy="7.5" r="1.3"/></svg>',
    today: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><circle cx="12" cy="15" r="2.2"/></svg>',
    church: '<svg viewBox="0 0 24 24"><path d="M12 2.5v4M10 4.5h4M5 21V11l7-4.5 7 4.5v10M3 21h18M10 21v-4a2 2 0 0 1 4 0v4"/></svg>',
    help: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.4"/><circle cx="12" cy="16.8" r=".6" fill="currentColor"/></svg>',
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

  /* ── 언어: 주소의 lang → 전에 고른 언어 → 휴대폰 언어 ── */
  function saveLang(l) { store('cal_lang', l); try { document.cookie = 'cal_lang=' + l + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {} }
  function savedLang() {
    var s = store('cal_lang'); if (LANGS.indexOf(s) !== -1) return s;
    var m = (document.cookie || '').match(/(?:^|;\s*)cal_lang=(ko|en|es|zh)/); return m ? m[1] : null;
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
    church: store('cal_church') || '',
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
    // 홈 화면 이름은 언어와 상관없이 짧은 영어 이름 (manifest 의 short_name 과 같게)
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-ico]').forEach(function (el) { el.innerHTML = ICONS[el.getAttribute('data-ico')] || ''; el.setAttribute('aria-hidden', 'true'); });
    document.querySelectorAll('#langSeg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === Lg)); });
    $('sizeSeg').setAttribute('aria-label', L().textSize); $('sizeSeg').setAttribute('title', L().textSize);
    document.querySelectorAll('#sizeSeg button').forEach(function (bt) {
      var n = Number(bt.getAttribute('data-size'));
      bt.setAttribute('aria-pressed', String(n === state.size)); bt.setAttribute('aria-label', L().textSizeN[n - 1]);
      bt.querySelector('.g').textContent = Lg === 'ko' ? '가' : Lg === 'zh' ? '字' : 'A';
    });
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
  function subName(e) { var k = state.lang === 'en' ? 'ko' : 'en'; return e[k]; }

  function render() {
    var m = state.month, info = D.MONTHS[m - 1], c = info.c, Lg = state.lang;
    var root = document.documentElement.style;
    root.setProperty('--m-bg', c.bg); root.setProperty('--m-on', c.on); root.setProperty('--m-num', c.num); root.setProperty('--m-acc', c.acc);
    $('monthTitle').textContent = L().monthTitle(m);
    $('prevMonth').disabled = m === 1; $('nextMonth').disabled = m === 12;
    $('strip').innerHTML = D.MONTHS.map(function (x) {
      return '<button type="button" role="tab" data-m="' + x.m + '" aria-selected="' + (x.m === m) + '" style="--c:' + x.c.acc + '">' + esc(Lg === 'ko' ? x.m + '월' : Lg === 'zh' ? x.m + '月' : (Lg === 'en' ? MONTH_EN[x.m - 1] : MONTH_ES[x.m - 1]).slice(0, 3)) + '</button>';
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
    renderChurch();
    renderIcsHelp();
    renderWall();
    syncUrl();
  }

  function renderGrid() {
    var m = state.month, first = new Date(Y, m - 1, 1).getDay(), days = new Date(Y, m, 0).getDate();
    var rows = Math.ceil((first + days) / 7), start = dn(iso(m, 1)) - first;
    var evs = monthEvents(m).concat(chMonth(m).filter(function (e) { return e.allDay; }).map(function (e) { return { s: e.s, e: e.e, ch: e.t }; })), today = todayISO(), Lg = state.lang;
    var dots = {}; chMonth(m).forEach(function (e) { if (!e.allDay) dots[e.s] = (dots[e.s] || 0) + 1; });
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
          '<span class="dn">' + d + '</span>' + (h && !out ? '<span class="hn">' + esc(h[Lg]) + '</span>' : '') + (dots[ds] && !out ? '<span class="chdots" aria-hidden="true">' + new Array(Math.min(3, dots[ds]) + 1).join('<i></i>') + '</span>' : '') + '</button>';
      }
      bars.forEach(function (b) {
        html += '<span class="bar' + (b.e.ch ? ' ch' : '') + (b.cont ? ' cont' : '') + (b.more ? ' more' : '') + '" style="grid-column:' + (b.c0 + 1) + ' / ' + (b.c1 + 2) + ';grid-row:' + (b.lane + 2) + '" aria-hidden="true"><span>' + esc(b.e.ch || b.e[Lg]) + '</span></span>';
      });
      html += '</div>';
    }
    $('weeks').innerHTML = html;
  }

  /* ── 내 교회 일정 (구글 캘린더 → apps-script 웹앱 → JSON) ── */
  var church = { list: [], status: '', at: 0 };
  function curChurch() { return (D.CHURCHES || []).filter(function (c) { return c.id === state.church; })[0] || null; }
  function chName(c) { return !c ? '' : typeof c.name === 'string' ? c.name : (c.name[state.lang] || c.name.en); }
  function chApi(c) { return c && (c.api || D.CHURCH_API) || ''; }
  function gcalId(c) {
    var x = String(c && c.calendar || '');
    var m = x.match(/[?&](?:src|cid)=([^&]+)/) || x.match(/calendar\/ical\/([^/]+)\//);
    return m ? decodeURIComponent(m[1]) : (x.indexOf('@') > 0 ? x : '');
  }
  function parts(dt, tz) {
    try {
      var f = new Intl.DateTimeFormat('en-US', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(dt), o = {};
      f.forEach(function (p) { o[p.type] = p.value; });
      return { d: o.year + '-' + o.month + '-' + o.day, t: (o.hour === '24' ? '00' : o.hour) + ':' + o.minute };
    } catch (e) { return { d: dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate()), t: pad(dt.getHours()) + ':' + pad(dt.getMinutes()) }; }
  }
  function normChurch(list, tz) {
    tz = tz || 'America/Los_Angeles';
    // 받은 일정 → { s, e, time, t, loc, allDay } (날짜는 이 기기 시간 기준)
    return (list || []).map(function (x) {
      var allDay = !!x.allDay || /^\d{4}-\d\d-\d\d$/.test(x.start);
      var o = { t: x.title || '', loc: x.location || '', allDay: allDay };
      if (allDay) {
        o.s = x.start.slice(0, 10);
        var eEx = (x.end || x.start).slice(0, 10), last = new Date((dn(eEx) - (x.end ? 1 : 0)) * 864e5).toISOString().slice(0, 10);
        if (last > o.s) o.e = last;
      } else {
        // 시간은 보는 사람의 휴대폰 시간대가 아니라 교회 현지 시간으로 (기본: 미국 서부)
        var a = parts(new Date(x.start), tz), b = parts(new Date(x.end || x.start), tz);
        o.s = a.d; if (b.d > o.s) o.e = b.d;
        o.time = a.t;
      }
      return o;
    }).filter(function (o) { return o.s; }).sort(function (a, b) { return (a.s + (a.time || '')).localeCompare(b.s + (b.time || '')); });
  }
  function loadChurch(force) {
    var c = curChurch();
    church.list = []; church.status = '';
    if (!c) return;
    if (!chApi(c)) { church.status = 'soon'; return; }
    var key = 'cal_ch_' + c.id, cached = null;
    try { cached = JSON.parse(store(key) || 'null'); } catch (e) {}
    if (cached && cached.events) { church.list = cached.events; church.at = cached.at; }
    if (!force && cached && Date.now() - cached.at < 30 * 60 * 1000) return;
    if (!church.list.length) church.status = 'loading';
    var api = chApi(c), url = api + (api.indexOf('?') < 0 ? '?' : '&') + 'church=' + encodeURIComponent(c.id) + '&year=' + Y;
    fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (j) {
      if (state.church !== c.id) return;
      if (j.notConfigured) { church.list = []; church.status = 'soon'; render(); return; }   // 아직 캘린더 연결 전
      church.list = normChurch(j.events, c.tz || j.timeZone); church.at = Date.now(); church.status = '';
      store(key, JSON.stringify({ at: church.at, events: church.list }));
      render();
    }).catch(function () { if (state.church !== c.id) return; if (!church.list.length) church.status = 'err'; render(); });
  }
  function chMonth(m) {
    var a = dn(iso(m, 1)), b = dn(iso(m, new Date(Y, m, 0).getDate()));
    return church.list.filter(function (e) { return dn(e.e || e.s) >= a && dn(e.s) <= b; });
  }
  function chOn(ds) { var x = dn(ds); return church.list.filter(function (e) { return dn(e.s) <= x && dn(e.e || e.s) >= x; }); }
  function chWhen(e) { return e.allDay ? t('allDay') : e.time; }
  function renderChurch() {
    var c = curChurch(), sec = $('sec-church');
    document.documentElement.style.setProperty('--ch', c ? c.color : '#1f8a70');
    sec.hidden = !c;
    $('brandSub').textContent = t('appSub') + (c ? ' · ' + chName(c) : '');
    if (!c) return;
    $('churchTitle').textContent = fmt(t('churchSched'), { c: chName(c) }) + ' · ' + L().monthName(state.month);
    var st = church.status === 'soon' ? fmt(t('churchSoon'), { c: chName(c) }) : church.status === 'loading' ? t('churchLoading') : church.status === 'err' ? t('churchErr') :
      church.at ? fmt(t('churchUpdated'), { t: new Date(church.at).toLocaleString(state.lang === 'zh' ? 'zh-CN' : state.lang, { month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' }) }) : '';
    $('churchStatus').textContent = st;
    $('churchStatus').className = 'ch-status' + (church.status === 'soon' ? ' soon' : '');
    var list = chMonth(state.month);
    $('churchList').innerHTML = church.status === 'soon' ? '' : list.length ? list.map(function (e) {
      return '<li><span class="ev-date">' + esc(rangeLabel(e)) + '</span><span class="ev-body"><b>' + esc(e.t) + '</b><small><span class="ch-time">' + esc(chWhen(e)) + '</span>' + (e.loc ? ' · ' + esc(e.loc) : '') + '</small></span></li>';
    }).join('') : (church.status ? '' : '<li class="empty">' + esc(t('churchEmpty')) + '</li>');
    var id = gcalId(c);
    $('churchSub').hidden = !id;
    if (id) $('churchSub').href = 'https://calendar.google.com/calendar/u/0/r?cid=' + encodeURIComponent(id);
  }
  function setChurch(id) {
    state.church = id; store('cal_church', id);
    loadChurch(false); render(); renderSettings();
    var c = curChurch();
    if (c && church.status === 'soon') toast(fmt(t('churchSoon'), { c: chName(c) }));
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
    var ce = curChurch() ? chOn(state.day) : [];
    var chItems = ce.map(function (e) { return '<li class="ch"><span class="ch-time">' + esc(chWhen(e)) + '</span><b>' + esc(e.t) + '</b>' + (e.loc ? '<small>' + esc(e.loc) + '</small>' : '') + '</li>'; }).join('');
    box.innerHTML = '<h3 class="dd-title">' + esc(L().dayTitle(dt.getMonth() + 1, dt.getDate(), dt.getDay())) + (state.day === todayISO() ? ' <span class="tag">' + esc(t('today')) + '</span>' : '') + '</h3>' +
      (items ? '<ul class="dd-list">' + items + '</ul>' : (chItems ? '' : '<p class="empty">' + esc(t('noDay')) + '</p>')) +
      (chItems ? '<p class="dd-sub">' + esc(chName(curChurch())) + '</p><ul class="dd-list">' + chItems + '</ul>' : '');
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
        '<div class="ga ga-sheet"><p>' + esc({ ko: '복사', en: 'Copy', es: 'Copiar', zh: '复制' }[Lg]) + '</p><p class="hl">' + esc({ ko: '배경화면으로 사용', en: 'Use as Wallpaper', es: 'Usar como fondo de pantalla', zh: '用作墙纸' }[Lg]) + '</p><p>' + esc({ ko: '파일에 저장', en: 'Save to Files', es: 'Guardar en Archivos', zh: '存储到“文件”' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p class="hl">' + esc({ ko: '배경화면 쌍으로 설정', en: 'Set as Wallpaper Pair', es: 'Definir como par de fondos', zh: '设为墙纸组合' }[Lg]) + '</p><p>' + esc({ ko: '홈 화면 사용자화', en: 'Customize Home Screen', es: 'Personalizar inicio', zh: '自定主屏幕' }[Lg]) + '</p></div>',
      ],
      android: [
        '<div class="ga ga-phone"><div class="ga-photos"><i class="hl"></i><i></i><i></i><i></i><i></i><i></i></div></div>',
        '<div class="ga ga-phone"><div class="ga-pic"></div><div class="ga-bar"><span>♡</span><span>✎</span><span>⇪</span><span class="hl">⋮</span></div></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '세부 정보', en: 'Details', es: 'Detalles', zh: '详细信息' }[Lg]) + '</p><p class="hl">' + esc({ ko: '배경화면으로 설정', en: 'Set as wallpaper', es: 'Establecer como fondo', zh: '设为壁纸' }[Lg]) + '</p><p>' + esc({ ko: '인쇄', en: 'Print', es: 'Imprimir', zh: '打印' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '잠금화면', en: 'Lock screen', es: 'Pantalla de bloqueo', zh: '锁定屏幕' }[Lg]) + '</p><p>' + esc({ ko: '홈 화면', en: 'Home screen', es: 'Pantalla de inicio', zh: '主屏幕' }[Lg]) + '</p><p class="hl">' + esc({ ko: '잠금화면 및 홈 화면', en: 'Lock and Home screens', es: 'Bloqueo e inicio', zh: '锁定屏幕和主屏幕' }[Lg]) + '</p></div>',
      ],
      win: [
        '<div class="ga ga-win"><p>📁 ' + esc({ ko: '다운로드', en: 'Downloads', es: 'Descargas', zh: '下载' }[Lg]) + '</p><p class="hl">🖼 2027-' + pad(state.month) + '.jpg</p></div>',
        '<div class="ga ga-win"><p class="hl">🖱 ' + esc({ ko: '오른쪽 클릭', en: 'Right-click', es: 'Clic derecho', zh: '右键单击' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p>' + esc({ ko: '열기', en: 'Open', es: 'Abrir', zh: '打开' }[Lg]) + '</p><p class="hl">' + esc({ ko: '바탕 화면 배경으로 설정', en: 'Set as desktop background', es: 'Establecer como fondo de escritorio', zh: '设置为桌面背景' }[Lg]) + '</p><p>' + esc({ ko: '회전', en: 'Rotate', es: 'Girar', zh: '旋转' }[Lg]) + '</p></div>',
        '',
      ],
      mac: [
        '<div class="ga ga-sheet"><p>' + esc({ ko: '일반', en: 'General', es: 'General', zh: '通用' }[Lg]) + '</p><p class="hl">' + esc({ ko: '배경화면', en: 'Wallpaper', es: 'Fondo de pantalla', zh: '墙纸' }[Lg]) + '</p><p>' + esc({ ko: '디스플레이', en: 'Displays', es: 'Pantallas', zh: '显示器' }[Lg]) + '</p></div>',
        '<div class="ga ga-sheet"><p class="hl">' + esc({ ko: '사진 추가…', en: 'Add Photo…', es: 'Añadir foto…', zh: '添加照片…' }[Lg]) + '</p><p>' + esc({ ko: '폴더 추가…', en: 'Add Folder…', es: 'Añadir carpeta…', zh: '添加文件夹…' }[Lg]) + '</p></div>',
        '<div class="ga ga-win"><p>📁 ' + esc({ ko: '다운로드', en: 'Downloads', es: 'Descargas', zh: '下载' }[Lg]) + '</p><p class="hl">🖼 2027-' + pad(state.month) + '.jpg</p></div>',
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
  /* 내 달력에 넣기: 자세한 설명 (버튼을 누르면 펼침) */
  var icsTab = isIOS ? 'ios' : isAndroid ? 'android' : isMac ? 'mac' : 'google';
  function renderIcsHelp() {
    var H = window.ICS_HELP[state.lang] || window.ICS_HELP.en, open = !$('icsHelp').hidden;
    $('icsHelpTxt').textContent = open ? H.close : H.open;
    $('icsHelpBtn').setAttribute('aria-expanded', String(open));
    if (!open) return;
    $('icsHelp').innerHTML = '<p>' + fmt(H.intro, { n: D.EVENTS.length }) + '</p>' +
      '<div class="ics-tabs" role="tablist">' + Object.keys(H.tabs).map(function (k) {
        return '<button type="button" role="tab" data-tab="' + k + '" aria-selected="' + (k === icsTab) + '">' + esc(H.tabs[k].label) + '</button>';
      }).join('') + '</div>' +
      '<ol class="ics-steps">' + H.tabs[icsTab].steps.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' +
      '<ul class="ics-notes">' + H.notes.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }
  $('icsHelpBtn').addEventListener('click', function () { $('icsHelp').hidden = !$('icsHelp').hidden; renderIcsHelp(); });
  $('icsHelp').addEventListener('click', function (e) { var b = e.target.closest('[data-tab]'); if (b) { icsTab = b.getAttribute('data-tab'); renderIcsHelp(); } });
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
  // 「오늘」: 2027년이면 오늘 날짜를 골라 그날 일정 칸으로, 2027년 전이면 남은 날과 다가오는 행사로
  function goToday() {
    var td = todayISO(), y = +td.slice(0, 4);
    if (y === Y) {
      var m = +td.slice(5, 7); state.day = td;
      if (m !== state.month) { state.month = m; render(); } else { renderGrid(); renderDay(); }
      setTimeout(function () { $('dayDetail').scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 30);
      return;
    }
    var loc = state.lang === 'zh' ? 'zh-CN' : state.lang;
    var dstr = new Date().toLocaleDateString(loc, { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    if (y < Y) {
      if (state.month !== 1) { state.month = 1; state.day = null; render(); }
      toast(fmt(t('todayBefore'), { d: dstr, n: dn(Y + '-01-01') - dn(td) }), 4500);
      $('sec-upcoming').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      if (state.month !== 12) { state.month = 12; state.day = null; render(); }
      toast(t('todayAfter'), 4000);
      $('sec-cal').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    p.set('lang', state.lang); p.delete('source'); p.delete('_v');
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
  function toast(msg, ms) { var el = $('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { el.classList.remove('show'); }, ms || 2200); }
  function measure() { document.documentElement.style.setProperty('--topbar-h', document.querySelector('.topbar').offsetHeight + 'px'); }
  function shareUrl() { return location.origin + location.pathname + '?lang=' + state.lang; }

  /* ── 언어·글씨·화면 바꾸기 (상단 버튼과 설정 창이 같이 씀) ── */
  function setLang(l) {
    if (l === state.lang) return;
    state.lang = l; saveLang(l); store('cal_setup', '1');
    // 카톡 등에서는 언어를 바꾸면 페이지를 다시 여므로, 처음 설정 중이었다면 설정 창을 다시 띄움
    if ($('setDialog').open && !$('setWelcome').hidden) { try { sessionStorage.setItem('cal_reopen', '1'); } catch (e) {} }
    if (goWithLang()) return;
    try { sessionStorage.removeItem('cal_reopen'); } catch (e) {}
    renderStatic(); render(); measure(); renderSettings();
  }
  function setSize(n) {
    state.size = n; store('cal_size', String(n));
    renderStatic(); measure(); renderSettings(); toast(L().textSizeN[n - 1]);
  }
  function setTheme(m) {
    store('cal_theme', m); try { document.cookie = 'cal_theme=' + m + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {}
    applyTheme(m); renderSettings();
  }
  document.querySelectorAll('#langSeg button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); }); });
  document.querySelectorAll('#sizeSeg button').forEach(function (bt) { bt.addEventListener('click', function () { setSize(Number(bt.getAttribute('data-size'))); }); });
  var LANG_NAME = { ko: '한국어', en: 'English', es: 'Español', zh: '中文' };
  function flagSvg(l) { var b = document.querySelector('#langSeg [data-lang="' + l + '"]'); return b ? b.innerHTML : ''; }
  function sizeGlyph() { return state.lang === 'ko' ? '가' : state.lang === 'zh' ? '字' : 'A'; }
  function renderSettings() {
    var Lg = L();
    $('setFlag').innerHTML = flagSvg(state.lang); $('setG').textContent = sizeGlyph();
    $('setBtn').setAttribute('aria-label', Lg.settings); $('setBtn').title = Lg.settings;
    $('setTitle').textContent = Lg.setTitle; $('setWelcome').textContent = Lg.welcome;
    $('setHLang').textContent = Lg.langLbl; $('setHSize').textContent = Lg.textSize; $('setHTheme').textContent = Lg.screenLbl;
    $('setDone').textContent = Lg.done;
    $('setTxt').textContent = Lg.settingsPc;
    $('setHChurch').textContent = Lg.myChurch; var sc = curChurch(); $('setChurchNote').textContent = sc && !chApi(sc) ? fmt(Lg.churchSoon, { c: chName(sc) }) : Lg.churchNote; $('setChurchNote').className = 'sheet-note' + (sc && !chApi(sc) ? ' soon' : '');
    $('setChurch').innerHTML = [{ id: '' }].concat(D.CHURCHES || []).map(function (c) {
      return '<button type="button" data-church="' + c.id + '" aria-pressed="' + (c.id === state.church) + '"><span class="dot"' + (c.color ? ' style="background:' + c.color + '"' : '') + '></span>' + esc(c.id ? chName(c) : Lg.noChurch) + '</button>';
    }).join('');
    $('setLangs').innerHTML = LANGS.map(function (l) { return '<button type="button" data-lang="' + l + '" lang="' + l + '" aria-pressed="' + (l === state.lang) + '">' + flagSvg(l) + '<span>' + LANG_NAME[l] + '</span></button>'; }).join('');
    $('setSizes').innerHTML = [1, 2, 3].map(function (n) { return '<button type="button" data-size="' + n + '" aria-pressed="' + (n === state.size) + '"><span class="sz" style="font-size:' + [18, 25, 33][n - 1] + 'px">' + sizeGlyph() + '</span><span>' + esc(Lg.textSizeN[n - 1]) + '</span></button>'; }).join('');
    var tm = themeMode();
    $('setThemes').innerHTML = ['auto', 'light', 'dark'].map(function (m) { return '<button type="button" data-theme="' + m + '" aria-pressed="' + (m === tm) + '">' + ICONS[m === 'light' ? 'sun' : m === 'dark' ? 'moon' : 'auto'] + '<span>' + esc(Lg.themeShort[m]) + '</span></button>'; }).join('');
  }
  $('setChurch').addEventListener('click', function (e) { var b = e.target.closest('[data-church]'); if (b) setChurch(b.getAttribute('data-church')); });
  $('setLangs').addEventListener('click', function (e) { var b = e.target.closest('[data-lang]'); if (b) setLang(b.getAttribute('data-lang')); });
  $('setSizes').addEventListener('click', function (e) { var b = e.target.closest('[data-size]'); if (b) setSize(Number(b.getAttribute('data-size'))); });
  $('setThemes').addEventListener('click', function (e) { var b = e.target.closest('[data-theme]'); if (b) setTheme(b.getAttribute('data-theme')); });
  function openSettings(first) { $('setWelcome').hidden = !first; renderSettings(); if (!$('setDialog').open) $('setDialog').showModal(); }
  $('setBtn').addEventListener('click', function () { openSettings(false); });
  $('setDone').addEventListener('click', function () { $('setDialog').close(); });
  $('setDialog').addEventListener('close', function () { store('cal_setup', '1'); });
  $('setDialog').addEventListener('click', function (e) { if (e.target === $('setDialog')) $('setDialog').close(); });
  $('themeBtn').addEventListener('click', function () {
    var next = { auto: 'light', light: 'dark', dark: 'auto' }[themeMode()];
    setTheme(next); toast(L().themeN[next]);
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
  var APP_FILES = ['index.html', 'version.json'];
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
    if (curChurch()) { loadChurch(false); render(); }
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

  /* ── 예전 화면이 열렸는지 확인 (카톡 등 앱 안 브라우저가 옛 파일을 보여 주는 경우) ──
   * version.json 은 항상 서버에서 새로 받아 비교하고, 다르면 버전을 붙인 주소로 다시 엽니다(한 번만). */
  (function () {
    var meta = document.querySelector('meta[name="build"]'), mine = meta && meta.content;
    if (!mine || location.protocol !== 'https:') return;
    fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || !j.v || j.v === mine) return;
      var tried = null; try { tried = sessionStorage.getItem('cal_vtry'); } catch (e) {}
      if (tried === j.v) return;
      try { sessionStorage.setItem('cal_vtry', j.v); } catch (e) {}
      var p = new URLSearchParams(location.search); p.set('_v', j.v);
      location.replace(location.pathname + '?' + p.toString() + location.hash);
    }).catch(function () {});
  })();
  // 아주 오래된 브라우저: dialog 기능이 없으면 간단히 대신함
  if (typeof HTMLDialogElement !== 'function') {
    document.querySelectorAll('dialog').forEach(function (d) {
      d.showModal = function () { d.setAttribute('open', ''); };
      d.close = function () { d.removeAttribute('open'); d.dispatchEvent(new Event('close')); };
    });
  }
  if (goWithLang()) return;
  if (todayISO().slice(0, 7) === iso(state.month, 1).slice(0, 7)) state.day = todayISO();   // 이번 달이면 오늘 일정을 바로 보여 줌
  loadChurch(false);
  renderStatic();
  render();
  measure();
  renderSettings();
  // 처음 방문: 언어·글씨 크기 고르는 창을 한 번 띄움 (홈 화면 앱이거나 전에 고른 적 있으면 생략)
  if (!store('cal_setup') && !store('cal_hint') && !launchedFromHome()) setTimeout(function () { openSettings(true); }, 400);
  else { var ro = null; try { ro = sessionStorage.getItem('cal_reopen'); sessionStorage.removeItem('cal_reopen'); } catch (e) {} if (ro) setTimeout(function () { openSettings(true); }, 300); }
  window.Wallpaper.preload(state.month);
})();
