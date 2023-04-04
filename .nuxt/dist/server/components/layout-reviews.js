exports.ids = [4];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=layout-reviews.js.map