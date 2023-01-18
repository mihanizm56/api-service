(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(e,r,t){"use strict";t.d(r,"a",(function(){return m}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(t),m=n,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||s;return t?o.a.createElement(d,u(u({ref:r},c),{},{components:t})):o.a.createElement(d,u({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=f;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<s;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return c}));var n=t(3),o=(t(0),t(291));const s={title:"Get Pure REST request (response structure free)",sidebar_label:"Get"},i={unversionedId:"requests/pure-rest-request/get",id:"version-3.7.x/requests/pure-rest-request/get",isDocsHomePage:!1,title:"Get Pure REST request (response structure free)",description:"`javascript",source:"@site/versioned_docs/version-3.7.x/requests/pure-rest-request/get.md",slug:"/requests/pure-rest-request/get",permalink:"/fetch-api/docs/3.7.x/requests/pure-rest-request/get",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.7.x/requests/pure-rest-request/get.md",version:"3.7.x",sidebar_label:"Get",sidebar:"version-3.7.x/someSidebar",previous:{title:"Delete REST request (response structured)",permalink:"/fetch-api/docs/3.7.x/requests/rest-request/delete"},next:{title:"Post Pure REST request (response structure free)",permalink:"/fetch-api/docs/3.7.x/requests/pure-rest-request/post"}},u=[],a={toc:u};function c(e){let{components:r,...t}=e;return Object(o.a)("wrapper",Object(n.a)({},a,t,{components:r,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { PureRestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const getWhateverRequest = (): Promise<IResponse> =>\n  new PureRestRequest().getRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().required(),\n      info: Joi.object({\n        count: Joi.number().required(),\n        killers: Joi.array().items(\n          Joi.object({\n            username: Joi.string().required(),\n            count: Joi.number().required(),\n          })\n        ),\n      }),\n    }),\n  });\n')))}c.isMDXComponent=!0}}]);