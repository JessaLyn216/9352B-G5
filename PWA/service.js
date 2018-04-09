const staticAssets = [
    './',
    './styles.css',
    './app.js'
];


self.addEventListener('install', async event => {
    const cache = await caches.open('web-app');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFrst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}