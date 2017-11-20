"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e48b490e05adc7c346a23ca1f6049e43"],["/static/css/main.0d076361.css","d30fa31032dba954a4ef617a1752db34"],["/static/js/main.f3ebd980.js","1371ee5c608f3509cc97ee8273d10cc0"],["/static/media/021.eab871bd.png","eab871bd8ddeb4390d40c8f39984152b"],["/static/media/055.238a63ff.png","238a63ffc36aebca64fd9e0ab29ce57f"],["/static/media/070.d03237cd.png","d03237cd537326e57c0f58cbbd00a543"],["/static/media/130.ef3317ed.png","ef3317ed6710cfa31a6accd7607080f8"],["/static/media/176.7ea859ce.png","7ea859ceac72567cd054932f5d4f77c1"],["/static/media/181.ca3a74d2.png","ca3a74d2aba256395d8b061fabdcb6b7"],["/static/media/187.4ba7c702.png","4ba7c702c3987227fa550c50614819b5"],["/static/media/209.eab871bd.png","eab871bd8ddeb4390d40c8f39984152b"],["/static/media/216.cf31a773.png","cf31a77320d7381b87908ea90c72044f"],["/static/media/226.8a0916f6.png","8a0916f64fe8109ec53cb3c0cef6c56c"],["/static/media/235.5c0a6286.png","5c0a628616ce7a15e410cf637286234d"],["/static/media/berlin-01.3762546f.png","3762546f785ff17e287f6e022a2b7e15"],["/static/media/close-icon.a87c5a55.svg","a87c5a5598ac7f498ddffd21678d22a4"],["/static/media/menu-icon.f156d1be.svg","f156d1be67b78eb62bdde1e5d40f7a52"],["/static/media/next-qu-icon.a2496918.svg","a24969182430f278a9e966f8aa8ddbac"],["/static/media/qu-overview-icon.02ed8a88.svg","02ed8a8825e29d5464d949ad4ed0a895"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});