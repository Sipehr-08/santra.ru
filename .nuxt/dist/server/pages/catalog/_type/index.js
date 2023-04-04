exports.ids = [18];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("669f45ef", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7846c2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7846c2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7846c2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7846c2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d7846c2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sort{color:#788998;font-size:14px;gap:5px;line-height:20px}.category-sort,.sort{align-items:center;display:flex}.category-sort{gap:15px;margin-bottom:20px;overflow-x:auto}.sort-item{color:#2f75db;cursor:pointer;font-variation-settings:\"wght\" 550;font-weight:550}.category{display:flex;gap:15px;margin-bottom:20px;overflow-x:scroll}.category-item{background-color:#f3f4f5;border-radius:50rem!important;border-width:2px;color:#000!important;font-size:14px;font-variation-settings:\"wght\" 550;padding:4px 10px;white-space:nowrap;width:-moz-max-content;width:max-content}.through{-webkit-text-decoration:line-through;text-decoration:line-through}.price-discount{color:#db2c29}.filters{display:none;position:relative}.footer-content__header{font-size:18px;line-height:24px;text-align:left}.footer-content__header p{font-family:\"Lato\",sans-serif;font-size:18px;line-height:24px}.catalog__footer-content-inner{margin:0 auto;max-width:1200px;padding:50px 0;width:100%}.catalog__footer-content-wrapper{background:#f1f1f1;margin:0 auto;padding:10px}.left_seo_block p{font-family:\"Lato\",sans-serif;font-size:18px;line-height:24px}@media (max-width:1199px){.catalog__footer-content-inner{max-width:800px!important}.catalog__footer-content__middle{flex-direction:column}}.catalog__footer-content__middle{display:flex;justify-content:space-between;margin-top:25px}.catalog__footer-content__middle .left_seo_block h2{font-family:\"Lato\",sans-serif;margin-bottom:10px;margin-top:0}.footer-content__middle-right li{padding-bottom:10px}.catalog__footer-bottom{margin:0 auto;max-width:1200px;padding:50px 10px 0}.catalog__footer-bottom p{font-family:\"Lato\",sans-serif;font-weight:400}@media (max-width:707px){p.filters-null{position:absolute;top:90px}.category-sort{display:none}.category{flex-wrap:wrap!important}.filters{grid-gap:15px;display:block;grid-template-columns:1fr 1fr;width:100%}.catalog__items .featured_line .product-thumb.transition{height:438px!important}}.button-group{margin-bottom:10px}img.img-responsive{max-height:171px!important;min-height:218px;-o-object-fit:contain;object-fit:contain;width:100%!important}a:hover{color:red!important}.new-catalog-items .product-thumb .image{height:245px;margin:0 auto;width:245px}.new-catalog-items .product-thumb{border-bottom:1px solid #ddd!important;margin-bottom:0}.new-catalog-items .product-thumb a{height:100%}.new-catalog-items .product-thumb .image img{height:100%!important}.catalog__items{display:flex;flex-wrap:wrap;margin:0 -15px}.product_list{margin:0 15px 20px!important;width:calc(25% - 30px)}.product-thumb .image{height:100%;width:100%}.product_list img{height:250px!important;max-height:100%!important;max-width:100%;min-height:auto;width:100%}@media (max-width:708px){.product_list img{height:100%!important;min-height:152px!important}.catalog__items{margin:0 -5px}.product_list{margin:0 .5%!important;width:49%!important}.catalog__footer-content-inner{margin:0 auto;max-width:310px!important;padding:15px 0}.catalog__footer-bottom{max-width:310px!important;padding:50px 0 0}.new-catalog-items .product-thumb .image{height:100%;width:100%}}.product_list .product-thumb{border:none}.more_group{margin:auto;width:90%}.product_list .price{color:#292929;display:inline-block;font-size:20px}.product_list h4{display:block;text-align:left}.product_list h4 a{color:#5e5e5e;font-family:\"Lato\",sans-serif;font-size:12px;font-weight:400;line-height:27px}.product_list .caption{min-height:38px;text-align:center}.product_list .button-group{background:transparent;border:1px solid #db2c29;display:inline-block;float:right;height:39px;width:142px}.product_list .color-bl{margin-top:4px;text-align:center}html body .product_list .color{border:none;color:#db2c29;font-family:\"Lato\",sans-serif;font-size:16px;font-weight:400;line-height:27px;-webkit-text-decoration:none;text-decoration:none}.product_list h4 a{line-height:15px;-webkit-text-decoration:none;text-decoration:none;white-space:inherit}.product_list h4:hover a{color:red!important}.product_list h4{height:27px}.product_list .product-thumb{overflow:hidden}.featured_line .product_list .price,.third_block .product_list .price{color:#5e5e5e;display:block;font-size:16px;font-weight:400;line-height:27px;text-align:left}.filters{display:flex;flex-flow:wrap;margin-bottom:60px;width:100%}.filters-null{color:#1e91cf;cursor:pointer;margin-top:10px;transition:.3s}.filters-null:hover{color:#090909}.item{background:#fff;border:1px solid rgba(0,0,0,.5);border-radius:0;border-bottom-left-radius:0;border-top-left-radius:0;box-shadow:none;font-size:16px;height:34px;margin-right:40px;width:213px}option{font-size:15px!important}@media (max-width:1100px){.item{margin-right:14px}}@media (max-width:700px){.item{width:100%}}.descriptionCat-item p{margin:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/_type/index.vue?vue&type=template&id=6d7846c2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cantra-content-wrapper new-catalog-items"
  }, [_vm._ssrNode("<div class=\"cantra_content\">", "</div>", [_vm._ssrNode("<h2 class=\"catalog_header_category\">Каталог</h2> "), _vm._ssrNode("<div style=\"margin-bottom: 10px; margin-top: -10px; font-size: 16px\">", "</div>", [_c('nuxt-link', {
    staticStyle: {
      "margin-right": "2px"
    },
    attrs: {
      "to": {
        name: 'catalog'
      }
    }
  }, [_vm._v("Каталог")]), _vm._ssrNode("\n      /\n      <span style=\"color: #9d9d9d; margin-left: 2px \">" + _vm._ssrEscape("\n        " + _vm._s(_vm.type) + "\n      ") + "</span>")], 2), _vm._ssrNode(" <div style=\"display: flex; justify-content: space-between\"><div class=\"category-sort\"><div class=\"sort\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-class\"><path d=\"M1.6665 10H12.6687\" stroke=\"#788998\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M1.6665 5H18.3332\" stroke=\"#788998\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M1.6665 15H7.22317\" stroke=\"#788998\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg> <span>\n          Сортировать\n        </span></div> <span" + _vm._ssrClass(null, _vm.price !== '' ? 'sort-item' : '') + ">\n        Все\n      </span> <span" + _vm._ssrClass(null, _vm.price !== 'desc' ? 'sort-item' : '') + ">\n        Сначала дорогие\n      </span> <span" + _vm._ssrClass(null, _vm.price !== 'ask' ? 'sort-item' : '') + ">\n        Сначала дешёвые\n      </span> <span" + _vm._ssrClass(null, _vm.price !== 'new' ? 'sort-item' : '') + ">\n        Новинки\n      </span></div> <div class=\"category-sort\"><div class=\"sort\"><svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-class\"><path d=\"M1.6665 10H12.6687\" stroke=\"#788998\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M1.6665 5H18.3332\" stroke=\"#788998\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M1.6665 15H7.22317\" stroke=\"#788998\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg> <span>\n          Сортировать по сезону\n        </span></div> <span" + _vm._ssrClass(null, _vm.season !== '' ? 'sort-item' : '') + ">\n        Все\n      </span> " + _vm._ssrList(_vm.seasons, function (season_name) {
    return "<span" + _vm._ssrClass(null, _vm.season !== season_name ? 'sort-item' : '') + ">" + _vm._ssrEscape("\n        " + _vm._s(season_name) + "\n      ") + "</span>";
  }) + "</div></div> "), _vm._ssrNode("<div class=\"filters\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.price,
      expression: "price"
    }],
    staticClass: "item",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.price = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.selectedType(_vm.price);
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Все")]), _vm._v(" "), _vm._l(_vm.prices, function (filter, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": filter.value
      }
    }, [_vm._v("\n          " + _vm._s(filter.title) + "\n        ")]);
  })], 2)]), _vm._ssrNode(" "), _vm.swichData ? _vm._ssrNode("<div class=\"catalog__items featured_line\">", "</div>", _vm._l(_vm.products, function (product) {
    return _vm._ssrNode("<div class=\"product_list product-layout\">", "</div>", [_vm._ssrNode("<div class=\"product-thumb transition\">", "</div>", [_vm._ssrNode("<div class=\"image\" style=\"position: relative\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/cantra-products/' + product.slug
      }
    }, [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": product.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "copy-logo",
      attrs: {
        "src": __webpack_require__(78)
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"caption\">", "</div>", [_vm._ssrNode("<p class=\"price\"><span" + _vm._ssrClass(null, {
      'through': product.discount
    }) + ">" + _vm._ssrEscape(_vm._s(product.price) + " руб.") + "</span> " + (product.discount ? "<span class=\"price-discount\">" + _vm._ssrEscape(_vm._s(product.discount) + " руб.") + "</span>" : "<!---->") + " <span class=\"price-tax\"></span></p> "), _c('nuxt-link', {
      attrs: {
        "to": '/cantra-products/' + product.slug
      }
    }, [_c('h4', [_c('a', {
      staticStyle: {
        "display": "flex",
        "align-items": "center"
      },
      attrs: {
        "href": ""
      }
    }, [_c('div', {
      staticClass: "productName",
      domProps: {
        "innerHTML": _vm._s(product.name)
      }
    })])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"more_group\">", "</div>", [_vm._ssrNode((product.colors.length != 0 ? "<span class=\"count_colors\">" + _vm._ssrEscape(_vm._s(product.colors.length) + " цветов") + "</span>" : "<!---->") + " "), _vm._ssrNode("<div class=\"button-group\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/cantra-products/' + product.slug
      }
    }, [_c('p', {
      staticClass: "color-bl"
    }, [_c('a', {
      staticClass: "color"
    }, [_vm._v("Подробнее")])])])], 1)], 2)], 2)]);
  }), 0) : _vm._ssrNode("<div class=\"catalog__items featured_line\">", "</div>", _vm._l(_vm.savedData, function (product) {
    return _vm._ssrNode("<div class=\"product_list product-layout\">", "</div>", [_vm._ssrNode("<div class=\"product-thumb transition\">", "</div>", [_vm._ssrNode("<div class=\"image\" style=\"position: relative\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/cantra-products/' + product.slug
      }
    }, [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": product.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "copy-logo",
      attrs: {
        "src": __webpack_require__(78)
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"caption\">", "</div>", [_vm._ssrNode("<p class=\"price\"><span>" + _vm._ssrEscape(_vm._s(product.price) + " руб.") + "</span> <span class=\"price-tax\"></span></p> "), _c('nuxt-link', {
      attrs: {
        "to": '/cantra-products/' + product.slug
      }
    }, [_c('h4', [_c('a', {
      staticStyle: {
        "display": "flex",
        "align-items": "center"
      },
      attrs: {
        "href": ""
      }
    }, [_c('div', {
      staticClass: "productName",
      domProps: {
        "innerHTML": _vm._s(product.name)
      }
    })])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"more_group\">", "</div>", [_vm._ssrNode((product.colors.length != 0 ? "<span class=\"count_colors\">" + _vm._ssrEscape(_vm._s(product.colors.length) + " цветов") + "</span>" : "<!---->") + " "), _vm._ssrNode("<div class=\"button-group\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/cantra-products/' + product.slug
      }
    }, [_c('p', {
      staticClass: "color-bl"
    }, [_c('a', {
      staticClass: "color"
    }, [_vm._v("Подробнее")])])])], 1)], 2)], 2)]);
  }), 0)], 2), _vm._ssrNode(" <div class=\"catalog__footer-content-wrapper\"><div class=\"catalog__footer-content-inner\"><div class=\"footer-content__header\">" + _vm._s(_vm.footer.headercontent) + "</div> <div class=\"catalog__footer-content__middle\"><div class=\"footer-content__middle-left\">" + _vm._s(_vm.footer.leftmiddlecontent) + "</div> <div class=\"footer-content__middle-right\">" + _vm._s(_vm.footer.rightmiddlecontent) + "</div></div></div></div> <div class=\"catalog__footer catalog__footer-bottom\">" + _vm._s(_vm.footer.footercontent) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/catalog/_type/index.vue?vue&type=template&id=6d7846c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/_type/index.vue?vue&type=script&lang=js&
/* harmony default export */ var _typevue_type_script_lang_js_ = ({
  layout: "default",
  head() {
    return {
      title: 'Купить чехол на автомобиль - описание, фото, отзывы, цена от производителя Cantra™',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '★ Продажа чехлов на автомобиль от  официального производителя Cantra™★ Доступная цена, гарантия, доставка и салоны по всей России.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'чехол на автомобиль цена, чехол на автомобиль цена, купить чехол на автомобиль в интернет, сколько стоит чехол на автомобиль'
      }]
    };
  },
  data() {
    var _this$$route$query;
    return {
      footer: "",
      products: [],
      prices: [{
        title: 'Сначала дешёвые',
        value: 'asc'
      }, {
        title: 'Сначала дорогие',
        value: 'desc'
      }, {
        title: 'Новинки',
        value: 'new'
      }],
      types: [],
      seasons: [],
      price: "",
      type: '',
      season: "",
      filterData: [],
      filterings: {
        price: "",
        type: (_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.type,
        season: ""
      },
      savedData: "",
      swichData: true
    };
  },
  watch: {
    price() {
      this.selectedType('price');
    },
    season() {
      this.selectedType('season');
    }
  },
  mounted() {
    switch (this.$route.params.type) {
      case "detskie-aksessuary":
        this.type = "Детские аксессуары";
        break;
      case "sirokaya-spinka":
        this.type = "Широкая спинка";
        break;
      case "sportivnye":
        this.type = "Спортивные";
        break;
      case "aksessuary":
        this.type = "Аксессуары";
        break;
      case "zadnie-nakidki":
        this.type = "Задние накидки";
        break;
      case "komplekty-nakidok":
        this.type = "Комплекты накидок";
        break;
      case "perednie-nakidki":
        this.type = "Передние накидки";
        break;
      default:
        this.type = "";
        break;
    }
    this.$axios.get("https://project.a-lux.dev/api/footer").then(res => {
      this.footer = res.data;
    });
    // if (this.$route.query.price == '' || this.$route.query.season == '' ||  this.$route.query.type == '') {
    this.$axios.post("https://project.a-lux.dev/api/items", {
      id: "",
      order: this.$route.query.price,
      type: this.type,
      season: this.$route.query.season
    }).then(res => {
      this.products = res.data;
      this.savedData = this.products.slice();
      this.products.forEach(element => {
        if (!this.seasons.includes(element.season) && element.season !== null) {
          this.seasons.push(element.season);
        }
      });
    });
    this.$axios.get('https://project.a-lux.dev/api/items').then(res => {
      this.types = res.data;
    });
    // } else {
    // }
  },

  methods: {
    selectedPrice(a) {
      this.filterings.price = a;
      this.swichData = true;
      switch (a) {
        case "min-price":
          this.products.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "max-price":
          this.products.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        default:
          this.products = this.savedData;
          break;
      }
    },
    selectedType(a) {
      this.filterings.type = a;
      this.$axios.post("https://project.a-lux.dev/api/items", {
        id: "",
        order: this.price,
        type: this.type,
        season: this.season
      }).then(res => {
        this.products = res.data;
        this.swichData = true;
        this.$router.push({
          query: {
            type: this.type,
            price: this.price,
            season: this.season
          }
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/catalog/_type/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var catalog_typevue_type_script_lang_js_ = (_typevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/catalog/_type/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  catalog_typevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "05ccf4bc"
  
)

/* harmony default export */ var _type = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/op3.12700ac.png";

/***/ })

};;
//# sourceMappingURL=index.js.map