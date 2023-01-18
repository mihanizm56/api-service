(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=(t(0),t(291));const c={title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u044d\u0448\u0430"},o={unversionedId:"examples/caching",id:"examples/caching",isDocsHomePage:!1,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u044d\u0448\u0430",description:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u044d\u0448\u0438 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438. \u041a\u0430\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0440\u0430\u0437\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/examples/caching.md",slug:"/examples/caching",permalink:"/fetch-api/ru/docs/next/examples/caching",editUrl:"https://github.com/mihanizm56/fetch-api/tree/docs/i18n/ru/docusaurus-plugin-content-docs/current/examples/caching.md",version:"current",sidebar:"someSidebar",previous:{title:"Files downloading",permalink:"/fetch-api/ru/docs/next/examples/files-downloading"},next:{title:"Browser caching",permalink:"/fetch-api/ru/docs/next/examples/browser-caching"}},i=[],s={toc:i};function p(e){let{components:n,...t}=e;return Object(a.a)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u044d\u0448\u0438 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438. \u041a\u0430\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0440\u0430\u0437\u043e\u043c."),Object(a.a)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043a\u044d\u0448\u0430-\u043a-\u043a\u0430\u0436\u0434\u043e\u043c\u0443-\u0437\u0430\u043f\u0440\u043e\u0441\u0443-\u043f\u043e-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u044d\u0448\u0430 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},"import LRU from 'lru-cache';\nimport { ICache, IResponse, PureRestRequest } from '@mihanizm56/fetch-api';\n\nconst i18nCacheLRU = new LRU<string, IResponse>({\n  maxAge: 1000 * 60 * 60 * 24, // 24 hours\n});\n\n// \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 getter/setter\n// \u0438 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u044e \u043b\u043e\u0433\u0438\u043a\u0443 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u044c\nexport class RequestCache implements ICache {\n  async getFromCache({ endpoint }) {\n    return i18nCacheLRU.get(endpoint);\n  }\n\n  setToCache({ endpoint, response }) {\n    i18nCacheLRU.set(endpoint, response);\n  }\n}\n\n\nconst someFunction = async () => {\n    // \u0438 \u043f\u043e\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043b\u0430\u0441\u0441 getter/setter \u043a\u0430\u043a \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\n    const result = await new PureRestRequest().getRequest({\n      endpoint: '/test-1',\n      requestCache: new RequestCache(),\n    });\n}\n")),Object(a.a)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043a\u044d\u0448\u0430-\u043a-\u043a\u0430\u0436\u0434\u043e\u043c\u0443-\u0437\u0430\u043f\u0440\u043e\u0441\u0443-\u0440\u0430\u0437\u043e\u043c"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u044d\u0448\u0430 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0440\u0430\u0437\u043e\u043c"),Object(a.a)("h5",{id:"\u0442\u043e\u043b\u044c\u043a\u043e-\u043e\u0434\u0438\u043d-\u0442\u0430\u043a\u043e\u0439-\u043a\u043b\u0430\u0441\u0441-\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d-\u0434\u043b\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"},"\u0422\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0442\u0430\u043a\u043e\u0439 \u043a\u043b\u0430\u0441\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438!"),Object(a.a)("pre",null,Object(a.a)("code",{parentName:"pre",className:"language-javascript"},'import Joi from "joi";\nimport { CachesController } from "@mihanizm56/fetch-api";\n\n// \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 getter/setter\n// \u0438 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u044e \u043b\u043e\u0433\u0438\u043a\u0443  \u0412\u0421\u0415\u0425 \u0417\u0410\u041f\u0420\u041e\u0421\u041e\u0412 \u0432\u043d\u0443\u0442\u0440\u044c\nexport class RequestCache implements ICache {\n  async getFromCache({ endpoint }) {\n    return i18nCacheLRU.get(endpoint);\n  }\n\n  setToCache({ endpoint, response }) {\n    i18nCacheLRU.set(endpoint, response);\n  }\n}\n\n// \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u044d\u0448\nnew CachesController().setCache(RequestCache);\n\n// \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u044d\u0448\nnew CachesController().deleteCache();\n')))}p.isMDXComponent=!0},291:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(o,".").concat(d)]||m[d]||l[d]||c;return t?a.a.createElement(f,i(i({ref:n},p),{},{components:t})):a.a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);