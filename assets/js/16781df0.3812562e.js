(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{291:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},292:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},293:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),i=a(292),l=a(8);const c=Object(n.createContext)({collectLink:()=>{}});var s=a(294),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:d,activeClassName:b,isActive:m,"data-noBrokenLinkCheck":O,autoAddBaseUrl:j=!0}=e,f=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),N=Object(n.useContext)(c),h=p||d,y=Object(i.a)(h),v=null==h?void 0:h.replace("pathname://",""),w=void 0!==v?(C=v,j&&(e=>e.startsWith("/"))(C)?g(C):C):void 0;var C;const k=Object(n.useRef)(!1),P=a?o.e:o.c,x=l.a.canUseIntersectionObserver;let q;Object(n.useEffect)((()=>(!x&&y&&window.docusaurus.prefetch(w),()=>{x&&q&&q.disconnect()})),[w,x,y]);const T=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,E=!w||!y||T;return w&&y&&!T&&!O&&N.collectLink(w),E?r.a.createElement("a",Object.assign({href:w},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(P,Object.assign({},f,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:e=>{var t,a;x&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(w)},q=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(q.unobserve(t),q.disconnect(),a())}))})),q.observe(t))},to:w||""},a&&{isActive:m,activeClassName:b}))}},294:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(16),r=a(292);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+l:l}(t,e,a,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:a}=o();return a(e,t)}},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=(a(0),a(291)),o=a(293);const i={title:"API"},l={unversionedId:"api",id:"version-3.9.x/api",isDocsHomePage:!1,title:"API",description:"Request input options:",source:"@site/versioned_docs/version-3.9.x/api.md",slug:"/api",permalink:"/fetch-api/docs/api",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.9.x/api.md",version:"3.9.x"},c=[{value:"Request input options:",id:"request-input-options",children:[{value:"Also consists of a lot of default fetch options (headers, mode, etc), see <Link to='https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch'>api docs</Link>",id:"also-consists-of-a-lot-of-default-fetch-options-headers-mode-etc-see-api-docs",children:[]}]},{value:"Request output options:",id:"request-output-options",children:[]}],s={toc:c};function u(e){let{components:t,...a}=e;return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"request-input-options"},"Request input options:"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",{parentName:"tr",align:null},"Name"),Object(r.a)("th",{parentName:"tr",align:null},"Type"),Object(r.a)("th",{parentName:"tr",align:null},"Comments"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"endpoint"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"string")),Object(r.a)("td",{parentName:"tr",align:null},"the request url")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"responseSchema"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"joi schema")),Object(r.a)("td",{parentName:"tr",align:null},"the response Schema that parsed by joi (you must use the joi in your project and insert the response Schema into this field)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"body"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"<YourType>")),Object(r.a)("td",{parentName:"tr",align:null},"the request body")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"queryParams"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"Record<string,any>")),Object(r.a)("td",{parentName:"tr",align:null},"the object with the query parameters (they will be serialized automatically)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"translateFunction"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"(key,options) => string")),Object(r.a)("td",{parentName:"tr",align:null},"function that will be called with error text key and params (key, params)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"isErrorTextStraightToOutput"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"boolean")),Object(r.a)("td",{parentName:"tr",align:null},'flag not to prepare error text value - it goes straight from backend ("errorText" if REST and "message" if JSON-RPC)')),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"extraValidationCallback"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"(response:<YourType>)=>boolean")),Object(r.a)("td",{parentName:"tr",align:null},"callback that can be used for custom response data validation or if you don't want to use joi")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"customTimeout"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"number")),Object(r.a)("td",{parentName:"tr",align:null},'milliseconds for cancel the request on timeout (or a full package of requests if the "retry" parameter is activated)')),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"retry"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"number")),Object(r.a)("td",{parentName:"tr",align:null},"number of requests try to request if the response is negative")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"pureJsonFileResponse"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"boolean")),Object(r.a)("td",{parentName:"tr",align:null},"removes any additional headers from request to make it possible to fetch the original json file (availiable only for PureRestRequest)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"ignoreResponseIdCompare"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"boolean")),Object(r.a)("td",{parentName:"tr",align:null},"ignores id comparison in json-rpc requests")))),Object(r.a)("h3",{id:"also-consists-of-a-lot-of-default-fetch-options-headers-mode-etc-see-api-docs"},"Also consists of a lot of default fetch options (headers, mode, etc), see ",Object(r.a)(o.a,{to:"https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch",mdxType:"Link"},"api docs")),Object(r.a)("h2",{id:"request-output-options"},"Request output options:"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",{parentName:"tr",align:null},"Name"),Object(r.a)("th",{parentName:"tr",align:null},"Type"),Object(r.a)("th",{parentName:"tr",align:null},"Comments"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"error"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"boolean")),Object(r.a)("td",{parentName:"tr",align:null},"flag if the request successful")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"errorText"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"string")),Object(r.a)("td",{parentName:"tr",align:null},"main text of the error (can be translated)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"data"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"<YourType>")),Object(r.a)("td",{parentName:"tr",align:null},"response data")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"additionalErrors"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"any")),Object(r.a)("td",{parentName:"tr",align:null},"additional error data from backend")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"code"),Object(r.a)("td",{parentName:"tr",align:null},Object(r.a)("inlineCode",{parentName:"td"},"number")),Object(r.a)("td",{parentName:"tr",align:null},"response code number,always less than 501")))))}u.isMDXComponent=!0}}]);