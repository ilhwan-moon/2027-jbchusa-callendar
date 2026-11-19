/**
 * 교회 구글 캘린더 → 달력 사이트용 JSON
 *
 * 1) https://script.google.com 에서 새 프로젝트를 만들고 이 파일 내용을 붙여넣습니다.
 * 2) 아래 CALENDARS 에 교회별 구글 캘린더 ID를 넣습니다.
 *    (구글 캘린더 → 해당 캘린더 ⋮ → 설정 및 공유 → 「캘린더 통합」의 「캘린더 ID」)
 *    캘린더는 「공개」이거나, 이 스크립트를 실행하는 계정과 공유되어 있어야 합니다.
 * 3) 배포 → 새 배포 → 웹 앱, 실행: 나, 액세스: 모든 사용자 → 배포 → 웹 앱 URL 복사
 * 4) 사이트의 data.js 에서 CHURCH_API: '복사한 URL' 로 넣습니다.
 *
 * 요청 예: …/exec?church=la-central&year=2027
 */
const CALENDARS = {
  'la-central': '',     // LA Central
  'la': '',             // LA
  'la-corona': '',      // LA Corona
  'san-francisco': '',  // San Francisco
  'las-vegas': '',      // Las Vegas
};

function doGet(e) {
  const church = String((e && e.parameter.church) || '');
  const year = Number((e && e.parameter.year) || new Date().getFullYear());
  const calId = CALENDARS[church];
  if (calId === undefined) return json_({ error: 'unknown church' });
  if (!calId) return json_({ church: church, notConfigured: true, events: [] });

  const cache = CacheService.getScriptCache(), key = church + ':' + year;
  const hit = cache.get(key);
  if (hit) return ContentService.createTextOutput(hit).setMimeType(ContentService.MimeType.JSON);

  let cal = CalendarApp.getCalendarById(calId);
  if (!cal) { try { cal = CalendarApp.subscribeToCalendar(calId); } catch (err) {} }
  if (!cal) return json_({ church: church, error: 'calendar not accessible' });

  const tz = cal.getTimeZone();
  const from = new Date(year, 0, 1), to = new Date(year + 1, 0, 1);
  const events = cal.getEvents(from, to).map(function (ev) {
    const allDay = ev.isAllDayEvent();
    return {
      title: ev.getTitle(),
      location: ev.getLocation(),
      allDay: allDay,
      start: allDay ? Utilities.formatDate(ev.getAllDayStartDate(), tz, 'yyyy-MM-dd') : ev.getStartTime().toISOString(),
      end: allDay ? Utilities.formatDate(ev.getAllDayEndDate(), tz, 'yyyy-MM-dd') : ev.getEndTime().toISOString(),
    };
  });
  const out = JSON.stringify({ church: church, year: year, timeZone: tz, updated: new Date().toISOString(), events: events });
  try { cache.put(key, out, 1800); } catch (err) {}   // 30분 저장 (너무 크면 생략)
  return ContentService.createTextOutput(out).setMimeType(ContentService.MimeType.JSON);
}

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
