exports.ids = [3];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/constructorImg.0bed589.jpg";

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/individual.vue?vue&type=template&id=09dac264&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.personal ? _c('div', {
    staticClass: "fourth_block",
    attrs: {
      "id": "fourth_block"
    }
  }, [_vm._ssrNode("<div class=\"cantra_content\">", "</div>", [_vm._ssrNode("<h2 class=\"h2-text\">\n      Создайте индивидуальный дизайн для себя или в подарок близким\n    </h2> <div class=\"mobile\">" + (_vm.suedeActive !== 0 ? "<div class=\"personal__items-right onMobile\"><img" + _vm._ssrAttr("src", _vm.personal.type[_vm.priceActive].image) + " class=\"layer1\"> <img" + _vm._ssrAttr("src", _vm.personal.suede[_vm.suedeActive].image) + " class=\"layer2\"> <img" + _vm._ssrAttr("src", _vm.personal.string[_vm.stringActive].image) + " class=\"layer3\"> <img" + _vm._ssrAttr("src", _vm.personal.edging[_vm.edgingActive].image) + " class=\"layer4\"></div>" : "<!---->") + "</div> "), _vm._ssrNode("<form class=\"personal\">", "</form>", [_vm._ssrNode("<div class=\"personal__size\">" + _vm._ssrList(_vm.personal.type, function (type, index) {
    return "<div class=\"personal__size-checkbox\"><input type=\"radio\"" + _vm._ssrAttr("id", 'checkbox' + type.id) + _vm._ssrAttr("value", index) + _vm._ssrAttr("checked", _vm._q(_vm.priceActive, index)) + "> <label" + _vm._ssrAttr("for", 'checkbox' + type.id) + ">" + _vm._ssrEscape(_vm._s(type.title)) + "</label></div>";
  }) + "</div> "), _vm._ssrNode("<div class=\"personal__items\">", "</div>", [_vm._ssrNode("<div class=\"personal__items-left\">", "</div>", [_vm._ssrNode("<div class=\"personal__colors\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.suedeActive,
      expression: "suedeActive"
    }],
    staticClass: "material_type",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.suedeActive = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Цвет замши")]), _vm._v(" "), _vm._l(_vm.personal.suede, function (type, index) {
    return _c('option', {
      key: type.id,
      domProps: {
        "value": index
      }
    }, [_vm._v("\n                " + _vm._s(type.name) + "\n              ")]);
  })], 2), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stringActive,
      expression: "stringActive"
    }],
    staticClass: "material_type",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.stringActive = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Цвет строчки")]), _vm._v(" "), _vm._l(_vm.personal.string, function (type, index) {
    return _c('option', {
      key: type.id,
      domProps: {
        "value": index
      }
    }, [_vm._v("\n                " + _vm._s(type.name) + "\n              ")]);
  })], 2), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.edgingActive,
      expression: "edgingActive"
    }],
    staticClass: "material_type",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.edgingActive = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Цвет окантовки")]), _vm._v(" "), _vm._l(_vm.personal.edging, function (type, index) {
    return _c('option', {
      key: type.id,
      domProps: {
        "value": index
      }
    }, [_vm._v("\n                " + _vm._s(type.color) + "\n              ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"personal__logo\"><div class=\"personal__logo-checkbox\"><input type=\"radio\" value=\"0\" id=\"withoutLogo\"" + _vm._ssrAttr("checked", _vm._q(_vm.customActive, "0")) + "> <label for=\"withoutLogo\">Без логотипа</label></div> <div class=\"personal__logo-withFile\"><div class=\"personal__logo-checkbox\"><input type=\"radio\" value=\"1\" id=\"withLogo\"" + _vm._ssrAttr("checked", _vm._q(_vm.customActive, "1")) + "> <label for=\"withLogo\">С логотипом</label></div> " + (_vm.customActive ? "<label class=\"file\"><div class=\"file-text\">Выберите файл...</div> <input type=\"file\" class=\"file\"></label>" : "<!---->") + "</div></div> <div class=\"personal__inputs\"><input placeholder=\"Ваше имя\" required=\"required\"" + _vm._ssrAttr("value", _vm.personalName) + " class=\"personal__inputs-small\"> <input type=\"text\" id=\"recall-name\" placeholder=\"Ваш номер\" required=\"required\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57 && /^\\d{0,10}$/.test(this.value));\"" + _vm._ssrAttr("value", _vm.personalPhone) + " class=\"personal__inputs-small\"> <textarea placeholder=\"Ваш комментарий...\" class=\"personal__inputs-big\">" + _vm._ssrEscape(_vm._s(_vm.personalMessage)) + "</textarea></div> <p class=\"personal__ps\">\n            *Индивидуальный заказ выполняется по 50% предоплате.<br>\n            Сроки изготовления - 1.5-2 недели.<br>\n            Точную сумму и детали оплаты Вам сообщит оператор.\n          </p> " + (_vm.personal ? "<h2 class=\"personal__price showInMobile\">" + _vm._ssrEscape("\n            От " + _vm._s(_vm.calculatePrice) + " рублей\n          ") + "</h2>" : "<!---->") + " <div class=\"personal__submit\"><input type=\"submit\"" + _vm._ssrAttr("value", _vm.isPersonalSuccess ? 'Заказ отправлен' : 'Отправить заказ') + _vm._ssrClass("personal__submit-button", {
    success: _vm.isPersonalSuccess
  }) + "> <div class=\"input policy_customorder\"><input type=\"checkbox\" id=\"policy_customorder\" name=\"policy_customorder\" checked=\"checked\"> <label for=\"policy_customorder\" class=\"tick_label_customorder\"><div class=\"tick_customorder\"></div></label> <span class=\"policy_text_customorder\">Я согласен(-а) с\n                <a href=\"/policy\" target=\"_blank\">политикой обработки персональных данных</a></span></div> " + (_vm.isPersonalSuccess ? "<div class=\"personal--success\"><div>Продолжить покупки</div></div>" : "<!---->") + "</div> " + (_vm.personal ? "<h2 class=\"personal__price showInDesktop\">" + _vm._ssrEscape("\n            От " + _vm._s(_vm.calculatePrice) + " рублей\n          ") + "</h2>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"personal__size is-mobile-flex\">" + _vm._ssrList(_vm.personal.type, function (type, index) {
    return "<div class=\"personal__size-checkbox\"><input type=\"radio\"" + _vm._ssrAttr("id", 'checkbox' + type.id) + _vm._ssrAttr("value", index) + _vm._ssrAttr("checked", _vm._q(_vm.priceActive, index)) + "> <label" + _vm._ssrAttr("for", 'checkbox' + type.id) + ">" + _vm._ssrEscape(_vm._s(type.title)) + "</label></div>";
  }) + "</div> " + (_vm.isLoaded && _vm.suedeActive == 0 && _vm.stringActive == 0 && _vm.edgingActive == 0 ? "<div class=\"personal__price construct-images relative\"><img" + _vm._ssrAttr("src", __webpack_require__(106)) + " alt class=\"layer4\"></div>" : _vm.suedeActive !== 0 || _vm.stringActive !== 0 || _vm.edgingActive !== 0 ? "<div class=\"personal__items-right onDesktop construct-images relative\"><img" + _vm._ssrAttr("src", _vm.personal.type[_vm.priceActive].image) + " class=\"layer1\"> <img" + _vm._ssrAttr("src", _vm.personal.suede[_vm.suedeActive].image) + " class=\"layer2\"> <img" + _vm._ssrAttr("src", _vm.personal.string[_vm.stringActive].image) + " class=\"layer3\"> <img" + _vm._ssrAttr("src", _vm.personal.edging[_vm.edgingActive].image) + " class=\"layer4\"> " + (_vm.customActive == 1 ? "<img" + _vm._ssrAttr("src", __webpack_require__(92)) + " alt class=\"your_logo\">" : "<!---->") + "</div>" : "<div class=\"personal__price construct-images\">" + (_vm.customActive == 0 ? "<img" + _vm._ssrAttr("src", __webpack_require__(93)) + " alt class=\"layer4\">" : _vm.customActive == 1 ? "<div><img" + _vm._ssrAttr("src", __webpack_require__(93)) + " alt class=\"layer4\"> <img" + _vm._ssrAttr("src", __webpack_require__(92)) + " alt class=\"your_logo\"></div>" : "<!---->") + "</div>"))], 2)], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/individual.vue?vue&type=template&id=09dac264&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue-the-mask"
