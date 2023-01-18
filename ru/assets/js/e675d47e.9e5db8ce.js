(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{267:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return p}));var t=n(3),o=(n(0),n(291));const a={title:"\u041b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u0447\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},c={unversionedId:"examples/logging",id:"version-3.9.x/examples/logging",isDocsHomePage:!1,title:"\u041b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u0447\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",description:"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e - \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.9.x/examples/logging.md",slug:"/examples/logging",permalink:"/fetch-api/ru/docs/examples/logging",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/version-3.9.x/examples/logging.md",version:"3.9.x",sidebar:"version-3.9.x/someSidebar",previous:{title:"\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",permalink:"/fetch-api/ru/docs/examples/cancel-requests"},next:{title:"Query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",permalink:"/fetch-api/ru/docs/examples/query-params"}},i=[],s={toc:i};function p(e){let{components:r,...n}=e;return Object(o.a)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e - \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'type ParamsType = {\n  endpoint: string,\n  errorRequestMessage: string,\n  fetchBody?: any,\n};\n\nexport const makeErrorRequestLogs = ({\n  endpoint,\n  errorRequestMessage,\n  fetchBody,\n}: ParamsType) => {\n  console.error("(fetch-api): get error in the request", endpoint);\n\n  console.group("Show error data");\n  console.error("(fetch-api): message:", errorRequestMessage);\n  console.error("(fetch-api): endpoint:", endpoint);\n  console.error("(fetch-api): body params:", fetchBody);\n  console.groupEnd();\n};\n')))}p.isMDXComponent=!0},291:function(e,r,n){"use strict";n.d(r,"a",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=t,g=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return n?o.a.createElement(g,i(i({ref:r},p),{},{components:n})):o.a.createElement(g,i({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);