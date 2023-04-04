exports.ids = [14];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("90b06532", content, true, context)
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainBlog_vue_vue_type_style_index_0_id_6cac3c08_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainBlog_vue_vue_type_style_index_0_id_6cac3c08_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainBlog_vue_vue_type_style_index_0_id_6cac3c08_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainBlog_vue_vue_type_style_index_0_id_6cac3c08_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainBlog_vue_vue_type_style_index_0_id_6cac3c08_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog__wrapper[data-v-6cac3c08]{align-items:center;display:flex;flex-direction:column;width:100%}.blog__conatiner[data-v-6cac3c08]{grid-gap:40px;display:grid;grid-template-columns:1fr 1fr;width:100%!important}.blog__conatiner div[data-v-6cac3c08]:nth-child(n+2){margin-left:0!important}a[data-v-6cac3c08]{color:#000;text-decoration-line:none}h2[data-v-6cac3c08],h2[data-v-6cac3c08]:hover{transition:.3s}h2[data-v-6cac3c08]:hover{color:red}.blog__item[data-v-6cac3c08]{display:inline-block;vertical-align:top}.blog__item img[data-v-6cac3c08]{max-width:100%!important}.content-blog[data-v-6cac3c08]{margin-left:0!important}.blog__item img[data-v-6cac3c08]{max-width:350px;width:100%}@media (min-width:1201px){.blog__conatiner[data-v-6cac3c08]{max-width:1140px}}@media (max-width:800px){.blog__conatiner div[data-v-6cac3c08]:nth-child(n+2),.blog__conatiner h1[data-v-6cac3c08]{margin-left:10px!important}.blog__item[data-v-6cac3c08]{display:block;margin:0 auto;width:100%}}@media (max-width:1200px){.blog__conatiner[data-v-6cac3c08]{max-width:750px}}.blog__conatiner[data-v-6cac3c08]{grid-column-start:16vw;margin:0 auto;width:76%}.blog__conatiner div[data-v-6cac3c08]:nth-child(n+2){margin-left:150px}@media screen and (max-width:550px){.blog__conatiner[data-v-6cac3c08]{align-items:flex-start;display:flex!important;flex-wrap:wrap;max-width:100%!important;padding:0 15px;width:100%!important}.blog__conatiner div[data-v-6cac3c08],.blog__conatiner div[data-v-6cac3c08]:nth-child(n+2){margin-left:0!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/mainBlog.vue?vue&type=template&id=6cac3c08&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog__wrapper"
  }, [_vm._ssrNode("<div class=\"blog__conatiner\" data-v-6cac3c08>", "</div>", [_vm._ssrNode("<h1 data-v-6cac3c08>Блог</h1> <br data-v-6cac3c08> <br data-v-6cac3c08> <br data-v-6cac3c08> "), _vm._l(_vm.blog, function (item, index) {
    return _vm._ssrNode("<div class=\"blog__item\" data-v-6cac3c08>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/blog/' + item.id
      }
    }, [_c('img', {
      attrs: {
        "src": item.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('h2', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "content-blog",
      domProps: {
        "innerHTML": _vm._s(item.preview)
      }
    })])], 1);
  })], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/mainBlog.vue?vue&type=template&id=6cac3c08&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/mainBlog.vue?vue&type=script&lang=js&

/* harmony default export */ var mainBlogvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Блог',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Блог Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'Блог накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA'
      }]
    };
  },
  data() {
    return {
      blog: ""
    };
  },
  mounted() {
    external_axios_default.a.get("https://project.a-lux.dev/api/blog").then(res => {
      this.blog = res.data;
    });
  }
});
// CONCATENATED MODULE: ./pages/blog/mainBlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_mainBlogvue_type_script_lang_js_ = (mainBlogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/mainBlog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_mainBlogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6cac3c08",
  "18f06ec4"
  
)

/* harmony default export */ var mainBlog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mainBlog.js.map