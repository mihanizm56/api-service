(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{228:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),o=(n(0),n(291));const a={title:"Logging"},i={unversionedId:"examples/logging",id:"version-3.9.x/examples/logging",isDocsHomePage:!1,title:"Logging",description:"If the request fails (browser/node fail or the response not success),",source:"@site/versioned_docs/version-3.9.x/examples/logging.md",slug:"/examples/logging",permalink:"/fetch-api/docs/examples/logging",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.9.x/examples/logging.md",version:"3.9.x",sidebar:"version-3.9.x/someSidebar",previous:{title:"Cancelling requests",permalink:"/fetch-api/docs/examples/cancel-requests"},next:{title:"Query params",permalink:"/fetch-api/docs/examples/query-params"}},s=[],c={toc:s};function p(e){let{components:r,...n}=e;return Object(o.a)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(o.a)("p",null,"If the request fails (browser/node fail or the response not success),\nlibrary will show the groupped information in console."),Object(o.a)("p",null,"In code it's just:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"type ParamsType = {\n    endpoint: string;\n    errorRequestMessage: string;\n    fetchBody?: any;\n};\n\nexport const makeErrorRequestLogs = ({\n    endpoint,\n    errorRequestMessage,\n    fetchBody,\n}: ParamsType) => {\n    console.error('(fetch-api): get error in the request', endpoint);\n    console.group('Show error data');\n    console.error('(fetch-api): message:', errorRequestMessage);\n    console.error('(fetch-api): endpoint:', endpoint);\n    console.error('(fetch-api): body params:', fetchBody);\n    console.groupEnd();\n};\n")))}p.isMDXComponent=!0},291:function(e,r,n){"use strict";n.d(r,"a",(function(){return g}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),g=t,d=f["".concat(i,".").concat(g)]||f[g]||u[g]||a;return n?o.a.createElement(d,s(s({ref:r},p),{},{components:n})):o.a.createElement(d,s({ref:r},p))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);