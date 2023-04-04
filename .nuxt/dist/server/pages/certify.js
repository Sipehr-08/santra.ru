exports.ids = [20];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3a716ca0", content, true, context)
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("389b95e5", content, true)

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".range-slider{display:inline-block;height:20px;padding:0 10px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;height:100%;position:relative;width:100%}.range-slider-fill,.range-slider-rail{border-radius:2px;display:block;height:4px;left:0;position:absolute;top:50%;transform:translateY(-50%)}.range-slider-rail{background-color:#e2e2e2;width:100%}.range-slider-fill{background-color:#21fb92}.range-slider-knob{background-color:#fff;border:1px solid #f5f5f5;border-radius:50%;box-shadow:1px 1px rgba(0,0,0,.2);box-sizing:border-box;cursor:pointer;display:block;height:20px;left:0;position:absolute;top:50%;transform:translate(-50%,-50%);width:20px}.range-slider-hidden{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certify_vue_vue_type_style_index_0_id_bb80b540_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certify_vue_vue_type_style_index_0_id_bb80b540_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certify_vue_vue_type_style_index_0_id_bb80b540_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certify_vue_vue_type_style_index_0_id_bb80b540_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certify_vue_vue_type_style_index_0_id_bb80b540_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(150);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content_certify{margin:0 auto;max-width:1200px;width:90%}.cd-image{position:relative}.cd-handle{left:5%;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:90%!important;z-index:99}.range-slider-fill,.range-slider-rail{visibility:hidden!important}.range-slider-knob{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 100%!important;background-color:red!important;background-position:50%!important;border:none!important;box-shadow:0 0 0 6px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.6),inset 0 1px 0 hsla(0,0%,100%,.3)!important;cursor:all-scroll!important;height:40px!important;width:40px!important}.range-slider-knob:hover{background-color:#445b7c!important}.fake_original_block.is-active .cd-resize-img{animation:cd-bounce-in .7s;width:50%}.cd-handle{transform:translateZ(0) scale(0)}.fake_original_block.is-active .cd-handle{transform:translateZ(0) scale(1);transition:transform .3s .7s,opacity 0s .7s}@keyframes cd-bounce-in{0%{width:0}60%{width:55%}to{width:50%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxMywyMSA4LDE2IDEzLDExICIvPgo8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE5LDExIDI0LDE2IDE5LDIxICIvPgo8L3N2Zz4="

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/certify.vue?vue&type=template&id=bb80b540&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "content certify content_certify"
  }, [_vm._ssrNode("<div class=\"fake_original_block\"><h1>" + _vm._ssrEscape(_vm._s(_vm.mains.title)) + "</h1> <p>" + _vm._ssrEscape(_vm._s(_vm.mains.content)) + "</p></div> "), _vm._l(_vm.items.sections, function (fake) {
    return _vm._ssrNode("<div class=\"fake_original_block\">", "</div>", [_vm._ssrNode("<figure class=\"cd-image-container\">", "</figure>", [_vm._ssrNode("<div class=\"cd-image\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", fake.origin) + " alt=\"Original Image\"> "), _c('range-slider', {
      staticClass: "cd-handle",
      attrs: {
        "start-animation": true,
        "min": "0",
        "max": "100",
        "step": "0.1"
      },
      model: {
        value: _vm.sliderValue,
        callback: function ($$v) {
          _vm.sliderValue = $$v;
        },
        expression: "sliderValue"
      }
    }, [_vm._v(">")])], 2), _vm._ssrNode(" " + (_vm.sliderValue !== 100 ? "<span class=\"cd-image-label\">Оригинал</span>" : "<!---->") + " <div class=\"cd-resize-img\"" + _vm._ssrStyle(null, {
      width: _vm.sliderValue + '%'
    }, null) + "><img" + _vm._ssrAttr("src", fake.fake) + " alt=\"Modified Image\"> " + (_vm.sliderValue !== 0 ? "<span class=\"cd-image-label\">Подделка</span>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" <h2>" + _vm._ssrEscape(_vm._s(fake.title)) + "</h2> <p>" + _vm._ssrEscape(_vm._s(fake.content)) + "</p>")], 2);
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/certify.vue?vue&type=template&id=bb80b540&

// EXTERNAL MODULE: external "vue-range-slider"
var external_vue_range_slider_ = __webpack_require__(75);
var external_vue_range_slider_default = /*#__PURE__*/__webpack_require__.n(external_vue_range_slider_);

// EXTERNAL MODULE: ./node_modules/vue-range-slider/dist/vue-range-slider.css
var vue_range_slider = __webpack_require__(146);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/certify.vue?vue&type=script&lang=js&



/* harmony default export */ var certifyvue_type_script_lang_js_ = (external_vue_default.a.extend({
  layout: "default",
  components: {
    RangeSlider: external_vue_range_slider_default.a
  },
  data() {
    return {
      items: "",
      sliderValue: 50,
      mains: ""
    };
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/fake").then(res => {
      this.items = res.data;
      this.mains = res.data.main;
    });
    setTimeout(() => {
      this.$nextTick(() => {
        addClassWithScroll();
      });
    }, 1000);
    window.addEventListener('scroll', addClassWithScroll);
  }
}));
function addClassWithScroll() {
  const blocks = document.querySelectorAll(".fake_original_block");
  blocks.forEach(ref => {
    if (ref.offsetTop - 400 <= window.pageYOffset) {
      ref.classList.add('is-active');
    }
  });
}
// CONCATENATED MODULE: ./pages/certify.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_certifyvue_type_script_lang_js_ = (certifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/certify.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(148)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_certifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d1cfb6a4"
  
)

/* harmony default export */ var certify = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=certify.js.map