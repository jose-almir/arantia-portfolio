(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{546:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},617:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(7876),o=n(2338),a=n(8678),i=n.n(a),l=n(9099),u=n(5132);function c(){let e=(0,l.useRouter)(),{t}=(0,u.s)({}),n=t=>(console.log("href = ",t,e.pathname,e.pathname.endsWith(t)),e.pathname===t);return(0,r.jsxs)("header",{className:i().navbar,children:[(0,r.jsx)("div",{className:i().brand,children:(0,r.jsx)("h1",{children:"Ar\xe2ntia"})}),(0,r.jsxs)("nav",{className:i().navlinks,children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.N,{href:"/",className:n("/[locale]")?i().active:"",children:t("illustrations")})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.N,{href:"/hqs",className:n("/[locale]/hqs")?i().active:"",children:t("hqs")})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.N,{href:"/sobre",className:n("/[locale]/sobre")?i().active:"",children:t("about")})})]})]})}function s(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)("main",{children:t})]})}n(9991);var f=n(7328),d=n.n(f),p=n(4232),g=n(7110),h=n(6292),v=n(2913),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m=(0,p.createContext)({ns:{},config:{}});function b(e){var t,n,r=e.lang,o=e.namespaces,a=e.children,i=e.config,u=(0,v.A)().lang,c=(0,l.useRouter)()||{},s=c.locale,f=c.defaultLocale,d=(0,p.useContext)(m),b=y(y(y({},"undefined"==typeof window?{}:(null===(n=null===(t=window.__NEXT_DATA__)||void 0===t?void 0:t.props)||void 0===n?void 0:n.__namespaces)||{}),d.ns),void 0===o?{}:o),w=r||u||s||f||"",O=y(y({},d.config),void 0===i?{}:i),x=O.localesToIgnore||["default"],j=!w||x.includes(w),_=new Intl.PluralRules(j?void 0:w),k=(0,h.A)({config:O,allNamespaces:b,pluralRules:_,lang:w});return p.createElement(g.A.Provider,{value:{lang:w,t:k}},p.createElement(m.Provider,{value:{ns:b,config:O}},a))}var w=n(9424);let O=JSON.parse('{"illustrations":"Ilustra\xe7\xf5es","hqs":"Quadrinhos","about":"Sobre"}'),x=JSON.parse('{"illustrations":"Illustrations","hqs":"HQs","about":"About"}'),j=JSON.parse('{"illustrations":"Ilustraciones","hqs":"C\xf3mics","about":"Acerca de"}');var _=n(1091);let k=e=>{let{children:t}=e,n=(0,l.useRouter)(),o=_.d.detect();return(0,p.useEffect)(()=>{let{query:{locale:e},asPath:t,isReady:r}=n;if(r&&!w.X.locales.includes(String(e))){if(t.startsWith("/"+o)&&"/404"===n.route)return;o&&_.d.cache&&_.d.cache(o),n.replace("/"+o+t)}},[n,o]),n.query.locale&&w.X.locales.includes(String(n.query.locale))||n.asPath.includes(null!=o?o:w.X.defaultLocale)?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)("p",{children:"Loading..."})};function S(e){let{Component:t,pageProps:n,router:o}=e,a=w.X.locales.includes(o.query.locale)?String(o.query.locale):w.X.defaultLocale;return(0,r.jsx)(b,{lang:a,namespaces:{common:"es"===a?j:"en"===a?x:O},children:(0,r.jsx)(k,{children:(0,r.jsxs)(s,{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:"arantia"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,r.jsx)(t,{...n})]})})})}},1026:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(4232);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1091:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{d:()=>L});var o=[],a=o.forEach,i=o.slice,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,u=function(e,t,n){var r=n||{};r.path=r.path||"/";var o=encodeURIComponent(t),a="".concat(e,"=").concat(o);if(r.maxAge>0){var i=r.maxAge-0;if(Number.isNaN(i))throw Error("maxAge should be a Number");a+="; Max-Age=".concat(Math.floor(i))}if(r.domain){if(!l.test(r.domain))throw TypeError("option domain is invalid");a+="; Domain=".concat(r.domain)}if(r.path){if(!l.test(r.path))throw TypeError("option path is invalid");a+="; Path=".concat(r.path)}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw TypeError("option expires is invalid");a+="; Expires=".concat(r.expires.toUTCString())}if(r.httpOnly&&(a+="; HttpOnly"),r.secure&&(a+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"none":a+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return a},c={create:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+6e4*n)),r&&(o.domain=r),document.cookie=u(e,encodeURIComponent(t),o)},read:function(e){for(var t="".concat(e,"="),n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},remove:function(e){this.create(e,"",-1)}},s={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!=typeof document){var n=c.read(e.lookupCookie);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!=typeof document&&c.create(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},f={name:"querystring",lookup:function(e){var t;if("undefined"!=typeof window){var n=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));for(var r=n.substring(1).split("&"),o=0;o<r.length;o++){var a=r[o].indexOf("=");a>0&&r[o].substring(0,a)===e.lookupQuerystring&&(t=r[o].substring(a+1))}}return t}},d=null,p=function(){if(null!==d)return d;try{d="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){d=!1}return d},g={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&p()){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&p()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},h=null,v=function(){if(null!==h)return h;try{h="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){h=!1}return h},y={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&v()){var n=window.sessionStorage.getItem(e.lookupSessionStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&v()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},m={name:"navigator",lookup:function(e){var t=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},b={name:"htmlTag",lookup:function(e){var t,n=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},w={name:"path",lookup:function(e){var t;if("undefined"!=typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array){if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof n[e.lookupFromPathIndex])return;t=n[e.lookupFromPathIndex].replace("/","")}else t=n[0].replace("/","")}}return t}},O={name:"subdomain",lookup:function(e){var t="number"==typeof e.lookupFromSubdomainIndex?e.lookupFromSubdomainIndex+1:1,n="undefined"!=typeof window&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(n)return n[t]}},x=function(){var e;function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.type="languageDetector",this.detectors={},this.init(e,n)}return e=[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=function(e){return a.call(i.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e}(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:function(e){return e}}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=function(e){return e.replace("-","_")}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(s),this.addDetector(f),this.addDetector(g),this.addDetector(y),this.addDetector(m),this.addDetector(b),this.addDetector(w),this.addDetector(O)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var n=[];return(e.forEach(function(e){if(t.detectors[e]){var r=t.detectors[e].lookup(t.options);r&&"string"==typeof r&&(r=[r]),r&&(n=n.concat(r))}}),n=n.map(function(e){return t.options.convertDetectedLanguage(e)}),this.services.languageUtils.getBestMatchFromCodes)?n:n.length>0?n[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var n=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(function(t){n.detectors[t]&&n.detectors[t].cacheUserLanguage(e,n.options)}))}}],function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}(o.key),o)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();x.type="languageDetector";var j=["supportedLngs","fallbackLng","order"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var k=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},S=function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return 2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=k(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=k(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=k(n[2].toLowerCase()))),n.join("-")}return e},P=function(e){var t=e.supportedLngs,n=e.fallbackLng;return function(e){if(!e)return null;var r,o=function(e){return!t||!t.length||t.indexOf(e)>-1};return e.forEach(function(e){if(!r){var n=S(e);(!t||o(n))&&(r=n)}}),!r&&t&&e.forEach(function(e){if(!r){var n=!e||0>e.indexOf("-")?e:S(e.split("-")[0]);if(o(n)){r=n;return}r=t.find(function(e){if(0===e.indexOf(n))return e})}}),r||(r=n),r}},C=n(9424);let L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.supportedLngs,n=e.fallbackLng,r=e.order,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,j),a=P({supportedLngs:t,fallbackLng:n}),i=new x({languageUtils:{getBestMatchFromCodes:a}},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({order:void 0===r?["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"]:r},o));return{detect:function(e){return a(i.detect(e))},cache:function(e,t){return i.cacheUserLanguage(e,t)}}}({supportedLngs:C.X.locales,fallbackLng:C.X.defaultLocale})},1393:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=n(4232),o=r.useLayoutEffect,a=r.useEffect;function i(e){let{headManager:t,reduceComponentsToState:n}=e;function i(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},1639:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(4252),o=n(7876),a=r._(n(4232)),i=n(6658),l=n(1851),u=n(6225),c=n(8407),s=n(2696),f=n(8265),d=n(2343),p=n(8940),g=n(7469),h=n(1026),v=new Set;function y(e,t,n,r){if((0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let b=a.default.forwardRef(function(e,t){let n,r;let{href:u,as:v,children:b,prefetch:w=null,passHref:O,replace:x,shallow:j,scroll:_,locale:k,onClick:S,onMouseEnter:P,onTouchStart:C,legacyBehavior:L=!1,...E}=e;n=b,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let A=a.default.useContext(f.RouterContext),N=!1!==w,{href:I,as:M}=a.default.useMemo(()=>{if(!A){let e=m(u);return{href:e,as:v?m(v):e}}let[e,t]=(0,i.resolveHref)(A,u,!0);return{href:e,as:v?(0,i.resolveHref)(A,v):t||e}},[A,u,v]),T=a.default.useRef(I),U=a.default.useRef(M);L&&(r=a.default.Children.only(n));let D=L?r&&"object"==typeof r&&r.ref:t,[R,q,F]=(0,d.useIntersection)({rootMargin:"200px"}),X=a.default.useCallback(e=>{(U.current!==M||T.current!==I)&&(F(),U.current=M,T.current=I),R(e)},[M,I,F,R]),K=(0,h.useMergedRef)(X,D);a.default.useEffect(()=>{A&&q&&N&&y(A,I,M,{locale:k})},[M,I,q,k,N,null==A?void 0:A.locale,A]);let H={ref:K,onClick(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&!function(e,t,n,r,o,a,i,u){let{nodeName:c}=e.currentTarget;!("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,l.isLocalURL)(n)))&&(e.preventDefault(),(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})())}(e,A,I,M,x,j,_,k)},onMouseEnter(e){L||"function"!=typeof P||P(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&y(A,I,M,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){L||"function"!=typeof C||C(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&y(A,I,M,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(M))H.href=M;else if(!L||O||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==A?void 0:A.locale;H.href=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(M,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales)||(0,g.addBasePath)((0,s.addLocale)(M,e,null==A?void 0:A.defaultLocale))}return L?a.default.cloneElement(r,H):(0,o.jsx)("a",{...E,...H,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2338:(e,t,n)=>{"use strict";n.d(t,{N:()=>l});var r=n(7876),o=n(8230),a=n.n(o),i=n(9099);let l=e=>{let{children:t,skipLocaleHandling:n,target:o,...l}=e,u=(0,i.useRouter)(),c=l.locale||u.query.locale||"",s=l.href||u.asPath;return 0===s.indexOf("http")&&(n=!0),c&&!n&&(s=s?"/".concat(c).concat(s):u.pathname.replace("[locale]",c)),(0,r.jsx)(a(),{href:s,target:o,className:l.className,children:t})}},2343:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(4232),o=n(4754),a="function"==typeof IntersectionObserver,i=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!a,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]),[p,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2913:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(4232),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){return"string"!=typeof t?e:function(n,r,a){return e(n,r,o({ns:t},a))}}var i=n(7110),l=n(6292),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e){var t=globalThis.__NEXT_TRANSLATE__;return((null==t?void 0:t.config)?function(e){var t,n=null!==(t=globalThis.__NEXT_TRANSLATE__)&&void 0!==t?t:{},r=n.lang,o=n.namespaces,i=n.config,u=i.localesToIgnore||["default"],c=!r||u.includes(r);return{t:a((0,l.A)({config:i,allNamespaces:o,pluralRules:new Intl.PluralRules(c?void 0:r),lang:r}),e),lang:r}}:function(e){var t=(0,r.useContext)(i.A);return(0,r.useMemo)(function(){return u(u({},t),{t:a(t.t,e)})},[t,e])})(e)}},5132:(e,t,n)=>{"use strict";n.d(t,{s:()=>a});var r=n(2913),o=n(9424);let a=e=>{let{namespace:t}=e,{t:n}=(0,r.A)(t||o.X.defaultNS);return{t:n}}},5648:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},6292:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e){var t=e.config,n=e.allNamespaces,o=e.pluralRules,u=e.lang,c=t.logger,s=void 0===c?l:c,f=t.allowEmptyStrings,d=void 0===f||f,p=function(e,n){return Array.isArray(e)?e.map(function(e){return p(e,n)}):e instanceof Object?function e(t){var n=t.obj,r=t.query,o=t.config,a=t.lang;return r&&0!==Object.keys(r).length&&Object.keys(n).forEach(function(t){n[t]instanceof Object&&e({obj:n[t],query:r,config:o,lang:a}),"string"==typeof n[t]&&(n[t]=i({text:n[t],query:r,config:o,lang:a}))}),n}({obj:e,query:n,config:t,lang:u}):i({text:e,query:n,config:t,lang:u})},g=function(e,i,l){void 0===e&&(e="");var u,c=Array.isArray(e)?e[0]:e,f=t.nsSeparator,h=t.loggerEnvironment,v=void 0===h?"browser":h,y=function(e,t){if(!t)return{i18nKey:e};var n=e.indexOf(t);return n<0?{i18nKey:e}:{namespace:e.slice(0,n),i18nKey:e.slice(n+t.length)}}(c,void 0===f?":":f),m=y.i18nKey,b=y.namespace,w=void 0===b?null!==(u=null==l?void 0:l.ns)&&void 0!==u?u:t.defaultNS:b,O=w&&n[w]||{},x=function(e,t,n,r,o){if(!o||"number"!=typeof o.count)return n;var i="".concat(n,"_").concat(o.count);if(void 0!==a(t,i,r))return i;var l="".concat(n,"_").concat(e.select(o.count));if(void 0!==a(t,l,r))return l;var u="".concat(n,".").concat(o.count);if(void 0!==a(t,u,r))return u;var c="".concat(n,".").concat(e.select(o.count));return void 0!==a(t,c,r)?c:n}(o,O,m,t,i),j=a(O,x,t,l),_="object"==typeof j?JSON.parse(JSON.stringify(j)):j,k=void 0===_||"object"==typeof _&&!Object.keys(_).length||""===_&&!d,S="string"==typeof(null==l?void 0:l.fallback)?[l.fallback]:(null==l?void 0:l.fallback)||[];if(k&&("both"===v||v===("undefined"==typeof window?"node":"browser"))&&s({namespace:w,i18nKey:m}),k&&Array.isArray(S)&&S.length){var P=S[0],C=S.slice(1);if("string"==typeof P)return g(P,i,r(r({},l),{fallback:C}))}return k&&l&&l.hasOwnProperty("default")&&!(null==S?void 0:S.length)?l.default?p(l.default,i):l.default:k?c:p(_,i)};return g}function a(e,t,n,r){void 0===t&&(t=""),void 0===r&&(r={returnObjects:!1});var o=(n||{}).keySeparator,a=void 0===o?".":o,i=a?t.split(a):[t];if(t===a&&r.returnObjects)return e;var l=i.reduce(function(e,t){if("string"==typeof e)return{};var n=e[t];return n||("string"==typeof n?n:{})},e);if("string"==typeof l||l instanceof Object&&r.returnObjects)return l}function i(e){var t=e.text,n=e.query,r=e.config,o=e.lang;if(!t||!n)return t||"";var a=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},i=r.interpolation||{},l=i.format,u=void 0===l?null:l,c=i.prefix,s=void 0===c?"{{":c,f=i.suffix,d=void 0===f?"}}":f,p=""===d?"":"(?:[\\s,]+([\\w-]*))?\\s*".concat(a(d));return Object.keys(n).reduce(function(e,t){var r=RegExp("".concat(a(s),"\\s*").concat(t).concat(p),"gm");return e.replace(r,function(e,r){return r&&u?u(n[t],r,o):n[t]})},t)}function l(e){e.namespace,e.i18nKey}},6556:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(617)}])},7110:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r,o=n(4232);"function"==typeof o.createContext&&(r=(0,o.createContext)({t:function(e){return Array.isArray(e)?e[0]:e},lang:""}));let a=r},7328:(e,t,n)=>{e.exports=n(9836)},8230:(e,t,n)=>{e.exports=n(1639)},8678:e=>{e.exports={navbar:"Navbar_navbar__EloZ5",brand:"Navbar_brand__NfF6a",navlinks:"Navbar_navlinks__dq0KV",active:"Navbar_active__b3cvz"}},8940:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(7810),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9099:(e,t,n)=>{e.exports=n(8253)},9424:(e,t,n)=>{"use strict";n.d(t,{X:()=>r});let r={locales:["pt","en","es"],defaultLocale:"pt",loader:!1,pages:{"*":["common"]},defaultNS:"common"}},9836:(e,t,n)=>{"use strict";var r=n(5364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},defaultHead:function(){return d}});let o=n(4252),a=n(8365),i=n(7876),l=a._(n(4232)),u=o._(n(1393)),c=n(9896),s=n(6834),f=n(5648);function d(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(546);let g=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!i)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:o})})}let v=function(e){let{children:t}=e,n=(0,l.useContext)(c.AmpStateContext),r=(0,l.useContext)(s.HeadManagerContext);return(0,i.jsx)(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,f.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9896:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(4252)._(n(4232)).default.createContext({})},9991:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(6556),t(8253))),_N_E=e.O()}]);