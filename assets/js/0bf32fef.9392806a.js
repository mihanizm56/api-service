(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{291:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},292:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},293:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(292),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(294),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:d,href:p,activeClassName:b,isActive:m,"data-noBrokenLinkCheck":h,autoAddBaseUrl:f=!0}=e,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),j=Object(r.useContext)(l),v=d||p,N=Object(i.a)(v),w=null==v?void 0:v.replace("pathname://",""),y=void 0!==w?(k=w,f&&(e=>e.startsWith("/"))(k)?g(k):k):void 0;var k;const x=Object(r.useRef)(!1),C=a?c.e:c.c,q=o.a.canUseIntersectionObserver;let P;Object(r.useEffect)((()=>(!q&&N&&window.docusaurus.prefetch(y),()=>{q&&P&&P.disconnect()})),[y,q,N]);const T=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,L=!y||!N||T;return y&&N&&!T&&!h&&j.collectLink(y),L?n.a.createElement("a",Object.assign({href:y},v&&!N&&{target:"_blank",rel:"noopener noreferrer"},O)):n.a.createElement(C,Object.assign({},O,{onMouseEnter:()=>{x.current||(window.docusaurus.preload(y),x.current=!0)},innerRef:e=>{var t,a;q&&e&&N&&(t=e,a=()=>{window.docusaurus.prefetch(y)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),a())}))})),P.observe(t))},to:y||""},a&&{isActive:m,activeClassName:b}))}},294:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(16),n=a(292);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,r){let{forcePrependBaseUrl:c=!1,absolute:i=!1}=void 0===r?{}:r;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,r)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:a}=c();return a(e,t)}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=(a(0),a(291)),c=a(293);const i={title:"Browser caching"},o={unversionedId:"examples/browser-caching",id:"examples/browser-caching",isDocsHomePage:!1,title:"Browser caching",description:"You can define cache strategy for each request individually. This feature is using The Cache Storage Api",source:"@site/docs/examples/browser-caching.md",slug:"/examples/browser-caching",permalink:"/fetch-api/docs/next/examples/browser-caching",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/docs/examples/browser-caching.md",version:"current",sidebar:"someSidebar",previous:{title:"Request caching",permalink:"/fetch-api/docs/next/examples/caching"}},l=[{value:"Define cache params",id:"define-cache-params",children:[]},{value:"Cache strategies",id:"cache-strategies",children:[{value:"<Link to='https://developer.chrome.com/docs/workbox/caching-strategies-overview/#cache-first-falling-back-to-network'>CacheFirst</Link>",id:"cachefirst",children:[]},{value:"<Link to='https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate'>StaleWhileRevalidate</Link>",id:"stalewhilerevalidate",children:[]},{value:"<Link to='https://developer.chrome.com/docs/workbox/caching-strategies-overview/#network-first-falling-back-to-cache'>NetworkFirst</Link>",id:"networkfirst",children:[]}]},{value:"Parameters",id:"parameters",children:[]}],s={toc:l};function u(e){let{components:t,...a}=e;return Object(n.a)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.a)("p",null,"You can define cache strategy for each request individually. This feature is using ",Object(n.a)(c.a,{to:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage",mdxType:"Link"},"The Cache Storage Api")),Object(n.a)("h2",{id:"define-cache-params"},"Define cache params"),Object(n.a)("pre",null,Object(n.a)("code",{parentName:"pre",className:"language-javascript"},'import { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (someData): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n    // here we define params for browser caching\n    browserCacheParams: {\n      strategy: \'StaleWhileRevalidate\',\n      requestCacheKey: `some request cache key`,\n      storageCacheName: `some storage name`,\n      expires: 1000 * 60 * 60 * 24 * 365, // 1 year,\n      debug: true,\n    },\n  });\n')),Object(n.a)("h2",{id:"cache-strategies"},"Cache strategies"),Object(n.a)("p",null,"You can read about strategies ",Object(n.a)(c.a,{to:"https://developer.chrome.com/docs/workbox/reference/workbox-strategies",mdxType:"Link"},"here")," but you should understand that we have a fetch-api library instead of a service worker in the scheme"),Object(n.a)("h3",{id:"cachefirst"},Object(n.a)(c.a,{to:"https://developer.chrome.com/docs/workbox/caching-strategies-overview/#cache-first-falling-back-to-network",mdxType:"Link"},"CacheFirst")),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"If found not expired value in cache - then return it"),Object(n.a)("li",{parentName:"ul"},"Make request and save to cache if expired or not exists")),Object(n.a)("h3",{id:"stalewhilerevalidate"},Object(n.a)(c.a,{to:"https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate",mdxType:"Link"},"StaleWhileRevalidate")),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"If found not expired value in cache  - then return it"),Object(n.a)("li",{parentName:"ul"},"And after return from cache - make request and update cache")),Object(n.a)("h3",{id:"networkfirst"},Object(n.a)(c.a,{to:"https://developer.chrome.com/docs/workbox/caching-strategies-overview/#network-first-falling-back-to-cache",mdxType:"Link"},"NetworkFirst")),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Always make the request"),Object(n.a)("li",{parentName:"ul"},"If error - try to get from cache if not expires "),Object(n.a)("li",{parentName:"ul"},"If success - update the cache"),Object(n.a)("li",{parentName:"ul"},"If timeout provided - after timeout tries to take cached value")),Object(n.a)("h2",{id:"parameters"},"Parameters"),Object(n.a)("table",null,Object(n.a)("thead",{parentName:"table"},Object(n.a)("tr",{parentName:"thead"},Object(n.a)("th",{parentName:"tr",align:null},"Name"),Object(n.a)("th",{parentName:"tr",align:null},"Type"),Object(n.a)("th",{parentName:"tr",align:null},"Comments"))),Object(n.a)("tbody",{parentName:"table"},Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"disabledCache"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"boolean")),Object(n.a)("td",{parentName:"tr",align:null},"disabled cache")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"strategy"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"NetworkFirst, StaleWhileRevalidate, CacheFirst")),Object(n.a)("td",{parentName:"tr",align:null},"strategy for the request")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"requestCacheKey"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",{parentName:"tr",align:null},"main request cache key")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"storageCacheName"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",{parentName:"tr",align:null},"main request storage key")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"expires"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"number")),Object(n.a)("td",{parentName:"tr",align:null},"time in ms for the request cache to be expired")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"expiresToDate"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"number")),Object(n.a)("td",{parentName:"tr",align:null},"time in ms for the request cache to be expired to the selected date only")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"timeout"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"number")),Object(n.a)("td",{parentName:"tr",align:null},"timeout for request - if it is out - the cached previos result will be given (only NetworkFirst strategy has this feature)")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"onUpdateCache"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"function")),Object(n.a)("td",{parentName:"tr",align:null},"callback is called if cache was updated")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"onRequestError"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"function")),Object(n.a)("td",{parentName:"tr",align:null},"callback is called if the request has an error")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"debug"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"boolean")),Object(n.a)("td",{parentName:"tr",align:null},"flag for logging in the browser developer tools")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",{parentName:"tr",align:null},"minAllowedQuota"),Object(n.a)("td",{parentName:"tr",align:null},Object(n.a)("inlineCode",{parentName:"td"},"number")),Object(n.a)("td",{parentName:"tr",align:null},"min request cache allowed quota in cache-storage")))))}u.isMDXComponent=!0}}]);