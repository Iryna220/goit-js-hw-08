function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,u=setTimeout(E,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function E(){var e=v();if(w(e))return j(e);u=setTimeout(E,function(e){var n=t-(e-f);return s?d(n,i-(e-l)):n}(e))}function j(e){return u=void 0,p&&r?b(e):(r=o=void 0,a)}function S(){var e=v(),n=w(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(E,t),b(f)}return void 0===u&&(u=setTimeout(E,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:j(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector("form"),emailEl:document.querySelector("input"),textarea:document.querySelector("textarea")};b.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.emailEl.value||""===b.textarea.value)return alert("Заповніть всі поля, будь-ласка");console.log({email:b.emailEl.value.toLocaleLowerCase().trim(),message:b.textarea.value}),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),b.form.addEventListener("input",e(t)((function(){const e={email:b.emailEl.value.toLocaleLowerCase().trim(),message:b.textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{},{email:t,message:n}=e;e&&(b.emailEl.value=t||"",b.textarea.value=n||"")}();
//# sourceMappingURL=03-feedback.29b95104.js.map
