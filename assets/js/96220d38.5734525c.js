(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{197:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(3),o=(t(0),t(291));const a={title:"Errors catching"},c={unversionedId:"examples/error-catching",id:"version-3.6.x/examples/error-catching",isDocsHomePage:!1,title:"Errors catching",description:"`javascript",source:"@site/versioned_docs/version-3.6.x/examples/error-catching.md",slug:"/examples/error-catching",permalink:"/fetch-api/docs/3.6.x/examples/error-catching",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.6.x/examples/error-catching.md",version:"3.6.x",sidebar:"version-3.6.x/someSidebar",previous:{title:"One interface for all types of requests",permalink:"/fetch-api/docs/3.6.x/examples/one-interface"},next:{title:"Cancelling requests",permalink:"/fetch-api/docs/3.6.x/examples/cancel-requests"}},i=[],s={toc:i};function p(e){let{components:r,...t}=e;return Object(o.a)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from "@mihanizm56/fetch-api";\n\nexport const createWhateverRequest = (someData): Promise<IResponse> =>\n  new RestRequest().postRequest({\n    endpoint: "http://localhost:3000",\n    body: someData,\n    abortRequestId: \'1\',\n    responseSchema: Joi.object({\n      username: Joi.string().required(),\n      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),\n    }),\n  });\n);\n\nconst someFunction = async() => {\n    const response = await createWhateverRequest(someData)\n\n    // the error, errorText, additionalErrors, code fields in the\n    // response will be accordingly to your backend response\n    // you dont need to provide additional try/catch blocks\n}\n')))}p.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=n,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?o.a.createElement(d,i(i({ref:r},p),{},{components:t})):o.a.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);