exports.ids = [8];
exports.modules = {

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sliders/AppGallerySlider.vue?vue&type=template&id=76c107a8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.gallery.length > 1 ? _vm._ssrNode("<div class=\"sixth_block delay_galleria\">", "</div>", [_vm._ssrNode("<div class=\"cantra_content\">", "</div>", [_vm._ssrNode("<h2 class=\"h2-text\">Фотогалерея</h2> "), _vm._ssrNode("<div id=\"galleria\">", "</div>", [_c('swiper', {
    ref: "swiperTop",
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOptions
    }
  }, _vm._l(_vm.gallery, function (item, index) {
    return _c('swiper-slide', {
      key: index,
      staticClass: "swiper-slide sliding-swiper"
    }, [_c('img', {
      staticClass: "swiper-img",
      attrs: {
        "src": item,
        "alt": ""
      }
    })]);
  }), 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"gallery-thumbs__slider\">", "</div>", [_vm._ssrNode("<button class=\"swiper-button-prev delay_galleria-prev\"></button> "), _c('swiper', {
    ref: "swiperThumbs",
    staticClass: "swiper gallery-thumbs new-thumbs",
    attrs: {
      "options": _vm.swiperOptionThumbs
    }
  }, _vm._l(_vm.gallery, function (item, index) {
    return _c('swiper-slide', {
      key: index
    }, [_c('img', {
      staticClass: "swiper-img",
      attrs: {
        "src": item
      }
    })]);
  }), 1), _vm._ssrNode(" <button class=\"swiper-button-next delay_galleria-next\"></button>")], 2), _vm._ssrNode(" <div class=\"gallery-pagination\"></div>")], 2)], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sliders/AppGallerySlider.vue?vue&type=template&id=76c107a8&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sliders/AppGallerySlider.vue?vue&type=script&lang=js&

/* harmony default export */ var AppGallerySlidervue_type_script_lang_js_ = ({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  props: {
    gallery: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      swiperOptionThumbs: {
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          600: {
            spaceBetween: 30
          },
          300: {
            spaceBetween: 10
          }
        }
      },
      selectImageIndex: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      }, 1000);
    });
  }
});
// CONCATENATED MODULE: ./components/sliders/AppGallerySlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var sliders_AppGallerySlidervue_type_script_lang_js_ = (AppGallerySlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sliders/AppGallerySlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sliders_AppGallerySlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59a6db49"
  
)

/* harmony default export */ var AppGallerySlider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sliders-app-gallery-slider.js.map