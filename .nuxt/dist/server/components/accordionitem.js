exports.ids = [2];
exports.modules = {

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accordionitem.vue?vue&type=template&id=39620e82&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    directives: [{
      name: "on-clickaway",
      rawName: "v-on-clickaway",
      value: _vm.away,
      expression: "away"
    }],
    staticClass: "js-horizontal-collapse-item horizontal-collapse__item",
    class: {
      'is-active': _vm.isActive,
      [_vm.className]: true
    },
    style: `width: ${_vm.isActive ? _vm.itemMaxWidth + 'px' : 100 + '%'};min-width: ${_vm.itemMinWidth}px;max-width: ${_vm.itemMaxWidth}px;`,
    attrs: {
      "tabindex": "0",
      "role": "button"
    },
    on: {
      "click": _vm.activate
    }
  }, [_vm._ssrNode("<div class=\"js-horizontal-collapse-item-inner horizontal-collapse__item-inner\"" + _vm._ssrStyle(null, `width: ${_vm.itemMaxWidth}px`, null) + ">", "</div>", [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accordionitem.vue?vue&type=template&id=39620e82&

// EXTERNAL MODULE: external "vue-clickaway"
var external_vue_clickaway_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accordionitem.vue?vue&type=script&lang=js&

/* harmony default export */ var accordionitemvue_type_script_lang_js_ = ({
  name: "HorizontalCollapseItem",
  mixins: [external_vue_clickaway_["mixin"]],
  data() {
    return {
      isActive: false,
      itemMinWidth: 150,
      isOpen: true,
      itemMaxWidth: 1000
    };
  },
  watch: {
    isActive() {
      if (this.isActive) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    }
  },
  methods: {
    activate() {
      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 10);
    },
    away() {
      this.isActive = false;
    }
  },
  props: ["className"]
});
// CONCATENATED MODULE: ./components/accordionitem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_accordionitemvue_type_script_lang_js_ = (accordionitemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/accordionitem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_accordionitemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "477e0991"
  
)

/* harmony default export */ var accordionitem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accordionitem.js.map