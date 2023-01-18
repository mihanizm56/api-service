(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(291));const a={title:"Cancelling requests"},c={unversionedId:"examples/cancel-requests",id:"version-3.8.x/examples/cancel-requests",isDocsHomePage:!1,title:"Cancelling requests",description:"`javascript",source:"@site/versioned_docs/version-3.8.x/examples/cancel-requests.md",slug:"/examples/cancel-requests",permalink:"/fetch-api/docs/3.8.x/examples/cancel-requests",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.8.x/examples/cancel-requests.md",version:"3.8.x",sidebar:"version-3.8.x/someSidebar",previous:{title:"Errors catching",permalink:"/fetch-api/docs/3.8.x/examples/error-catching"},next:{title:"Logging",permalink:"/fetch-api/docs/3.8.x/examples/logging"}},i=[],s={toc:i};function p(e){let{components:t,...n}=e;return Object(o.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from "@mihanizm56/fetch-api";\n\nexport const createWhateverRequest = (someData): Promise<IResponse> =>\n  new RestRequest().postRequest({\n    endpoint: "http://localhost:3000",\n    body: someData,\n    abortRequestId: \'1\',\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),\n    }),\n  });\n);\n\n// at the moment you want cancel the request\n// you just dispatch an event with that name (ABORT_REQUEST_EVENT_NAME) and id (abortRequestId) of the request\ndocument.dispatchEvent(\n  new CustomEvent(ABORT_REQUEST_EVENT_NAME, {\n    detail: { id: \'1\' },\n  }),\n);\n')))}p.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);