(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=(r(0),r(291));const i={title:"3.7.4",author:"Mikhail Kozhevnikov",author_title:"Creator of @mihanizm56/fetch-api",author_url:"https://github.com/mihanizm56",author_image_url:"https://sun9-22.userapi.com/impg/Kvzg_k86vRoOrdUCRDePaOHuT7ZtWW1Urv54vQ/FxLBIhnYT2E.jpg?size=1620x2160&quality=96&sign=dfd21e746d92dc31445de5f6fecfc8db&type=album",tags:["@mihanizm56","@mihanizm56/fetch-api","fetch-api"],description:"@mihanizm56/fetch-api release notes"},o={permalink:"/fetch-api/blog/2021/06/01/release",source:"@site/blog/2021-06-1-release.md",description:"@mihanizm56/fetch-api release notes",date:"2021-06-01T00:00:00.000Z",formattedDate:"June 1, 2021",tags:[{label:"@mihanizm56",permalink:"/fetch-api/blog/tags/mihanizm-56"},{label:"@mihanizm56/fetch-api",permalink:"/fetch-api/blog/tags/mihanizm-56-fetch-api"},{label:"fetch-api",permalink:"/fetch-api/blog/tags/fetch-api"}],title:"3.7.4",readingTime:.19,truncated:!0,prevItem:{title:"3.8.0",permalink:"/fetch-api/blog/2021/07/07/release"},nextItem:{title:"3.7.2",permalink:"/fetch-api/blog/2021/04/16/release"}},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return Object(a.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"Released v3.7.4\nBugfix - with no features and breaking changes"),Object(a.a)("p",null,"Fix batch in JSONRPCRequest - you will always get sorted response array by ids. Also fix problem if the response not sorted by ids from the backend "))}p.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,b=s["".concat(o,".").concat(m)]||s[m]||f[m]||i;return r?a.a.createElement(b,c(c({ref:t},p),{},{components:r})):a.a.createElement(b,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);