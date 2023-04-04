exports.ids = [21];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7d29f6f2", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0925f02a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0925f02a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0925f02a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0925f02a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0925f02a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contacts__container{max-width:100%}h3.contacts__header_content{font-weight:700}.contacts__content-item{display:flex;justify-content:space-between;padding-left:5px}.main-contacts__content__open-map{cursor:pointer}@media (min-width:1001px){.contacts__content-item{width:100%}}@media (max-width:1000px){.contacts__content-item{width:100%}}.contacts__content_active{height:20vh;overflow:hidden}.contacts__container{height:auto;margin:0 auto;width:100%}@media (min-width:1201px){.contacts__header-wrapper{display:flex;width:300px!important}#contacts-select{margin-left:16px}.contacts__container{max-width:1200px}}@media (max-width:1200px){.contacts__content div iframe{width:100%!important}.contacts__header{width:300px!important}.contacts__content{width:95%}.contacts__container{width:750px}}#contacts-select{background:transparent;border:none;border-bottom:2px dashed #77afff;color:#2f75db;font-size:40px;height:53px;margin-top:5px;width:369px}#contacts-select option{font-size:20px}@media (max-width:600px){.contacts__content{display:flex;flex-flow:column-reverse}h1.contacts__header{width:auto!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacts/_id.vue?vue&type=template&id=0925f02a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.contactRes2.length > 0 || _vm.contactRes.length > 0 ? _c('div', {
    staticClass: "contacts__container"
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.id) + "\n  ")), _vm._ssrNode("<div class=\"contacts__header-wrapper\">", "</div>", [_vm._ssrNode("<h1 class=\"contacts__header\">Контакты</h1> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.routerId,
      expression: "routerId"
    }],
    attrs: {
      "id": "contacts-select"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.routerId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.$router.push('/contacts/' + _vm.routerId);
      }]
    }
  }, [_c('option', {
    domProps: {
      "value": 'mainContacts'
    }
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/contacts/mainContent"
    }
  }, [_vm._v(" Офис компании ")])], 1), _vm._v(" "), _vm._l(_vm.j, function (contact) {
    return _c('option', {
      key: contact.id,
      domProps: {
        "value": contact.id
      }
    }, [_c('nuxt-link', {
      attrs: {
        "to": `/contacts/${contact.id}`
      }
    }, [_vm._v("\n          " + _vm._s(contact.name) + "\n        ")])], 1);
  })], 2)], 2), _vm._ssrNode(" <div class=\"contacts-id__content-wrapper\">" + _vm._ssrList(_vm.contactRes, function (contact) {
    return "<div class=\"contacts__content-item\">" + (contact.type === 'map' ? "<div class=\"contacts__content\"><h3 class=\"contacts__header\">" + _vm._ssrEscape(_vm._s(contact.content)) + "</h3> <p class=\"contacts__content\">" + _vm._s(_vm.domDecoder(contact.subcontent)) + "</p></div>" : "<!---->") + " " + (contact.type === 'popup' ? "<div" + _vm._ssrClass(null, {
      contacts__content_active: !_vm.isActive
    }) + "><a class=\"popup-btn\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.isActiveText) + "\n        ") + "</a> <h3 class=\"contacts__header_content\">" + _vm._ssrEscape(_vm._s(contact.content)) + "</h3> <p>" + _vm._s(contact.subcontent) + "</p></div>" : "<!---->") + " " + (contact.type === 'content' ? "<div" + _vm._ssrClass(null, {
      contacts__content_active: !_vm.isActive
    }) + "><h3 class=\"contacts__header_content\">" + _vm._ssrEscape(_vm._s(contact.content)) + "</h3> <p>" + _vm._s(contact.subcontent) + "</p></div>" : "<!---->") + "</div>";
  }) + "</div>")], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contacts/_id.vue?vue&type=template&id=0925f02a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacts/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      isActive: false,
      isActiveText: "",
      isMapOpen: null,
      contactRes: "",
      contactRes2: "",
      j: [],
      routerId: null
    };
  },
  computed: {
    id() {
      this.routerId = Number(this.$route.params.id);
    }
  },
  methods: {
    isActiveBtn() {
      if (this.isActiveText === "Открыть полностью") {
        this.isActiveText = "Скрыть";
      } else {
        this.isActiveText = "Открыть полностью";
      }
    },
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString("<!doctype html><body>" + str, "text/html");
      return dom.body.textContent;
    }
  },
  mounted() {
    let check;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    this.isMobile = check;
    // this.routerId = Number(this.$route.params.id);
    this.routerId = window.location.pathname.split("/").pop();
    if (this.isActiveText === "") {
      this.isActiveText = "Открыть полностью";
    }
    external_axios_default.a.get("https://project.a-lux.dev/api/contact").then(res => {
      this.contactRes2 = res.data;
      this.j = res.data;
      this.j.shift();
    });
    external_axios_default.a.get(`https://project.a-lux.dev/api/contact/${this.routerId}`).then(res => {
      this.contactRes = res.data;
    });
  },
  destroyed() {
    this.isActive = false;
  }
});
// CONCATENATED MODULE: ./pages/contacts/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var contacts_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contacts/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contacts_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "df4a76d0"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map