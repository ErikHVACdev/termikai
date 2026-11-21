// GENERADO por tools/access/sealed-app.ts. No editar a mano.
const CACHE = "termikai-mwqfjodt";
const FILES = ["./assets/Manrope-700-D4wwR_vd.ttf","./assets/Manrope-400-B0Hww38c.ttf","./","./app-299a6aa1ac86.bin","./assets/manrope-latin-ext-700-normal-DYOwVNan.woff2","./assets/manrope-latin-700-normal-BZp_XxE4.woff2","./assets/manrope-latin-ext-600-normal-_gBojHdJ.woff2","./assets/manrope-latin-600-normal-4f0koTD-.woff2","./assets/manrope-latin-ext-400-normal-CMDvPJRp.woff2","./assets/manrope-latin-400-normal-PaqtzbVb.woff2","./assets/Phosphor-DtdjzkpE.woff2","./assets/pdf.worker.min-yatZIOMy.mjs","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./brand-icon.png","./brand-icon.svg"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});
// Solo borra sus cachés antiguas: en github.io comparte el almacén con las otras apps
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x.startsWith("termikai-") && x !== CACHE).map((x) => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // La página: primero la red (para recibir versiones nuevas) y, sin conexión, la guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./', { ignoreVary: true })));
    return;
  }
  // El resto lleva un hash en el nombre: si está guardado, no cambia nunca
  e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit || fetch(req)));
});
