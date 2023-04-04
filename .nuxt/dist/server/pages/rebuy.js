exports.ids = [30];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a1da86e0", content, true, context)
};

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rebuy_vue_vue_type_style_index_0_id_6f35862d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rebuy_vue_vue_type_style_index_0_id_6f35862d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rebuy_vue_vue_type_style_index_0_id_6f35862d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rebuy_vue_vue_type_style_index_0_id_6f35862d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rebuy_vue_vue_type_style_index_0_id_6f35862d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rebuy__pdf a[data-v-6f35862d]{align-items:center;cursor:pointer;display:flex;flex-shrink:0;font-family:\"Open Sans\",sans-serif;font-size:14px;width:300px}.rebuy__pdf img[data-v-6f35862d]{margin-right:10px}a[data-v-6f35862d]{color:#000;text-decoration-line:none}@media (min-width:1201px){.rebuy__container[data-v-6f35862d]{max-width:1200px}}@media (max-width:800px){.rebuy__container h1[data-v-6f35862d]{margin-left:10px!important}.rebuy__item[data-v-6f35862d]{display:block;width:100%}}@media (max-width:1200px){.rebuy__container[data-v-6f35862d]{max-width:750px}}.rebuy__container[data-v-6f35862d]{margin:0 auto 50px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/rebuy.vue?vue&type=template&id=6f35862d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rebuy__container"
  }, [_vm._ssrNode("<div class=\"rebuy__wrapper\" data-v-6f35862d>" + _vm._ssrList(_vm.rebuy, function (item, index) {
    return "<div class=\"rebuy__item\" data-v-6f35862d><h1 data-v-6f35862d>" + _vm._ssrEscape(_vm._s(item.title)) + "</h1> <p data-v-6f35862d>" + _vm._s(item.subtitle) + "</p> " + (item.id === 1 ? "<div class=\"rebuy__pdf\" data-v-6f35862d><a href=\"https://project.a-lux.dev/api/rebuy?download=1\" data-v-6f35862d><img src=\"https://cantra.ru/img/pdf.png\" alt data-v-6f35862d> <span data-v-6f35862d>\n            Форма заявления на возврат <br data-v-6f35862d> <b data-v-6f35862d>.PDF, 419 Kb</b></span></a></div>" : "<!---->") + " " + (item.danger !== null ? "<div data-v-6f35862d><p class=\"rebuy__item-danger\" data-v-6f35862d>" + _vm._s(item.danger) + "</p></div>" : "<!---->") + "</div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/rebuy.vue?vue&type=template&id=6f35862d&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/rebuy.vue?vue&type=script&lang=js&

/* harmony default export */ var rebuyvue_type_script_lang_js_ = ({
  data() {
    return {
      rebuy: ""
    };
  },
  methods: {
    downloadFile() {
      external_axios_default.a.get("https://project.a-lux.dev/api/rebuy?download=1");
    }
  },
  mounted() {
    external_axios_default.a.get("https://project.a-lux.dev/api/rebuy").then(res => {
      this.rebuy = res.data;
    });
  }
});
// CONCATENATED MODULE: ./pages/rebuy.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_rebuyvue_type_script_lang_js_ = (rebuyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/rebuy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(169)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_rebuyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f35862d",
  "4042a86e"
  
)

/* harmony default export */ var rebuy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=rebuy.js.map