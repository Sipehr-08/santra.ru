(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{382:function(t,e,n){"use strict";n.r(e);n(68);var c={name:"HorizontalCollapseItem",mixins:[n(148).mixin],data:function(){return{isActive:!1,itemMinWidth:150,isOpen:!0,itemMaxWidth:1e3}},watch:{isActive:function(){this.isActive?this.$emit("open"):this.$emit("close")}},methods:{activate:function(){var t=this;setTimeout((function(){t.isActive=!t.isActive}),10)},away:function(){this.isActive=!1}},props:["className"]},l=n(9),component=Object(l.a)(c,(function(){var t,e=this,n=e.$createElement,c=e._self._c||n;return c("li",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.away,expression:"away"}],staticClass:"js-horizontal-collapse-item  horizontal-collapse__item",class:(t={"is-active":e.isActive},t[e.className]=!0,t),style:"width: "+(e.isActive?e.itemMaxWidth+"px":"100%")+";min-width: "+e.itemMinWidth+"px;max-width: "+e.itemMaxWidth+"px;",attrs:{tabindex:"0",role:"button"},on:{click:e.activate}},[c("div",{staticClass:"js-horizontal-collapse-item-inner  horizontal-collapse__item-inner",style:"width: "+e.itemMaxWidth+"px"},[e._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports}}]);