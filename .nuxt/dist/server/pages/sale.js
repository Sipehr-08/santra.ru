exports.ids = [31,7];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:707px){.modal__product-card{margin:0 auto;width:auto!important}.modal__product{flex-direction:block}}.modal__product-actions__button{position:static!important}.modal__product-actions{justify-content:center}.modal__product{background:#fff;border-radius:5px;box-shadow:0 10px 25px rgba(0,0,0,.5);display:flex;flex-flow:wrap;left:50%;max-height:700px;max-width:1120px;overflow-y:auto;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.modal__product-card{margin-bottom:80px;width:49%}.modal__product-card__image{max-width:300px;width:100%}.modal__product-card__title{align-items:center;color:#000!important;font-size:20px;line-height:24px;margin:auto auto 15px;padding-bottom:5px;text-align:left;-webkit-text-decoration:none;text-decoration:none;width:90%}.modal__product-card__title p{margin:0!important}.modal__product-card__title:hover{-webkit-text-decoration:underline;text-decoration:underline}.modal__product-card__color{margin:auto;text-align:left;width:90%}.modal__product-card__color h4,.modal__product-card__color-title{color:#000;font-size:15px;font-weight:300;text-transform:none}.modal__product-card__color h4{margin:0}.modal__product-card__color h3{color:#000;font-size:20px;font-weight:700;margin:0 0 20px}.modal__product-card__colors{display:flex;flex-flow:wrap;margin:auto;width:90%}.modal__product-card__colors img{cursor:pointer;margin:5px}.modal__product-actions{display:flex;height:50px;margin:auto auto 25px;max-height:50px;position:relative;width:90%}.modal__product-actions__price{color:#000;font-family:Lato-Bold,sans-serif;font-size:25px;text-align:center;width:100%}.modal__product-actions__button{position:absolute;right:0;top:0}.modal__product-actions__button input{background:#f42f2f;border:none;border-radius:100px;box-shadow:0 1px 6px 0 rgba(213,51,51,.36),inset 0 -2px 0 0 rgba(159,36,36,.5);color:#fff;font-size:18px;font-weight:700;height:44px;line-height:1.5;width:210px}.sale{display:flex;flex-flow:column;justify-content:center;width:100%}.sale,.sale h2{text-align:center}.sale h2{color:#000;margin-bottom:85px;margin-top:25px}.sale-page-info{display:flex;justify-content:space-between;margin:15px auto auto;max-width:700px;width:100%}.sale-page-info .price{color:#000;font-family:Lato-Bold,sans-serif;font-size:25px;margin:0}.sale-page-info .oldprice{color:#000;font-size:20px;line-height:15px;margin-right:10px}.sale-page-info__button{align-items:flex-end;display:flex}.sale-page-info__button span{background:none;border:none;box-shadow:none;color:#de2828;display:inline-block;float:right;font-size:15px;line-height:1.53;margin:0 16px 5px auto;padding:0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline;text-shadow:none}.sale .PB_image{margin:auto;max-width:700px}.sale .PB_image img{width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sale/SalesModal.vue?vue&type=template&id=49026158&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_vm._ssrNode(_vm.chosenColors.length != 0 ? "<form class=\"modal\"><div class=\"modal__product\" style=\"z-index: 99999\">" + _vm._ssrList(_vm.items, function (item, indexx) {
    return "<div class=\"modal__product-card\">" + (item.images ? "<img" + _vm._ssrAttr("src", item.images.find(obj => {
      return obj.color === item.colors[Number(_vm.chosenColors[indexx])].id;
    }).images[0]) + " class=\"modal__product-card__image\">" : "<!---->") + " <div class=\"modal__product-card__title\" style=\"display: flex; flex-flow: wrap\">" + _vm._ssrEscape("\n          " + _vm._s(item.name) + "\n        ") + "</div> " + (item.colors ? "<div class=\"modal__product-card__color\"><h4 class=\"modal__product-card__color-title\">Цвета накидок:</h4> <h3 class=\"modal__product-card__color-description\">" + _vm._ssrEscape("\n            " + _vm._s(item.colors[_vm.chosenColors[indexx]].name) + "\n          ") + "</h3></div>" : "<!---->") + " <div class=\"modal__product-card__colors\">" + _vm._ssrList(item.colors, function (color, index) {
      return "<img" + _vm._ssrAttr("src", color.logo) + " class=\"modal__product-card__colors-ball\">";
    }) + "</div></div>";
  }) + " <div class=\"modal__product-actions\"><div class=\"modal__product-actions__price\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.totalPrice) + " р.\n        ") + "</div> <div class=\"modal__product-actions__button\"><input type=\"submit\" value=\"Добавить в корзину\"></div></div></div></form>" : "<!---->")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sale/SalesModal.vue?vue&type=template&id=49026158&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sale/SalesModal.vue?vue&type=script&lang=js&

