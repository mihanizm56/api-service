(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=(r(0),r(291));const a={title:"Patch \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",sidebar_label:"Patch"},i={unversionedId:"requests/rest-request/patch",id:"version-3.7.x/requests/rest-request/patch",isDocsHomePage:!1,title:"Patch \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",description:"`javascript",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.7.x/requests/rest-request/patch.md",slug:"/requests/rest-request/patch",permalink:"/fetch-api/ru/docs/3.7.x/requests/rest-request/patch",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/version-3.7.x/requests/rest-request/patch.md",version:"3.7.x",sidebar_label:"Patch",sidebar:"version-3.7.x/someSidebar",previous:{title:"Put \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",permalink:"/fetch-api/ru/docs/3.7.x/requests/rest-request/put"},next:{title:"Delete \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",permalink:"/fetch-api/ru/docs/3.7.x/requests/rest-request/delete"}},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return Object(o.a)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const patchContractsRequest = (): Promise<IResponse> =>\n  new RestRequest().patchRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().required(),\n      info: Joi.object({\n        count: Joi.number().required(),\n        killers: Joi.array().items(\n          Joi.object({\n            username: Joi.string().required(),\n            count: Joi.number().required(),\n          })\n        ),\n      }),\n    }),\n  });\n')))}u.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||a;return r?o.a.createElement(d,s(s({ref:t},u),{},{components:r})):o.a.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);