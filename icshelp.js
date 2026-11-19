// 「내 휴대폰 달력에 모두 넣기」 자세한 설명 (기기별)
window.ICS_HELP = {
  ko: {
    open: '자세한 방법 보기', close: '설명 닫기',
    intro: '위 버튼을 누르면 선교회 행사 <b>{n}개</b>가 들어 있는 달력 파일(.ics)을 받습니다. 모두 <b>하루 종일 일정</b>으로 들어가고, 행사 이름은 <b>지금 고른 언어</b>로 들어갑니다.',
    tabs: {
      ios: { label: '아이폰', steps: [
        '<b>사파리</b>에서 위 <b>「내 휴대폰 달력에 모두 넣기」</b>를 누르세요. 카톡 안에서는 안 될 수 있으니 「다른 브라우저로 열기」로 사파리에서 여세요.',
        '「이벤트 추가」 창이 뜨면 아래쪽 <b>「모두 추가」</b>를 누르세요.',
        '넣을 캘린더를 고르고 <b>「완료」</b>를 누르세요.',
        '<b>캘린더</b> 앱에서 2027년을 열면 행사가 보입니다.'] },
      android: { label: '안드로이드', steps: [
        '<b>크롬</b>에서 위 버튼을 누르면 파일이 <b>다운로드</b>됩니다.',
        '위쪽 알림이나 <b>「내 파일 → 다운로드」</b>에서 받은 파일(LWM-2027-….ics)을 누르세요.',
        '<b>삼성 캘린더</b>가 열리면 저장할 계정을 고르고 <b>「저장」</b>을 누르세요.',
        '<b>구글 캘린더 앱만 있는 휴대폰</b>은 파일을 바로 열 수 없습니다. 옆의 <b>「구글 캘린더 (PC)」</b> 방법으로 넣으면 휴대폰 구글 캘린더에도 자동으로 나타납니다.'] },
      google: { label: '구글 캘린더 (PC)', steps: [
        '컴퓨터에서 이 페이지를 열고 위 버튼으로 파일을 받으세요.',
        '<b>calendar.google.com</b>에 들어가 오른쪽 위 <b>⚙ → 설정</b>을 누르세요.',
        '왼쪽 <b>「가져오기 및 내보내기」</b> → <b>「컴퓨터에서 파일 선택」</b>으로 받은 파일을 고르세요.',
        '넣을 캘린더를 고르고 <b>「가져오기」</b>를 누르세요. 같은 구글 계정의 휴대폰에도 곧 나타납니다.'] },
      outlook: { label: '아웃룩', steps: [
        '받은 파일을 <b>두 번 클릭</b>하세요.',
        '아웃룩이 열리면 <b>「모두 저장」</b>(또는 「캘린더에 추가」)을 누르세요.',
        '웹 아웃룩(outlook.com)은 캘린더 → <b>「캘린더 추가」 → 「파일에서 업로드」</b>로 넣습니다.'] },
      mac: { label: '맥', steps: [
        '받은 파일을 <b>두 번 클릭</b>하세요.',
        '<b>캘린더</b> 앱이 열리면 넣을 캘린더를 고르고 <b>「확인」</b>을 누르세요.'] },
    },
    notes: [
      '💡 <b>먼저 「선교회」 같은 새 캘린더를 만들어 그곳에 넣으면</b>, 나중에 그 캘린더만 지워서 한 번에 뺄 수 있습니다.',
      '⚠️ 파일을 두 번 넣으면 행사가 <b>두 번씩</b> 생깁니다. 행사가 바뀌었다면 전에 넣은 것을 지우고 다시 넣어 주세요.',
      '🌐 다른 언어로 넣고 싶으면 위쪽 <b>국기</b>를 먼저 바꾼 뒤 버튼을 누르세요.',
    ],
  },
  en: {
    open: 'Show step-by-step help', close: 'Hide help',
    intro: 'The button above downloads a calendar file (.ics) with all <b>{n} mission events</b>. They are added as <b>all-day events</b>, named in the <b>language you selected</b>.',
    tabs: {
      ios: { label: 'iPhone', steps: [
        'In <b>Safari</b>, tap <b>“Add all to my phone calendar”</b> above. Inside KakaoTalk or other apps it may not work — open the page in Safari first.',
        'When the “Add Events” screen appears, tap <b>“Add All”</b>.',
        'Choose a calendar and tap <b>“Done”</b>.',
        'Open the <b>Calendar</b> app and go to 2027 to see the events.'] },
      android: { label: 'Android', steps: [
        'In <b>Chrome</b>, tap the button above. The file is <b>downloaded</b>.',
        'Tap the downloaded file (LWM-2027-….ics) in the notification or in <b>Files → Downloads</b>.',
        'When <b>Samsung Calendar</b> opens, choose an account and tap <b>“Save”</b>.',
        'Phones with <b>only the Google Calendar app</b> can’t open the file directly. Use the <b>“Google Calendar (PC)”</b> tab — the events then appear on your phone automatically.'] },
      google: { label: 'Google Calendar (PC)', steps: [
        'Open this page on a computer and download the file with the button above.',
        'Go to <b>calendar.google.com</b> → <b>⚙ → Settings</b> (top right).',
        'Click <b>“Import & export”</b> on the left → <b>“Select file from your computer”</b> and pick the file.',
        'Choose a calendar and click <b>“Import”</b>. It soon appears on phones signed in to the same Google account.'] },
      outlook: { label: 'Outlook', steps: [
        '<b>Double-click</b> the downloaded file.',
        'When Outlook opens, click <b>“Save All”</b> (or “Add to calendar”).',
        'Outlook on the web: Calendar → <b>“Add calendar” → “Upload from file”</b>.'] },
      mac: { label: 'Mac', steps: [
        '<b>Double-click</b> the downloaded file.',
        'When <b>Calendar</b> opens, choose a calendar and click <b>“OK”</b>.'] },
    },
    notes: [
      '💡 <b>Create a new calendar (e.g. “Mission”) first and import into it</b> — later you can remove everything by deleting that one calendar.',
      '⚠️ Importing twice creates <b>duplicate events</b>. If events change, delete the old ones and import again.',
      '🌐 To get names in another language, tap a <b>flag</b> at the top first, then press the button.',
    ],
  },
  es: {
    open: 'Ver instrucciones paso a paso', close: 'Ocultar instrucciones',
    intro: 'El botón de arriba descarga un archivo de calendario (.ics) con los <b>{n} eventos de la misión</b>. Se agregan como <b>eventos de todo el día</b>, con nombres en el <b>idioma elegido</b>.',
    tabs: {
      ios: { label: 'iPhone', steps: [
        'En <b>Safari</b>, toque <b>«Agregar todo al calendario del teléfono»</b>. Dentro de KakaoTalk u otras apps puede no funcionar: abra la página en Safari.',
        'Cuando aparezca «Añadir eventos», toque <b>«Añadir todo»</b>.',
        'Elija un calendario y toque <b>«OK»</b>.',
        'Abra la app <b>Calendario</b> y vaya a 2027 para ver los eventos.'] },
      android: { label: 'Android', steps: [
        'En <b>Chrome</b>, toque el botón de arriba. El archivo se <b>descarga</b>.',
        'Toque el archivo (LWM-2027-….ics) en la notificación o en <b>Archivos → Descargas</b>.',
        'Cuando se abra <b>Samsung Calendar</b>, elija una cuenta y toque <b>«Guardar»</b>.',
        'Los teléfonos que <b>solo tienen Google Calendar</b> no pueden abrir el archivo directamente. Use la pestaña <b>«Google Calendar (PC)»</b>; luego los eventos aparecen en su teléfono.'] },
      google: { label: 'Google Calendar (PC)', steps: [
        'Abra esta página en una computadora y descargue el archivo con el botón de arriba.',
        'Entre a <b>calendar.google.com</b> → <b>⚙ → Configuración</b> (arriba a la derecha).',
        'A la izquierda, <b>«Importar y exportar»</b> → <b>«Seleccionar archivo de tu computadora»</b>.',
        'Elija un calendario y haga clic en <b>«Importar»</b>. Pronto aparecerá en los teléfonos con la misma cuenta de Google.'] },
      outlook: { label: 'Outlook', steps: [
        'Haga <b>doble clic</b> en el archivo descargado.',
        'Cuando se abra Outlook, haga clic en <b>«Guardar todo»</b> (o «Agregar al calendario»).',
        'Outlook en la web: Calendario → <b>«Agregar calendario» → «Cargar desde archivo»</b>.'] },
      mac: { label: 'Mac', steps: [
        'Haga <b>doble clic</b> en el archivo descargado.',
        'Cuando se abra <b>Calendario</b>, elija un calendario y haga clic en <b>«OK»</b>.'] },
    },
    notes: [
      '💡 <b>Cree primero un calendario nuevo (por ejemplo «Misión») e importe allí</b>: después podrá quitar todo borrando solo ese calendario.',
      '⚠️ Si importa dos veces, los eventos se <b>duplican</b>. Si cambian los eventos, borre los anteriores e importe de nuevo.',
      '🌐 Para otro idioma, toque primero una <b>bandera</b> arriba y luego el botón.',
    ],
  },
  zh: {
    open: '查看详细步骤', close: '收起说明',
    intro: '点上面的按钮会下载包含 <b>{n} 个宣教会活动</b>的日历文件（.ics）。全部以<b>全天活动</b>加入，活动名称使用<b>当前选择的语言</b>。',
    tabs: {
      ios: { label: 'iPhone', steps: [
        '在 <b>Safari</b> 中点上面的<b>「全部加入我的手机日历」</b>。在 KakaoTalk 等 App 内可能无法使用，请先用 Safari 打开。',
        '出现「添加事件」画面时，点<b>「全部添加」</b>。',
        '选择要加入的日历，点<b>「完成」</b>。',
        '打开<b>日历</b> App，翻到 2027 年即可看到活动。'] },
      android: { label: '安卓', steps: [
        '在 <b>Chrome</b> 中点上面的按钮，文件会被<b>下载</b>。',
        '在通知栏或<b>「我的文件 → 下载」</b>中点下载的文件（LWM-2027-….ics）。',
        '打开<b>三星日历</b>后，选择账户并点<b>「保存」</b>。',
        '<b>只有 Google 日历 App 的手机</b>无法直接打开文件。请用旁边<b>「Google 日历（电脑）」</b>的方法加入，手机上也会自动显示。'] },
      google: { label: 'Google 日历（电脑）', steps: [
        '在电脑上打开本页，用上面的按钮下载文件。',
        '进入 <b>calendar.google.com</b>，点右上角 <b>⚙ → 设置</b>。',
        '点左侧<b>「导入和导出」</b> → <b>「从计算机中选择文件」</b>，选择下载的文件。',
        '选择日历后点<b>「导入」</b>。同一 Google 账户的手机上很快也会出现。'] },
      outlook: { label: 'Outlook', steps: [
        '<b>双击</b>下载的文件。',
        'Outlook 打开后，点<b>「全部保存」</b>（或「添加到日历」）。',
        '网页版 Outlook：日历 → <b>「添加日历」→「从文件上传」</b>。'] },
      mac: { label: 'Mac', steps: [
        '<b>双击</b>下载的文件。',
        '<b>日历</b> App 打开后，选择要加入的日历，点<b>「好」</b>。'] },
    },
    notes: [
      '💡 <b>先新建一个日历（例如「宣教会」）再导入</b>，以后只要删除这个日历就能一次全部移除。',
      '⚠️ 导入两次会产生<b>重复的活动</b>。如果活动有变更，请先删除之前导入的，再重新导入。',
      '🌐 想用其他语言，请先点上方的<b>国旗</b>，再点按钮。',
    ],
  },
};
