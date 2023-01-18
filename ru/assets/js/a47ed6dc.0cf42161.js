(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{201:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return c}));var n=t(3),o=(t(0),t(291));const s={title:"Delete Pure REST request (response structure free)",sidebar_label:"Delete"},i={unversionedId:"requests/pure-rest-request/delete",id:"version-3.5.x/requests/pure-rest-request/delete",isDocsHomePage:!1,title:"Delete Pure REST request (response structure free)",description:"`javascript",source:"@site/versioned_docs/version-3.5.x/requests/pure-rest-request/delete.md",slug:"/requests/pure-rest-request/delete",permalink:"/fetch-api/ru/docs/3.5.x/requests/pure-rest-request/delete",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.5.x/requests/pure-rest-request/delete.md",version:"3.5.x",sidebar_label:"Delete",sidebar:"version-3.5.x/someSidebar",previous:{title:"Patch Pure REST request (response structure free)",permalink:"/fetch-api/ru/docs/3.5.x/requests/pure-rest-request/patch"},next:{title:"JSON-RPC Request",permalink:"/fetch-api/ru/docs/3.5.x/requests/json-rpc-request/batched"}},u=[],a={toc:u};function c(e){let{components:r,...t}=e;return Object(o.a)("wrapper",Object(n.a)({},a,t,{components:r,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { PureRestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const deleteContractsRequest = (): Promise<IResponse> =>\n  new PureRestRequest().deleteRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().required(),\n      info: Joi.object({\n        count: Joi.number().required(),\n        killers: Joi.array().items(\n          Joi.object({\n            username: Joi.string().required(),\n            count: Joi.number().required(),\n          })\n        ),\n      }),\n    }),\n  });\n')))}c.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||s;return t?o.a.createElement(m,u(u({ref:r},c),{},{components:t})):o.a.createElement(m,u({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<s;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);