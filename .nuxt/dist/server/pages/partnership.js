exports.ids = [28,4,5];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3fef7fea", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/reviewsBiz.vue?vue&type=template&id=24768734&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "reviewsBiz__biz"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.reviewsBiz, function (item) {
    return _c('swiper-slide', {
      key: item.id,
      staticClass: "swiper-slide review-slide"
    }, [_c('div', {
      staticClass: "review-biz__item"
    }, [_c('h2', {
      staticClass: "review-biz__header"
    }, [_vm._v("\n          " + _vm._s(item.title) + "\n        ")]), _vm._v(" "), _c('img', {
      attrs: {
        "src": "https://cantra.ru/image/my_images/quotes.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "insta_feedback review-biz__content",
      class: {
        insta_feedback_open: _vm.feedopen === item.id
      }
    }, [_vm._v("\n          " + _vm._s(item.content) + "\n          "), _c('div', {
      staticClass: "insta_feedback_toggle"
    })])]), _vm._v(" "), _vm.feedopen != item.id ? _c('a', {
      staticClass: "insta_toggle-btn",
      on: {
        "click": function ($event) {
          $event.preventDefault();
          _vm.feedopen = item.id;
        }
      }
    }, [_vm._v("Раскрыть")]) : _vm._e(), _vm._v(" "), _vm.feedopen === item.id ? _c('a', {
      staticClass: "insta_toggle-btn",
      on: {
        "click": function ($event) {
          $event.preventDefault();
          _vm.feedopen = 0;
        }
      }
    }, [_vm._v("Скрыть")]) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "review__line"
    })]);
  }), 1), _vm._ssrNode(" <div class=\"swiper-pagination new-pag\" data-v-24768734></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/layout/reviewsBiz.vue?vue&type=template&id=24768734&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/reviewsBiz.vue?vue&type=script&lang=js&



/* harmony default export */ var reviewsBizvue_type_script_lang_js_ = (external_vue_default.a.extend({
  name: "reviewsBiz",
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  data() {
    return {
      feedopen: 0,
      reviewsBiz: [],
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        initialSlide: 5,
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: "true"
        }
      }
    };
  },
  mounted() {
    external_axios_default.a.get("https://project.a-lux.dev/api/partner").then(res => {
      this.reviewsBiz = res.data.review_biz;
      this.swiperOption.initialSlide = res.data.review_biz.length;
    });
  }
}));
// CONCATENATED MODULE: ./components/layout/reviewsBiz.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_reviewsBizvue_type_script_lang_js_ = (reviewsBizvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/reviewsBiz.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_reviewsBizvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24768734",
  "30333c33"
  
)

