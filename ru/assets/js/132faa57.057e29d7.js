(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},293:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),c=n(292),i=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(294),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:f,activeClassName:d,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:v=!0}=e,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(u.b)(),h=Object(r.useContext)(s),j=p||f,w=Object(c.a)(j),g=null==j?void 0:j.replace("pathname://",""),x=void 0!==g?(E=g,v&&(e=>e.startsWith("/"))(E)?y(E):E):void 0;var E;const k=Object(r.useRef)(!1),P=n?a.e:a.c,R=i.a.canUseIntersectionObserver;let T;Object(r.useEffect)((()=>(!R&&w&&window.docusaurus.prefetch(x),()=>{R&&T&&T.disconnect()})),[x,R,w]);const C=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,N=!x||!w||C;return x&&w&&!C&&!m&&h.collectLink(x),N?o.a.createElement("a",Object.assign({href:x},j&&!w&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(P,Object.assign({},O,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:e=>{var t,n;R&&e&&w&&(t=e,n=()=>{window.docusaurus.prefetch(x)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:x||""},n&&{isActive:b,activeClassName:d}))}},294:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(16),o=n(292);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:a=!1,absolute:c=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,r)}}function c(e,t){void 0===t&&(t={});const{withBaseUrl:n}=a();return n(e,t)}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(291)),a=n(293);const c={title:"\u0415\u0434\u0438\u043d\u044b\u0439 \u0442\u0438\u043f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043e\u0442\u0432\u0435\u0442\u0430"},i={unversionedId:"examples/one-interface",id:"version-3.8.x/examples/one-interface",isDocsHomePage:!1,title:"\u0415\u0434\u0438\u043d\u044b\u0439 \u0442\u0438\u043f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043e\u0442\u0432\u0435\u0442\u0430",description:"\u0412\u0441\u0435 \u0442\u0438\u043f\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0435\u0434\u0438\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.8.x/examples/one-interface.md",slug:"/examples/one-interface",permalink:"/fetch-api/ru/docs/3.8.x/examples/one-interface",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/version-3.8.x/examples/one-interface.md",version:"3.8.x",sidebar:"version-3.8.x/someSidebar",previous:{title:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",permalink:"/fetch-api/ru/docs/3.8.x/examples/validations"},next:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",permalink:"/fetch-api/ru/docs/3.8.x/examples/error-catching"}},s=[],u={toc:s};function l(e){let{components:t,...n}=e;return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u0412\u0441\u0435 \u0442\u0438\u043f\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0435\u0434\u0438\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"),Object(o.a)("p",null,"(errorText \u043f\u043e\u043b\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e ",Object(o.a)(a.a,{to:"./translation",mdxType:"Link"},"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440"),")"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from "@mihanizm56/fetch-api";\n\nexport const createWhateverRequest = (someData) =>\n  new RestRequest().postRequest({\n    endpoint: "http://localhost:3000",\n    body: someData\n  });\n);\n\nconst someFunction = async () => {\n    const response = await createWhateverRequest(someData);\n\n    const {data, error, errorText, additionalErrors, code} = response\n\n    // \u041e\u0442\u0432\u0435\u0442 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0437 \u0441\u0435\u0431\u044f \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043f\u043e\u043b\u044f\u043c\u0438:\n    // data - \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u0430 (\u043e\u0431\u044a\u0435\u043a\u0442, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u043e\u0448\u0451\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e - null)\n    // error - \u0444\u043b\u0430\u0433 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438 (\u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f boolean)\n    // errorText - \u0442\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 (\u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439)\n    // additionalErrors - \u043b\u044e\u0431\u044b\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0431\u0435\u043a\u0435\u043d\u0434\u0430 (\u0434\u043b\u044f PureRestRequest \u044d\u0442\u043e \u0432\u0435\u0441\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u0434\u043b\u044f JSONRPCRequest \u044d\u0442\u043e \u043f\u043e\u043b\u0435 "errors.data" \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430)\n    // code - \u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438, \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0440\u043e\u043a\u0430\n    // \u0415\u0441\u043b\u0438 \u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c 500 - \u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0430\u0440\u0441\u0438\u0442\u044c\u0441\u044f, \u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u0434\u0430\u043d \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438 500 \u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043a\u0438\n    //  \u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u043a\u043b\u0438\u0435\u043d\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0444\u0444\u043b\u0430\u0439\u043d - \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u043e\u0434 600 \u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0435\u0433\u043e \u043a\u0430\u043a \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e (\u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u043e\u0444\u0444\u043b\u0430\u0439\u043d-\u0440\u0435\u0436\u0438\u043c\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f)\n}\n')))}l.isMDXComponent=!0}}]);