var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var i,o,r,u,f,a,c=0,l=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):u}function w(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-c>=r}function T(){var e=p();if(w(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return v?d(n,r-(e-c)):n}(e))}function h(e){return f=void 0,g&&i?b(e):(i=o=void 0,u)}function x(){var e=p(),n=w(e);if(i=arguments,o=this,a=e,n){if(void 0===f)return j(a);if(v)return f=setTimeout(T,t),b(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=m(t)||0,y(n)&&(l=!!n.leading,r=(v="maxWait"in n)?s(m(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},x.flush=function(){return void 0===f?u:h(p())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||r.test(e)?u(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector("iframe"),b=new Vimeo.Player(g);b.on("timeupdate",t((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(e.seconds)}),2e3));let j=localStorage.getItem("videoplayer-current-time");b.setCurrentTime(j);
//# sourceMappingURL=02-video.17ac2d22.js.map
