!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t){class n{constructor(e,t,n){this.selector=Date.now(),this.targetDate=new Date(e,t,n).getTime()}}const r=document.querySelector('span[data-value="days"]'),o=document.querySelector('span[data-value="hours"]'),u=document.querySelector('span[data-value="mins"]'),a=document.querySelector('span[data-value="secs"]');setInterval(()=>{const e=new n(2020,9,30),t=e.targetDate-e.selector,c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),i=Math.floor(t%36e5/6e4),f=Math.floor(t%6e4/1e3);r.textContent=c,o.textContent=l,u.textContent=i,a.textContent=f},1e3)},function(e,t,n){}]);
//# sourceMappingURL=main.bundle.js.map