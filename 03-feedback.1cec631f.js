!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var o=r("eaxEB"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u=document.querySelector(".feedback-form"),d=e(o)((function(){var e={email:l.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);l.addEventListener("input",d),i.addEventListener("input",d),u.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");var t={email:l.value,message:i.value};console.log(t),l.value="",i.value=""})),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);l.value=t.email,i.value=t.message}}))}();
//# sourceMappingURL=03-feedback.1cec631f.js.map
