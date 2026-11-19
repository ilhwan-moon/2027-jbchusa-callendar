// 홈 화면 앱용 서비스 워커
// 항상 서버에 먼저 확인하고(브라우저 저장본 무시), 인터넷이 끊겼을 때만 저장해 둔 파일을 보여 줍니다.
const CACHE = 'calendar-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then((res) => {
      if (res && res.ok && !/\/img\/art-\d\d\.jpg$|\/img\/(cover|back)\.jpg$/.test(new URL(req.url).pathname)) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
