(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=(r(0),r(291));const o={title:"3.8.0",author:"Mikhail Kozhevnikov",author_title:"Creator of @mihanizm56/fetch-api",author_url:"https://github.com/mihanizm56",author_image_url:"https://sun9-22.userapi.com/impg/Kvzg_k86vRoOrdUCRDePaOHuT7ZtWW1Urv54vQ/FxLBIhnYT2E.jpg?size=1620x2160&quality=96&sign=dfd21e746d92dc31445de5f6fecfc8db&type=album",tags:["@mihanizm56","@mihanizm56/fetch-api","fetch-api"],description:"@mihanizm56/fetch-api release notes"},i={permalink:"/fetch-api/blog/2021/07/07/release",source:"@site/blog/2021-07-7-release.md",description:"@mihanizm56/fetch-api release notes",date:"2021-07-07T00:00:00.000Z",formattedDate:"July 7, 2021",tags:[{label:"@mihanizm56",permalink:"/fetch-api/blog/tags/mihanizm-56"},{label:"@mihanizm56/fetch-api",permalink:"/fetch-api/blog/tags/mihanizm-56-fetch-api"},{label:"fetch-api",permalink:"/fetch-api/blog/tags/fetch-api"}],title:"3.8.0",readingTime:.3,truncated:!0,prevItem:{title:"3.8.3",permalink:"/fetch-api/blog/2021/08/16/release"},nextItem:{title:"3.7.4",permalink:"/fetch-api/blog/2021/06/01/release"}},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return Object(a.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"Released v3.8.0"),Object(a.a)("h4",{id:"features"},"Features"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"Add responded headers in IResponse interface")),Object(a.a)("h4",{id:"bugfix"},"Bugfix"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"Upgrade RestRequest base format validation check")),Object(a.a)("p",null,"1) Now you can get your response headers!\n",Object(a.a)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers"},"See info about how to expose headers to frontend apps")," "),Object(a.a)("p",null,"2) RestRequest throw the error if base response format (error, errorText, additionalErrors, data) is not valid (see doc and lib types) "))}p.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);