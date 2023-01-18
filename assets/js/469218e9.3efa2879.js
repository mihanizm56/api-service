(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(291)),a=n(293);const i={title:"One interface for all types of requests"},s={unversionedId:"examples/one-interface",id:"version-3.6.x/examples/one-interface",isDocsHomePage:!1,title:"One interface for all types of requests",description:"All request types provide the same interface to get data from them",source:"@site/versioned_docs/version-3.6.x/examples/one-interface.md",slug:"/examples/one-interface",permalink:"/fetch-api/docs/3.6.x/examples/one-interface",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.6.x/examples/one-interface.md",version:"3.6.x",sidebar:"version-3.6.x/someSidebar",previous:{title:"Validations",permalink:"/fetch-api/docs/3.6.x/examples/validations"},next:{title:"Errors catching",permalink:"/fetch-api/docs/3.6.x/examples/error-catching"}},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"All request types provide the same interface to get data from them"),Object(o.a)("p",null,"(errorText field can be translated inside the Request function, see ",Object(o.a)(a.a,{to:"/docs/examples/translation",mdxType:"Link"},"example"),")"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from "@mihanizm56/fetch-api";\n\nexport const createWhateverRequest = (someData) =>\n  new RestRequest().postRequest({\n    endpoint: "http://localhost:3000",\n    body: someData,\n    abortRequestId: \'1\',\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),\n    }),\n  });\n);\n\nconst someFunction = async () => {\n    const response = await createWhateverRequest(someData)\n\n    // The response will be an object with fields:\n    // data - reponse data\n    // error - boolean flag to check if the response not success\n    // errorText - text of an error\n    // additionalErrors - any type of additional data from the backend (for PureRestRequest it is an object with all responded error data, for JSONRPCRequest it is field "errors.data" in the response)\n    // code - response code number\n    // if the browser gets code 501 and more then you will get the error response with 500 code and browser will not try to parse and validate responded data\n    // if you are offline - you will get 600 and you are able to do smth with that code for you offline-mode\n}\n')))}u.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},293:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),i=n(292),s=n(8);const c=Object(r.createContext)({collectLink:()=>{}});var l=n(294),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:f,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":b,autoAddBaseUrl:v=!0}=e,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),O=Object(r.useContext)(c),w=p||f,g=Object(i.a)(w),j=null==w?void 0:w.replace("pathname://",""),x=void 0!==j?(E=j,v&&(e=>e.startsWith("/"))(E)?y(E):E):void 0;var E;const k=Object(r.useRef)(!1),R=n?a.e:a.c,P=s.a.canUseIntersectionObserver;let T;Object(r.useEffect)((()=>(!P&&g&&window.docusaurus.prefetch(x),()=>{P&&T&&T.disconnect()})),[x,P,g]);const q=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,C=!x||!g||q;return x&&g&&!q&&!b&&O.collectLink(x),C?o.a.createElement("a",Object.assign({href:x},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(R,Object.assign({},h,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:e=>{var t,n;P&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(x)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:x||""},n&&{isActive:m,activeClassName:d}))}},294:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(292);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,r)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=a();return n(e,t)}}}]);