/* harmony default export */ var reviewsBiz = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAMAAAAcqPc3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIev/tYAAAATdFJOUwBv37+f739AP4+vgCBgT5AQL19bHZoKAAAArUlEQVQoz42RO5aEMAwEy39kG4aZvv9dN7DhGaKtsAK11AKg1KSbFL8MPnrRLh1+280eJAOKlHmQpQJVcZVHigRFSDoAOFusrhMldnmQNgA3I3twFOnyTfJmXnIjcvo+w03pXH2WH7FJbvVVNrwp/sffc/xzTp+lfKS+epzkzdJYa/HkUbLj8lcPPdfoToDRQ1DgRZhLtadu0hcwqR7lZg/XQ+z9x3kj2/PvG/AHfi4PwlET4/gAAAAASUVORK5CYII="

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAMAAADOBMQXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwC/QI8gz5/fH+8QUDCvX39rfAPeAAAAWUlEQVQY023QORKAMAxD0Z/FMdkg9z8tXTATu3yFRjLEqcuezAF9nRcJjgaqo8qOs+lbr1w8hc+twu1pS452PRJGNM13X9u7Is4K4XG00PQcnCEn+f1CU+YFsXUSUWcAvtcAAAAASUVORK5CYII="

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAWCAYAAAAW5GZjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB8SURBVHgBY2DABAJA3ADE94H4PxpGAQo4FGFVvB+Pwv/o1uNT+J8JTTE62AB1GhizMOAHF4D4IYzDxEACAJk8H48zAqBOAIEPjAxYggQH+ECKMy6QovgDyM0HoByQmw3QFDyAYgYkdWDgwIAZEfXICkgKulHFVFH8gZBiAHUgLgZLHhx0AAAAAElFTkSuQmCC"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAMAAACae25RAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBHYtUAAAARdFJOUwC/cBAgYG/ff++fMJDPr1BA/52QrAAAAHVJREFUGNNtzkkOwzAMBMGWrYiUlzj9/8/mIDmAgfDGwnChZeYOi+obWDMzG0UtwKYG8FINmupntAGEarL2EZ88w5Cq1+Q1VCuMeNSmBodqg9+RUD1VN0YVH9Um1/7gvk9f/O85oY5Arw/v92Dh3n+c44cMNb5zLgsbvb1SFwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partnership_vue_vue_type_style_index_0_id_c8ab04a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partnership_vue_vue_type_style_index_0_id_c8ab04a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partnership_vue_vue_type_style_index_0_id_c8ab04a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partnership_vue_vue_type_style_index_0_id_c8ab04a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partnership_vue_vue_type_style_index_0_id_c8ab04a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(165);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(166);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-response-success{align-items:center;color:#3c763d;display:flex;font-size:16px;justify-content:center;line-height:18px;margin-top:10px}.form-response-success svg{margin-right:5px}@media(max-width:1205px){.red_mystery{margin-left:0;margin-top:-456px;position:relative;top:70vh;width:100%}.our_team{left:12vw;position:absolute;z-index:111}.our_team img:first-child{display:block;margin:0 auto 15px}}@media(max-width:800px){.partnership__top__content{font-size:14px;line-height:24px;width:277px!important}.partnership_top_block_left{margin-top:15px!important}.partnership_top_block_left div:nth-child(2){margin-top:15px}}.Reviews{margin-top:100px}ul.parnership_sixth-item p{font-size:14px!important}.partnership_third_block>div{padding-right:26px}p{font-size:1.1em}.partnership__top__content{width:372px}@media(max-width:730px){.partnership_top_block{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")!important}.partnership_top_block_left{font-size:16px!important;line-height:19px!important}.partnership_third_block{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")!important}.success_years{height:auto;margin:0!important}.success_years h4{font-size:14px!important}.success_years-item{line-height:12px!important;margin:0!important}.success_years-item li,.success_years-item p{font-size:12px!important;line-height:14px!important;margin:0!important}.success_years ul{line-height:12px!important}.success_years ul li,.success_years ul p{font-size:12px!important;line-height:12px!important}.success_years ul li,.success_years>ul>p{font-size:12px!important;line-height:14px!important}.success_years:first-child{margin-top:-10px!important}.success_years:nth-child(2){margin-top:30px!important}.success_years:nth-child(3){margin-top:10px!important}.success_years:nth-child(4){margin-top:8px!important}}@media screen and (max-width:550px){.partnership_top_block_left div:nth-child(2){margin-top:37px!important}}.new-partnership-ul{max-width:475px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bigimagemobile.917cda9.jpg";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chronology_mob.4dfc29d.jpg";

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/partnership.vue?vue&type=template&id=c8ab04a8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "cantra_content partnership"
  }, [_vm._ssrNode("<div class=\"partnership_top_block\"" + _vm._ssrStyle(null, {
    'background-image': 'url(' + '/storage/partner-mains/May2022/HifaBGucT7rx6DchZzFP.jpg' + ')'
  }, null) + "><div class=\"partnership_top_block_left\"><div class=\"partnership__top__content\">" + _vm._s(_vm.main.content) + "</div> <div class=\"partnership-icon\"><a href=\"https://www.instagram.com/cantra.ru/\" target=\"_blank\" class=\"partnership_insta\"><img" + _vm._ssrAttr("src", __webpack_require__(159)) + " alt></a> <a href=\"https://www.youtube.com/channel/UCZDI20Z_t1Q76Z3xrwHPz_Q\" target=\"_blank\" class=\"partnership_ytb\"><img" + _vm._ssrAttr("src", __webpack_require__(160)) + " alt></a> <a href=\"https://www.facebook.com/cantra.ru\" target=\"_blank\" class=\"partnership_fb\"><img" + _vm._ssrAttr("src", __webpack_require__(161)) + " alt></a> <a href=\"https://vk.com/cantrarf\" target=\"_blank\" class=\"partnership_vk\"><img" + _vm._ssrAttr("src", __webpack_require__(162)) + " alt></a></div></div></div> <div class=\"partnership_second_block\"><h1>Что такое CANTRA?</h1> <div class=\"partnership_red_stripe\"></div> <div>\n      Компания CANTRA - лидер по производству премиальных автонакидок на\n      территории СНГ.\n    </div></div> <div class=\"partnership_third_block\"" + _vm._ssrStyle(null, {
    'background-image': 'url(' + '/storage/partner-bios/May2022/FIsi2SqmEsmt7yPU3Vjm.jpg' + ')'
  }, null) + "><div><div class=\"success_years\"><h4>" + _vm._ssrEscape(_vm._s(_vm.bio.step1)) + "</h4> <ul class=\"success_years-item\">" + _vm._s(_vm.bio.step1_content) + "</ul></div> <div class=\"success_years\"><h4>" + _vm._ssrEscape(_vm._s(_vm.bio.step2)) + "</h4> <ul class=\"success_years-item\">" + _vm._s(_vm.bio.step2_content) + "</ul></div> <div class=\"success_years\"><h4>" + _vm._ssrEscape(_vm._s(_vm.bio.step3)) + "</h4> <ul class=\"success_years-item\">" + _vm._s(_vm.bio.step3_content) + "</ul></div> <div class=\"success_years\"><h4>" + _vm._ssrEscape(_vm._s(_vm.bio.step4)) + "</h4> <ul class=\"success_years-item\">" + _vm._s(_vm.bio.step4_content) + "</ul></div></div></div> <div class=\"partnership_fifth_block\"><h2>cantra в цифрах</h2> <div class=\"partnership_red_stripe\"></div> <div class=\"cantra_numbers\">" + _vm._ssrList(_vm.cards, function (item) {
    return "<div><img" + _vm._ssrAttr("src", item.background) + "> <div class=\"cantra_numbers_text\"><span>" + _vm._ssrEscape(_vm._s(item.title)) + "</span> <span>" + _vm._ssrEscape(_vm._s(item.content)) + "</span></div></div>";
  }) + "</div></div> <div class=\"partnership_sixth_block\"><div><h2>" + _vm._ssrEscape(_vm._s(_vm.benefit.title)) + "</h2> <div class=\"partnership_red_stripe\"></div> <ul class=\"parnership_sixth-item new-partnership-ul\">" + _vm._s(_vm.benefit.content) + "</ul></div> <div><img" + _vm._ssrAttr("src", _vm.benefit.image) + "></div></div> "), _vm._ssrNode("<div class=\"partnership__reviews\">", "</div>", [_c('Reviews')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"partnership__biz\">", "</div>", [_c('reviewsBiz')], 1), _vm._ssrNode(" <div class=\"partnership_ninth_block\"><h2>наша команда</h2> <div class=\"partnership_red_stripe\"></div> <div class=\"our_team\">" + _vm._ssrList(_vm.team, function (team) {
    return "<img" + _vm._ssrAttr("src", team.image) + ">";
  }) + "</div> <div class=\"red_mystery\"></div></div> <div class=\"partnership_fourth_block\"><h2>Оставьте заявку</h2> <div class=\"partnership_red_stripe\"></div></div> <div class=\"callback-contactm_partnership\"><form id=\"form-contactm_partnership\" class=\"form-horizontal\"><input type=\"text\" name=\"request_name\" value id=\"input-name\" placeholder=\"Имя\" required=\"required\" class=\"form-control\"> <input type=\"text\" name=\"request_email\" value id=\"input-mail\" placeholder=\"Email\" required=\"required\" class=\"form-control\"> <input type=\"text\" id=\"recall-name\" placeholder=\"Телефон\" required=\"required\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57 && /^\\d{0,10}$/.test(this.value));\"" + _vm._ssrAttr("value", _vm.phone) + " class=\"form-control\"> <input type=\"submit\" value=\"Отправить заявку\" class=\"button submit-contactm_partnership\"></form> " + (_vm.isSuccess ? "<div class=\"form-response-success\"><svg fill=\"#3c763d\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" width=\"20px\" height=\"20px\"><path d=\"M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z\"></path></svg>\n      Заявка отправлена\n    </div>" : "<!---->") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/partnership.vue?vue&type=template&id=c8ab04a8&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-the-mask"
var external_vue_the_mask_ = __webpack_require__(6);

// EXTERNAL MODULE: ./components/layout/reviews.vue + 4 modules
var reviews = __webpack_require__(87);

// EXTERNAL MODULE: ./components/layout/reviewsBiz.vue + 4 modules
var reviewsBiz = __webpack_require__(131);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/partnership.vue?vue&type=script&lang=js&




/* harmony default export */ var partnershipvue_type_script_lang_js_ = (external_vue_default.a.extend({
  layout: "default",
  head() {
    return {
      title: 'Накидки на автомобильные сиденья, автонакидки для автомобилей от производителя Cantra™',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA'
      }]
    };
  },
  data() {
    return {
      main: "",
      mainImage: "",
      benefit: "",
      bio: "",
      cards: "",
      team: "",
      name: "",
      email: "",
      phone: "",
      isSuccess: false
    };
  },
  components: {
    reviewsBiz: reviewsBiz["default"],
    Reviews: reviews["default"],
    TheMask: external_vue_the_mask_["TheMask"]
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/partner").then(res => {
      this.main = res.data.main;
      this.mainImage = this.main.image;
      this.bio = res.data.bio;
      this.cards = res.data.card;
      this.benefit = res.data.benefit;
      this.team = res.data.command;
    });
  },
  methods: {
    sendData() {
      this.$axios.post("https://project.a-lux.dev/api/applicationjob", {
        name: this.name,
        email: this.email,
        phone: this.phone
      }).then(res => {
        if (res.status == '200' || res.status == '201') {
          this.isSuccess = true;
          this.name = this.email = this.phone = '';
          setTimeout(() => {
            this.isSuccess = false;
          }, 5000);
        }
      });
    }
  },
  watch: {
    phone(n, old) {
      if (n == 8) {
        this.phone = '7';
      }
      if (n == 9) {
        this.phone = '79';
      }
    }
  }
}));
// CONCATENATED MODULE: ./pages/partnership.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_partnershipvue_type_script_lang_js_ = (partnershipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/partnership.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_partnershipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4647c85a"
  
)

