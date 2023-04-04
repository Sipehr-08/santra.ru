exports.ids = [24];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("29a865c2", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_29417f09_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_29417f09_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_29417f09_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_29417f09_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_29417f09_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img.pswp__img{height:auto!important;max-height:1000px;-o-object-fit:contain;object-fit:contain;position:relative;width:100%}.pswp__img--placeholder{display:none}.modal{background:rgba(0,0,0,.8);display:flex;position:fixed}.bigswiper{margin:auto;max-width:900px;position:relative;width:100%}.swiper{max-height:800px}.slide-img{height:100%;width:100%}.swiper-button-next,.swiper-button-prev{background:rgba(0,0,0,.5);color:#fff;height:70px;margin:0;top:50%!important;transform:translateY(-50%)!important;width:50px}.swiper-button-prev{left:-60px}.swiper-button-next{right:-60px}.new__gallery .pswp__img{max-height:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=template&id=29417f09&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "new-gallery new__gallery"
  }, [_vm._ssrNode("<div id=\"gall\" class=\"cantra_content\">", "</div>", [_vm.swiperImages && _vm.swiperImages.length > 0 ? _c('vue-picture-swipe', {
    staticClass: "imgimg",
    attrs: {
      "items": _vm.swiperImages
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=template&id=29417f09&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(76);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=script&lang=js&


/* harmony default export */ var galleryvue_type_script_lang_js_ = (external_vue_default.a.extend({
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
  setup() {
    return {
      modules: [Pagination]
    };
  },
  data() {
    return {
      swiperImages: [],
      images: "",
      isModal: false,
      initial: 1,
      swiperOptions: {
        slidesPerView: 1,
        // loop: true,
        spaceBetween: 50,
        initialSlide: this.initial,
        // centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
      //   swiper: null,
    };
  },

  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/gallery").then(res => {
      console.log(res.data);
      this.images = res.data.image;
      this.images.forEach(element => {
        this.swiperImages.push({
          src: element,
          w: 768,
          h: 500,
          thumbnail: element
        });
      });
    });
    // .then(() => {
    //   const images = document.querySelectorAll(".gallery-thumbnail");
    //   const wrapper = document.createElement("div");
    //   wrapper.setAttribute("class", "mini-block");
    //   const firstBlock = [6, 7]
    //   for (let i = 0; i < firstBlock.length; i++) {
    //     images[firstBlock[i]].parentNode.insertBefore(wrapper, images[firstBlock[i]]);
    //     wrapper.appendChild(images[firstBlock[i]]);
    //   }
    // });
  },

  methods: {
    // onSwiper(swiper) {
    //     console.log(swiper)
    //     this.swiper = swiper;
    // },

    handleSlideTo() {
      this.isModal = !this.isModal;
    }
  }
}));
// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bc7b36b0"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gallery.js.map