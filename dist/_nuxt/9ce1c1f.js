(window.webpackJsonp=window.webpackJsonp||[]).push([[28,9],{364:function(t,e,n){t.exports=n.p+"img/op3.12700ac.png"},366:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("55ef3680",content,!0,{sourceMap:!1})},367:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("21ba9e3f",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n.r(e);n(224);var r=n(1).default.extend({props:{name:{type:String,require:!0},brand:{type:String,require:!0},price:{type:Number,require:!0},discount:{type:Number,require:!0},image:{type:String,require:!0},type:{type:String,require:!0},color:{type:Number,require:!0},id:{type:Number,require:!0},slug:{type:String,required:!0}}}),o=(n(369),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product_list product-layout col-lg-4 col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"product-thumb transition"},[r("div",{staticClass:"image",staticStyle:{position:"relative"}},[r("nuxt-link",{staticClass:"image-link",attrs:{to:"/cantra-products/"+t.slug}},[r("img",{staticClass:"img-responsive",attrs:{src:t.image,alt:"",title:""}}),t._v(" "),r("img",{staticClass:"copy-logo",attrs:{src:n(364)}})])],1),t._v(" "),r("div",{staticClass:"caption"},[null!==t.discount?r("div",{staticClass:"no-discount-wrapper"},[r("p",{staticClass:"price",staticStyle:{margin:"0"}},[r("span",{class:{through:t.discount},staticStyle:{"padding-right":"5px"}},[t._v(t._s(t.price))]),t._v(" "),r("span",[t._v(" "+t._s(t.discount)+"руб. ")])])]):r("div",{staticClass:"discount-wrapper"},[r("p",{staticClass:"price",staticStyle:{margin:"0"}},[t._v(t._s(t.price)+" рублей.")])]),t._v(" "),r("a",{staticClass:"productNameAll",staticStyle:{display:"flex","align-items":"center","text-decoration":"none",color:"#000"},attrs:{href:""}},[r("div",{staticClass:"productName",domProps:{innerHTML:t._s(t.name)}})])])]),t._v(" "),r("div",{staticClass:"more_group"},[r("span",{staticClass:"count_colors"},[t._v(t._s(t.color)+" цветов")]),t._v(" "),r("div",{staticClass:"button-group"},[r("p",{staticClass:"color-bl"},[r("nuxt-link",{staticClass:"color",attrs:{to:"/cantra-products/"+t.slug}},[t._v("Подробнее >")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n(366)},370:function(t,e,n){var r=n(17),o=n(118),l=n(371),d=r(!1),c=o(l);d.push([t.i,".productName{white-space:normal;text-align:left;font-weight:400;line-height:15px;font-size:11px;color:#5e5e5e;width:100%}img.img-responsive{-o-object-fit:contain;object-fit:contain;min-height:250px;width:100%;max-height:171px}.slash{margin:0 5px}.testItem p{margin:0}.productNameAll{white-space:nowrap}@media (max-width:800px){.productName{font-size:11px}.image-link{height:220px}.more_group{margin-bottom:20px}}.productCardImage:before{background:url("+c+") 50% no-repeat}",""]),t.exports=d},371:function(t,e,n){t.exports=n.p+"img/logo.cbddb07.png"},372:function(t,e,n){"use strict";n(367)},373:function(t,e,n){var r=n(17)(!1);r.push([t.i,".share h2[data-v-f973a85e]{margin-top:60px;margin-bottom:40px;color:#000;font-weight:400;line-height:27px;font-size:18px;text-transform:uppercase;border-bottom:1px solid #000;font-family:Lato,sans-serif;text-align:unset}.insta_slick_slider .swiper-container[data-v-f973a85e]{width:100%!important}.insta_toggle-btn[data-v-f973a85e]{cursor:pointer}@media (max-width:1100px){.insta_slick_slider .swiper-slide[data-v-f973a85e]{height:80vh;width:300px;margin-top:100px}}.swiper-pagination-bullet[data-v-f973a85e]{text-align:center;line-height:40px;font-size:24px;color:#000;opacity:1;margin:0 5px;background:rgba(0,0,0,.2);width:20px!important;height:20px!important}.swiper-pagination-bullet-active[data-v-f973a85e]{color:#fff;opacity:.75!important;background:#000!important}.swiper-pagination[data-v-f973a85e]{position:unset!important;margin-bottom:3%;width:100%}@media screen and (max-width:550px){.insta_slick_slider .swiper-container[data-v-f973a85e]{width:calc(100% + 20px)!important}.share h2[data-v-f973a85e]{margin-top:0;padding:0 5px}.insta_slick_slider .swiper-slide[data-v-f973a85e]{padding:0 10px}.sixth_block .h2-text[data-v-f973a85e]{margin-top:0}.star-photo[data-v-f973a85e]{max-height:290px;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}}",""]),t.exports=r},374:function(t,e,n){"use strict";n.r(e);var r=n(365),o=n(43),l=n.n(o),d=n(1).default.extend({components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{reviews:"",feedopen:0,swiperOption:{slidesPerView:1,spaceBetween:10,breakpoints:{900:{slidesPerGroup:3,slidesPerView:3},1e3:{slidesPerGroup:4,slidesPerView:4}},slidesPerGroup:1,pagination:{el:".swiper-pagination-reviews",type:"bullets",clickable:"true"}}}},props:{title:String,showTitle:{type:Boolean,default:!0}},mounted:function(){var t=this;l.a.get("https://project.a-lux.dev/api/index  ").then((function(e){t.reviews=e.data.review}))}}),c=(n(372),n(9)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.reviews.length>0?n("div",{staticClass:"insta_slick_slider"},[t.showTitle?n("div",{staticClass:"share"},[n("h2",[t._v("Звезды выбирают Cantra")])]):t._e(),t._v(" "),n("swiper",{staticClass:"swiper",attrs:{"slides-per-view":4,"space-between":1,options:t.swiperOption}},t._l(t.reviews,(function(e){return n("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[n("div",{staticClass:"insta_slider_block"},[n("div",{staticClass:"photo_with_cover"},[n("img",{staticClass:"star-photo",attrs:{src:e.image}})]),t._v(" "),n("div",[n("img",{attrs:{src:e.logo}}),t._v(" "),n("div",{staticClass:"insta_nickname"},[t._v("\n            "+t._s(e.name)),n("br"),t._v(" "),n("a",{attrs:{rel:"nofollow",href:e.url,target:"_blank",tabindex:"0"}},[t._v(t._s(e.tag))])]),t._v(" "),n("div",{staticClass:"insta_feedback",class:{insta_feedback_open:t.feedopen===e.id}},[t._v("\n            "+t._s(e.content)+"\n            "),n("div",{staticClass:"insta_feedback_toggle"})]),t._v(" "),t.feedopen!=e.id?n("a",{staticClass:"insta_toggle-btn",on:{click:function(n){n.preventDefault(),t.feedopen=e.id}}},[t._v("Раскрыть")]):t._e(),t._v(" "),t.feedopen===e.id?n("a",{staticClass:"insta_toggle-btn",on:{click:function(e){e.preventDefault(),t.feedopen=0}}},[t._v("Скрыть")]):t._e()])])])})),1),t._v(" "),n("div",{staticClass:"swiper-pagination-reviews new-pag"})],1):t._e()}),[],!1,null,"f973a85e",null);e.default=component.exports},406:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("76e95b1c",content,!0,{sourceMap:!1})},448:function(t,e,n){"use strict";n(406)},449:function(t,e,n){var r=n(17)(!1);r.push([t.i,'.all_prod_quest_btn a[data-v-0be2fb69]{color:#fff}.all_prod_quest_btn a[data-v-0be2fb69]:hover{color:#fff!important}.all_prod_quest_btn[data-v-0be2fb69]{width:377px;height:44px;border-radius:6px;background-image:radial-gradient(circle at 50%,at 0,#ff482e,#ed1d1d);background-image:radial-gradient(circle at 50% 0,#ff482e,#ed1d1d);font-family:Lato-Bold,sans-serif;font-size:20px;line-height:20px;cursor:pointer;margin:57px auto 0;text-align:center;padding-top:12px}.documentsImages[data-v-0be2fb69]{display:flex!important;width:100%!important;max-width:100%}.documentsImages .my-gallery[data-v-0be2fb69]{display:flex;align-items:flex-start;width:100%}.documentsImages .my-gallery figure[data-v-0be2fb69]{max-width:250px}.documentsImages .my-gallery img[data-v-0be2fb69]{max-width:100%;max-height:100%}.share h2[data-v-0be2fb69]{margin-top:60px;margin-bottom:40px;color:#000;font-weight:400;line-height:27px;font-size:18px;text-transform:uppercase;border-bottom:1px solid #000;font-family:Lato,sans-serif;text-align:unset}.cantra_content img[data-v-0be2fb69]{width:100%!important;max-width:539px!important;display:unset!important}.modal[data-v-0be2fb69]{position:fixed;background:rgba(0,0,0,.8);display:flex}.cantra_content img[data-v-0be2fb69]{width:100%;max-width:199px;display:flex}@media(max-width:1250px){.quest__middle-image img[data-v-0be2fb69]{width:100%;max-width:320px}#galleria[data-v-0be2fb69]{height:200px}.swiper-img[data-v-0be2fb69]{-o-object-fit:cover "lmfs" posnd;object-fit:cover "lmfs" posnd}}.quest__body[data-v-0be2fb69]{justify-content:center;margin-top:113px}@media(max-width:500px){#quest__conatiner[data-v-0be2fb69]{max-width:500px!important}}@media(max-width:800px){.all_prod_quest_btn[data-v-0be2fb69]{width:100%;font-size:16px}.quest__header[data-v-0be2fb69]{position:relative;display:flex;align-items:center;justify-content:center;height:250px!important;flex-direction:column}.quest__headerimage[data-v-0be2fb69]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute}.quest__conatiner[data-v-0be2fb69]{max-width:500px!important}.quest__headertitle[data-v-0be2fb69]{font-size:4vw!important;font-weight:900!important;line-height:30px!important}.quest__headercontent[data-v-0be2fb69],.quest__headertitle[data-v-0be2fb69]{top:0!important;left:0!important;text-align:center!important;width:80%!important;padding:0!important;margin:0!important;position:relative!important}.quest__headercontent[data-v-0be2fb69]{font-size:15px!important;background:none!important;height:auto!important}.quest_benefits[data-v-0be2fb69]{width:100%;display:flex;margin:60px auto 0;justify-content:center}.quest_flaw[data-v-0be2fb69]{width:auto}.quest_benefits>div[data-v-0be2fb69]:nth-child(2){position:absolute;left:0;margin:0;width:100%;text-align:center}}.quest__middle-leftContent[data-v-0be2fb69],.quest__middle-rightContent[data-v-0be2fb69]{margin-top:22px;font-size:16px;color:rgba(0,0,0,.4);line-height:25px}.quest__middle-rightContent[data-v-0be2fb69]{margin-left:25px}@media(max-width:1200px){#quest__headertitle[data-v-0be2fb69]{font-size:28px;top:-17%;left:41%;width:268px}#quest__headercontent[data-v-0be2fb69]{left:54%;top:49%}.quest__conatiner[data-v-0be2fb69]{max-width:800px}}@media(min-width:1201px){.quest__conatiner[data-v-0be2fb69]{max-width:1220px}}.quest__conatiner[data-v-0be2fb69]{width:100%;margin:0 auto}.quest__headerimage[data-v-0be2fb69]{width:100%}.quest__header[data-v-0be2fb69]{position:relative}.quest__headertitle[data-v-0be2fb69]{font-size:48px;line-height:50px;text-transform:uppercase;font-family:Lato-Bold,sans-serif;width:415px;margin:0 auto;padding-top:87px;top:0;left:30%}.quest__headercontent[data-v-0be2fb69],.quest__headertitle[data-v-0be2fb69]{text-align:left;color:#fff;position:absolute}.quest__headercontent[data-v-0be2fb69]{font-size:18px;left:48%;width:336px;top:48%;height:118px;line-height:23px;background:url(https://cantra.ru/images/framebord.png) no-repeat 50%;padding-left:30px;padding-top:25px}@media screen and (max-width:550px){.quest__header[data-v-0be2fb69]{height:290px!important}.quest__headertitle[data-v-0be2fb69]{font-size:30px!important;font-family:Lato-Bold,sans-serif;font-weight:700;line-height:1.1}.quest__conatiner[data-v-0be2fb69]{max-width:310px!important}.quest__headercontent[data-v-0be2fb69]{font-size:20px!important;line-height:24px;margin-top:30px!important;width:100%!important}}',""]),t.exports=r},497:function(t,e,n){"use strict";n.r(e);n(68),n(16),n(27);var r=n(43),o=n.n(r),l=n(368),d=n(374),c=n(365),f=(n(405),{components:{reviews:d.default,ProductCard:l.default,Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},setup:function(){return{}},data:function(){return{products:"",images:"",isModal:!1,initial:1,swiperImages:[],gallery:[],swiperOptions:{slidesPerView:1,spaceBetween:50,initialSlide:this.initial,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},galleryOptions:{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".gall-next",prevEl:".gall-prev"}},galleryOptionsThumbs:{spaceBetween:30,slidesPerView:3,slideToClickedSlide:!0,navigation:{nextEl:".delay_galleria-next",prevEl:".delay_galleria-prev"},breakpoints:{600:{spaceBetween:30},300:{spaceBetween:10}}},quest:""}},methods:{handleSlideTo:function(){this.isModal=!this.isModal}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){var e=t.$refs.swiperTop3.$swiper,n=t.$refs.swiperThumbs3.$swiper;e.controller.control=n,n.controller.control=e}),5e3)})),o.a.get("https://project.a-lux.dev/api/quest").then((function(e){t.products=e.data.items,t.quest=e.data,t.quest.sertificat.forEach((function(element){t.swiperImages.push({src:element,thumbnail:element,w:600,h:800})}))})),o.a.get("https://project.a-lux.dev/api/index").then((function(e){t.gallery=e.data.gallery[0].image})),o.a.post("https://project.a-lux.dev/api/items",{id:"",order:"",type:"",season:""}).then((function(t){})),o.a.get("https://project.a-lux.dev/api/index").then((function(e){t.product=e.data,t.mainTitle=e.data.main_title,t.personal=e.data.create,t.gallery=e.data.gallery[0].image,t.sliderData=e.data.slider}))},computed:{swiperTop:function(){return this.$refs.swiperTop.$swiper},swiperThumbs:function(){return this.$refs.swiperThumbs.$swiper}}}),m=(n(448),n(9)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quest__wrapper"},[n("div",{staticClass:"quest__conatiner"},[n("div",{staticClass:"quest__header"},[n("img",{staticClass:"quest__headerimage",attrs:{id:"quest__headerimage",src:t.quest.headerimage,alt:""}}),t._v(" "),n("h1",{staticClass:"quest__headertitle",attrs:{id:"quest__headertitle"}},[t._v("\n        "+t._s(t.quest.headertitle)+"\n      ")]),t._v(" "),n("div",{staticClass:"quest__headercontent",attrs:{id:"quest__headercontent"}},[t._v("\n        "+t._s(t.quest.headercontent)+"\n      ")])]),t._v(" "),n("div",{staticClass:"quest_benefits"},[n("div",{staticClass:"quest_benef",domProps:{innerHTML:t._s(t.quest.middleleftcontent)}}),t._v(" "),n("div",[n("img",{attrs:{src:t.quest.middleimage,alt:""}})]),t._v(" "),n("div",{staticClass:"quest_flaw",domProps:{innerHTML:t._s(t.quest.middlerightcontent)}})]),t._v(" "),n("reviews",{staticClass:"mt0",attrs:{title:"ЗВЕЗДЫ ВЫБИРАЮТ CANTRA"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"cantra_content"},[t.swiperImages&&t.swiperImages.length>0?n("vue-picture-swipe",{staticClass:"documentsImages",attrs:{items:t.swiperImages}}):t._e()],1),t._v(" "),n("div",{staticClass:"third_block new-third"},[n("div",{staticClass:"cantra_content"},[t._m(1),t._v(" "),n("div",{staticClass:"row mob_products index__products"},t._l(t.products,(function(t){return n("product-card",{key:t.id,attrs:{price:t.price,image:t.image,type:t.type,id:t.id,name:t.name,brand:t.brand,color:t.colors.length,slug:t.slug}})})),1),t._v(" "),n("div",{staticClass:"all_prod_quest_btn"},[n("nuxt-link",{attrs:{to:"/catalog"}},[t._v("Посмотреть полный ассортимент")])],1)])]),t._v(" "),t.gallery.length>1?n("div",{staticClass:"sixth_block delay_galleria"},[n("div",{staticClass:"cantra_content"},[n("h2",{staticClass:"h2-text"},[t._v("Фотогалерея")]),t._v(" "),n("div",{attrs:{id:"galleria"}},[n("div",{staticClass:"gall-main"},[n("swiper",{ref:"swiperTop3",staticClass:"swiper",attrs:{options:t.galleryOptions}},t._l(t.gallery,(function(t,e){return n("swiper-slide",{key:e,staticClass:"swiper-slide sliding-swiper"},[n("img",{staticClass:"swiper-img",attrs:{src:t,alt:""}})])})),1),t._v(" "),n("div",{staticClass:"swiper-button-prev gall-btn gall-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next gall-btn gall-next"})],1),t._v(" "),n("div",{staticClass:"gallery-thumbs__slider"},[n("button",{staticClass:"swiper-button-prev delay_galleria-prev"}),t._v(" "),n("swiper",{ref:"swiperThumbs3",staticClass:"swiper gallery-thumbs new-thumbs",attrs:{options:t.galleryOptionsThumbs}},t._l(t.gallery,(function(t,e){return n("swiper-slide",{key:e},[n("img",{staticClass:"swiper-img",attrs:{src:t}})])})),1),t._v(" "),n("button",{staticClass:"swiper-button-next delay_galleria-next"})],1),t._v(" "),n("div",{staticClass:"gallery-pagination"})])])]):t._e()],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share sert-title"},[n("br"),t._v(" "),n("h2",[t._v("СЕРТИФИКАТЫ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share sert-title"},[n("h2",[t._v("ПОДОБРАТЬ НАКИДКИ")])])}],!1,null,"0be2fb69",null);e.default=component.exports;installComponents(component,{ProductCard:n(368).default})}}]);