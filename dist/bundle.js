(()=>{"use strict";var e={379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],d=n.base?i[0]+n.base:i[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=r(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=a(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}s.push(u)}return s}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=r(o[s]);t[c].references--}for(var i=n(e,a),d=0;d<o.length;d++){var l=r(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},636:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={};r.r(e);var t=r(379),n=r.n(t),a=r(795),o=r.n(a),s=r(569),c=r.n(s),i=r(636),d=r.n(i),l=r(216),u=r.n(l),p=r(589),f=r.n(p),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),n()(e.default,v),e.default&&e.default.locals&&e.default.locals;const m=document.createElement("textarea"),y=[];function h(e,t,r,n){const a=document.querySelector(`.raw:nth-child(${e}) .button:nth-child(${t})`);a.classList.add("dark"),a.setAttribute("id",r),a.innerHTML=n,a.addEventListener("click",(()=>{switch(a.classList.add("active"),a.addEventListener("animationend",(()=>a.classList.remove("active"))),a.getAttribute("id")){case"Backspace":y.pop(),m.value=y.join("");break;case"Tab":y.push("        "),m.value=y.join("");break;case"Delete":default:break;case"CapsLock":document.querySelectorAll(".button").forEach((e=>e.classList.toggle("caps")));break;case"Enter":y.push("\n"),m.value=y.join("");break;case"ArrowUp":y.push("↑"),m.value=y.join("");break;case"ArrowLeft":y.push("←"),m.value=y.join("");break;case"ArrowDown":y.push("↓"),m.value=y.join("");break;case"ArrowRight":y.push("→"),m.value=y.join("")}}))}function b(e,t,r,n){const a=document.querySelector(`.raw:nth-child(${e}) .button:nth-child(${t})`);a.innerHTML=`${r}`,a.setAttribute("id",`${n}`),a.addEventListener("click",(()=>{a.classList.contains("caps")?y.push(`${r}`.toUpperCase()):y.push(`${r}`.toLowerCase()),m.value=y.join(""),a.classList.add("active")})),a.addEventListener("animationend",(()=>a.classList.remove("active")))}function L(e){const t=document.querySelector(`.raw:nth-child(1) .button:nth-child(${e})`);t.addEventListener("click",(()=>{y.push(t.innerHTML),m.value=y.join(""),t.classList.add("active"),t.addEventListener("animationend",(()=>t.classList.remove("active")))}))}const E=document.querySelector("body"),S=document.createElement("div"),w=document.createElement("div");S.classList.add("container"),w.classList.add("keyboard"),m.classList.add("textarea"),m.setAttribute("autofocus",""),E.append(S),S.append(m),S.append(w),function(){for(let e=0;e<5;e+=1){const e=document.createElement("div");e.classList.add("raw"),w.append(e)}for(let e=0;e<14;e+=1){const t=document.createElement("div");t.classList.add("button"),document.querySelector(".raw:first-child").append(t),e>0&&e<11&&(t.innerHTML=e,t.setAttribute("id",`Digit${e}`),L(e)),10===e&&(t.innerHTML=0,t.setAttribute("id","Digit0"),L(e+1))}for(let e=0;e<15;e+=1){const e=document.createElement("div");e.classList.add("button"),document.querySelector(".raw:nth-child(2)").append(e)}for(let e=0;e<13;e+=1){const e=document.createElement("div");e.classList.add("button"),document.querySelector(".raw:nth-child(3)").append(e)}for(let e=0;e<13;e+=1){const e=document.createElement("div");e.classList.add("button"),document.querySelector(".raw:nth-child(4)").append(e)}for(let e=0;e<9;e+=1){const e=document.createElement("div");e.classList.add("button"),document.querySelector(".raw:last-child").append(e)}h("1","14","Backspace","Backspace"),h("1","1","Backquote","`"),h("2","1","Tab","Tab"),h("2","15","Delete","DEL"),h("3","1","CapsLock","CapsLock"),h("3","13","Enter","ENTER"),h("4","1","ShiftLeft","Shift"),h("4","12","ArrowUp","&uarr;"),h("4","13","ShiftRight","Shift"),h("5","1","ControlLeft","Ctrl"),h("5","2","MetaLeft","Win"),h("5","3","AltLeft","Alt"),h("5","5","AltRight","Alt"),h("5","6","ControlRight","Ctrl"),h("5","7","ArrowLeft","&larr;"),h("5","8","ArrowDown","&darr;"),h("5","9","ArrowRight","&rarr;"),b("1","12","-","Minus"),b("1","13","=","Equal"),b("2","2","Q","KeyQ"),b("2","3","W","KeyW"),b("2","4","E","KeyE"),b("2","5","R","KeyR"),b("2","6","T","KeyT"),b("2","7","Y","KeyY"),b("2","8","U","KeyU"),b("2","9","I","KeyI"),b("2","10","O","KeyO"),b("2","11","P","KeyP"),b("2","12","[","BracketLeft"),b("2","13","]","BracketRight"),b("2","14","\\","Backslash"),b("3","2","A","KeyA"),b("3","3","S","KeyS"),b("3","4","D","KeyD"),b("3","5","F","KeyF"),b("3","6","G","KeyG"),b("3","7","H","KeyH"),b("3","8","J","KeyJ"),b("3","9","K","KeyK"),b("3","10","L","KeyL"),b("3","11",";","Semicolon"),b("3","12","'","Quote"),b("4","2","Z","KeyZ"),b("4","3","X","KeyX"),b("4","4","C","KeyC"),b("4","5","V","KeyV"),b("4","6","B","KeyB"),b("4","7","N","KeyN"),b("4","8","M","KeyM"),b("4","9",",","Comma"),b("4","10",".","Period"),b("4","11","/","Slash"),b("5","4"," ","Space"),document.addEventListener("keydown",(e=>{document.querySelectorAll(".button").forEach((t=>{t.getAttribute("id")===e.code&&t.classList.add("active")}))})),document.addEventListener("keyup",(()=>{document.querySelectorAll(".button").forEach((e=>e.classList.remove("active")))}))}()})()})();
//# sourceMappingURL=bundle.js.map