(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return c}));var n=r(3),o=(r(0),r(291));const s={title:"Post REST request (response structured)",sidebar_label:"Post"},i={unversionedId:"requests/rest-request/post",id:"version-3.7.x/requests/rest-request/post",isDocsHomePage:!1,title:"Post REST request (response structured)",description:"`javascript",source:"@site/versioned_docs/version-3.7.x/requests/rest-request/post.md",slug:"/requests/rest-request/post",permalink:"/fetch-api/docs/3.7.x/requests/rest-request/post",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.7.x/requests/rest-request/post.md",version:"3.7.x",sidebar_label:"Post",sidebar:"version-3.7.x/someSidebar",previous:{title:"Get REST request (response structured)",permalink:"/fetch-api/docs/3.7.x/requests/rest-request/get"},next:{title:"Put REST request (response structured)",permalink:"/fetch-api/docs/3.7.x/requests/rest-request/put"}},a=[],u={toc:a};function c(e){let{components:t,...r}=e;return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const postContractsRequest = (): Promise<IResponse> =>\n  new RestRequest().postRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().required(),\n      info: Joi.object({\n        count: Joi.number().required(),\n        killers: Joi.array().items(\n          Joi.object({\n            username: Joi.string().required(),\n            count: Joi.number().required(),\n          })\n        ),\n      }),\n    }),\n  });\n')))}c.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||l[d]||s;return r?o.a.createElement(m,a(a({ref:t},c),{},{components:r})):o.a.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);