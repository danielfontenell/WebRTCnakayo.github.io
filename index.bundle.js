!function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={2:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([34,0]),r()}([,,,function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return c}));var n=r(0);const a=16,i={blue:"#005ece",lightblue:"#039be5",red:"#ff6673",gray:"#eee",white:"#fff",black:"#111",trueblack:"#000000"},o={moveBackground:n.d`
      0% { background-position: top left; }
    100% { background-position: top right; }
  `},c=Object(n.b)({html:{WebkitFontSmoothing:"antialiased"},body:{margin:0,fontSize:a,fontFamily:'"Open Sans", sans-serif',fontWeight:"lighter",lineHeight:1.5,height:"100vh",background:`linear-gradient(45deg, ${i.trueblack}, ${i.trueblack})`},"#app-root":{height:"100vh",overflow:"hidden"}},";label:globalStyle;")},,,,,function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return a})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return s})),r.d(t,"b",(function(){return u}));const n=e=>"sfu"===e||"mesh"===e,a=16,i="^soft$|^jigyou$|^yushutu$|^senryaku$|^jougiken$|^soumu$|^keiri$|^joukan$|^tizai$|^kanri$|^eikikaku$|^eidai1$|^eidai2$|^iotsui$|^solution$|^einisi$|^koumu$|^seizou$|^seigi$|^isocenter$|^seiki$|^monodukuri$|^shokikaku$|^sekeidai1$|^sekeidai2$|^sekeidai3$|^support$|^souki$|^hinshou$",o=e=>new RegExp(i).test(e),c=16,s="^soft$|^jigyou$|^yushutu$|^senryaku$|^jougiken$|^soumu$|^keiri$|^joukan$|^tizai$|^kanri$|^eikikaku$|^eidai1$|^eidai2$|^iotsui$|^solution$|^einisi$|^koumu$|^seizou$|^seigi$|^isocenter$|^seiki$|^monodukuri$|^shokikaku$|^sekeidai1$|^sekeidai2$|^sekeidai3$|^support$|^souki$|^hinshou$",u=e=>new RegExp(s).test(e)},function(e,t,r){"use strict";var n=r(10);t.a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Object(n.a)(t)}},function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=function(e){for(var t,r=e.length,n=r^r,a=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++a;switch(r){case 3:n^=(255&e.charCodeAt(a+2))<<16;case 2:n^=(255&e.charCodeAt(a+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(a)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)},a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var i=/[A-Z]|^ms/g,o=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!=typeof e},u=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return c(e)?e:e.replace(i,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(o,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===a[e]||c(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)d={name:a.name,styles:a.styles,next:d},a=a.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=f(e,t,r[a],!1);else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":s(o)&&(n+=u(i)+":"+l(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var c=f(e,t,o,!1);switch(i){case"animation":case"animationName":n+=u(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var d=0;d<o.length;d++)s(o[d])&&(n+=u(i)+":"+l(i,o[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=d,o=r(e);return d=i,f(e,t,o,n)}break;case"string":}if(null==t)return r;var c=t[r];return void 0===c||n?r:c}var d,b=/label:\s*([^\s;\n{]+)\s*;/g;var h=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,i="";d=void 0;var o=e[0];null==o||void 0===o.raw?(a=!1,i+=f(r,t,o,!1)):i+=o[0];for(var c=1;c<e.length;c++)i+=f(r,t,e[c],46===i.charCodeAt(i.length-1)),a&&(i+=o[c]);b.lastIndex=0;for(var s,u="";null!==(s=b.exec(i));)u+="-"+s[1];return{name:n(i)+u,styles:i,next:d}}},,function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,i?0:a.cssRules.length)}catch(e){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()},function(e){e.exports=JSON.parse('{"a":"skyway-conference-dev","b":"3.0.1"}')},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "})),n}var a=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+n,a,e.sheet,!0);a=a.next}while(void 0!==a)}}},,,function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,s=o(e),u=1;u<arguments.length;u++){for(var l in r=Object(arguments[u]))a.call(r,l)&&(s[l]=r[l]);if(n){c=n(r);for(var f=0;f<c.length;f++)i.call(r,c[f])&&(s[c[f]]=r[c[f]])}}return s}},function(e,t,r){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n,a,i,o,c;if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,u=null,l=function(){if(null!==s)try{var e=t.unstable_now();s(!0,e),s=null}catch(e){throw setTimeout(l,0),e}},f=Date.now();t.unstable_now=function(){return Date.now()-f},n=function(e){null!==s?setTimeout(n,0,e):(s=e,setTimeout(l,0))},a=function(e,t){u=setTimeout(e,t)},i=function(){clearTimeout(u)},o=function(){return!1},c=t.unstable_forceFrameRate=function(){}}else{var d=window.performance,b=window.Date,h=window.setTimeout,p=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)t.unstable_now=function(){return d.now()};else{var g=b.now();t.unstable_now=function(){return b.now()-g}}var v=!1,y=null,k=-1,w=5,x=0;o=function(){return t.unstable_now()>=x},c=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):w=0<e?Math.floor(1e3/e):5};var C=new MessageChannel,O=C.port2;C.port1.onmessage=function(){if(null!==y){var e=t.unstable_now();x=e+w;try{y(!0,e)?O.postMessage(null):(v=!1,y=null)}catch(e){throw O.postMessage(null),e}}else v=!1},n=function(e){y=e,v||(v=!0,O.postMessage(null))},a=function(e,r){k=h((function(){e(t.unstable_now())}),r)},i=function(){p(k),k=-1}}function j(e,t){var r=e.length;e.push(t);e:for(;;){var n=r-1>>>1,a=e[n];if(!(void 0!==a&&0<S(a,t)))break e;e[n]=t,e[r]=a,r=n}}function A(e){return void 0===(e=e[0])?null:e}function $(e){var t=e[0];if(void 0!==t){var r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length;n<a;){var i=2*(n+1)-1,o=e[i],c=i+1,s=e[c];if(void 0!==o&&0>S(o,r))void 0!==s&&0>S(s,o)?(e[n]=s,e[c]=r,n=c):(e[n]=o,e[i]=r,n=i);else{if(!(void 0!==s&&0>S(s,r)))break e;e[n]=s,e[c]=r,n=c}}}return t}return null}function S(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var _=[],T=[],z=1,E=null,M=3,P=!1,I=!1,N=!1;function R(e){for(var t=A(T);null!==t;){if(null===t.callback)$(T);else{if(!(t.startTime<=e))break;$(T),t.sortIndex=t.expirationTime,j(_,t)}t=A(T)}}function L(e){if(N=!1,R(e),!I)if(null!==A(_))I=!0,n(F);else{var t=A(T);null!==t&&a(L,t.startTime-e)}}function F(e,r){I=!1,N&&(N=!1,i()),P=!0;var n=M;try{for(R(r),E=A(_);null!==E&&(!(E.expirationTime>r)||e&&!o());){var c=E.callback;if(null!==c){E.callback=null,M=E.priorityLevel;var s=c(E.expirationTime<=r);r=t.unstable_now(),"function"==typeof s?E.callback=s:E===A(_)&&$(_),R(r)}else $(_);E=A(_)}if(null!==E)var u=!0;else{var l=A(T);null!==l&&a(L,l.startTime-r),u=!1}return u}finally{E=null,M=n,P=!1}}function B(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var q=c;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){I||P||(I=!0,n(F))},t.unstable_getCurrentPriorityLevel=function(){return M},t.unstable_getFirstCallbackNode=function(){return A(_)},t.unstable_next=function(e){switch(M){case 1:case 2:case 3:var t=3;break;default:t=M}var r=M;M=t;try{return e()}finally{M=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=q,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=M;M=e;try{return t()}finally{M=r}},t.unstable_scheduleCallback=function(e,r,o){var c=t.unstable_now();if("object"==typeof o&&null!==o){var s=o.delay;s="number"==typeof s&&0<s?c+s:c,o="number"==typeof o.timeout?o.timeout:B(e)}else o=B(e),s=c;return e={id:z++,callback:r,priorityLevel:e,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>c?(e.sortIndex=s,j(T,e),null===A(_)&&e===A(T)&&(N?i():N=!0,a(L,s-c))):(e.sortIndex=o,j(_,e),I||P||(I=!0,n(F))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();R(e);var r=A(_);return r!==E&&null!==E&&null!==r&&null!==r.callback&&r.startTime<=e&&r.expirationTime<E.expirationTime||o()},t.unstable_wrapCallback=function(e){var t=M;return function(){var r=M;M=t;try{return e.apply(this,arguments)}finally{M=r}}}},function(e,t){var r,n,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,u=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&b())}function b(){if(!l){var e=c(d);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||c(b)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},function(e,t,r){"use strict";var n=r(12);var a=function(e){function t(e,t,n){var a=t.trim().split(h);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var c=0;for(e=0===o?"":e[0]+" ";c<i;++c)t[c]=r(e,t[c],n).trim();break;default:var s=c=0;for(t=[];c<i;++c)for(var u=0;u<o;++u)t[s++]=r(e[u]+" ",a[c],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(p,"$1"+e.trim());case 58:return e.trim()+t.replace(p,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(p,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,i){var o=e+";",c=2*t+3*r+4*i;if(944===c){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===_||2===_&&a(s,1)?"-webkit-"+s+s:s}if(0===_||2===_&&!a(o,1))return o;switch(c){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(j,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return d.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(y,"tb");break;case 232:s=o.replace(y,"tb-rl");break;case 220:s=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,c=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(x,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(x,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,i).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+i&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),M(2!==t?n:n.replace(C,"$1"),r,t)}function i(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function o(e,t,r,n,a,i,o,c,u,l){for(var f,d=0,b=t;d<E;++d)switch(f=z[d].call(s,e,b,r,n,a,i,o,c,u,l)){case void 0:case!1:case!0:case null:break;default:b=f}if(b!==t)return b}function c(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!=typeof e?_=1:(_=2,M=e):_=0),c}function s(e,r){var c=e;if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<E){var s=o(-1,r,c,c,$,A,0,0,0,0);void 0!==s&&"string"==typeof s&&(r=s)}var f=function e(r,c,s,f,d){for(var b,h,p,y,w,x=0,C=0,O=0,j=0,z=0,M=0,I=p=b=0,N=0,R=0,L=0,F=0,B=s.length,q=B-1,W="",D="",G="",J="";N<B;){if(h=s.charCodeAt(N),N===q&&0!==C+j+O+x&&(0!==C&&(h=47===C?10:47),j=O=x=0,B++,q++),0===C+j+O+x){if(N===q&&(0<R&&(W=W.replace(l,"")),0<W.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:W+=s.charAt(N)}h=59}switch(h){case 123:for(b=(W=W.trim()).charCodeAt(0),p=1,F=++N;N<B;){switch(h=s.charCodeAt(N)){case 123:p++;break;case 125:p--;break;case 47:switch(h=s.charCodeAt(N+1)){case 42:case 47:e:{for(I=N+1;I<q;++I)switch(s.charCodeAt(I)){case 47:if(42===h&&42===s.charCodeAt(I-1)&&N+2!==I){N=I+1;break e}break;case 10:if(47===h){N=I+1;break e}}N=I}}break;case 91:h++;case 40:h++;case 34:case 39:for(;N++<q&&s.charCodeAt(N)!==h;);}if(0===p)break;N++}switch(p=s.substring(F,N),0===b&&(b=(W=W.replace(u,"").trim()).charCodeAt(0)),b){case 64:switch(0<R&&(W=W.replace(l,"")),h=W.charCodeAt(1)){case 100:case 109:case 115:case 45:R=c;break;default:R=T}if(F=(p=e(c,R,p,h,d+1)).length,0<E&&(w=o(3,p,R=t(T,W,L),c,$,A,F,h,d,f),W=R.join(""),void 0!==w&&0===(F=(p=w.trim()).length)&&(h=0,p="")),0<F)switch(h){case 115:W=W.replace(k,i);case 100:case 109:case 45:p=W+"{"+p+"}";break;case 107:p=(W=W.replace(m,"$1 $2"))+"{"+p+"}",p=1===_||2===_&&a("@"+p,3)?"@-webkit-"+p+"@"+p:"@"+p;break;default:p=W+p,112===f&&(D+=p,p="")}else p="";break;default:p=e(c,t(c,W,L),p,f,d+1)}G+=p,p=L=R=I=b=0,W="",h=s.charCodeAt(++N);break;case 125:case 59:if(1<(F=(W=(0<R?W.replace(l,""):W).trim()).length))switch(0===I&&(b=W.charCodeAt(0),45===b||96<b&&123>b)&&(F=(W=W.replace(" ",":")).length),0<E&&void 0!==(w=o(1,W,c,r,$,A,D.length,f,d,f))&&0===(F=(W=w.trim()).length)&&(W="\0\0"),b=W.charCodeAt(0),h=W.charCodeAt(1),b){case 0:break;case 64:if(105===h||99===h){J+=W+s.charAt(N);break}default:58!==W.charCodeAt(F-1)&&(D+=n(W,b,h,W.charCodeAt(2)))}L=R=I=b=0,W="",h=s.charCodeAt(++N)}}switch(h){case 13:case 10:47===C?C=0:0===1+b&&107!==f&&0<W.length&&(R=1,W+="\0"),0<E*P&&o(0,W,c,r,$,A,D.length,f,d,f),A=1,$++;break;case 59:case 125:if(0===C+j+O+x){A++;break}default:switch(A++,y=s.charAt(N),h){case 9:case 32:if(0===j+x+C)switch(z){case 44:case 58:case 9:case 32:y="";break;default:32!==h&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===j+C+x&&(R=L=1,y="\f"+y);break;case 108:if(0===j+C+x+S&&0<I)switch(N-I){case 2:112===z&&58===s.charCodeAt(N-3)&&(S=z);case 8:111===M&&(S=M)}break;case 58:0===j+C+x&&(I=N);break;case 44:0===C+O+j+x&&(R=1,y+="\r");break;case 34:case 39:0===C&&(j=j===h?0:0===j?h:j);break;case 91:0===j+C+O&&x++;break;case 93:0===j+C+O&&x--;break;case 41:0===j+C+x&&O--;break;case 40:if(0===j+C+x){if(0===b)switch(2*z+3*M){case 533:break;default:b=1}O++}break;case 64:0===C+O+j+x+I+p&&(p=1);break;case 42:case 47:if(!(0<j+x+O))switch(C){case 0:switch(2*h+3*s.charCodeAt(N+1)){case 235:C=47;break;case 220:F=N,C=42}break;case 42:47===h&&42===z&&F+2!==N&&(33===s.charCodeAt(F+2)&&(D+=s.substring(F,N+1)),y="",C=0)}}0===C&&(W+=y)}M=z,z=h,N++}if(0<(F=D.length)){if(R=c,0<E&&(void 0!==(w=o(2,D,R,r,$,A,F,f,d,f))&&0===(D=w).length))return J+D+G;if(D=R.join(",")+"{"+D+"}",0!=_*S){switch(2!==_||a(D,2)||(S=0),S){case 111:D=D.replace(v,":-moz-$1")+D;break;case 112:D=D.replace(g,"::-webkit-input-$1")+D.replace(g,"::-moz-$1")+D.replace(g,":-ms-input-$1")+D}S=0}}return J+D+G}(T,c,r,0,0);return 0<E&&(void 0!==(s=o(-2,f,c,c,$,A,f.length,0,0,0))&&(f=s)),"",S=0,A=$=1,f}var u=/^\0+/g,l=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,b=/([,: ])(transform)/g,h=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,x=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,A=1,$=1,S=0,_=1,T=[],z=[],E=0,M=null,P=0;return s.use=function e(t){switch(t){case void 0:case null:E=z.length=0;break;default:if("function"==typeof t)z[E++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else P=0|!!t}return e},s.set=c,void 0!==e&&c(e),s};function i(e){e&&o.current.insert(e+"}")}var o={current:null},c=function(e,t,r,n,a,c,s,u,l,f){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return o.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===u)return t+"/*|*/";break;case 3:switch(u){case 102:case 112:return o.current.insert(r[0]+t),"";default:return t+(0===f?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(i)}};t.a=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var i=new a(t);var s,u={};s=e.container||document.head;var l,f=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(f,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){u[e]=!0})),e.parentNode!==s&&s.appendChild(e)})),i.use(e.stylisPlugins)(c),l=function(e,t,r,n){var a=t.name;o.current=r,i(e,t.styles),n&&(d.inserted[a]=!0)};var d={key:r,sheet:new n.a({key:r,container:s,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:u,registered:{},insert:l};return d}},function(e,t,r){"use strict";e.exports=r(18)},function(e,t){var r=1e3,n=6e4,a=60*n,i=24*a;function o(e,t,r,n){var a=t>=1.5*r;return Math.round(e/r)+" "+n+(a?"s":"")}e.exports=function(e,t){t=t||{};var c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var o=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"weeks":case"week":case"w":return 6048e5*o;case"days":case"day":case"d":return o*i;case"hours":case"hour":case"hrs":case"hr":case"h":return o*a;case"minutes":case"minute":case"mins":case"min":case"m":return o*n;case"seconds":case"second":case"secs":case"sec":case"s":return o*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return o(e,t,i,"day");if(t>=a)return o(e,t,a,"hour");if(t>=n)return o(e,t,n,"minute");if(t>=r)return o(e,t,r,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=a)return Math.round(e/a)+"h";if(t>=n)return Math.round(e/n)+"m";if(t>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(15),i=r(0),o=r(6),c=r.n(o),s=r(13),u=r(3);var l=({children:e})=>Object(i.c)("div",{css:f},Object(i.c)("h1",{css:b}),Object(i.c)("p",{css:h}),Object(i.c)("div",{css:d},e),Object(i.c)("p",{css:h}));const f=Object(i.b)({backgroundImage:"url(./images/index/bg.png)",backgroundSize:"cover",animation:u.a.moveBackground+" 30s linear infinite alternate",height:"100vh",position:"relative",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"},";label:wrapperStyle;"),d={name:"1bt27t6-contentStyle",styles:"width:90%;max-width:400px;margin:0 auto;;label:contentStyle;"},b=Object(i.b)({margin:0,marginBottom:-8,color:u.c.lightblue,fontSize:"2.5rem"},";label:headStyle;"),h=Object(i.b)({margin:"16px auto",color:u.c.lightblue,fontSize:"1.2rem"},";label:pStyle;");var p=r(8);var m=e=>{const[t,r]=Object(n.useState)(""),[a,o]=Object(n.useState)(""),[c,s]=Object(n.useState)("sfu"),[u,l]=Object(n.useState)(!0),[f,d]=Object(n.useState)(!0);return Object(i.c)("form",{css:g,onSubmit:r=>{r.preventDefault(),e.onSubmit({mode:c,id:t})}},Object(i.c)("div",{css:v},Object(i.c)("div",null,"会議室名"),Object(i.c)("input",{type:"text",value:t,placeholder:"room-name",onChange:e=>r(e.target.value),onBlur:()=>l(Object(p.a)(t)),required:!0,maxLength:p.d,pattern:p.f,css:y})),Object(i.c)("div",{css:v},Object(i.c)("div",null,"パスワード"),Object(i.c)("input",{type:"text",value:a,placeholder:"room-password",onChange:e=>o(e.target.value),onBlur:()=>d(Object(p.b)(a)),required:!0,maxLength:p.e,pattern:p.g,css:k})),Object(i.c)("div",{css:w},Object(i.c)("button",{css:x,type:"submit",disabled:!Object(p.a)(t)||!Object(p.b)(a)},"会議室に入室")))};const g=Object(i.b)({backgroundColor:u.c.white,border:"1px solid "+u.c.gray,padding:16,borderRadius:2},";label:wrapperStyle;"),v={name:"gz04jy-itemStyle",styles:"display:grid;align-items:center;grid-template-columns:88px 1fr;height:40px;margin-bottom:4px;;label:itemStyle;"},y=Object(i.b)({width:"100%",boxSizing:"border-box",appearance:"none",border:0,borderBottom:"1px solid "+u.c.gray,fontSize:"1.2rem",padding:"4px 8px","&:focus":{borderColor:u.c.blue}},";label:roomIdStyle;"),k=Object(i.b)({width:"100%",boxSizing:"border-box",appearance:"none",border:0,borderBottom:"1px solid "+u.c.gray,fontSize:"1.2rem",padding:"4px 8px","&:focus":{borderColor:u.c.blue}},";label:roomPasswordStyle;"),w=(u.c.red,{name:"hqok2y-buttonWrapStyle",styles:"margin-top:24px;;label:buttonWrapStyle;"}),x=Object(i.b)({backgroundColor:u.c.blue,color:u.c.white,height:40,border:0,cursor:"pointer",padding:"0 24px",fontSize:"1.2rem",borderRadius:2,"&:disabled":{backgroundColor:u.c.gray,cursor:"not-allowed"}},";label:createButtonStyle;");var C=()=>{const e={enterConference(e){location.href=`conf.html#!/${e.mode}/${e.id}`}};return Object(i.c)(l,null,Object(i.c)(m,{onSubmit:t=>e.enterConference(t)}))};const O=c()("main");(async()=>{O(`${s.a} v${s.b}`),Object(a.render)(Object(i.c)(n.StrictMode,null,Object(i.c)(i.a,{styles:u.d}),Object(i.c)(C,null)),document.getElementById("app-root"))})().catch(e=>console.error(e))}]);