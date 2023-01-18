(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(291));const o={title:"Middlewares"},i={unversionedId:"examples/middlewares",id:"version-3.8.x/examples/middlewares",isDocsHomePage:!1,title:"Middlewares",description:"You can add some middlewares to do some job with the response and ship you result as the final result for the request.",source:"@site/versioned_docs/version-3.8.x/examples/middlewares.md",slug:"/examples/middlewares",permalink:"/fetch-api/docs/3.8.x/examples/middlewares",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/versioned_docs/version-3.8.x/examples/middlewares.md",version:"3.8.x",sidebar:"version-3.8.x/someSidebar",previous:{title:"Additional request callbacks",permalink:"/fetch-api/docs/3.8.x/examples/proxy-maker"},next:{title:"Request caching",permalink:"/fetch-api/docs/3.8.x/examples/caching"}},s=[],d={toc:s};function l(e){let{components:t,...n}=e;return Object(a.a)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"You can add some middlewares to do some job with the response and ship you result as the final result for the request."),Object(a.a)("h4",{id:"add-the-middleware"},"Add the middleware"),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},"import Joi from \"joi\";\nimport { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from \"@mihanizm56/fetch-api\";\n\nnew MiddlewaresController().setMiddleware({\n  name: 'test', // middleware id\n  middleware: async ({ retryRequest }) => {\n    // we can add some additional requests to get some data (for example, retry some auth)\n    const result = await new PureRestRequest().getRequest({\n      endpoint: '/test-2',\n      // If you don't want to get your \"inside\" request to be catched by middleware\n      // then set the middlewaresAreDisabled parameter to true\n      middlewaresAreDisabled: true, \n    });\n\n    // then we can retry the initial request\n    const data = await retryRequest({ middlewaresAreDisabled: true });\n\n    // and ship the final result\n    return data;\n  },\n});\n\n\nconst someFunction = async () => {\n    // here we will get the result AFTER ALL middlewares finish to work\n    const result = await new PureRestRequest().getRequest({\n      endpoint: '/test-1',\n    });\n}\n")),Object(a.a)("h4",{id:"delete-the-middleware"},"Delete the middleware"),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},"import Joi from \"joi\";\nimport { RestRequest, IResponse, ABORT_REQUEST_EVENT_NAME } from \"@mihanizm56/fetch-api\";\n\n// here we insert the middleware id\nnew MiddlewaresController().deleteMiddleware('test');\n\n\nconst someFunction = async () => {\n    const result = await new PureRestRequest().getRequest({\n      endpoint: '/test-1',\n    });\n}\n")))}l.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);