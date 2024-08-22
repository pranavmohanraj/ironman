self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching files...');
                return cache.addAll([
                    '/ironman/',  // Update this path
                    '/ironman/index.html',  // Update this path
                    '/ironman/styles/styles.css',  // Update this path
                    '/ironman/scripts/script.js',  // Update this path
                    '/ironman/favicons/favicon-192x192.png',  // Update this path
                    '/ironman/favicons/favicon-512x512.png'  // Update this path
                ]);
            })
    );
});

// Fetch event - serve cached files
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return the cached file if available, otherwise fetch from network
                return response || fetch(event.request);
            })
    );
});