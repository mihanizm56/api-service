(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{291:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?o.a.createElement(m,a(a({ref:t},c),{},{components:r})):o.a.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return c}));var n=r(3),o=(r(0),r(291));const i={title:"Delete \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",sidebar_label:"Delete"},s={unversionedId:"requests/rest-request/delete",id:"version-3.7.x/requests/rest-request/delete",isDocsHomePage:!1,title:"Delete \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",description:"`javascript",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.7.x/requests/rest-request/delete.md",slug:"/requests/rest-request/delete",permalink:"/fetch-api/ru/docs/3.7.x/requests/rest-request/delete",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/version-3.7.x/requests/rest-request/delete.md",version:"3.7.x",sidebar_label:"Delete",sidebar:"version-3.7.x/someSidebar",previous:{title:"Patch \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",permalink:"/fetch-api/ru/docs/3.7.x/requests/rest-request/patch"},next:{title:"Get \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043e\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b)",permalink:"/fetch-api/ru/docs/3.7.x/requests/pure-rest-request/get"}},a=[],u={toc:a};function c(e){let{components:t,...r}=e;return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse } from "@mihanizm56/fetch-api";\n\nexport const deleteContractsRequest = (): Promise<IResponse> =>\n  new RestRequest().deleteRequest({\n    endpoint: "http://localhost:3000",\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().required(),\n      info: Joi.object({\n        count: Joi.number().required(),\n        killers: Joi.array().items(\n          Joi.object({\n            username: Joi.string().required(),\n            count: Joi.number().required(),\n          })\n        ),\n      }),\n    }),\n  });\n')))}c.isMDXComponent=!0}}]);