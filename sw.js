const CACHE_NAME = 'pseudo-line-cache-v2.0-vite'; // Incremented version for Vite migration
const CORE_ASSETS = [
  // Core app shell served from root (via public or build output)
  '/index.html',
  '/manifest.json',
  '/icons/pwa/icon-192x192.svg',
  '/icons/pwa/icon-512x512.svg',

  // Source files (Note: In Vite, these are bundled; this strategy is for dev consistency)
  // For production, a Vite PWA plugin would cache bundled assets.
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/src/types.ts',
  '/src/constants.ts',
  
  '/src/components/NavBar.tsx',
  '/src/components/Footer.tsx',
  '/src/components/ProjectCard.tsx',
  '/src/components/Hero.tsx',
  '/src/components/SectionContainer.tsx',
  '/src/components/SectionTitle.tsx',
  '/src/components/ChatBotWidget.tsx',
  '/src/components/ChatWindow.tsx',

  '/src/components/icons/LogoIcon.tsx',
  '/src/components/icons/GitHubIcon.tsx',
  '/src/components/icons/LinkedInIcon.tsx',
  '/src/components/icons/XIcon.tsx',
  '/src/components/icons/EmailIcon.tsx',
  '/src/components/icons/ArrowRightIcon.tsx',
  '/src/components/icons/ExternalLinkIcon.tsx',
  '/src/components/icons/ArrowLeftIcon.tsx',
  '/src/components/icons/CheckIcon.tsx',
  '/src/components/icons/ChatBubbleIcon.tsx',
  '/src/components/icons/PaperAirplaneIcon.tsx',
  '/src/components/icons/CloseIcon.tsx',
  '/src/components/icons/InstagramIcon.tsx',
  '/src/components/icons/YouTubeIcon.tsx',
  '/src/components/icons/MediumIcon.tsx',
  '/src/components/icons/WhatsAppIcon.tsx',
  '/src/components/icons/BlueskyIcon.tsx',
  '/src/components/icons/MastodonIcon.tsx',
  '/src/components/icons/TelegramIcon.tsx',
  '/src/components/icons/DiscordIcon.tsx',
  '/src/components/icons/GoogleChatIcon.tsx',
  '/src/components/icons/ThreadsIcon.tsx',
  '/src/components/icons/SignalIcon.tsx',
  '/src/components/icons/TikTokIcon.tsx',
  '/src/components/icons/PatreonIcon.tsx',

  // Pages
  '/src/pages/HomePage.tsx',
  '/src/pages/AboutPage.tsx',
  '/src/pages/ProjectsPage.tsx',
  '/src/pages/PricingPage.tsx',
  '/src/pages/ContactPage.tsx',
  '/src/pages/ProjectDetailPage.tsx',
  '/src/pages/PrivacyPolicyPage.tsx',
  '/src/pages/TermsOfServicePage.tsx',
  
  // Data
  '/src/data/projectsData.ts',
  '/src/data/pricingData.ts',
];

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching core assets');
        // Filter out URLs that are not relative to the origin (e.g. external CDNs, though none here now)
        const localAssets = CORE_ASSETS.filter(url => !url.startsWith('http'));
        return cache.addAll(localAssets);
      })
      .then(() => self.skipWaiting())
      .catch(error => {
        console.error('[ServiceWorker] Cache addAll failed for assets:', CORE_ASSETS, error);
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

  // For navigation requests, try to serve index.html from cache first.
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
          // Fallback to network if there's an error (e.g., cache match fails)
          return fetch(req);
        })
    );
    return;
  }

  // For other requests (assets, API calls, etc.)
  event.respondWith(
    caches.match(req, { cacheName: CACHE_NAME })
      .then(cachedResponse => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, fetch from network
        return fetch(req).then(networkResponse => {
          // Optional: Cache new assets if they are from origin and successful GET requests
          // This part is tricky with Vite's hashed assets for production.
          // The current CORE_ASSETS list is mostly source files, which won't match hashed prod bundles.
          if (req.method === 'GET' && networkResponse && networkResponse.status === 200) {
            const url = new URL(req.url);
            if (url.origin === self.origin) { // Only cache assets from the same origin
               // This conditional caching might be too broad or too narrow for a Vite app.
               // For now, we'll stick to primarily pre-caching defined CORE_ASSETS.
            }
          }
          return networkResponse;
        });
      })
      .catch(error => {
        console.error('[ServiceWorker] Fetch error:', error, req.url);
        // Optionally, provide a generic offline fallback page for certain types of assets if desired
        // For example, for images: return caches.match('/offline-image.png');
      })
  );
});
