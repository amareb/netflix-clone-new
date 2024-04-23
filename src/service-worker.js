// This is a service worker file
// You can add your caching and service worker logic here

// Example caching logic
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/styles/main.css",
        "/scripts/main.js",
        // Add more files to cache as needed
      ]);
    })
  );
});

// Example fetching logic
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
