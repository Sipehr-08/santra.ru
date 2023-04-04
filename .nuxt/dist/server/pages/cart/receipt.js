exports.ids = [17,6];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.46bce47.jpg";

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.ef11053.jpg";

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.e96dd8a.jpg";

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/receipt.vue?vue&type=template&id=3f8b4106&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cantra_content"
  }, [_vm._ssrNode("<div id=\"content\">", "</div>", [_vm._ssrNode("<div class=\"thankyou_text\">", "</div>", [_vm._ssrNode("<div class=\"left_thankyou\">", "</div>", [_vm._ssrNode("<div><div class=\"thank_heading\"><h1 style=\"font-family: 'Lato', sans-serif\">Спасибо за заказ!</h1> <p>\n              В ближайшее время с вами свяжется наш оператор для подтверждения\n              заказа\n            </p> " + (_vm.products && _vm.products.Order ? "<div>" + (_vm.products.Order.type_payment === 2 || _vm.products.Order.type_payment === 3 ? "<p>Перенаправляем на страницу оплаты...</p>" : "<!---->") + "</div>" : "<!---->") + "</div></div> <div><h2 style=\"font-weight: unset\">\n            А пока полистайте наш инстаграм\n            <a href=\"https://www.instagram.com/cantra.ru/\" target=\"_blank\" class=\"insta_ico\"></a></h2> <div class=\"insta_four_block\"><a href=\"https://www.instagram.com/cantra.ru/\" target=\"_blank\"><img" + _vm._ssrAttr("src", __webpack_require__(173)) + "></a> <a href=\"https://www.instagram.com/cantra.ru/\" target=\"_blank\"><img" + _vm._ssrAttr("src", __webpack_require__(174)) + "></a> <a href=\"https://www.instagram.com/cantra.ru/\" target=\"_blank\"><img" + _vm._ssrAttr("src", __webpack_require__(175)) + "></a></div></div> "), _vm.recommendations ? _vm._ssrNode("<div class=\"row mob_products index__products\">", "</div>", [_vm._ssrNode("<div class=\"thank--title\">Вам также могут пригодиться</div> "), _vm._l(_vm.recommendations, function (product, index) {
    return _c('product-card', {
      key: index,
      attrs: {
        "price": product.price,
        "discount": product.discount,
        "image": product.image,
        "type": product.type,
        "id": product.id,
        "name": product.name,
        "brand": product.brand,
        "color": product.colors.length
      }
    });
  })], 2) : _vm._e()], 2), _vm._ssrNode(" " + (_vm.products && _vm.products.length != 0 ? "<div class=\"right_thankyou\"><h3>Детали заказа</h3> <h4>Номер заказа</h4> <div>" + _vm._ssrEscape("№" + _vm._s(_vm.products.Order.id)) + "</div> " + _vm._ssrList(_vm.products.Order_items, function (el) {
    return "<div><h4>Наименование товара</h4> <div>" + _vm._ssrEscape(_vm._s(_vm.getName(el.item))) + "</div> <h4>Цвет товара</h4> <div>" + _vm._ssrEscape(_vm._s(_vm.getColor(el.item, el.color))) + "</div></div>";
  }) + " <h4>Способ оплаты</h4> " + (_vm.products.Order.type_payment === 1 ? "<div>Наличными курьеру</div>" : "<!---->") + " " + (_vm.products.Order.type_payment === 2 ? "<div>Картой</div>" : "<!---->") + " " + (_vm.products.Order.type_payment === 3 ? "<div>PayPal</div>" : "<!---->") + " <h3>Контактные данные и информация</h3> <h4>ФИО</h4> <div>" + _vm._ssrEscape(_vm._s(_vm.products.Order.fio)) + "</div> <h4>Адрес доставки</h4> " + (_vm.products.Order.city || _vm.products.Order.address ? "<div>" + _vm._ssrEscape(_vm._s(_vm.products.Order.city) + ", " + _vm._s(_vm.products.Order.address)) + "</div>" : "<!---->") + " <h4>Контактный телефон</h4> <div>" + _vm._ssrEscape(_vm._s(_vm.products.Order.phone)) + "</div></div>" : "<!---->") + " <div id=\"print\" style=\"display: none\"><table class=\"table table-bordered table-hover\"><thead><tr><td colspan=\"2\" class=\"text-left\">Детали заказа</td></tr></thead> <tbody><tr><td class=\"text-left\" style=\"width: 50%\"><b>Номер заказа:</b> #19380<br> <b>Дата заказа:</b> 24.06.2022\n              </td> <td class=\"text-left\"><b>Способ оплаты:</b> Наличными курьеру<br> <b>Способ доставки:</b> Самовывоз из магазина\n              </td></tr></tbody></table> <table class=\"table table-bordered table-hover\"><thead><tr><td class=\"text-left\" style=\"width: 50%\">Адрес получателя</td></tr></thead> <tbody><tr><td class=\"text-left\">\n                testt<br>test<br>321321321321321<br>Russian Federation\n              </td></tr></tbody></table> <div class=\"buttons\"><div class=\"pull-left\"><a id=\"ProductBundlesOptionsSubmitButton\" href=\"/\" class=\"btn btn-primary\">Продолжить</a></div></div></div>")], 2), _vm._ssrNode(" <div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart/receipt.vue?vue&type=template&id=3f8b4106&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/receipt.vue?vue&type=script&lang=js&

/* harmony default export */ var receiptvue_type_script_lang_js_ = ({
  layout: "default",
  data() {
    return {
      items: [],
      products: [],
      recommendations: []
    };
  },
  mounted() {
    this.$axios.post("https://project.a-lux.dev/api/items").then(res => {
      this.items = res.data;
    });
    this.products = JSON.parse(localStorage.getItem("cartData"));
    localStorage.removeItem('cartData', []);
    localStorage.removeItem('cartItems', []);
    let url = "https://project.a-lux.dev/api/order/item";
    this.$axios.get(url).then(res => {
      this.recommendations = res.data;
    });
    if (this.products && this.products.Order) {
      if (this.products.Order.type_payment == 2 || this.products.Order.type_payment == 3) {
        setTimeout(() => {
          window.location.replace(this.products.Order.paymenturl);
        }, 5000);
      }
    }
  },
  methods: {
    getRecomendedItems(id) {
      let recomended = [];
      this.items;
    },
    getName(id) {
      let name;
      this.items.forEach(el => {
        if (el.id === id) {
          name = el.name;
        }
      });
      return name;
    },
    getColor(id, colorId) {
      let colorName;
      this.items.forEach(el => {
        if (el.id === id) {
          el.colors.forEach(color => {
            if (color.id === colorId) {
              colorName = color.name;
            }
          });
        }
      });
      return colorName;
    }
  }
});
// CONCATENATED MODULE: ./pages/cart/receipt.vue?vue&type=script&lang=js&
 /* harmony default export */ var cart_receiptvue_type_script_lang_js_ = (receiptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/cart/receipt.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cart_receiptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4d7a393a"
  
)

/* harmony default export */ var receipt = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(81).default})


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/op3.12700ac.png";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5f5c5ff3", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-card.vue?vue&type=template&id=17cd04d7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "product_list product-layout col-lg-4 col-md-3 col-sm-6 col-xs-12"
  }, [_vm._ssrNode("<div class=\"product-thumb transition\">", "</div>", [_vm._ssrNode("<div class=\"image\" style=\"position: relative\">", "</div>", [_c('nuxt-link', {
    staticClass: "image-link",
    attrs: {
      "to": '/cantra-products/' + _vm.slug
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.image,
      "alt": "",
      "title": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "copy-logo",
    attrs: {
      "src": __webpack_require__(78)
    }
  })])], 1), _vm._ssrNode(" <div class=\"caption\">" + (_vm.discount !== null ? "<div class=\"no-discount-wrapper\"><p class=\"price\" style=\"margin: 0\"><span" + _vm._ssrClass(null, {
    'through': _vm.discount
  }) + " style=\"padding-right: 5px\">" + _vm._ssrEscape(_vm._s(_vm.price)) + "</span> <span>" + _vm._ssrEscape(" " + _vm._s(_vm.discount) + "руб. ") + "</span></p></div>" : "<div class=\"discount-wrapper\"><p class=\"price\" style=\"margin: 0\">" + _vm._ssrEscape(_vm._s(_vm.price) + " рублей.") + "</p></div>") + " <a href class=\"productNameAll\" style=\"\\n          display: flex;\\n          align-items: center;\\n          text-decoration: none;\\n          color: #000;\\n        \"><div class=\"productName\">" + _vm._s(_vm.name) + "</div></a></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"more_group\">", "</div>", [_vm._ssrNode("<span class=\"count_colors\">" + _vm._ssrEscape(_vm._s(_vm.color) + " цветов") + "</span> "), _vm._ssrNode("<div class=\"button-group\">", "</div>", [_vm._ssrNode("<p class=\"color-bl\">", "</p>", [_c('nuxt-link', {
    staticClass: "color",
    attrs: {
      "to": '/cantra-products/' + _vm.slug
    }
  }, [_vm._v("Подробнее >")])], 1)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product-card.vue?vue&type=template&id=17cd04d7&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-card.vue?vue&type=script&lang=js&

/* harmony default export */ var product_cardvue_type_script_lang_js_ = (external_vue_default.a.extend({
  props: {
    name: {
      type: String,
      require: true
    },
    brand: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    discount: {
      type: Number,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    color: {
      type: Number,
      require: true
    },
    id: {
      type: Number,
      require: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}));
// CONCATENATED MODULE: ./components/product-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_product_cardvue_type_script_lang_js_ = (product_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/product-card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_product_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "59b2dce8"
  
)

/* harmony default export */ var product_card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_vue_vue_type_style_index_0_id_17cd04d7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_vue_vue_type_style_index_0_id_17cd04d7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_vue_vue_type_style_index_0_id_17cd04d7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_vue_vue_type_style_index_0_id_17cd04d7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_card_vue_vue_type_style_index_0_id_17cd04d7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(84);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".productName{color:#5e5e5e;font-size:11px;font-weight:400;line-height:15px;text-align:left;white-space:normal;width:100%}img.img-responsive{max-height:171px;min-height:250px;-o-object-fit:contain;object-fit:contain;width:100%}.slash{margin:0 5px}.testItem p{margin:0}.productNameAll{white-space:nowrap}@media (max-width:800px){.productName{font-size:11px}.image-link{height:220px}.more_group{margin-bottom:20px}}.productCardImage:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 50% no-repeat}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.cbddb07.png";

/***/ })

};;
//# sourceMappingURL=receipt.js.map