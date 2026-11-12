const CACHE_NAME = 'fresh-paradise-pos-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './pos.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './logo_fresh_paradise.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const reqUrl = event.request.url;
  // Nunca cachear llamadas dinámicas a backend/API externas ni peticiones no-GET
  if (event.request.method !== 'GET' || reqUrl.includes('script.google.com') || reqUrl.includes('googleusercontent.com')) {
    return;
  }

  // Estrategia Network-first con respaldo en caché para operación offline
  event.respondWith(
    fetch(event.request)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200 && reqUrl.startsWith(self.location.origin)) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return networkRes;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
