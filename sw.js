const cacheName = 'hello-world-page';
const filesToCache = [
    '/',
    '/index.html',
    '/css/main.css'
];

self.addEventListener('install', evt => {

    console.log('Service Worker Installed..');

    evt.waitUntil(
        caches.open(cacheName)
            .then(caches => {
                console.log('Service Worker, Caching App Shell');
                return caches.addAll(filesToCache);
            })
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});