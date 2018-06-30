// simple service worker file

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install',e,);
  e.waitUntil(
    caches.open("cache-simple").then(function(cache) {
      console.log('[ServiceWorker] Caching index.html');
      return cache.add("index.html");
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate', e);


});


self.addEventListener('fetch', function(e) {
    // log the event
    console.log('[Service Worker] Fetch', e);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});


self.addEventListener('push', function(e) {
  // Keep the service worker alive until the notification is created.
  console.log(e.data.json());
  var messageData = e.data.json();
  console.log(messageData);
  e.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
    self.registration.showNotification(messageData.title, {  
          body: messageData.message,  
          icon: messageData.icon,  
          tag: messageData.notificationTag  
        })
  );
});