/* harmony default export */ var SalesModalvue_type_script_lang_js_ = (external_vue_default.a.extend({
  data() {
    return {
      totalProcent: 0,
      chosenColors: [],
      totalPrice: 0,
      just: null
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    procent: {
      type: Number,
      required: true
    },
    saleId: {
      type: [Number, String]
    }
  },
  mounted() {
    this.chosenColors = [];
    this.totalPrice = 0;
    this.items.forEach(element => {
      this.chosenColors.push(0);
    });
    this.checkPrice();
  },
  methods: {
    sendtoCart() {
      if (localStorage.cartItems) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        var newProducts = [];
        this.items.forEach((element, index) => {
          let colorExist = 0;
          cartItems.forEach((elementt, indexx) => {
            if (elementt.color === element.colors[this.chosenColors[index]].id) {
              colorExist = indexx + 1;
            }
          });
          if (!colorExist) {
            newProducts.push({
              id: element.id,
              ammount: 1,
              color: element.colors[this.chosenColors[index]].id,
              colorName: element.colors[this.chosenColors[index]].name,
              procent: this.procent,
              saleId: this.saleId,
              price: element.price
            });
          } else {
            cartItems[colorExist - 1].ammount++;
          }
        });
        if (newProducts.length > 0) {
          localStorage.setItem("cartItems", JSON.stringify([...cartItems, ...newProducts]));
        } else {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      } else {
        let cartItems = [];
        this.items.forEach((element, index) => {
          cartItems.push({
            id: element.id,
            ammount: 1,
            color: element.colors[this.chosenColors[index]].id,
            colorName: element.colors[this.chosenColors[index]].name,
            procent: this.procent,
            saleId: this.saleId,
            price: element.price
          });
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
      this.$emit('closeModal');
      this.$router.push("/cart");
    },
    checkPrice() {
      this.totalPrice = 0;
      this.items.forEach((element, index) => {
        if (element.colors[this.chosenColors[index]].price) {
          const selectedColorPrice = Number(element.colors[this.chosenColors[index]].price);
          const selectedColorSaleSum = selectedColorPrice / 100 * this.procent;
          const selectedColorResult = selectedColorPrice - selectedColorSaleSum;
          this.totalPrice += Number(selectedColorResult);
        } else {
          const selectedPrice = Number(element.price);
          const selectedSalePrice = selectedPrice / 100 * this.procent;
          const selectedResult = selectedPrice - selectedSalePrice;
          this.totalPrice += Number(selectedResult);
        }
      });
    },
    changeColor(itemIndex, colorIndex) {
      this.chosenColors[itemIndex] = colorIndex;
      this.checkPrice();
      this.$forceUpdate();
    }
  },
  computed: {
    result() {
      let price = 0;
    }
  }
}));
// CONCATENATED MODULE: ./components/sale/SalesModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var sale_SalesModalvue_type_script_lang_js_ = (SalesModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sale/SalesModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sale_SalesModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f5400ac2"
  
)

/* harmony default export */ var SalesModal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(12).default})


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sale.vue?vue&type=template&id=87447b92&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.fullItems ? _c('div', {
    staticClass: "container"
  }, _vm._l(_vm.sales, function (sale, index) {
    return _vm._ssrNode("<div class=\"sale\">", "</div>", [_vm._ssrNode("<h2>" + _vm._ssrEscape(_vm._s(sale.title)) + "</h2> <div class=\"sale_label\">АКЦИЯ</div> <div class=\"PB_image\"><img" + _vm._ssrAttr("src", sale.image) + " class=\"PB_options_image double_trouble\" style=\"cursor: pointer\"></div> "), _vm._ssrNode("<div class=\"sale-page-info\">", "</div>", [_vm._ssrNode("<div class=\"sale-page-info__price\">", "</div>", [_c('strike', {
      staticClass: "oldprice"
    }, [_vm._v(_vm._s(sale.oldprice) + " р.")]), _vm._ssrNode(" <p class=\"price\">" + _vm._ssrEscape(_vm._s(sale.newprice) + " р.") + "</p>")], 2), _vm._ssrNode(" <div class=\"sale-page-info__button\" style=\"cursor: pointer\"><span>Выбрать цвет</span></div>")], 2), _vm._ssrNode(" "), _vm.modalOpen ? _c('sales-modal', {
      attrs: {
        "items": _vm.openModal(sale.items),
        "procent": _vm.procent,
        "sale-id": sale.id
      },
      on: {
        "closeModal": function ($event) {
          _vm.modalOpen = false;
        }
      }
    }) : _vm._e()], 2);
  }), 0) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sale.vue?vue&type=template&id=87447b92&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/sale/SalesModal.vue + 4 modules
var SalesModal = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sale.vue?vue&type=script&lang=js&


/* harmony default export */ var salevue_type_script_lang_js_ = (external_vue_default.a.extend({
  components: {
    SalesModal: SalesModal["default"]
  },
  layout: "default",
  data() {
    return {
      i: 0,
      chosenColors: [],
      totalPrice: 0,
      sales: [],
      fullItems: [],
      products: "",
      items: [],
      salesItems: "",
      modalOpen: false,
      procent: 0
    };
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/sale").then(res => {
      this.sales = res.data;
      // alert(res.data[0].procent)
      this.procent = res.data[0].procent;
      this.salesItems = res.data[0].items;
      this.salesItems.forEach((e, index) => {
        e.salesId = index + 1;
      });
      this.$axios.post("https://project.a-lux.dev/api/items", {}).then(res => {
        this.products = res.data;
        this.salesItems.forEach(element => {
          // var items = []
          // element.items.forEach(e => {
          // this.items.push(element)
          this.items.push(this.products.find(obj => {
            return obj.id === element.id;
          }));
          // });
          //   console.log("ITEMS", this.items);
        });

        this.fullItems.push(this.items);
      });
    });
  },
  methods: {
    openModal(a) {
      this.modalOpen = true;
      return a;
    }
  }
}));
// CONCATENATED MODULE: ./pages/sale.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_salevue_type_script_lang_js_ = (salevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/sale.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_salevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a028c61"
  
)

/* harmony default export */ var sale = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8e04ebce", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesModal_vue_vue_type_style_index_0_id_49026158_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesModal_vue_vue_type_style_index_0_id_49026158_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesModal_vue_vue_type_style_index_0_id_49026158_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesModal_vue_vue_type_style_index_0_id_49026158_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesModal_vue_vue_type_style_index_0_id_49026158_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=sale.js.map