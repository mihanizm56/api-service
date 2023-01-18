(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=(r(0),r(291)),a=r(293);const i={title:"Request Timeout"},s={unversionedId:"examples/request-timeout",id:"version-3.5.x/examples/request-timeout",isDocsHomePage:!1,title:"Request Timeout",description:"You can use request timeout. The default value is 60 seconds.",source:"@site/versioned_docs/version-3.5.x/examples/request-timeout.md",slug:"/examples/request-timeout",permalink:"/fetch-api/docs/3.5.x/examples/request-timeout",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.5.x/examples/request-timeout.md",version:"3.5.x",sidebar:"version-3.5.x/someSidebar",previous:{title:"Browser Support and Compilation",permalink:"/fetch-api/docs/3.5.x/examples/browser-support"}},c=[],u={toc:c};function l(e){let{components:t,...r}=e;return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"You can use request timeout. The default value is 60 seconds."),Object(o.a)("p",null,"There is a race between request and default error response and if timeout is gone - the default error response wins and you will get is as the result."),Object(o.a)("p",null,"You need to know that the customTimeout parameter is binded with retry parameter (see ",Object(o.a)(a.a,{to:"/docs/examples/request-timeout",mdxType:"Link"},"timeoutValue example"),")"),Object(o.a)("p",null,"|-------timeoutValue--------|"),Object(o.a)("p",null,"|--retry1--retry2--retry3--|"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (someData): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      test_string_field: Joi.string().required(),\n    }),\n    customTimeout: 30000, // 30 seconds\n  });\n')))}l.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(m,s(s({ref:t},u),{},{components:r})):o.a.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},293:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(10),i=r(292),s=r(8);const c=Object(n.createContext)({collectLink:()=>{}});var u=r(294),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:f,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":b,autoAddBaseUrl:v=!0}=e,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(u.b)(),h=Object(n.useContext)(c),w=p||f,j=Object(i.a)(w),g=null==w?void 0:w.replace("pathname://",""),x=void 0!==g?(k=g,v&&(e=>e.startsWith("/"))(k)?y(k):k):void 0;var k;const P=Object(n.useRef)(!1),q=r?a.e:a.c,T=s.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!T&&j&&window.docusaurus.prefetch(x),()=>{T&&E&&E.disconnect()})),[x,T,j]);const C=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,R=!x||!j||C;return x&&j&&!C&&!b&&h.collectLink(x),R?o.a.createElement("a",Object.assign({href:x},w&&!j&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(q,Object.assign({},O,{onMouseEnter:()=>{P.current||(window.docusaurus.preload(x),P.current=!0)},innerRef:e=>{var t,r;T&&e&&j&&(t=e,r=()=>{window.docusaurus.prefetch(x)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:x||""},r&&{isActive:m,activeClassName:d}))}},294:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(292);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;const s=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+s:s}(t,e,r,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:r}=a();return r(e,t)}}}]);