var external_vue_the_mask_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/individual.vue?vue&type=script&lang=js&


/* harmony default export */ var individualvue_type_script_lang_js_ = ({
  components: {
    TheMask: external_vue_the_mask_["TheMask"]
  },
  data() {
    return {
      personalName: "",
      personalPhone: "",
      personalMessage: "",
      priceActive: 0,
      customActive: 1,
      stringActive: 0,
      suedeActive: 0,
      edgingActive: 0,
      personal: "",
      message: "",
      isLoaded: false,
      isPersonalSuccess: false,
      logo: ''
    };
  },
  computed: {
    calculatePrice() {
      if (this.customActive == 1) {
        return this.personal.type[this.priceActive].price;
      } else {
        return this.personal.type[this.priceActive].price - 2000;
      }
    }
  },
  methods: {
    uploadFile(event) {
      this.logo = event.target.files[0];
      alert("Фото успешно загружено(-ы)!");
    },
    personalOrderSend() {
      let fd = new FormData();
      fd.append('type', this.personal.type[this.priceActive].id || 0);
      fd.append('suede', this.personal.suede[this.suedeActive].id || 0);
      fd.append('string', this.personal.string[this.stringActive].id || 0);
      fd.append('edging', this.personal.edging[this.edgingActive].id || 0);
      fd.append('name', this.personalName);
      fd.append('number', this.personalPhone);
      fd.append('comment', this.personalMessage);
      fd.append('price', this.calculatePrice);
      if (this.customActive == 1 && !this.logo) {
        alert('Выберите логотип!');
        return;
      }
      if (this.customActive == 1 && this.logo) {
        fd.append('image', this.logo);
      }
      external_axios_default.a.post("https://project.a-lux.dev/api/inapplication", fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(this.isPersonalSuccess = true);
    }
  },
  watch: {
    customActive() {
      if (Number(this.customActive) === 1) {
        this.wholePrice = Number(this.personal.type[this.priceActive].price);
        this.isLoaded = false;
      } else {
        this.wholePrice = this.personal.type[this.priceActive].price - 2000;
        this.isLoaded = false;
      }
    },
    priceActive() {
      if (Number(this.customActive) === 1) {
        this.wholePrice = Number(this.personal.type[this.priceActive].price);
      } else {
        this.wholePrice = this.personal.type[this.priceActive].price - 2000;
      }
    },
    personalPhone(n, old) {
      if (n == 8) {
        this.personalPhone = '7';
      }
      if (n == 9) {
        this.personalPhone = '79';
      }
    }
  },
  mounted() {
    this.isLoaded = true;
    external_axios_default.a.get(`https://project.a-lux.dev/api/index?page=${1}`).then(res => {
      this.personal = res.data.create;
    });
  }
});
// CONCATENATED MODULE: ./components/individual.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_individualvue_type_script_lang_js_ = (individualvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/individual.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_individualvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ac0355a"
  
)

/* harmony default export */ var individual = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(12).default})


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/your_logo.819ad65.png";

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/black-mini.d217587.jpg";

/***/ })

};;
//# sourceMappingURL=individual.js.map