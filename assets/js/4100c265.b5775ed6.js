(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=(r(0),r(291));const o={title:"Additional request callbacks"},s={unversionedId:"examples/proxy-maker",id:"version-3.9.x/examples/proxy-maker",isDocsHomePage:!1,title:"Additional request callbacks",description:"`javascript",source:"@site/versioned_docs/version-3.9.x/examples/proxy-maker.md",slug:"/examples/proxy-maker",permalink:"/fetch-api/docs/examples/proxy-maker",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.9.x/examples/proxy-maker.md",version:"3.9.x",sidebar:"version-3.9.x/someSidebar",previous:{title:"Request Timeout",permalink:"/fetch-api/docs/examples/request-timeout"},next:{title:"Middlewares",permalink:"/fetch-api/docs/examples/middlewares"}},c=[],i={toc:c};function p(e){let{components:t,...r}=e;return Object(a.a)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},'import { FetchProxyMaker } from "@mihanizm56/fetch-api";\n\nnew FetchProxyMaker().setResponseTrackCallback(({\n  requestParams, // all request parameters\n  response, //  pure response protected object\n  pureResponseData, // response body without formatting\n  requestError: boolean, // is request crashed\n  formattedResponseData // formatted response data in IResponse interface\n}) => ({\n // do some metrics or logging here\n}));\n')),Object(a.a)("h4",{id:"set-callback-for-metrics-for-all-requests"},"Set callback for metrics for all requests"),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},"import { FetchProxyMaker } from \"@mihanizm56/fetch-api\";\n\nnew FetchProxyMaker().setPersistentOptions(() => ({\n  headers: {\n    foo: 'bar',\n  },\n}));\n")),Object(a.a)("h4",{id:"set-callback-for-metrics-for-one-request"},"Set callback for metrics for one request"),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},"import { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from \"@mihanizm56/fetch-api\";\n\nexport const createWhateverRequest = (someData) =>\n  new RestRequest().postRequest({\n    endpoint: 'http://127.0.0.1:8080/rest/positive',\n    traceRequestCallback: setResponseTrackCallbackOptions => {\n      resultOptions = { ...setResponseTrackCallbackOptions };\n    },\n    body: someData,\n  });\n);\n")))}p.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);