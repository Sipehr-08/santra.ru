exports.ids = [13];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("377eb8aa", content, true, context)
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3aa7e0ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3aa7e0ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3aa7e0ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3aa7e0ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3aa7e0ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog__wrapper[data-v-3aa7e0ed]{height:140vh}.blog__item[data-v-3aa7e0ed]{margin:0 auto;max-height:650px;max-width:750px;padding:10px;width:100%}.blog__item img[data-v-3aa7e0ed]{margin-bottom:20px;max-width:750px;width:100%}@media (min-width:1201px){.blog__conatiner[data-v-3aa7e0ed]{max-width:1200px}}@media (max-width:1200px){.blog__conatiner[data-v-3aa7e0ed]{max-width:750px}}.blog__conatiner[data-v-3aa7e0ed]{margin:0 auto;width:100%}.new__blog-wrapper[data-v-3aa7e0ed]{height:auto}.new__blog-wrapper .blog__item[data-v-3aa7e0ed]{max-height:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_id.vue?vue&type=template&id=3aa7e0ed&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog__wrapper new__blog-wrapper"
  }, [_vm._ssrNode("<div class=\"blog__conatiner\" data-v-3aa7e0ed>" + (_vm.blogId ? "<div class=\"blog__item\" data-v-3aa7e0ed><img" + _vm._ssrAttr("src", _vm.blogId.image) + " alt data-v-3aa7e0ed> <p data-v-3aa7e0ed>" + _vm._s(_vm.blogId.content) + "</p></div>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/_id.vue?vue&type=template&id=3aa7e0ed&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    return {
      title: this.info.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: '★ Продажа чехлов на автомобиль от  официального производителя Cantra™★ Доступная цена, гарантия, доставка и салоны по всей России.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'накидка на сиденье отзывы, накидка на сиденье отзывы, накидки на сиденья автомобиля отзывы, авто накидки отзывы'
      }]
    };
  },
  async fetch() {
    await external_axios_default.a.get(`https://project.a-lux.dev/api/blog/${this.id}`).then(res => {
      this.info = res.data;
    });
  },
  data() {
    return {
      routerId: "",
      blogId: "",
      info: {}
    };
  },
  mounted() {
    external_axios_default.a.get(`https://project.a-lux.dev/api/blog/${this.id}`).then(res => {
      this.blogId = res.data;
    });
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3aa7e0ed",
  "433eb432"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map