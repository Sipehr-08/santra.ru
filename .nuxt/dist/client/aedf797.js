/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{375:function(e,t,n){!function(e,t,n){"use strict";var o;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,function(e){e.SwiperComponent="Swiper",e.SwiperSlideComponent="SwiperSlide",e.SwiperDirective="swiper",e.SwiperInstance="$swiper"}(o||(o={}));var r,l,d=Object.freeze({containerClass:"swiper-container",wrapperClass:"swiper-wrapper",slideClass:"swiper-slide"});(function(e){e.Ready="ready",e.ClickSlide="clickSlide"})(r||(r={})),function(e){e.AutoUpdate="autoUpdate",e.AutoDestroy="autoDestroy",e.DeleteInstanceOnDestroy="deleteInstanceOnDestroy",e.CleanupStylesOnDestroy="cleanupStylesOnDestroy"}(l||(l={}));var c=["init","beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize","observerUpdate","beforeLoopFix","loopFix"];function v(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],o=0,r=a.length;o<r;o++,n++)t[n]=a[o];return t}var f,w=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()},h=function(e,t,n){var o,l,d;if(e&&!e.destroyed){var c=(null===(o=t.composedPath)||void 0===o?void 0:o.call(t))||t.path;if((null==t?void 0:t.target)&&c){var v=Array.from(e.slides),f=Array.from(c);if(v.includes(t.target)||f.some((function(e){return v.includes(e)}))){var h=e.clickedIndex,S=Number(null===(d=null===(l=e.clickedSlide)||void 0===l?void 0:l.dataset)||void 0===d?void 0:d.swiperSlideIndex),y=Number.isInteger(S)?S:null;n(r.ClickSlide,h,y),n(w(r.ClickSlide),h,y)}}}},S=function(e,t){c.forEach((function(n){e.on(n,(function(){for(var e=arguments,o=[],r=0;r<arguments.length;r++)o[r]=e[r];t.apply(void 0,v([n],o));var l=w(n);l!==n&&t.apply(void 0,v([l],o))}))}))},y="instanceName";function _(e,t){var n=function(e,t){var n,o,r,l,d=null===(o=null===(n=e.data)||void 0===n?void 0:n.attrs)||void 0===o?void 0:o[t];return void 0!==d?d:null===(l=null===(r=e.data)||void 0===r?void 0:r.attrs)||void 0===l?void 0:l[w(t)]},c=function(element,e,t){return e.arg||n(t,y)||element.id||o.SwiperInstance},v=function(element,e,t){var n=c(element,e,t);return t.context[n]||null},f=function(e){return e.value||t},_=function(input){return[!0,void 0,null,""].includes(input)},m=function(e){var t,n,o=(null===(t=e.data)||void 0===t?void 0:t.on)||(null===(n=e.componentOptions)||void 0===n?void 0:n.listeners);return function(e){for(var t,n=arguments,r=[],l=1;l<arguments.length;l++)r[l-1]=n[l];var d=null===(t=o)||void 0===t?void 0:t[e];d&&d.fns.apply(d,r)}};return{bind:function(element,e,t){-1===element.className.indexOf(d.containerClass)&&(element.className+=(element.className?" ":"")+d.containerClass),element.addEventListener("click",(function(n){var o=m(t),r=v(element,e,t);h(r,n,o)}))},inserted:function(element,t,n){var o=n.context,l=f(t),d=c(element,t,n),v=m(n),w=o,h=null==w?void 0:w[d];h&&!h.destroyed||(h=new e(element,l),w[d]=h,S(h,v),v(r.Ready,h))},componentUpdated:function(element,e,t){var o,r,d,c,w,h,S,y,m,C,x,O,I=n(t,l.AutoUpdate);if(_(I)){var D=v(element,e,t);if(D){var k=f(e).loop;k&&(null===(r=null===(o=D)||void 0===o?void 0:o.loopDestroy)||void 0===r||r.call(o)),null===(d=null==D?void 0:D.update)||void 0===d||d.call(D),null===(w=null===(c=D.navigation)||void 0===c?void 0:c.update)||void 0===w||w.call(c),null===(S=null===(h=D.pagination)||void 0===h?void 0:h.render)||void 0===S||S.call(h),null===(m=null===(y=D.pagination)||void 0===y?void 0:y.update)||void 0===m||m.call(y),k&&(null===(x=null===(C=D)||void 0===C?void 0:C.loopCreate)||void 0===x||x.call(C),null===(O=null==D?void 0:D.update)||void 0===O||O.call(D))}}},unbind:function(element,e,t){var o,r=n(t,l.AutoDestroy);if(_(r)){var d=v(element,e,t);d&&d.initialized&&(null===(o=null==d?void 0:d.destroy)||void 0===o||o.call(d,_(n(t,l.DeleteInstanceOnDestroy)),_(n(t,l.CleanupStylesOnDestroy))))}}}}function m(e){var t;return n.extend({name:o.SwiperComponent,props:(t={defaultOptions:{type:Object,required:!1,default:function(){return{}}},options:{type:Object,required:!1}},t[l.AutoUpdate]={type:Boolean,default:!0},t[l.AutoDestroy]={type:Boolean,default:!0},t[l.DeleteInstanceOnDestroy]={type:Boolean,required:!1,default:!0},t[l.CleanupStylesOnDestroy]={type:Boolean,required:!1,default:!0},t),data:function(){var e;return(e={})[o.SwiperInstance]=null,e},computed:{swiperInstance:{cache:!1,set:function(e){this[o.SwiperInstance]=e},get:function(){return this[o.SwiperInstance]}},swiperOptions:function(){return this.options||this.defaultOptions},wrapperClass:function(){return this.swiperOptions.wrapperClass||d.wrapperClass}},methods:{handleSwiperClick:function(e){h(this.swiperInstance,e,this.$emit.bind(this))},autoReLoopSwiper:function(){var e,t;if(this.swiperInstance&&this.swiperOptions.loop){var n=this.swiperInstance;null===(e=null==n?void 0:n.loopDestroy)||void 0===e||e.call(n),null===(t=null==n?void 0:n.loopCreate)||void 0===t||t.call(n)}},updateSwiper:function(){var e,t,n,o,r,d,c,v;this[l.AutoUpdate]&&this.swiperInstance&&(this.autoReLoopSwiper(),null===(t=null===(e=this.swiperInstance)||void 0===e?void 0:e.update)||void 0===t||t.call(e),null===(o=null===(n=this.swiperInstance.navigation)||void 0===n?void 0:n.update)||void 0===o||o.call(n),null===(d=null===(r=this.swiperInstance.pagination)||void 0===r?void 0:r.render)||void 0===d||d.call(r),null===(v=null===(c=this.swiperInstance.pagination)||void 0===c?void 0:c.update)||void 0===v||v.call(c))},destroySwiper:function(){var e,t;this[l.AutoDestroy]&&this.swiperInstance&&this.swiperInstance.initialized&&(null===(t=null===(e=this.swiperInstance)||void 0===e?void 0:e.destroy)||void 0===t||t.call(e,this[l.DeleteInstanceOnDestroy],this[l.CleanupStylesOnDestroy]))},initSwiper:function(){this.swiperInstance=new e(this.$el,this.swiperOptions),S(this.swiperInstance,this.$emit.bind(this)),this.$emit(r.Ready,this.swiperInstance)}},mounted:function(){this.swiperInstance||this.initSwiper()},activated:function(){this.updateSwiper()},updated:function(){this.updateSwiper()},beforeDestroy:function(){this.$nextTick(this.destroySwiper)},render:function(e){return e("div",{staticClass:d.containerClass,on:{click:this.handleSwiperClick}},[this.$slots[f.ParallaxBg],e("div",{class:this.wrapperClass},this.$slots.default),this.$slots[f.Pagination],this.$slots[f.PrevButton],this.$slots[f.NextButton],this.$slots[f.Scrollbar]])}})}!function(e){e.ParallaxBg="parallax-bg",e.Pagination="pagination",e.Scrollbar="scrollbar",e.PrevButton="button-prev",e.NextButton="button-next"}(f||(f={}));var C=n.extend({name:o.SwiperSlideComponent,computed:{slideClass:function(){var e,t;return(null===(t=null===(e=this.$parent)||void 0===e?void 0:e.swiperOptions)||void 0===t?void 0:t.slideClass)||d.slideClass}},methods:{update:function(){var e,t=this.$parent;t[l.AutoUpdate]&&(null===(e=null==t?void 0:t.swiperInstance)||void 0===e||e.update())}},mounted:function(){this.update()},updated:function(){this.update()},render:function(e){return e("div",{class:this.slideClass},this.$slots.default)}}),x=function(e){var t=function(n,r){if(!t.installed){var l=m(e);r&&(l.options.props.defaultOptions.default=function(){return r}),n.component(o.SwiperComponent,l),n.component(o.SwiperSlideComponent,C),n.directive(o.SwiperDirective,_(e,r)),t.installed=!0}};return t};function O(e){var t;return(t={version:"4.1.1",install:x(e),directive:_(e)})[o.SwiperComponent]=m(e),t[o.SwiperSlideComponent]=C,t}var I=O(t),D=I.version,k=I.install,z=I.directive,P=I.Swiper,B=I.SwiperSlide;e.Swiper=P,e.SwiperSlide=B,e.default=I,e.directive=z,e.install=k,e.version=D,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(385),n(1))},386:function(e,t,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("16eb1f07",content,!0,{sourceMap:!1})},397:function(e,t,n){"use strict";n(386)},398:function(e,t,n){var o=n(17)((function(i){return i[1]}));o.push([e.i,'.swiper-slide-active[data-v-24768734]{position:relative}.swiper-slide-active[data-v-24768734]:after{background:#000;content:"";height:60%;position:absolute;right:0;top:50%;transform:translateY(-50%);width:1px}.review__line[data-v-24768734]{border-right:1px solid #000}.insta_feedback_toggle[data-v-24768734]{height:252px}.insta_feedback[data-v-24768734]{height:170px}.review-biz__header[data-v-24768734]{color:#000;font-size:16px;font-weight:600;line-height:1.24;text-align:center;text-transform:uppercase}.review-biz__content[data-v-24768734]{text-align:center}.review-biz__item[data-v-24768734]{margin:0 auto;max-width:485px;width:100%}.review-slide[data-v-24768734]{width:50%!important}@media screen and (max-width:550px){.review-slide[data-v-24768734]{width:100%!important}}',""]),o.locals={},e.exports=o},432:function(e,t,n){"use strict";n.r(t);var o=n(45),r=n.n(o),l=n(1),d=n(375),c=l.default.extend({name:"reviewsBiz",components:{Swiper:d.Swiper,SwiperSlide:d.SwiperSlide},data:function(){return{feedopen:0,reviewsBiz:[],swiperOption:{slidesPerView:2,slidesPerGroup:2,spaceBetween:5,loop:!0,loopFillGroupWithBlank:!0,initialSlide:5,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:2}},pagination:{el:".swiper-pagination",type:"bullets",clickable:"true"}}}},mounted:function(){var e=this;r.a.get("https://project.a-lux.dev/api/partner").then((function(t){e.reviewsBiz=t.data.review_biz,e.swiperOption.initialSlide=t.data.review_biz.length}))}}),v=(n(397),n(10)),component=Object(v.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"reviewsBiz__biz"},[t("swiper",{staticClass:"swiper",attrs:{options:e.swiperOption}},e._l(e.reviewsBiz,(function(n){return t("swiper-slide",{key:n.id,staticClass:"swiper-slide review-slide"},[t("div",{staticClass:"review-biz__item"},[t("h2",{staticClass:"review-biz__header"},[e._v("\n          "+e._s(n.title)+"\n        ")]),e._v(" "),t("img",{attrs:{src:"https://cantra.ru/image/my_images/quotes.png",alt:""}}),e._v(" "),t("div",{staticClass:"insta_feedback review-biz__content",class:{insta_feedback_open:e.feedopen===n.id}},[e._v("\n          "+e._s(n.content)+"\n          "),t("div",{staticClass:"insta_feedback_toggle"})])]),e._v(" "),e.feedopen!=n.id?t("a",{staticClass:"insta_toggle-btn",on:{click:function(t){t.preventDefault(),e.feedopen=n.id}}},[e._v("Раскрыть")]):e._e(),e._v(" "),e.feedopen===n.id?t("a",{staticClass:"insta_toggle-btn",on:{click:function(t){t.preventDefault(),e.feedopen=0}}},[e._v("Скрыть")]):e._e(),e._v(" "),t("p",{staticClass:"review__line"})])})),1),e._v(" "),t("div",{staticClass:"swiper-pagination new-pag"})],1)}),[],!1,null,"24768734",null);t.default=component.exports}}]);