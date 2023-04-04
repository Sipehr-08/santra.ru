exports.ids = [5];
exports.modules = {

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
//# sourceMappingURL=layout-reviews-biz.js.map