/* harmony default export */ var partnership = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(12).default})


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2f9a0b86", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_f973a85e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_f973a85e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_f973a85e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_f973a85e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_f973a85e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".share h2[data-v-f973a85e]{border-bottom:1px solid #000;color:#000;font-family:Lato,sans-serif;font-size:18px;font-weight:400;line-height:27px;margin-bottom:40px;margin-top:60px;text-align:inherit;text-transform:uppercase}.insta_slick_slider .swiper-container[data-v-f973a85e]{width:100%!important}.insta_toggle-btn[data-v-f973a85e]{cursor:pointer}@media (max-width:1100px){.insta_slick_slider .swiper-slide[data-v-f973a85e]{height:80vh;margin-top:100px;width:300px}}.swiper-pagination-bullet[data-v-f973a85e]{background:rgba(0,0,0,.2);color:#000;font-size:24px;height:20px!important;line-height:40px;margin:0 5px;opacity:1;text-align:center;width:20px!important}.swiper-pagination-bullet-active[data-v-f973a85e]{background:#000!important;color:#fff;opacity:.75!important}.swiper-pagination[data-v-f973a85e]{margin-bottom:3%;position:static!important;width:100%}@media screen and (max-width:550px){.insta_slick_slider .swiper-container[data-v-f973a85e]{width:calc(100% + 20px)!important}.share h2[data-v-f973a85e]{margin-top:0;padding:0 5px}.insta_slick_slider .swiper-slide[data-v-f973a85e]{padding:0 10px}.sixth_block .h2-text[data-v-f973a85e]{margin-top:0}.star-photo[data-v-f973a85e]{max-height:290px;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/reviews.vue?vue&type=template&id=f973a85e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.reviews.length > 0 ? _c('div', {
    staticClass: "insta_slick_slider"
  }, [_vm._ssrNode((_vm.showTitle ? "<div class=\"share\" data-v-f973a85e><h2 data-v-f973a85e>Звезды выбирают Cantra</h2></div>" : "<!---->") + " "), _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "slides-per-view": 4,
      "space-between": 1,
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.reviews, function (item) {
    return _c('swiper-slide', {
      key: item.id,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "insta_slider_block"
    }, [_c('div', {
      staticClass: "photo_with_cover"
    }, [_c('img', {
      staticClass: "star-photo",
      attrs: {
        "src": item.image
      }
    })]), _vm._v(" "), _c('div', [_c('img', {
      attrs: {
        "src": item.logo
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "insta_nickname"
    }, [_vm._v("\n            " + _vm._s(item.name)), _c('br'), _vm._v(" "), _c('a', {
      attrs: {
        "rel": "nofollow",
        "href": item.url,
        "target": "_blank",
        "tabindex": "0"
      }
    }, [_vm._v(_vm._s(item.tag))])]), _vm._v(" "), _c('div', {
      staticClass: "insta_feedback",
      class: {
        insta_feedback_open: _vm.feedopen === item.id
      }
    }, [_vm._v("\n            " + _vm._s(item.content) + "\n            "), _c('div', {
      staticClass: "insta_feedback_toggle"
    })]), _vm._v(" "), _vm.feedopen != item.id ? _c('a', {
      staticClass: "insta_toggle-btn",
      on: {
        "click": function ($event) {
          $event.preventDefault();
          _vm.feedopen = item.id;
        }
      }
    }, [_vm._v("Раскрыть")]) : _vm._e(), _vm._v(" "), _vm.feedopen === item.id ? _c('a', {
      staticClass: "insta_toggle-btn",
      on: {
        "click": function ($event) {
          $event.preventDefault();
          _vm.feedopen = 0;
        }
      }
    }, [_vm._v("Скрыть")]) : _vm._e()])])]);
  }), 1), _vm._ssrNode(" <div class=\"swiper-pagination-reviews new-pag\" data-v-f973a85e></div>")], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/layout/reviews.vue?vue&type=template&id=f973a85e&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(74);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/reviews.vue?vue&type=script&lang=js&



