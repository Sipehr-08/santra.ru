/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{402:function(t,e,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3962eada",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";var r={created:function(){"undefined"!=typeof document&&l(this,(function(t,e){var n,r,l,d;n=document,r=t,l=e,d=o?{passive:!1}:void 0,n.addEventListener(r,l,d)}))},beforeDestroy:function(){"undefined"!=typeof document&&l(this,(function(t,e){var n,r,l,d;n=document,r=t,l=e,d=o?{passive:!1}:void 0,n.removeEventListener(r,l,d)}))}},o="undefined"!=typeof window&&function(){var t=!1;try{var desc={get:function(){t=!0}},e=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){t=!1}return t}();function l(t,e){var n=t.$options.events;Object.keys(n).forEach((function(r){e(r,(function(e){return n[r].call(t,e)}))}))}function d(t,base){var e=base.getBoundingClientRect();return{left:t.clientX-e.left,top:t.clientY-e.top}}var c={mixins:[r],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return d(t,this.$el)},offsetByTouch:function(t){return d(0===t.touches.length?t.changedTouches[0]:t.touches[0],this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return function(t,e,n,r){if(t<=e)return e;var o=Math.floor((n-e)/r)*r+e;if(t>=o)return o;var l=(t-e)/r,d=Math.floor(l),c=l-d;return 0===c?t:c<.5?r*d+e:r*(d+1)+e}(t,this._min,this._max,this._step)}},components:{DragHelper:c}};t.exports=f},438:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("ccf3550a",content,!0,{sourceMap:!1})},439:function(t,e,n){var r=n(17)(!1);r.push([t.i,".range-slider{display:inline-block;padding:0 10px;height:20px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;position:relative;height:100%;width:100%}.range-slider-fill,.range-slider-rail{display:block;position:absolute;top:50%;left:0;height:4px;border-radius:2px;transform:translateY(-50%)}.range-slider-rail{width:100%;background-color:#e2e2e2}.range-slider-fill{background-color:#21fb92}.range-slider-knob{display:block;position:absolute;top:50%;left:0;box-sizing:border-box;height:20px;width:20px;border:1px solid #f5f5f5;border-radius:50%;background-color:#fff;box-shadow:1px 1px rgba(0,0,0,.2);transform:translate(-50%,-50%);cursor:pointer}.range-slider-hidden{display:none}",""]),t.exports=r},440:function(t,e,n){"use strict";n(402)},441:function(t,e,n){var r=n(17),o=n(118),l=n(442),d=r(!1),c=o(l);d.push([t.i,".content_certify{width:90%;max-width:1200px;margin:0 auto}.cd-image{position:relative}.cd-handle{width:90%!important;z-index:99;position:absolute;text-align:center;left:5%;top:50%;transform:translateY(-50%)}.range-slider-fill,.range-slider-rail{visibility:hidden!important}.range-slider-knob{background:url("+c+") no-repeat 100%!important;background-position:50%!important;background-color:red!important;width:40px!important;cursor:all-scroll!important;border:none!important;box-shadow:0 0 0 6px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.6),inset 0 1px 0 hsla(0,0%,100%,.3)!important;height:40px!important}.range-slider-knob:hover{background-color:#445b7c!important}.fake_original_block.is-active .cd-resize-img{-webkit-animation:cd-bounce-in .7s;animation:cd-bounce-in .7s;width:50%}.cd-handle{transform:translateZ(0) scale(0)}.fake_original_block.is-active .cd-handle{transform:translateZ(0) scale(1);transition:transform .3s .7s,opacity 0s .7s}@-webkit-keyframes cd-bounce-in{0%{width:0}60%{width:55%}to{width:50%}}@keyframes cd-bounce-in{0%{width:0}60%{width:55%}to{width:50%}}",""]),t.exports=d},442:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxMywyMSA4LDE2IDEzLDExICIvPgo8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE5LDExIDI0LDE2IDE5LDIxICIvPgo8L3N2Zz4="},494:function(t,e,n){"use strict";n.r(e);n(68),n(16),n(27);var r=n(437),o=n.n(r);n(438);function l(){document.querySelectorAll(".fake_original_block").forEach((function(t){t.offsetTop-400<=window.pageYOffset&&t.classList.add("is-active")}))}var d=n(1).default.extend({layout:"default",components:{RangeSlider:o.a},data:function(){return{items:"",sliderValue:50,mains:""}},mounted:function(){var t=this;this.$axios.get("https://project.a-lux.dev/api/fake").then((function(e){t.items=e.data,t.mains=e.data.main})),setTimeout((function(){t.$nextTick((function(){l()}))}),1e3),window.addEventListener("scroll",l)}}),c=(n(440),n(9)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content certify content_certify"},[n("div",{staticClass:"fake_original_block"},[n("h1",[t._v(t._s(t.mains.title))]),t._v(" "),n("p",[t._v(t._s(t.mains.content))])]),t._v(" "),t._l(t.items.sections,(function(e){return n("div",{key:e.id,ref:e.id,refInFor:!0,staticClass:"fake_original_block"},[n("figure",{staticClass:"cd-image-container"},[n("div",{staticClass:"cd-image"},[n("img",{attrs:{src:e.origin,alt:"Original Image"}}),t._v(" "),n("range-slider",{staticClass:"cd-handle",attrs:{"start-animation":!0,min:"0",max:"100",step:"0.1"},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}},[t._v(">")])],1),t._v(" "),100!==t.sliderValue?n("span",{staticClass:"cd-image-label"},[t._v("Оригинал")]):t._e(),t._v(" "),n("div",{staticClass:"cd-resize-img",style:{width:t.sliderValue+"%"}},[n("img",{attrs:{src:e.fake,alt:"Modified Image"}}),t._v(" "),0!==t.sliderValue?n("span",{staticClass:"cd-image-label"},[t._v("Подделка")]):t._e()])]),t._v(" "),n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);