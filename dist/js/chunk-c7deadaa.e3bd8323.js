(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7deadaa"],{"0e60":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,i,a){var c=Object(r["resolveComponent"])("KTModalsCard"),l=Object(r["resolveComponent"])("KTShareAndEarnModal");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,{title:"Share & Earn Modal Example",description:"Click on the below buttons to launch <br/>a share & earn example.",image:"media/illustrations/sketchy-1/9.png","button-text":"Share & Earn","modal-id":"kt_modal_share_earn"}),Object(r["createVNode"])(l)],64)}var i=n("ffed"),a={class:"modal fade",id:"kt_modal_share_earn",tabindex:"-1","aria-hidden":"true"},c={class:"modal-dialog modal-dialog-centered mw-800px"},l={class:"modal-content"},s={class:"modal-header pb-0 border-0 justify-content-end"},u={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},d={class:"svg-icon svg-icon-1"},f={class:"modal-body scroll-y pt-0 pb-15"},m={class:"mw-lg-600px mx-auto"},h=Object(r["createElementVNode"])("div",{class:"mb-13 text-center"},[Object(r["createElementVNode"])("h1",{class:"mb-3"},"Share & Earn"),Object(r["createElementVNode"])("div",{class:"text-gray-400 fw-bold fs-5"},[Object(r["createTextVNode"])(" If you need more info, please check "),Object(r["createElementVNode"])("a",{href:"#",class:"link-primary fw-bolder"},"Author Commision"),Object(r["createTextVNode"])(". ")])],-1),p={class:"mb-10"},b=Object(r["createElementVNode"])("h4",{class:"fs-5 fw-bold text-gray-800"}," Share my referral link with friends ",-1),v={class:"d-flex"},y={ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:"https://keenthemes.com/?ref=skitechnology"},g={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bolder flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},k=Object(r["createStaticVNode"])('<div class="d-flex"><a href="#" class="btn btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-15px me-3"> Import Contacts </a><a href="#" class="btn btn-icon btn-facebook w-100 mx-6"><img alt="Logo" src="media/svg/brand-logos/facebook-2.svg" class="h-20px me-3"> Facebook </a><a href="#" class="btn btn-icon btn-twitter w-100"><img alt="Logo" src="media/svg/brand-logos/twitter.svg" class="h-20px me-3"> Twitter </a></div><div class="d-flex align-items-center mt-10"><div class="flex-grow-1"><span class="fs-6 fw-bold text-gray-800 d-block">Adding Users by Team Members</span><span class="fs-7 fw-bold text-gray-400">If you need more info, please check budget planning</span></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked="checked"><span class="form-check-label"> Allowed </span></label></div>',2);function E(e,t,n,o,i,E){var x=Object(r["resolveComponent"])("inline-svg");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("span",d,[Object(r["createVNode"])(x,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",m,[h,Object(r["createElementVNode"])("div",p,[b,Object(r["createElementVNode"])("div",v,[Object(r["createElementVNode"])("input",y,null,512),Object(r["createElementVNode"])("button",g," Copy Link ",512)])]),k])])])])])}var x=n("b311"),O=n.n(x),w=Object(r["defineComponent"])({name:"share-and-earn-modal",components:{},setup:function(){var e=Object(r["ref"])(null),t=Object(r["ref"])(null);return Object(r["onMounted"])((function(){var n=new O.a(e.value);n.on("success",(function(n){var r,o,i,a=null===(r=e.value)||void 0===r?void 0:r.innerHTML;null===(o=t.value)||void 0===o||o.classList.add("bg-success"),null===(i=t.value)||void 0===i||i.classList.add("text-inverse-success"),e.value&&(e.value.innerHTML="Copied!"),setTimeout((function(){var n,r;e.value&&a&&(e.value.innerHTML=a),null===(n=t.value)||void 0===n||n.classList.remove("bg-success"),null===(r=t.value)||void 0===r||r.classList.remove("text-inverse-success")}),3e3),n.clearSelection()}))})),{copyButtonRef:e,inputRef:t}}}),j=n("6b0d"),S=n.n(j);const T=S()(w,[["render",E]]);var _=T,N=n("fd34"),A=Object(r["defineComponent"])({name:"share-and-earn",components:{KTModalsCard:i["a"],KTShareAndEarnModal:_},setup:function(){Object(r["onMounted"])((function(){Object(N["a"])("Share & Earn",["Modals","General"])}))}});const C=S()(A,[["render",o]]);t["default"]=C},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(){var e={134:function(e,t,n){"use strict";n.d(t,{default:function(){return _}});var r=n(279),o=n.n(r),i=n(370),a=n.n(i),c=n(817),l=n.n(c);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}var m=function(){function e(t){u(this,e),this.resolveOptions(t),this.initSelection()}return f(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=l()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=l()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==s(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),h=m;function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function E(e){var t=w();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function S(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var T=function(e){g(n,e);var t=E(n);function n(e,r){var o;return b(this,n),o=t.call(this),o.resolveOptions(r),o.listenClick(e),o}return y(n,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new h({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return S("action",e)}},{key:"defaultTarget",value:function(e){var t=S("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return S("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),n}(o()),_=T},828:function(e){var t=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(e,n){while(e&&e.nodeType!==t){if("function"===typeof e.matches&&e.matches(n))return e;e=e.parentNode}}e.exports=r},438:function(e,t,n){var r=n(828);function o(e,t,n,r,o){var i=a.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function i(e,t,n,r,i){return"function"===typeof e.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}function a(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=i},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},370:function(e,t,n){var r=n(879),o=n(438);function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return a(e,t,n);if(r.nodeList(e))return c(e,t,n);if(r.string(e))return l(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function c(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function l(e,t,n){return o(document.body,e,t,n)}e.exports=i},817:function(e){function t(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}e.exports=t},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,a=r.length;i<a;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),n(134)}().default}))},fd34:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n("0613"),o=n("38e0"),i=function(e,t){r["a"].dispatch(o["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},a=function(e){r["a"].dispatch(o["a"].SET_BREADCRUMB_ACTION,{title:e})}},ffed:function(e,t,n){"use strict";var r=n("7a23"),o={class:"card"},i={class:"card-body p-0"},a={class:"card-px text-center py-20 my-10"},c={class:"fs-2x fw-bolder mb-10"},l={class:"text-gray-400 fs-5 fw-bold mb-13"},s=["innerHTML"],u=["data-bs-target"],d={class:"text-center px-5"},f=["src"];function m(e,t,n,m,h,p){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("h2",c,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("p",l,[Object(r["createElementVNode"])("span",{innerHTML:e.description},null,8,s)]),Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#"+e.modalId},Object(r["toDisplayString"])(e.buttonText),9,u)]),Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,f)])])])}var h=Object(r["defineComponent"])({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),p=n("6b0d"),b=n.n(p);const v=b()(h,[["render",m]]);t["a"]=v}}]);
//# sourceMappingURL=chunk-c7deadaa.e3bd8323.js.map