/* harmony default export */ var reviewsvue_type_script_lang_js_ = (external_vue_default.a.extend({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  data() {
    return {
      reviews: "",
      feedopen: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          900: {
            slidesPerGroup: 3,
            slidesPerView: 3
          },
          1000: {
            slidesPerGroup: 4,
            slidesPerView: 4
          }
        },
        slidesPerGroup: 1,
        pagination: {
          el: ".swiper-pagination-reviews",
          type: "bullets",
          clickable: "true"
        }
      }
    };
  },
  props: {
    title: String,
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    external_axios_default.a.get("https://project.a-lux.dev/api/index  ").then(res => {
      this.reviews = res.data.review;
    });
  }
}));
// CONCATENATED MODULE: ./components/layout/reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_reviewsvue_type_script_lang_js_ = (reviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/reviews.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_reviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f973a85e",
  "0e2d2520"
  
)

/* harmony default export */ var reviews = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("16eb1f07", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewsBiz_vue_vue_type_style_index_0_id_24768734_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewsBiz_vue_vue_type_style_index_0_id_24768734_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewsBiz_vue_vue_type_style_index_0_id_24768734_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewsBiz_vue_vue_type_style_index_0_id_24768734_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewsBiz_vue_vue_type_style_index_0_id_24768734_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide-active[data-v-24768734]{position:relative}.swiper-slide-active[data-v-24768734]:after{background:#000;content:\"\";height:60%;position:absolute;right:0;top:50%;transform:translateY(-50%);width:1px}.review__line[data-v-24768734]{border-right:1px solid #000}.insta_feedback_toggle[data-v-24768734]{height:252px}.insta_feedback[data-v-24768734]{height:170px}.review-biz__header[data-v-24768734]{color:#000;font-size:16px;font-weight:600;line-height:1.24;text-align:center;text-transform:uppercase}.review-biz__content[data-v-24768734]{text-align:center}.review-biz__item[data-v-24768734]{margin:0 auto;max-width:485px;width:100%}.review-slide[data-v-24768734]{width:50%!important}@media screen and (max-width:550px){.review-slide[data-v-24768734]{width:100%!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=partnership.js.map