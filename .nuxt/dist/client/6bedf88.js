(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{424:function(t,e,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0c462134",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n(424)},482:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".my-gallery img[data-v-0e9badc0]{max-height:283px!important;max-width:376px!important;-o-object-fit:cover!important;object-fit:cover!important;width:100%!important}.my-gallery[data-v-0e9badc0]{display:grid!important;grid-template-columns:1fr 1fr 1fr!important}.pswp__img[data-v-0e9badc0]{height:auto!important;width:auto!important}",""]),r.locals={},t.exports=r},516:function(t,e,n){"use strict";n.r(e);var r=n(13),o=(n(71),n(28),n(16),n(29),{layout:"default",head:function(){return{title:"".concat(this.marks.name)||""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://project.a-lux.dev/api/auto/mark/".concat(t.$route.params.id)).then((function(e){t.marks=e.data}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{marks:[],items:[],imgg:null}},mounted:function(){var t=this,e="https://project.a-lux.dev/api/auto/mark/"+window.location.pathname.split("/").pop();this.$axios.get(e).then((function(e){t.marks=e.data,t.imgg=e.data.images,t.imgg.forEach((function(element){t.items.push({src:element,thumbnail:element,w:1e3,h:1e3})}))}))}}),c=(n(481),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return 0!=t.marks.length?e("div",{staticClass:"container"},[e("div",{staticClass:"marks"},[e("vue-picture-swipe",{attrs:{items:t.items}})],1)]):t._e()}),[],!1,null,"0e9badc0",null);e.default=component.exports}}]);