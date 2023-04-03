<template>
  <div>
    <top-line />
    <header>
      <div class="cantra_content">
        <a
          class="menu-btn"
          style="position: absolute; right: 10px"
          :class="{ opennav: !burgerActive, closenav: burgerActive }"
          @click="openBurger"
          href="#"
        >
          <img src="@/assets/img/svg/burger.svg" />
        </a>
        <nuxt-link to="/" class="logo">
          <img src="@/assets/img/svg/logo.svg" />
        </nuxt-link>
        <div v-if="burgerActive === true">
          <a @click="closeMenu" class="closenavBtn" href="#">X</a>
        </div>
        <nav :class="{ active: burgerActive }">
          <div class="nav-wrapper" @mouseleave="burgerActive = false">
            <ul class="menu rightnav">
              <li class="login-nav">
                <a href="/index.php?route=account/account">Войти</a>
              </li>
              <li class="contacts" @click.prevent="activeForm = !activeForm">
                <a href="#"><span>Связаться с нами</span></a>
              </li>
            </ul>
            <ul class="menu leftnav">
              <li @click="closeMenu"><a href="/catalog">Каталог</a></li>
              <li @click="closeMenu"><a href="/partnership">Партнерство</a></li>
              <li @click="closeMenu"><a href="/gallery">Фотогалерея</a></li>
              <li @click="closeMenu">
                <a href="/certify">Отличия от подделок</a>
              </li>
              <li @click="closeMenu">
                <nuxt-link class="color" to="/contacts/mainContacts"
                  >Контакты</nuxt-link
                >
              </li>
            </ul>
          </div>
        </nav>

        <div class="clear"></div>
      </div>
      <headerform v-if="activeForm" />
    </header>
  </div>
</template>

<script>
import TopLine from "./top-line.vue";
import Vue from "vue";
import Headerform from "./headerform.vue";
export default Vue.extend({
  components: { TopLine, Headerform },
  data() {
    return {
      activeForm: false,
      burgerActive: false,
    };
  },
  methods: {
    closeMenu() {
      this.burgerActive = false;
      document.querySelector("body").style.overflowY = "auto";
    },
    openBurger() {
      this.burgerActive = true;
      document.querySelector("body").style.overflowY = "hidden";
    },
  },
});
</script>

<style lang="scss">
.menu-btn {
  right: 20px !important;
}
// @media (min-width: 769px) {
//   .logo{
//     display: none;
//   }
// }
@media (max-width: 768px) {
  .logo {
    cursor: pointer;
  }
  .active {
    right: 0 !important;
    z-index: 99999;
    background: none;
    height: auto;
  }
}
a.closenavBtn {
  color: black;
  font-size: 26px;
  position: absolute;
  right: 9px;
  top: 82px;
}
</style>
