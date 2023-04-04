/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31,7,8],{365:function(t,e,n){!function(t,e,n){"use strict";var r;e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,function(t){t.SwiperComponent="Swiper",t.SwiperSlideComponent="SwiperSlide",t.SwiperDirective="swiper",t.SwiperInstance="$swiper"}(r||(r={}));var o,l,c=Object.freeze({containerClass:"swiper-container",wrapperClass:"swiper-wrapper",slideClass:"swiper-slide"});(function(t){t.Ready="ready",t.ClickSlide="clickSlide"})(o||(o={})),function(t){t.AutoUpdate="autoUpdate",t.AutoDestroy="autoDestroy",t.DeleteInstanceOnDestroy="deleteInstanceOnDestroy",t.CleanupStylesOnDestroy="cleanupStylesOnDestroy"}(l||(l={}));var d=["init","beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize","observerUpdate","beforeLoopFix","loopFix"];function A(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}var v,h=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()},_=function(t,e,n){var r,l,c;if(t&&!t.destroyed){var d=(null===(r=e.composedPath)||void 0===r?void 0:r.call(e))||e.path;if((null==e?void 0:e.target)&&d){var A=Array.from(t.slides),v=Array.from(d);if(A.includes(e.target)||v.some((function(t){return A.includes(t)}))){var _=t.clickedIndex,f=Number(null===(c=null===(l=t.clickedSlide)||void 0===l?void 0:l.dataset)||void 0===c?void 0:c.swiperSlideIndex),m=Number.isInteger(f)?f:null;n(o.ClickSlide,_,m),n(h(o.ClickSlide),_,m)}}}},f=function(t,e){d.forEach((function(n){t.on(n,(function(){for(var t=arguments,r=[],o=0;o<arguments.length;o++)r[o]=t[o];e.apply(void 0,A([n],r));var l=h(n);l!==n&&e.apply(void 0,A([l],r))}))}))},m="instanceName";function w(t,e){var n=function(t,e){var n,r,o,l,c=null===(r=null===(n=t.data)||void 0===n?void 0:n.attrs)||void 0===r?void 0:r[e];return void 0!==c?c:null===(l=null===(o=t.data)||void 0===o?void 0:o.attrs)||void 0===l?void 0:l[h(e)]},d=function(element,t,e){return t.arg||n(e,m)||element.id||r.SwiperInstance},A=function(element,t,e){var n=d(element,t,e);return e.context[n]||null},v=function(t){return t.value||e},w=function(input){return[!0,void 0,null,""].includes(input)},C=function(t){var e,n,r=(null===(e=t.data)||void 0===e?void 0:e.on)||(null===(n=t.componentOptions)||void 0===n?void 0:n.listeners);return function(t){for(var e,n=arguments,o=[],l=1;l<arguments.length;l++)o[l-1]=n[l];var c=null===(e=r)||void 0===e?void 0:e[t];c&&c.fns.apply(c,o)}};return{bind:function(element,t,e){-1===element.className.indexOf(c.containerClass)&&(element.className+=(element.className?" ":"")+c.containerClass),element.addEventListener("click",(function(n){var r=C(e),o=A(element,t,e);_(o,n,r)}))},inserted:function(element,e,n){var r=n.context,l=v(e),c=d(element,e,n),A=C(n),h=r,_=null==h?void 0:h[c];_&&!_.destroyed||(_=new t(element,l),h[c]=_,f(_,A),A(o.Ready,_))},componentUpdated:function(element,t,e){var r,o,c,d,h,_,f,m,C,x,y,k,S=n(e,l.AutoUpdate);if(w(S)){var O=A(element,t,e);if(O){var B=v(t).loop;B&&(null===(o=null===(r=O)||void 0===r?void 0:r.loopDestroy)||void 0===o||o.call(r)),null===(c=null==O?void 0:O.update)||void 0===c||c.call(O),null===(h=null===(d=O.navigation)||void 0===d?void 0:d.update)||void 0===h||h.call(d),null===(f=null===(_=O.pagination)||void 0===_?void 0:_.render)||void 0===f||f.call(_),null===(C=null===(m=O.pagination)||void 0===m?void 0:m.update)||void 0===C||C.call(m),B&&(null===(y=null===(x=O)||void 0===x?void 0:x.loopCreate)||void 0===y||y.call(x),null===(k=null==O?void 0:O.update)||void 0===k||k.call(O))}}},unbind:function(element,t,e){var r,o=n(e,l.AutoDestroy);if(w(o)){var c=A(element,t,e);c&&c.initialized&&(null===(r=null==c?void 0:c.destroy)||void 0===r||r.call(c,w(n(e,l.DeleteInstanceOnDestroy)),w(n(e,l.CleanupStylesOnDestroy))))}}}}function C(t){var e;return n.extend({name:r.SwiperComponent,props:(e={defaultOptions:{type:Object,required:!1,default:function(){return{}}},options:{type:Object,required:!1}},e[l.AutoUpdate]={type:Boolean,default:!0},e[l.AutoDestroy]={type:Boolean,default:!0},e[l.DeleteInstanceOnDestroy]={type:Boolean,required:!1,default:!0},e[l.CleanupStylesOnDestroy]={type:Boolean,required:!1,default:!0},e),data:function(){var t;return(t={})[r.SwiperInstance]=null,t},computed:{swiperInstance:{cache:!1,set:function(t){this[r.SwiperInstance]=t},get:function(){return this[r.SwiperInstance]}},swiperOptions:function(){return this.options||this.defaultOptions},wrapperClass:function(){return this.swiperOptions.wrapperClass||c.wrapperClass}},methods:{handleSwiperClick:function(t){_(this.swiperInstance,t,this.$emit.bind(this))},autoReLoopSwiper:function(){var t,e;if(this.swiperInstance&&this.swiperOptions.loop){var n=this.swiperInstance;null===(t=null==n?void 0:n.loopDestroy)||void 0===t||t.call(n),null===(e=null==n?void 0:n.loopCreate)||void 0===e||e.call(n)}},updateSwiper:function(){var t,e,n,r,o,c,d,A;this[l.AutoUpdate]&&this.swiperInstance&&(this.autoReLoopSwiper(),null===(e=null===(t=this.swiperInstance)||void 0===t?void 0:t.update)||void 0===e||e.call(t),null===(r=null===(n=this.swiperInstance.navigation)||void 0===n?void 0:n.update)||void 0===r||r.call(n),null===(c=null===(o=this.swiperInstance.pagination)||void 0===o?void 0:o.render)||void 0===c||c.call(o),null===(A=null===(d=this.swiperInstance.pagination)||void 0===d?void 0:d.update)||void 0===A||A.call(d))},destroySwiper:function(){var t,e;this[l.AutoDestroy]&&this.swiperInstance&&this.swiperInstance.initialized&&(null===(e=null===(t=this.swiperInstance)||void 0===t?void 0:t.destroy)||void 0===e||e.call(t,this[l.DeleteInstanceOnDestroy],this[l.CleanupStylesOnDestroy]))},initSwiper:function(){this.swiperInstance=new t(this.$el,this.swiperOptions),f(this.swiperInstance,this.$emit.bind(this)),this.$emit(o.Ready,this.swiperInstance)}},mounted:function(){this.swiperInstance||this.initSwiper()},activated:function(){this.updateSwiper()},updated:function(){this.updateSwiper()},beforeDestroy:function(){this.$nextTick(this.destroySwiper)},render:function(t){return t("div",{staticClass:c.containerClass,on:{click:this.handleSwiperClick}},[this.$slots[v.ParallaxBg],t("div",{class:this.wrapperClass},this.$slots.default),this.$slots[v.Pagination],this.$slots[v.PrevButton],this.$slots[v.NextButton],this.$slots[v.Scrollbar]])}})}!function(t){t.ParallaxBg="parallax-bg",t.Pagination="pagination",t.Scrollbar="scrollbar",t.PrevButton="button-prev",t.NextButton="button-next"}(v||(v={}));var x=n.extend({name:r.SwiperSlideComponent,computed:{slideClass:function(){var t,e;return(null===(e=null===(t=this.$parent)||void 0===t?void 0:t.swiperOptions)||void 0===e?void 0:e.slideClass)||c.slideClass}},methods:{update:function(){var t,e=this.$parent;e[l.AutoUpdate]&&(null===(t=null==e?void 0:e.swiperInstance)||void 0===t||t.update())}},mounted:function(){this.update()},updated:function(){this.update()},render:function(t){return t("div",{class:this.slideClass},this.$slots.default)}}),y=function(t){var e=function(n,o){if(!e.installed){var l=C(t);o&&(l.options.props.defaultOptions.default=function(){return o}),n.component(r.SwiperComponent,l),n.component(r.SwiperSlideComponent,x),n.directive(r.SwiperDirective,w(t,o)),e.installed=!0}};return e};function k(t){var e;return(e={version:"4.1.1",install:y(t),directive:w(t)})[r.SwiperComponent]=C(t),e[r.SwiperSlideComponent]=x,e}var S=k(e),O=S.version,B=S.install,z=S.directive,U=S.Swiper,D=S.SwiperSlide;t.Swiper=U,t.SwiperSlide=D,t.default=S,t.directive=z,t.install=B,t.version=O,Object.defineProperty(t,"__esModule",{value:!0})}(e,n(375),n(1))},367:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("21ba9e3f",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n(367)},373:function(t,e,n){var r=n(17)(!1);r.push([t.i,".share h2[data-v-f973a85e]{margin-top:60px;margin-bottom:40px;color:#000;font-weight:400;line-height:27px;font-size:18px;text-transform:uppercase;border-bottom:1px solid #000;font-family:Lato,sans-serif;text-align:unset}.insta_slick_slider .swiper-container[data-v-f973a85e]{width:100%!important}.insta_toggle-btn[data-v-f973a85e]{cursor:pointer}@media (max-width:1100px){.insta_slick_slider .swiper-slide[data-v-f973a85e]{height:80vh;width:300px;margin-top:100px}}.swiper-pagination-bullet[data-v-f973a85e]{text-align:center;line-height:40px;font-size:24px;color:#000;opacity:1;margin:0 5px;background:rgba(0,0,0,.2);width:20px!important;height:20px!important}.swiper-pagination-bullet-active[data-v-f973a85e]{color:#fff;opacity:.75!important;background:#000!important}.swiper-pagination[data-v-f973a85e]{position:unset!important;margin-bottom:3%;width:100%}@media screen and (max-width:550px){.insta_slick_slider .swiper-container[data-v-f973a85e]{width:calc(100% + 20px)!important}.share h2[data-v-f973a85e]{margin-top:0;padding:0 5px}.insta_slick_slider .swiper-slide[data-v-f973a85e]{padding:0 10px}.sixth_block .h2-text[data-v-f973a85e]{margin-top:0}.star-photo[data-v-f973a85e]{max-height:290px;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}}",""]),t.exports=r},374:function(t,e,n){"use strict";n.r(e);var r=n(365),o=n(43),l=n.n(o),c=n(1).default.extend({components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{reviews:"",feedopen:0,swiperOption:{slidesPerView:1,spaceBetween:10,breakpoints:{900:{slidesPerGroup:3,slidesPerView:3},1e3:{slidesPerGroup:4,slidesPerView:4}},slidesPerGroup:1,pagination:{el:".swiper-pagination-reviews",type:"bullets",clickable:"true"}}}},props:{title:String,showTitle:{type:Boolean,default:!0}},mounted:function(){var t=this;l.a.get("https://project.a-lux.dev/api/index  ").then((function(e){t.reviews=e.data.review}))}}),d=(n(372),n(9)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.reviews.length>0?n("div",{staticClass:"insta_slick_slider"},[t.showTitle?n("div",{staticClass:"share"},[n("h2",[t._v("Звезды выбирают Cantra")])]):t._e(),t._v(" "),n("swiper",{staticClass:"swiper",attrs:{"slides-per-view":4,"space-between":1,options:t.swiperOption}},t._l(t.reviews,(function(e){return n("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[n("div",{staticClass:"insta_slider_block"},[n("div",{staticClass:"photo_with_cover"},[n("img",{staticClass:"star-photo",attrs:{src:e.image}})]),t._v(" "),n("div",[n("img",{attrs:{src:e.logo}}),t._v(" "),n("div",{staticClass:"insta_nickname"},[t._v("\n            "+t._s(e.name)),n("br"),t._v(" "),n("a",{attrs:{rel:"nofollow",href:e.url,target:"_blank",tabindex:"0"}},[t._v(t._s(e.tag))])]),t._v(" "),n("div",{staticClass:"insta_feedback",class:{insta_feedback_open:t.feedopen===e.id}},[t._v("\n            "+t._s(e.content)+"\n            "),n("div",{staticClass:"insta_feedback_toggle"})]),t._v(" "),t.feedopen!=e.id?n("a",{staticClass:"insta_toggle-btn",on:{click:function(n){n.preventDefault(),t.feedopen=e.id}}},[t._v("Раскрыть")]):t._e(),t._v(" "),t.feedopen===e.id?n("a",{staticClass:"insta_toggle-btn",on:{click:function(e){e.preventDefault(),t.feedopen=0}}},[t._v("Скрыть")]):t._e()])])])})),1),t._v(" "),n("div",{staticClass:"swiper-pagination-reviews new-pag"})],1):t._e()}),[],!1,null,"f973a85e",null);e.default=component.exports},376:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("c1ba765c",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(376)},388:function(t,e,n){var r=n(17)(!1);r.push([t.i,'.swiper-slide-active[data-v-24768734]{position:relative}.swiper-slide-active[data-v-24768734]:after{content:"";position:absolute;top:50%;right:0;height:60%;width:1px;background:#000;transform:translateY(-50%)}.review__line[data-v-24768734]{border-right:1px solid #000}.insta_feedback_toggle[data-v-24768734]{height:252px}.insta_feedback[data-v-24768734]{height:170px}.review-biz__header[data-v-24768734]{text-align:center;font-size:16px;color:#000;line-height:1.24;font-weight:600;text-transform:uppercase}.review-biz__content[data-v-24768734]{text-align:center}.review-biz__item[data-v-24768734]{width:100%;max-width:485px;margin:0 auto}.review-slide[data-v-24768734]{width:50%!important}@media screen and (max-width:550px){.review-slide[data-v-24768734]{width:100%!important}}',""]),t.exports=r},408:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("655ab063",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n.r(e);var r=n(43),o=n.n(r),l=n(1),c=n(365),d=l.default.extend({name:"reviewsBiz",components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},data:function(){return{feedopen:0,reviewsBiz:[],swiperOption:{slidesPerView:2,slidesPerGroup:2,spaceBetween:5,loop:!0,loopFillGroupWithBlank:!0,initialSlide:5,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:2}},pagination:{el:".swiper-pagination",type:"bullets",clickable:"true"}}}},mounted:function(){var t=this;o.a.get("https://project.a-lux.dev/api/partner").then((function(e){t.reviewsBiz=e.data.review_biz,t.swiperOption.initialSlide=e.data.review_biz.length}))}}),A=(n(387),n(9)),component=Object(A.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reviewsBiz__biz"},[n("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.reviewsBiz,(function(e){return n("swiper-slide",{key:e.id,staticClass:"swiper-slide review-slide"},[n("div",{staticClass:"review-biz__item"},[n("h2",{staticClass:"review-biz__header"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("img",{attrs:{src:"https://cantra.ru/image/my_images/quotes.png",alt:""}}),t._v(" "),n("div",{staticClass:"insta_feedback review-biz__content",class:{insta_feedback_open:t.feedopen===e.id}},[t._v("\n          "+t._s(e.content)+"\n          "),n("div",{staticClass:"insta_feedback_toggle"})])]),t._v(" "),t.feedopen!=e.id?n("a",{staticClass:"insta_toggle-btn",on:{click:function(n){n.preventDefault(),t.feedopen=e.id}}},[t._v("Раскрыть")]):t._e(),t._v(" "),t.feedopen===e.id?n("a",{staticClass:"insta_toggle-btn",on:{click:function(e){e.preventDefault(),t.feedopen=0}}},[t._v("Скрыть")]):t._e(),t._v(" "),n("p",{staticClass:"review__line"})])})),1),t._v(" "),n("div",{staticClass:"swiper-pagination new-pag"})],1)}),[],!1,null,"24768734",null);e.default=component.exports},452:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAMAAAAcqPc3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIev/tYAAAATdFJOUwBv37+f739AP4+vgCBgT5AQL19bHZoKAAAArUlEQVQoz42RO5aEMAwEy39kG4aZvv9dN7DhGaKtsAK11AKg1KSbFL8MPnrRLh1+280eJAOKlHmQpQJVcZVHigRFSDoAOFusrhMldnmQNgA3I3twFOnyTfJmXnIjcvo+w03pXH2WH7FJbvVVNrwp/sffc/xzTp+lfKS+epzkzdJYa/HkUbLj8lcPPdfoToDRQ1DgRZhLtadu0hcwqR7lZg/XQ+z9x3kj2/PvG/AHfi4PwlET4/gAAAAASUVORK5CYII="},453:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAMAAADOBMQXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwC/QI8gz5/fH+8QUDCvX39rfAPeAAAAWUlEQVQY023QORKAMAxD0Z/FMdkg9z8tXTATu3yFRjLEqcuezAF9nRcJjgaqo8qOs+lbr1w8hc+twu1pS452PRJGNM13X9u7Is4K4XG00PQcnCEn+f1CU+YFsXUSUWcAvtcAAAAASUVORK5CYII="},454:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAWCAYAAAAW5GZjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB8SURBVHgBY2DABAJA3ADE94H4PxpGAQo4FGFVvB+Pwv/o1uNT+J8JTTE62AB1GhizMOAHF4D4IYzDxEACAJk8H48zAqBOAIEPjAxYggQH+ECKMy6QovgDyM0HoByQmw3QFDyAYgYkdWDgwIAZEfXICkgKulHFVFH8gZBiAHUgLgZLHhx0AAAAAElFTkSuQmCC"},455:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAMAAACae25RAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBHYtUAAAARdFJOUwC/cBAgYG/ff++fMJDPr1BA/52QrAAAAHVJREFUGNNtzkkOwzAMBMGWrYiUlzj9/8/mIDmAgfDGwnChZeYOi+obWDMzG0UtwKYG8FINmupntAGEarL2EZ88w5Cq1+Q1VCuMeNSmBodqg9+RUD1VN0YVH9Um1/7gvk9f/O85oY5Arw/v92Dh3n+c44cMNb5zLgsbvb1SFwAAAABJRU5ErkJggg=="},456:function(t,e,n){"use strict";n(408)},457:function(t,e,n){var r=n(17),o=n(118),l=n(458),c=n(459),d=r(!1),A=o(l),v=o(c);d.push([t.i,".form-response-success{display:flex;align-items:center;justify-content:center;margin-top:10px;color:#3c763d;font-size:16px;line-height:18px}.form-response-success svg{margin-right:5px}@media(max-width:1205px){.red_mystery{width:100%;margin-top:-456px;position:relative;margin-left:0;top:70vh}.our_team{position:absolute;z-index:111;left:12vw}.our_team img:first-child{margin:0 auto 15px;display:block}}@media(max-width:800px){.partnership__top__content{width:277px!important;font-size:14px;line-height:24px}.partnership_top_block_left{margin-top:15px!important}.partnership_top_block_left div:nth-child(2){margin-top:15px}}.Reviews{margin-top:100px}ul.parnership_sixth-item p{font-size:14px!important}.partnership_third_block>div{padding-right:26px}p{font-size:1.1em}.partnership__top__content{width:372px}@media(max-width:730px){.partnership_top_block{background:url("+A+")!important}.partnership_top_block_left{font-size:16px!important;line-height:19px!important}.partnership_third_block{background:url("+v+")!important}.success_years{margin:0!important;height:auto}.success_years h4{font-size:14px!important}.success_years-item{margin:0!important;line-height:12px!important}.success_years-item li,.success_years-item p{font-size:12px!important;margin:0!important;line-height:14px!important}.success_years ul{line-height:12px!important}.success_years ul li,.success_years ul p{font-size:12px!important;line-height:12px!important}.success_years>ul>p,.success_years ul li{font-size:12px!important;line-height:14px!important}.success_years:first-child{margin-top:-10px!important}.success_years:nth-child(2){margin-top:30px!important}.success_years:nth-child(3){margin-top:10px!important}.success_years:nth-child(4){margin-top:8px!important}}@media screen and (max-width:550px){.partnership_top_block_left div:nth-child(2){margin-top:37px!important}}.new-partnership-ul{max-width:475px}",""]),t.exports=d},458:function(t,e,n){t.exports=n.p+"img/bigimagemobile.917cda9.jpg"},459:function(t,e,n){t.exports=n.p+"img/chronology_mob.4dfc29d.jpg"},499:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"partnership-icon"},[r("a",{staticClass:"partnership_insta",attrs:{href:"https://www.instagram.com/cantra.ru/",target:"_blank"}},[r("img",{attrs:{src:n(452),alt:""}})]),t._v(" "),r("a",{staticClass:"partnership_ytb",attrs:{href:"https://www.youtube.com/channel/UCZDI20Z_t1Q76Z3xrwHPz_Q",target:"_blank"}},[r("img",{attrs:{src:n(453),alt:""}})]),t._v(" "),r("a",{staticClass:"partnership_fb",attrs:{href:"https://www.facebook.com/cantra.ru",target:"_blank"}},[r("img",{attrs:{src:n(454),alt:""}})]),t._v(" "),r("a",{staticClass:"partnership_vk",attrs:{href:"https://vk.com/cantrarf",target:"_blank"}},[r("img",{attrs:{src:n(455),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"partnership_second_block"},[n("h1",[t._v("Что такое CANTRA?")]),t._v(" "),n("div",{staticClass:"partnership_red_stripe"}),t._v(" "),n("div",[t._v("\n      Компания CANTRA - лидер по производству премиальных автонакидок на\n      территории СНГ.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"partnership_fourth_block"},[n("h2",[t._v("Оставьте заявку")]),t._v(" "),n("div",{staticClass:"partnership_red_stripe"})])}],o=(n(36),n(68),n(1)),l=n(86),c=n(374),d=n(422),A=o.default.extend({layout:"default",head:function(){return{title:"Накидки на автомобильные сиденья, автонакидки для автомобилей от производителя Cantra™",meta:[{hid:"description",name:"description",content:"Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто."},{hid:"keywords",name:"keywords",content:"накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA"}]}},data:function(){return{main:"",mainImage:"",benefit:"",bio:"",cards:"",team:"",name:"",email:"",phone:"",isSuccess:!1}},components:{reviewsBiz:d.default,Reviews:c.default,TheMask:l.TheMask},mounted:function(){var t=this;this.$axios.get("https://project.a-lux.dev/api/partner").then((function(e){t.main=e.data.main,t.mainImage=t.main.image,t.bio=e.data.bio,t.cards=e.data.card,t.benefit=e.data.benefit,t.team=e.data.command}))},methods:{sendData:function(){var t=this;this.$axios.post("https://project.a-lux.dev/api/applicationjob",{name:this.name,email:this.email,phone:this.phone}).then((function(e){"200"!=e.status&&"201"!=e.status||(t.isSuccess=!0,t.name=t.email=t.phone="",setTimeout((function(){t.isSuccess=!1}),5e3))}))}},watch:{phone:function(t,e){8==t&&(this.phone="7"),9==t&&(this.phone="79")}}}),v=(n(456),n(9)),component=Object(v.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cantra_content partnership"},[n("div",{staticClass:"partnership_top_block",style:{"background-image":"url(/storage/partner-mains/May2022/HifaBGucT7rx6DchZzFP.jpg)"}},[n("div",{staticClass:"partnership_top_block_left"},[n("div",{staticClass:"partnership__top__content",domProps:{innerHTML:t._s(t.main.content)}}),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"partnership_third_block",style:{"background-image":"url(/storage/partner-bios/May2022/FIsi2SqmEsmt7yPU3Vjm.jpg)"}},[n("div",[n("div",{staticClass:"success_years"},[n("h4",[t._v(t._s(t.bio.step1))]),t._v(" "),n("ul",{staticClass:"success_years-item",domProps:{innerHTML:t._s(t.bio.step1_content)}})]),t._v(" "),n("div",{staticClass:"success_years"},[n("h4",[t._v(t._s(t.bio.step2))]),t._v(" "),n("ul",{staticClass:"success_years-item",domProps:{innerHTML:t._s(t.bio.step2_content)}})]),t._v(" "),n("div",{staticClass:"success_years"},[n("h4",[t._v(t._s(t.bio.step3))]),t._v(" "),n("ul",{staticClass:"success_years-item",domProps:{innerHTML:t._s(t.bio.step3_content)}})]),t._v(" "),n("div",{staticClass:"success_years"},[n("h4",[t._v(t._s(t.bio.step4))]),t._v(" "),n("ul",{staticClass:"success_years-item",domProps:{innerHTML:t._s(t.bio.step4_content)}})])])]),t._v(" "),n("div",{staticClass:"partnership_fifth_block"},[n("h2",[t._v("cantra в цифрах")]),t._v(" "),n("div",{staticClass:"partnership_red_stripe"}),t._v(" "),n("div",{staticClass:"cantra_numbers"},t._l(t.cards,(function(e){return n("div",{key:e.id},[n("img",{attrs:{src:e.background}}),t._v(" "),n("div",{staticClass:"cantra_numbers_text"},[n("span",[t._v(t._s(e.title))]),t._v(" "),n("span",[t._v(t._s(e.content))])])])})),0)]),t._v(" "),n("div",{staticClass:"partnership_sixth_block"},[n("div",[n("h2",[t._v(t._s(t.benefit.title))]),t._v(" "),n("div",{staticClass:"partnership_red_stripe"}),t._v(" "),n("ul",{staticClass:"parnership_sixth-item new-partnership-ul",domProps:{innerHTML:t._s(t.benefit.content)}})]),t._v(" "),n("div",[n("img",{attrs:{src:t.benefit.image}})])]),t._v(" "),n("div",{staticClass:"partnership__reviews"},[n("Reviews")],1),t._v(" "),n("div",{staticClass:"partnership__biz"},[n("reviewsBiz")],1),t._v(" "),n("div",{staticClass:"partnership_ninth_block"},[n("h2",[t._v("наша команда")]),t._v(" "),n("div",{staticClass:"partnership_red_stripe"}),t._v(" "),n("div",{staticClass:"our_team"},t._l(t.team,(function(t){return n("img",{key:t.id,attrs:{src:t.image}})})),0),t._v(" "),n("div",{staticClass:"red_mystery"})]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"callback-contactm_partnership"},[n("form",{staticClass:"form-horizontal",attrs:{id:"form-contactm_partnership"},on:{submit:function(e){return e.preventDefault(),t.sendData.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"request_name",value:"",id:"input-name",placeholder:"Имя",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"request_email",value:"",id:"input-mail",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],ref:"phone",staticClass:"form-control",attrs:{type:"text",id:"recall-name",placeholder:"Телефон",required:"",onkeypress:"return (event.charCode >= 48 && event.charCode <= 57 && /^\\d{0,10}$/.test(this.value));"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("input",{staticClass:"button submit-contactm_partnership",attrs:{type:"submit",value:"Отправить заявку"}})]),t._v(" "),t.isSuccess?n("div",{staticClass:"form-response-success"},[n("svg",{attrs:{fill:"#3c763d",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"20px",height:"20px"}},[n("path",{attrs:{d:"M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z"}})]),t._v("\n      Заявка отправлена\n    ")]):t._e()])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(145).default})}}]);