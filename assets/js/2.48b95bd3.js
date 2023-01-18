/*! For license information please see 2.48b95bd3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(296),o=a(297),l=a(23),s=a(63),i=a.n(s);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){const e=Object(n.useRef)(null),t=Object(l.useLocation)();return Object(n.useEffect)((()=>{t.hash||u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:i.a.skipToContent,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=a(295),f=a(322),h=a(64),b=a.n(h);var v=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(f.a)(),{announcementBar:a}=Object(m.useThemeConfig)();if(!a)return null;const{content:n,backgroundColor:l,textColor:s,isCloseable:i}=a;return!n||i&&e?null:r.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},r.a.createElement("div",{className:Object(c.a)(b.a.announcementBarContent,{[b.a.announcementBarCloseable]:i}),dangerouslySetInnerHTML:{__html:n}}),i?r.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:t,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=a(3),g=a(26),E=a(16),O=a(294),k=a(293),j=a(25),y=a(324);function C(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var w=a(325);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_.apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var S="Ctrl";var L=r.a.forwardRef((function(e,t){var a=e.translations,c=void 0===a?{}:a,o=N(e,["translations"]),l=c.buttonText,s=void 0===l?"Search":l,i=c.buttonAriaLabel,u=void 0===i?"Search":i,d=Object(n.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":S:null}),[]);return r.a.createElement("button",_({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(w.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},s)),r.a.createElement("span",{className:"DocSearch-Button-Keys"},null!==d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"DocSearch-Button-Key"},d===S?r.a.createElement(C,null):d),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),T=a(298);function D(){const{locale:e,tags:t}=function(){const{i18n:e}=Object(E.default)(),t=Object(T.useAllDocsData)(),a=Object(T.useActivePluginAndVersion)(),n=Object(m.useDocsPreferredVersionByPluginId)(),r=[m.DEFAULT_SEARCH_TAG,...Object.keys(t).map((function(e){var r,c;const o=(null==a||null===(r=a.activePlugin)||void 0===r?void 0:r.pluginId)===e?a.activeVersion:void 0,l=n[e],s=t[e].versions.find((e=>e.isLast)),i=null!==(c=null!=o?o:l)&&void 0!==c?c:s;return Object(m.docVersionSearchTag)(e,i.name)}))];return{locale:e.currentLocale,tags:r}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}let P=null;function I(e){let{hit:t,children:a}=e;return r.a.createElement(k.a,{to:t.url},a)}function A(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=Object(y.a)();return r.a.createElement(k.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function M(e){var t,c;let{contextualSearch:s,...i}=e;const{siteMetadata:u}=Object(E.default)(),d=D(),m=null!==(t=null===(c=i.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],f=s?[...d,...m]:m,h={...i.searchParameters,facetFilters:f},{withBaseUrl:b}=Object(O.b)(),v=Object(l.useHistory)(),k=Object(n.useRef)(null),y=Object(n.useRef)(null),[C,w]=Object(n.useState)(!1),[_,N]=Object(n.useState)(null),S=Object(n.useCallback)((()=>P?Promise.resolve():Promise.all([a.e(217).then(a.bind(null,375)),Promise.all([a.e(0),a.e(218)]).then(a.bind(null,374)),a.e(0).then(a.t.bind(null,290,7))]).then((e=>{let[{DocSearchModal:t}]=e;P=t}))),[]),T=Object(n.useCallback)((()=>{S().then((()=>{k.current=document.createElement("div"),document.body.insertBefore(k.current,document.body.firstChild),w(!0)}))}),[S,w]),M=Object(n.useCallback)((()=>{w(!1),k.current.remove()}),[w]),B=Object(n.useCallback)((e=>{S().then((()=>{w(!0),N(e.key)}))}),[S,w,N]),x=Object(n.useRef)({navigate(e){let{itemUrl:t}=e;v.push(t)}}).current,V=Object(n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:b(`${t.pathname}${t.hash}`)}})))).current,R=Object(n.useMemo)((()=>e=>r.a.createElement(A,Object(p.a)({},e,{onClose:M}))),[M]),U=Object(n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e)),[u.docusaurusVersion]);!function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}({isOpen:C,onOpen:T,onClose:M,onInput:B,searchButtonRef:y});const F=Object(o.b)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${i.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.a.createElement(L,{onTouchStart:S,onFocus:S,onMouseOver:S,onClick:T,ref:y,translations:{buttonText:F,buttonAriaLabel:F}}),C&&Object(g.createPortal)(r.a.createElement(P,Object(p.a)({onClose:M,initialScrollY:window.scrollY,initialQuery:_,navigator:x,transformItems:V,hitComponent:I,resultsFooterComponent:R,transformSearchClient:U},i,{searchParameters:h})),k.current))}var B=function(){const{siteConfig:e}=Object(E.default)();return r.a.createElement(M,e.themeConfig.algolia)},x=a(352),V=a.n(x),R=a(65),U=a.n(R);const F=e=>{let{icon:t,style:a}=e;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.dark),style:a},t)},$=e=>{let{icon:t,style:a}=e;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.light),style:a},t)};var H=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:c}}}=Object(m.useThemeConfig)(),{isClient:o}=Object(E.default)();return r.a.createElement(V.a,Object(p.a)({disabled:!o,icons:{checked:r.a.createElement(F,{icon:t,style:a}),unchecked:r.a.createElement($,{icon:n,style:c})}},e))},X=a(304),K=a(327);var z=e=>{const t=Object(l.useLocation)(),[a,r]=Object(n.useState)(e),c=Object(n.useRef)(!1),[o,s]=Object(n.useState)(0),[i,u]=Object(n.useState)(0),d=Object(n.useCallback)((e=>{null!==e&&u(e.getBoundingClientRect().height)}),[]);return Object(K.a)((t=>{let{scrollY:a}=t;if(!e)return;if(a<i)return void r(!0);if(c.current)return c.current=!1,r(!1),void s(a);o&&0===a&&r(!0);const n=document.documentElement.scrollHeight-i,l=window.innerHeight;o&&a>=o?r(!1):a+l<n&&r(!0),s(a)}),[o,i,c]),Object(n.useEffect)((()=>{e&&o&&r(!0)}),[t.pathname]),Object(n.useEffect)((()=>{e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}},q=a(328),G=a(329),Y=a(301);var W=e=>{let{width:t=20,height:a=20,...n}=e;return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:t,height:a},n),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function Q(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:n,...c}=e;const{i18n:{currentLocale:o,locales:l,localeConfigs:s}}=Object(E.default)(),i=Object(m.useAlternatePageUtils)();function u(e){return s[e].label}const d=[...a,...l.map((e=>{const t=`pathname://${i.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:u(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===o?"dropdown__link--active":""}})),...n],f=t?"Languages":u(o);return r.a.createElement(Y.a,Object(p.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement(W,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,f)),items:d}))}var J=a(66),Z=a.n(J);function ee(e){let{mobile:t}=e;return t?null:r.a.createElement("div",{className:Z.a.searchWrapper},r.a.createElement(B,null))}const te={default:()=>Y.a,localeDropdown:()=>Q,search:()=>ee,docsVersion:()=>a(357).default,docsVersionDropdown:()=>a(358).default,doc:()=>a(359).default};function ae(e){let{type:t,...a}=e;const n=function(e){void 0===e&&(e="default");const t=te[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()}(t);return r.a.createElement(n,a)}var ne=a(330),re=a(332),ce=a(68),oe=a.n(ce);const le="right";var se=function(){const{navbar:{items:e,hideOnScroll:t,style:a},colorMode:{disableSwitch:o}}=Object(m.useThemeConfig)(),[l,s]=Object(n.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:d}=Object(X.a)(),{navbarRef:f,isNavbarVisible:h}=z(t);Object(q.a)(l);const b=Object(n.useCallback)((()=>{s(!0)}),[s]),v=Object(n.useCallback)((()=>{s(!1)}),[s]),g=Object(n.useCallback)((e=>e.target.checked?d():u()),[u,d]),E=Object(G.a)();Object(n.useEffect)((()=>{E===G.b.desktop&&s(!1)}),[E]);const O=e.some((e=>"search"===e.type)),{leftItems:k,rightItems:j}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:le)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:le)}))}}(e);return r.a.createElement("nav",{ref:f,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===a,"navbar--primary":"primary"===a,"navbar-sidebar--show":l,[oe.a.navbarHideable]:t,[oe.a.navbarHidden]:t&&!h})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:b,onKeyDown:b},r.a.createElement(re.a,null)),r.a.createElement(ne.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),k.map(((e,t)=>r.a.createElement(ae,Object(p.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.map(((e,t)=>r.a.createElement(ae,Object(p.a)({},e,{key:t})))),!o&&r.a.createElement(H,{className:oe.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:i,onChange:g}),!O&&r.a.createElement(B,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:v}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(ne.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:v}),!o&&l&&r.a.createElement(H,{"aria-label":"Dark mode toggle in sidebar",checked:i,onChange:g})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>r.a.createElement(ae,Object(p.a)({mobile:!0},e,{onClick:v,key:t})))))))))},ie=a(69),ue=a.n(ie),de=a(331);function me(e){let{to:t,href:a,label:n,prependBaseUrlToHref:c,...o}=e;const l=Object(O.a)(t),s=Object(O.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(k.a,Object(p.a)({className:"footer__link-item"},a?{href:c?s:a}:{to:l},o),n)}const fe=e=>{let{sources:t,alt:a}=e;return r.a.createElement(de.a,{className:"footer__logo",alt:a,sources:t})};var he=function(){const{footer:e}=Object(m.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},o={light:Object(O.a)(n.src),dark:Object(O.a)(n.srcDark||n.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(me,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement(k.a,{href:n.href,className:ue.a.footerLogoLink},r.a.createElement(fe,{alt:n.alt,sources:o})):r.a.createElement(fe,{alt:n.alt,sources:o})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},be=a(8);const ve="light",pe="dark",ge=e=>e===pe?pe:ve,Ee=e=>{try{localStorage.setItem("theme",ge(e))}catch(t){console.error(t)}};var Oe=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:a}}=Object(m.useThemeConfig)(),[r,c]=Object(n.useState)((e=>be.a.canUseDOM?ge(document.documentElement.getAttribute("data-theme")):ge(e))(e)),o=Object(n.useCallback)((()=>{c(ve),Ee(ve)}),[]),l=Object(n.useCallback)((()=>{c(pe),Ee(pe)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ge(r))}),[r]),Object(n.useEffect)((()=>{if(!t)try{const e=localStorage.getItem("theme");null!==e&&c(ge(e))}catch(e){console.error(e)}}),[c]),Object(n.useEffect)((()=>{t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;c(t?pe:ve)}))}),[]),{isDarkTheme:r===pe,setLightTheme:o,setDarkTheme:l}},ke=a(326);var je=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=Oe();return r.a.createElement(ke.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const ye="docusaurus.tab.";var Ce=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith(ye)){e[a.substring(ye.length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const we="docusaurus.announcement.dismiss",_e="docusaurus.announcement.id";var Ne=()=>{const{announcementBar:e}=Object(m.useThemeConfig)(),[t,a]=Object(n.useState)(!0),r=Object(n.useCallback)((()=>{localStorage.setItem(we,"true"),a(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=localStorage.getItem(_e);"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;localStorage.setItem(_e,t),r&&localStorage.setItem(we,"false"),(r||"false"===localStorage.getItem(we))&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},Se=a(323);var Le=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=Ce(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=Ne();return r.a.createElement(Se.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)};function Te(e){let{children:t}=e;return r.a.createElement(je,null,r.a.createElement(Le,null,r.a.createElement(m.DocsPreferredVersionContextProvider,null,t)))}function De(e){let{locale:t,version:a,tag:n}=e;const c=t;return r.a.createElement(j.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),a&&r.a.createElement("meta",{name:"docsearch:version",content:a}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}var Pe=a(308);function Ie(){const{i18n:{defaultLocale:e,locales:t}}=Object(E.default)(),a=Object(m.useAlternatePageUtils)();return r.a.createElement(j.a,null,t.map((e=>r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function Ae(e){let{permalink:t}=e;const{siteConfig:{url:a}}=Object(E.default)(),n=function(){const{siteConfig:{url:e}}=Object(E.default)(),{pathname:t}=Object(l.useLocation)();return e+Object(O.a)(t)}(),c=t?`${a}${t}`:n;return r.a.createElement(j.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Me(e){const{siteConfig:t,i18n:{currentLocale:a,localeConfigs:n}}=Object(E.default)(),{favicon:c,themeConfig:{image:o,metadatas:l}}=t,{title:s,description:i,image:u,keywords:d,searchMetadatas:f}=e,h=Object(O.a)(c),b=a,v=n[a].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("html",{lang:b,dir:v}),c&&r.a.createElement("link",{rel:"shortcut icon",href:h})),r.a.createElement(Pe.a,{title:s,description:i,keywords:d,image:u||o}),r.a.createElement(Ae,null),r.a.createElement(Ie,null),r.a.createElement(De,Object(p.a)({tag:m.DEFAULT_SEARCH_TAG,locale:a},f)),r.a.createElement(j.a,null,l.map(((e,t)=>r.a.createElement("meta",Object(p.a)({key:`metadata_${t}`},e))))))}a(70);var Be=function(){Object(n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(71);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return Be(),r.a.createElement(Te,null,r.a.createElement(Me,e),r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(se,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(he,null))}},301:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(296),l=a(293),s=a(294),i=a(23),u=a(295);function d(e){let{activeBasePath:t,activeBaseRegex:a,to:r,href:o,label:i,activeClassName:u="navbar__link--active",prependBaseUrlToHref:d,...m}=e;const f=Object(s.a)(r),h=Object(s.a)(t),b=Object(s.a)(o,{forcePrependBaseUrl:!0});return c.a.createElement(l.a,Object(n.a)({},o?{href:d?b:o}:{isNavLink:!0,activeClassName:u,to:f,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(h)}:null},m),i)}function m(e){var t;let{items:a,position:l,className:s,...i}=e;const u=Object(r.useRef)(null),m=Object(r.useRef)(null),[f,h]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);const b=function(e,t){return void 0===t&&(t=!1),Object(o.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?c.a.createElement("div",{ref:u,className:Object(o.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l,"dropdown--show":f})},c.a.createElement(d,Object(n.a)({className:b(s)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),h(!f))}}),null!==(t=i.children)&&void 0!==t?t:i.label),c.a.createElement("ul",{ref:m,className:"dropdown__menu"},a.map(((e,t)=>{let{className:r,...o}=e;return c.a.createElement("li",{key:t},c.a.createElement(d,Object(n.a)({onKeyDown:e=>{if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);const t=u.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active",className:b(r,!0)},o)))})))):c.a.createElement(d,Object(n.a)({className:b(s)},i))}function f(e){var t,a,l;let{items:s,className:m,position:f,...h}=e;const b=Object(r.useRef)(null),{pathname:v}=Object(i.useLocation)(),[p,g]=Object(r.useState)((()=>{var e;return null===(e=!(null!=s&&s.some((e=>Object(u.isSamePath)(e.to,v)))))||void 0===e||e})),E=function(e,t){return void 0===t&&(t=!1),Object(o.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(d,Object(n.a)({className:E(m)},h)));const O=null!==(t=b.current)&&void 0!==t&&t.scrollHeight?`${null===(a=b.current)||void 0===a?void 0:a.scrollHeight}px`:void 0;return c.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":p})},c.a.createElement(d,Object(n.a)({role:"button",className:E(m,!0)},h,{onClick:e=>{e.preventDefault(),g((e=>!e))}}),null!==(l=h.children)&&void 0!==l?l:h.label),c.a.createElement("ul",{className:"menu__list",ref:b,style:{height:p?void 0:O}},s.map(((e,t)=>{let{className:a,...r}=e;return c.a.createElement("li",{className:"menu__list-item",key:t},c.a.createElement(d,Object(n.a)({activeClassName:"menu__link--active",className:E(a)},r,{onClick:h.onClick})))}))))}t.a=function(e){let{mobile:t=!1,...a}=e;const n=t?f:m;return c.a.createElement(n,a)}},304:function(e,t,a){"use strict";var n=a(0),r=a(326);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},322:function(e,t,a){"use strict";var n=a(0),r=a(323);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},323:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},324:function(e,t,a){"use strict";var n=a(23),r=a(8),c=a(16);t.a=function(){const e=Object(n.useHistory)(),t=Object(n.useLocation)(),{siteConfig:{baseUrl:a}={}}=Object(c.default)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}}},325:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},326:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},327:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=function(e,t){void 0===t&&(t=[]);const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)((()=>{const e={passive:!0};return window.addEventListener("scroll",o,e),()=>window.removeEventListener("scroll",o,e)}),t),a}},328:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},329:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8);const c={desktop:"desktop",mobile:"mobile"};t.a=function(){const e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const[a,o]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){o(t())}}),[]),a}},330:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(293),l=a(331),s=a(294),i=a(16),u=a(295);t.a=e=>{const{isClient:t}=Object(i.default)(),{navbar:{title:a,logo:r={src:""}}}=Object(u.useThemeConfig)(),{imageClassName:d,titleClassName:m,...f}=e,h=Object(s.a)(r.href||"/"),b={light:Object(s.a)(r.src),dark:Object(s.a)(r.srcDark||r.src)};return c.a.createElement(o.a,Object(n.a)({to:h},f,r.target&&{target:r.target}),r.src&&c.a.createElement(l.a,{key:t,className:d,sources:b,alt:r.alt||a||"Logo"}),null!=a&&c.a.createElement("strong",{className:m},a))}},331:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(296),l=a(16),s=a(304),i=a(67),u=a.n(i);t.a=e=>{const{isClient:t}=Object(l.default)(),{isDarkTheme:a}=Object(s.a)(),{sources:r,className:i,alt:d="",...m}=e,f=t?a?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,f.map((e=>c.a.createElement("img",Object(n.a)({key:e,src:r[e],alt:d,className:Object(o.a)(u.a.themedImage,u.a[`themedImage--${e}`],i)},m)))))}},332:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=e=>{let{width:t=30,height:a=30,className:r,...o}=e;return c.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:r,width:t,height:a,viewBox:"0 0 30 30",role:"img",focusable:"false"},o),c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},352:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(353)),s=m(a(1)),i=m(a(354)),u=m(a(355)),d=a(356);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},353:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},354:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},355:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},356:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},357:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(3),r=a(0),c=a.n(r),o=a(301),l=a(298),s=a(295);function i(e){var t;let{label:a,to:r,docsPluginId:i,...u}=e;const d=Object(l.useActiveVersion)(i),{preferredVersion:m}=Object(s.useDocsPreferredVersion)(i),f=Object(l.useLatestVersion)(i),h=null!==(t=null!=d?d:m)&&void 0!==t?t:f,b=null!=a?a:h.label,v=null!=r?r:(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return c.a.createElement(o.a,Object(n.a)({},u,{label:b,to:v}))}},358:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),o=a(301),l=a(298),s=a(295);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){var t,a;let{mobile:r,docsPluginId:u,dropdownActiveClassDisabled:d,dropdownItemsBefore:m,dropdownItemsAfter:f,...h}=e;const b=Object(l.useActiveDocContext)(u),v=Object(l.useVersions)(u),p=Object(l.useLatestVersion)(u),{preferredVersion:g,savePreferredVersionName:E}=Object(s.useDocsPreferredVersion)(u);const O=null!==(t=null!==(a=b.activeVersion)&&void 0!==a?a:g)&&void 0!==t?t:p,k=r?"Versions":O.label,j=r?void 0:i(O).path;return c.a.createElement(o.a,Object(n.a)({},h,{mobile:r,label:k,to:j,items:function(){const e=v.map((e=>{const t=(null==b?void 0:b.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==b?void 0:b.activeVersion),onClick:()=>{E(e.name)}}})),t=[...m,...e,...f];if(!(t.length<=1))return t}(),isActive:d?()=>!1:void 0}))}},359:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),o=a(301),l=a(298),s=a(296),i=a(295);function u(e){var t;let{docId:a,activeSidebarClassName:r,label:u,docsPluginId:d,...m}=e;const{activeVersion:f,activeDoc:h}=Object(l.useActiveDocContext)(d),{preferredVersion:b}=Object(i.useDocsPreferredVersion)(d),v=Object(l.useLatestVersion)(d),p=null!==(t=null!=f?f:b)&&void 0!==t?t:v,g=p.docs.find((e=>e.id===a));if(!g)throw new Error(`DocNavbarItem: couldn't find any doc with id=${a} in version ${p.name}.\nAvailable docIds=\n- ${p.docs.join("\n- ")}`);return c.a.createElement(o.a,Object(n.a)({exact:!0},m,{className:Object(s.a)(m.className,{[r]:h&&h.sidebar===g.sidebar}),label:null!=u?u:g.id,to:g.path}))}}}]);