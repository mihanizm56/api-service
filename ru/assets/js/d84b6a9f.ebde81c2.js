(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=(r(0),r(291)),a=r(293);const i={title:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},s={unversionedId:"examples/retry-requests",id:"version-3.8.x/examples/retry-requests",isDocsHomePage:!1,title:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",description:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 retry, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u0443\u0434\u0430\u043b\u0441\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.8.x/examples/retry-requests.md",slug:"/examples/retry-requests",permalink:"/fetch-api/ru/docs/3.8.x/examples/retry-requests",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/version-3.8.x/examples/retry-requests.md",version:"3.8.x",sidebar:"version-3.8.x/someSidebar",previous:{title:"\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 \u043e\u0442\u0432\u0435\u0442\u0430",permalink:"/fetch-api/ru/docs/3.8.x/examples/response-progress"},next:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 i18n",permalink:"/fetch-api/ru/docs/3.8.x/examples/translation"}},c=[],u={toc:c};function l(e){let{components:t,...r}=e;return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 retry, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u0443\u0434\u0430\u043b\u0441\u044f."),Object(o.a)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0432 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0442\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435,\n\u0415\u0441\u043b\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441 3-\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 - \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d \u043e\u0442\u0432\u0435\u0442 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (someData): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n    retry: 3,\n  });\n')),Object(o.a)("p",null,"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u043d\u0430\u0442\u044c, \u0447\u0442\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 retry \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d \u043a \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0443 timeoutValue. (\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 ",Object(o.a)(a.a,{to:"./request-timeout",mdxType:"Link"},"\u0442\u0443\u0442"),")"),Object(o.a)("p",null,"|-------timeoutValue--------|"),Object(o.a)("p",null,"|--retry1--retry2--retry3--|"),Object(o.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 extraVerifyRetry - \u044d\u0442\u043e \u043a\u043e\u043b\u043b\u0431\u0435\u043a \u0441 \u0442\u0438\u043f\u043e\u043c \u043e\u0442\u0432\u0435\u0442\u0430 IResponse \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430. \u0422\u0430\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441, \u0435\u0441\u043b\u0438 \u043a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0435 401:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import { RestRequest, IResponse } from "@mihanizm56/fetch-api";\nimport { ExtraVerifyRetryCallbackType } from \'@mihanizm56/fetch-api/dist/types\';\n\nexport const extraVerifyNotAuthRetry: ExtraVerifyRetryCallbackType = ({\n  formattedResponseData: { code, error },\n}) => {\n  if (!error) {\n    return false;\n  }\n\n  if (code === 401) {\n    return false;\n  }\n\n  return true;\n};\n\n\nexport const getWhateverRequest = (someData): Promise<IResponse> =>\n  new RestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      test_string_field: Joi.string().required(),\n    }),\n    retry: 3,\n    extraVerifyRetry: extraVerifyNotAuthRetry,\n  });\n')))}l.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(m,s(s({ref:t},u),{},{components:r})):o.a.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},293:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(10),i=r(292),s=r(8);const c=Object(n.createContext)({collectLink:()=>{}});var u=r(294),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:f,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":y,autoAddBaseUrl:b=!0}=e,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(u.b)(),h=Object(n.useContext)(c),j=p||f,g=Object(i.a)(j),x=null==j?void 0:j.replace("pathname://",""),w=void 0!==x?(R=x,b&&(e=>e.startsWith("/"))(R)?v(R):R):void 0;var R;const k=Object(n.useRef)(!1),P=r?a.e:a.c,E=s.a.canUseIntersectionObserver;let q;Object(n.useEffect)((()=>(!E&&g&&window.docusaurus.prefetch(w),()=>{E&&q&&q.disconnect()})),[w,E,g]);const C=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,N=!w||!g||C;return w&&g&&!C&&!y&&h.collectLink(w),N?o.a.createElement("a",Object.assign({href:w},j&&!g&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(P,Object.assign({},O,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:e=>{var t,r;E&&e&&g&&(t=e,r=()=>{window.docusaurus.prefetch(w)},q=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(q.unobserve(t),q.disconnect(),r())}))})),q.observe(t))},to:w||""},r&&{isActive:m,activeClassName:d}))}},294:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(292);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;const s=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+s:s}(t,e,r,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:r}=a();return r(e,t)}}}]);