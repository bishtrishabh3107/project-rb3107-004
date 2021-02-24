/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-474356c6e2c35090c945.js"
  },
  {
    "url": "styles.7153eb20f252d413d5b6.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-2d6b7d2e2be378715b78.js"
  },
  {
    "url": "app-be3e5cf12a6c97c3514f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c0a129e348363dd993fc7b15a13b845d"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-780d0321bb4481125aff.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "67529c1415dc4207b031130a79474cd1"
  },
  {
    "url": "polyfill-0f9e7d7b54aaab6b0844.js"
  },
  {
    "url": "545f34e4-f6539ffad65cce26e5b3.js"
  },
  {
    "url": "1bfc9850-04f83e3a0bebcf453d76.js"
  },
  {
    "url": "ea88be26-8d8254813b3a87a04cb8.js"
  },
  {
    "url": "b3c8a8d6bd3866a87d4b170d8d670ac2c5ffefad-61437f08d78f0bd4adae.js"
  },
  {
    "url": "f7bcfd358cadb36641b8e0060c1411bbeedd8369-7bb3b4ba409a83b0d13a.js"
  },
  {
    "url": "component---src-pages-sociallyacclaimed-tsx-7138eceba88837551318.js"
  },
  {
    "url": "page-data/sociallyacclaimed/page-data.json",
    "revision": "7f32ff973c4be16d771b214e1d0f43b6"
  },
  {
    "url": "page-data/sq/d/1109191820.json",
    "revision": "8d8d54f18caed9399f92fe97b88c8847"
  },
  {
    "url": "page-data/sq/d/1951305561.json",
    "revision": "41ec3ea25b089f88ba3b08e66bb02b0b"
  },
  {
    "url": "page-data/sq/d/215063324.json",
    "revision": "82f7f5bf859b603f7047b8fb46a99fc5"
  },
  {
    "url": "page-data/sq/d/2312664674.json",
    "revision": "2788bccbadf68c4f4ca98ae09a9ef3c8"
  },
  {
    "url": "page-data/sq/d/2496447232.json",
    "revision": "3cbf69ea6a7a8c4c54639490ceca87f4"
  },
  {
    "url": "page-data/sq/d/2752015303.json",
    "revision": "cd04ddc167c95fe50641c5a2a8ae769a"
  },
  {
    "url": "page-data/sq/d/3053235663.json",
    "revision": "7a59d03b7206ee350dcfd0569b608a26"
  },
  {
    "url": "page-data/sq/d/3474663376.json",
    "revision": "f830228c6e962b4380ade3a35b3820b9"
  },
  {
    "url": "page-data/sq/d/494729503.json",
    "revision": "96b5808b25baac6a2408d1c6c5aae623"
  },
  {
    "url": "page-data/sq/d/557794130.json",
    "revision": "89e959646cb97cdb3dc533fced8efb29"
  },
  {
    "url": "component---src-pages-trending-tsx-5c2b33175110798ad586.js"
  },
  {
    "url": "page-data/trending/page-data.json",
    "revision": "89e3e6e140a44471683a1d4a8281499b"
  },
  {
    "url": "page-data/sq/d/1899617836.json",
    "revision": "41c22c9583600c0544c26f0935f072dd"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f524095135a38a01413ecbcf20aa1b40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-be3e5cf12a6c97c3514f.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
