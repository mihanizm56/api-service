(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(291)),a=n(293);const s={title:"\u0418\u0437\u043e\u043c\u043e\u0440\u0444\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b"},c={unversionedId:"examples/universal-requests",id:"version-3.9.x/examples/universal-requests",isDocsHomePage:!1,title:"\u0418\u0437\u043e\u043c\u043e\u0440\u0444\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b",description:"\u0412\u0441\u0435 \u0442\u0438\u043f\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 Node.js",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.9.x/examples/universal-requests.md",slug:"/examples/universal-requests",permalink:"/fetch-api/ru/docs/examples/universal-requests",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/version-3.9.x/examples/universal-requests.md",version:"3.9.x",sidebar:"version-3.9.x/someSidebar",previous:{title:"JSON-RPC \u0437\u0430\u043f\u0440\u043e\u0441\u044b",permalink:"/fetch-api/ru/docs/requests/json-rpc-request/regular"},next:{title:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",permalink:"/fetch-api/ru/docs/examples/validations"}},i=[{value:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",id:"\u0431\u0440\u0430\u0443\u0437\u0435\u0440",children:[]},{value:"Node.js",id:"nodejs",children:[]}],u={toc:i};function l(e){let{components:t,...n}=e;return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u0412\u0441\u0435 \u0442\u0438\u043f\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 Node.js"),Object(o.a)("p",null,"\u042d\u0442\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c window.fetch \u0438 ",Object(o.a)(a.a,{to:"https://github.com/node-fetch/node-fetch",mdxType:"Link"},"node-fetch"),", \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f Node.js \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435."),Object(o.a)("h3",{id:"\u0431\u0440\u0430\u0443\u0437\u0435\u0440"},"\u0411\u0440\u0430\u0443\u0437\u0435\u0440"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n  });\n')),Object(o.a)("h3",{id:"nodejs"},"Node.js"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'const { RestRequest, IResponse } = require("@mihanizm56/fetch-api");\n\nmodule.exports.getWhateverRequest = (): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n  });\n')),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u0438\u043b\u0438 .mjs \u0444\u0430\u0439\u043b\u044b \u0432 \u0441\u0440\u0435\u0434\u0435 Node.js - \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n  });\n')))}l.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},293:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),s=n(292),c=n(8);const i=Object(r.createContext)({collectLink:()=>{}});var u=n(294),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:f,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":b,autoAddBaseUrl:v=!0}=e,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(u.b)(),j=Object(r.useContext)(i),g=p||f,y=Object(s.a)(g),w=null==g?void 0:g.replace("pathname://",""),x=void 0!==w?(R=w,v&&(e=>e.startsWith("/"))(R)?h(R):R):void 0;var R;const q=Object(r.useRef)(!1),N=n?a.e:a.c,P=c.a.canUseIntersectionObserver;let k;Object(r.useEffect)((()=>(!P&&y&&window.docusaurus.prefetch(x),()=>{P&&k&&k.disconnect()})),[x,P,y]);const E=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,C=!x||!y||E;return x&&y&&!E&&!b&&j.collectLink(x),C?o.a.createElement("a",Object.assign({href:x},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(N,Object.assign({},O,{onMouseEnter:()=>{q.current||(window.docusaurus.preload(x),q.current=!0)},innerRef:e=>{var t,n;P&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(x)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:x||""},n&&{isActive:m,activeClassName:d}))}},294:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(16),o=n(292);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:a=!1,absolute:s=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(t,e,n,r)}}function s(e,t){void 0===t&&(t={});const{withBaseUrl:n}=a();return n(e,t)}}}]);