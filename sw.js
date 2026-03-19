const CACHE_NAME = 'netfrx-v1';

// キャッシュするページ（最低限）
const urlsToCache = [
  '/',
  '/?m=1'
];

// インストール時
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// 有効化（古いキャッシュ削除）
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// 通信処理
self.addEventListener('fetch', function(event) {

  // ❌ AdSense系は絶対キャッシュしない
  if (
    event.request.url.includes('googlesyndication') ||
    event.request.url.includes('doubleclick') ||
    event.request.url.includes('googleadservices')
  ) {
    return;
  }

  // ✔ 基本：キャッシュ優先
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).catch(function() {

        // オフライン時の簡易対応
        if (event.request.destination === 'document') {
          return new Response(
            '<h1>オフラインです</h1>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        }

      });
    })
  );
});