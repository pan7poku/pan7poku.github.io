const CACHE_NAME = 'netfrx-v3';

const urlsToCache = [
  '/',
  '/?m=1',
  '/offline.html' // ← オフライン用ページ（あとで作る）
];

// インストール
self.addEventListener('install', event => {
  self.skipWaiting(); // 即反映
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 有効化
self.addEventListener('activate', event => {
  self.clients.claim(); // 即有効化
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// 通信
self.addEventListener('fetch', event => {

  const url = event.request.url;

  // ❌ 広告系は完全スルー
  if (
    url.includes('googlesyndication') ||
    url.includes('doubleclick') ||
    url.includes('googleadservices')
  ) return;

  // ❌ chrome拡張とかも除外
  if (url.startsWith('chrome-extension')) return;

  // 👇 GET以外は無視
  if (event.request.method !== 'GET') return;

  // 🟢 ページ（HTML）
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
        .then(res => res || caches.match('/offline.html'))
    );
    return;
  }

  // 🟢 画像・CSS・JS（静的ファイル）
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkRes => {
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkRes.clone());
        });
        return networkRes;
      });

      return cached || fetchPromise;
    })
  );
});
