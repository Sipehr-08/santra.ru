<template>
  <div class="top-line" >
    <div class="cantra_content">
      <div class="top-line__items">
        <p>
          Официальный сайт производителя автомобильных накидок премиум класса
        </p>
        <div class="right-side">
          <div class="lang-wrap" v-on-clickaway="closeLang">
            <div class="default-lang" @click="langPopup = !langPopup">
              <!-- <img :src="defaultLang.img" alt="" /> -->
              {{ defaultLang.name }}
            </div>
            <div class="lang-popup" v-if="langPopup">
              <div
                v-for="lang in langs"
                :key="lang.index"
                @click="(langPopup = false), changeLang(lang)"
                class="lang_wrapper"
              >
                <img :src="lang.img" />
                <a :href="lang.url" target="_blank">
                {{ lang.name }}
                </a>
              </div>
            </div>
          </div>
          <nuxt-link to="/cart/"
            ><img src="@/assets/img/svg/shoppingcart.svg" class="shopcart"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
      langPopup: false,
      defaultLang: {
        img: "../../assets/img/russia.svg",
        name: "Россия",
      },
      langs: [
        {
          name: "Россия",
          img: require("../../assets/img/russia.svg"),
          url: "https://cantra.ru"
        },
        {
          name: "Молдова",
          img: require("../../assets/img/moldova.svg"),
          url: "http://cantra.md/"
        },
        {
          name: "Беларусь",
          img: require("../../assets/img/belarus.svg"),
          url: "https://cantraby.by/"
        },
        {
          name: "Казахстан",
          img: require("../../assets/img/kazakhstan.svg"),
          url: "https://cantra.kz/"
        },
        {
          name: "Германия",
          img: require("../../assets/img/germany.svg"),
          url: "https://cantra.de/"
        },
      ],
    };
  },
  methods: {
    changeLang(lang) {
      this.defaultLang = lang
    },
    closeLang() {
      this.langPopup = false
    }
  },
  mounted() {
    this.changeLang(this.langs[0]);
  },
};
</script>

<style>
.right-side {
  align-items: center;
  display: flex;
  z-index: 10;

}
.lang_wrapper {
  transition: 0.3s;
  padding: 5px;
  border: 1px solid #c3c3c3;
  background-color: #fff;
  color: black;
  font-size: 14px;
  display: flex;
}
.default-lang {
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  display: flex;
  cursor: pointer;
}
.lang-wrap {
  position: relative;
}
.lang_wrapper img,
.default-lang img {
  padding-right: 5px;
  width: 30px;
}
.top-line__items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.shopcart {
  max-height: 25px;
  margin-left: 10px;
  height: 100%;
  filter: invert(1);
}

.lang-popup {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
}
</style>
