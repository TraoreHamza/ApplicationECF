// const staticMetropole = "Metropole"
// const assets = [
//   "/",
//   "/index.html",
//   "/css/styles.css",
//   "/css/form.css",
//   "/css/ticket.css",
//   "/css/titre.css",
//   "/js/titre.js",
//   "/js/form.js",
//   "/js/main.js",


// ]

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then(cache => {
//       cache.addAll(assets)
//     })
//   )
// })

// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })