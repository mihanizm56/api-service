(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r(3),o=(r(0),r(291));const s={title:"Get Pure REST request (response structure free)",sidebar_label:"Get"},u={unversionedId:"requests/pure-rest-request/get",id:"requests/pure-rest-request/get",isDocsHomePage:!1,title:"Get Pure REST request (response structure free)",description:"`javascript",source:"@site/docs/requests/pure-rest-request/get.md",slug:"/requests/pure-rest-request/get",permalink:"/fetch-api/docs/next/requests/pure-rest-request/get",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/docs/requests/pure-rest-request/get.md",version:"current",sidebar_label:"Get",sidebar:"someSidebar",previous:{title:"Delete REST request (response structured)",permalink:"/fetch-api/docs/next/requests/rest-request/delete"},next:{title:"Post Pure REST request (response structure free)",permalink:"/fetch-api/docs/next/requests/pure-rest-request/post"}},i=[],a={toc:i};function c(e){let{components:t,...r}=e;return Object(o.a)("wrapper",Object(n.a)({},a,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { PureRestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (): Promise<IResponse> =>\n  new PureRestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().required(),\n      info: Joi.object({\n        count: Joi.number().required(),\n        killers: Joi.array().items(\n          Joi.object({\n            username: Joi.string().required(),\n            count: Joi.number().required(),\n          })\n        ),\n      }),\n    }),\n  });\n')))}c.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||s;return r?o.a.createElement(d,i(i({ref:t},c),{},{components:r})):o.a.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,u=new Array(s);u[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<s;c++)u[c]=r[c];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);