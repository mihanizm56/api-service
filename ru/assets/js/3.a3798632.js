(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(296),l=a(293),s=a(56),c=a.n(s);function i(e){let{sidebar:t}=e;return 0===t.items.length?null:r.a.createElement("div",{className:Object(o.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:c.a.sidebarItemList},t.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},309:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(h,s(s({ref:t},i),{},{components:a})):r.a.createElement(h,s({ref:t},i))}));d.displayName="MDXCreateElement"},310:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},311:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(296),l=a(309),s=a(297),c=a(293),i=a(315),m=a(308),u=a(160),p=a.n(u),d=a(295);t.a=function(e){const t=function(){const{selectMessage:e}=Object(d.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:u,truncated:h,isBlogPostPage:g=!1}=e,{date:y,formattedDate:b,permalink:f,tags:v,readingTime:k}=u,{author:E,title:j,image:O,keywords:N}=n,T=n.author_url||n.authorURL,w=n.author_title||n.authorTitle,P=n.author_image_url||n.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:N,image:O}),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(o.a)("margin-bottom--sm",p.a.blogPostTitle)},g?j:r.a.createElement(c.a,{to:f},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:y,className:p.a.blogPostDate},b,k&&r.a.createElement(r.a.Fragment,null," \xb7 ",t(k)))),r.a.createElement("div",{className:"avatar margin-vert--md"},P&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:T},r.a.createElement("img",{src:P,alt:E})),r.a.createElement("div",{className:"avatar__intro"},E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:T},E)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(l.a,{components:i.a},a)),(v.length>0||h)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((e=>{let{label:t,permalink:a}=e;return r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),h&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:u.permalink,"aria-label":`Read more about ${j}`},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},315:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(293),l=a(3),s=a(296),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(24).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},s=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=u({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,s=[],c=[s];l>-1;){for(;(o=n[l]++)<r[l];){var i=void 0,m=t[l],u=a[l][o];if("string"==typeof u?(m=l>0?m:["plain"],i=u):(m=h(m,u.type),u.alias&&(m=h(m,u.alias)),i=u.content),"string"==typeof i){var g=i.split(p),y=g.length;s.push({types:m,content:g[0]});for(var b=1;b<y;b++)d(s),c.push(s=[]),s.push({types:m,content:g[b]})}else l++,t.push(m),a.push(i),n.push(0),r.push(i.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return d(s),c}(void 0!==l?this.tokenize(t,n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),f=b;var v=a(310),k=a.n(v),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(304),O=a(295);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},T=a(297),w=a(59),P=a.n(w);const x=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},L=/(?:title=")(.*)(?:")/;function _(e){let{children:t,className:a,metastring:o}=e;const{prism:c}=Object(O.useThemeConfig)(),[m,u]=Object(n.useState)(!1),[p,d]=Object(n.useState)(!1);Object(n.useEffect)((()=>{d(!0)}),[]);const h=Object(n.useRef)(null);let g=[],y="";const b=N(),v=Array.isArray(t)?t.join(""):t;if(o&&x.test(o)){const e=o.match(x)[1];g=k()(e).filter((e=>e>0))}o&&L.test(o)&&(y=o.match(L)[1]);let E=a&&a.replace(/language-/,"");!E&&c.defaultLanguage&&(E=c.defaultLanguage);let j=v.replace(/\n$/,"");if(0===g.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(E),a=v.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const o=r+1,l=a[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${o},`;break;case"highlight-start":n=o;break;case"highlight-end":e+=`${n}-${o-1},`}a.splice(r,1)}else r+=1}g=k()(e),j=a.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus()}(j),u(!0),setTimeout((()=>u(!1)),2e3)};return r.a.createElement(f,Object(l.a)({},i,{key:String(p),theme:b,code:j,language:E}),(e=>{let{className:t,style:a,tokens:n,getLineProps:o,getTokenProps:c}=e;return r.a.createElement("div",{className:P.a.codeBlockContainer},y&&r.a.createElement("div",{style:a,className:P.a.codeBlockTitle},y),r.a.createElement("div",{className:Object(s.a)(P.a.codeBlockContent,E)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(t,P.a.codeBlock,"thin-scrollbar",{[P.a.codeBlockWithTitle]:y})},r.a.createElement("div",{className:P.a.codeBlockLines,style:a},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=o({line:e,key:t});return g.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(l.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(l.a)({key:t},c({token:e,key:t}))))))})))),r.a.createElement("button",{ref:h,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(P.a.copyButton),onClick:w},m?r.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}a(60);var D=a(61),B=a.n(D);var S=e=>function(t){let{id:a,...n}=t;const{navbar:{hideOnScroll:o}}=Object(O.useThemeConfig)();return a?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[B.a.enhancedAnchor]:!o}),id:a}),n.children,r.a.createElement("a",{className:"hash-link",href:`#${a}`,title:Object(T.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,n)};const $={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(_,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(o.a,e),pre:e=>{const{children:t}=e;return r.a.createElement(_,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")};t.a=$}}]);