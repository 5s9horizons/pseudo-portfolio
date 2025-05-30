
const CACHE_NAME = 'pseudo-line-cache-v1.9'; // Incremented version for new social icons
const CORE_ASSETS = [
  '/index.html',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/constants.ts',
  
  '/components/NavBar.tsx',
  '/components/Footer.tsx',
  '/components/ProjectCard.tsx',
  '/components/Hero.tsx',
  '/components/SectionContainer.tsx',
  '/components/SectionTitle.tsx',
  '/components/ChatBotWidget.tsx',
  '/components/ChatWindow.tsx',

  '/components/icons/LogoIcon.tsx',
  '/components/icons/GitHubIcon.tsx',
  '/components/icons/LinkedInIcon.tsx',
  '/components/icons/XIcon.tsx',
  '/components/icons/EmailIcon.tsx',
  '/components/icons/ArrowRightIcon.tsx',
  '/components/icons/ExternalLinkIcon.tsx',
  '/components/icons/ArrowLeftIcon.tsx',
  '/components/icons/CheckIcon.tsx',
  '/components/icons/ChatBubbleIcon.tsx',
  '/components/icons/PaperAirplaneIcon.tsx',
  '/components/icons/CloseIcon.tsx',
  '/components/icons/InstagramIcon.tsx',
  '/components/icons/YouTubeIcon.tsx',
  '/components/icons/MediumIcon.tsx',
  '/components/icons/WhatsAppIcon.tsx',    // New
  '/components/icons/BlueskyIcon.tsx',     // New
  '/components/icons/MastodonIcon.tsx',    // New
  '/components/icons/TelegramIcon.tsx',    // New
  '/components/icons/DiscordIcon.tsx',     // New
  '/components/icons/GoogleChatIcon.tsx',  // New
  '/components/icons/ThreadsIcon.tsx',     // New
  '/components/icons/SignalIcon.tsx',      // New
  '/components/icons/TikTokIcon.tsx',      // New
  '/components/icons/PatreonIcon.tsx',     // New


  // Pages
  '/pages/HomePage.tsx',
  '/pages/AboutPage.tsx',
  '/pages/ProjectsPage.tsx',
  '/pages/PricingPage.tsx',
  '/pages/ContactPage.tsx',
  '/pages/ProjectDetailPage.tsx',
  '/pages/PrivacyPolicyPage.tsx',
  '/pages/TermsOfServicePage.tsx',
  
  // Data
  '/data/projectsData.ts',
  '/data/pricingData.ts',
  
  '/manifest.json',
  '/icons/pwa/icon-192x192.svg',
  '/icons/pwa/icon-512x512.svg',
];

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching core assets');
        const localAssets = CORE_ASSETS.filter(url => !url.startsWith('http'));
        return cache.addAll(localAssets);
      })
      .then(() => self.skipWaiting())
      .catch(error => {
        console.error('[ServiceWorker] Cache addAll failed:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;

  if (req.mode === 'navigate' && req.method === 'GET' && req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      caches.match('/index.html', { cacheName: CACHE_NAME })
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('[ServiceWorker] Serving from cache for navigation:', req.url);
            return cachedResponse;
          }
          console.log('[ServiceWorker] Fetching for navigation (not in cache):', req.url);
          return fetch(req);
        })
        .catch(error => {
          console.error('[ServiceWorker] Error serving navigation from cache:', error);
          return fetch(req);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(req, { cacheName: CACHE_NAME })
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(req).then(networkResponse => {
          if (req.method === 'GET' && networkResponse && networkResponse.status === 200) {
            if (!req.url.startsWith('http') || req.url.startsWith(self.origin)) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(req, responseToCache);
              });
            }
          }
          return networkResponse;
        });
      })
      .catch(error => {
        console.error('[ServiceWorker] Fetch error:', error, req.url);
      })
  );
});
