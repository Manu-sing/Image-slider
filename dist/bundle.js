(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'body {\n    margin:0;\n    box-sizing: border-box;\n}\n\nh1 {\n    text-align: center;\n    font-family: "Roboto thin", sans-serif;\n    letter-spacing: 6px;\n    text-transform: uppercase;\n}\n\n.wrapper {\n    width: 100%;\n    overflow: hidden;\n}\n\n.slides-container {\n    height: 600px;\n    width: 100vw;\n    transition: 900ms cubic-bezier(0.48, 0.15, 0.18, 1);\n    position: relative;\n}\n\n.slide-image {\n height: 100%;\n width: 100%;\n position: absolute; /*this will make it relative to the parent element .slide-container and all the images will be stuck on top of one another */\n}\n\n\n.slide-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.prev-btn,\n.next-btn {\n    background-color: lightgrey;\n    padding: 16px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%); /* from the position of top 50% this will shift it up on the Y axes of -50% so that it will be perfectly centered */\n    font-size: 20px;\n    box-sizing: 0 4px 8px rgba(0, 0, 0, 0.6);\n    z-index: 100; /* like this the button arrows will always be on top */\n    cursor: pointer;\n    transition: 400ms; /* because we will use a hover effect for this button */\n}\n\n.prev-btn:hover,\n.next-btn:hover {\n    background-color: darkgrey;\n}\n\n.prev-btn {\n    left: 0;\n}\n\n.next-btn {\n    right: 0;\n}\n\n/* navigation dots */\n.navigation-dots {\n    display: flex;\n    height: 32px;\n    align-items: center;\n    justify-content: center;\n    margin: 16px 0;\n   \n\n\n}\n\n.single-dot {\n    background-color: #333;\n    height: 16px;\n    width: 16px;\n    margin: 0 8px;\n    border: 2px solid #000;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: 400ms; /* for hover effect */\n}\n\n.single-dot.active {\n    background-color: #eee;\n}\n\n',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},507:(e,n,t)=>{e.exports=t.p+"3f3670f03c0d0164ca5c.jpg"},65:(e,n,t)=>{e.exports=t.p+"37797fc44b0f43f9330b.jpg"},92:(e,n,t)=>{e.exports=t.p+"287e5a2e15bea1eb9020.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,t(507),t(65),t(92),window.addEventListener("resize",(function(){window.location.reload()}));const v=document.querySelectorAll(".slide-image"),m=document.querySelector(".slides-container"),g=document.querySelector(".next-btn"),b=document.querySelector(".prev-btn"),y=document.querySelector(".navigation-dots");let x=v.length,w=v[0].clientWidth,S=0;function E(e){m.style.transform="translateX(-"+w*e+"px)",S=e,document.querySelector(".slide-image.active").classList.remove("active"),v[S].classList.add("active"),document.querySelector(".single-dot.active").classList.remove("active"),y.children[S].classList.add("active")}v.forEach(((e,n)=>{e.style.left=100*n+"%"})),v[0].classList.add("active"),function(){for(let e=0;e<x;e++){const n=document.createElement("div");n.classList.add("single-dot"),y.appendChild(n),n.addEventListener("click",(()=>{E(e)}))}y.children[0].classList.add("active")}(),g.addEventListener("click",(()=>{S>=x-1?E(0):(S++,E(S))})),b.addEventListener("click",(()=>{S<=0?E(x-1):(S--,E(S))}))})()})();