<template>
  <footer>
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__col-logo">
          <nuxt-link to="/"><img src="@/assets/img/svg/logo.svg" /></nuxt-link>
          <p class="footer__info-site">
            Сайт производителя автомобильных накидок премиум класса.
          </p>
          <div class="footer__copyright">
            <p>© 2022. Все права защищены. ООО «КАНТРА»</p>
          </div>
        </div>
        <div class="footer__col-list">
          <ul class="footer__company-menu">
            <li><nuxt-link to="/about">О нас</nuxt-link></li>
            <li><nuxt-link to="/delivery">Доставка и оплата</nuxt-link></li>
            <!-- <li><nuxt-link to="/gallery">Галлерея</nuxt-link></li> -->
            <li><nuxt-link to="/partners">Партнерам</nuxt-link></li>
            <li><nuxt-link to="/contacts/mainContacts">Контакты</nuxt-link></li>
            <li><nuxt-link to="/guest">Накидки vs чехлы</nuxt-link></li>
          </ul>
          <ul class="footer__company-menu">
            <li><nuxt-link to="/certify">Как отличить подделку</nuxt-link></li>
            <li><nuxt-link to="/rebuy">Возврат товара</nuxt-link></li>
            <li><nuxt-link to="/blog/mainBlog">Блог</nuxt-link></li>
            <li>
              <nuxt-link to="/policy">Политика обработки ПД</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__col-contacts">
          <div class="footer__phone-wrapepr">
            <a class="footer__phone" href="tel:84999678441">+7 499 967-84-41</a>
            <a style="display: none" href="#" class="callback"
              >Можем перезвонить</a
            >
            <div class="footer__socials">
              <p class="footer__socials-text">Мы в соц сетях</p>
              <ul class="footer__socials-inner">
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cantra.ru/"
                    class="footer__socials-inst"
                    ><img src="../../assets/img/new-instagram.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://wa.me/+79169473555"
                    class="footer__socials-wt"
                    ><img src="../../assets/img/new-whatsapp.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://vk.com/cantraru"
                    class="footer__socials-vk"
                  >
                    <img src="../../assets/img/new-vk.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://t.me/cantraru"
                    class="footer__socials-fb"
                    ><img src="../../assets/img/new-telegram.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCZDI20Z_t1Q76Z3xrwHPz_Q"
                    class="footer__socials-yt"
                  >
                    <img src="../../assets/img/new-youtube.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      check: "loor of Esentai Mall.\n\nDuring the",
    };
  },
});
</script>

<style scoped>
footer {
  height: auto;
  padding-bottom: 41px !important;
}
.footer__wrapper {
  padding: 10px;
}
.footer__socials-inner {
  display: flex;
  justify-content: space-around;
}
.footer__socials img {
  width: 100%;
  max-width: 30px;
}
.footer__socials-yt img {
  max-width: 34px;
}
footer {
  padding: 10px;
  overflow: hidden;
  background-color: #f9f9f9;
}
.footer__phone-wrapepr a {
  font-size: 25px;
  text-decoration: none;
  color: black;
}
.footer__col-list ul {
  line-height: 25px;
  font-size: 16px;
      line-height: 27px;
    color: #6E91D6;
    font-family: 'Lato', sans-serif;
}
p.footer__info-site {
  font-size: 15px;
  margin-top: 10px;
  width: 100%;
  max-width: 66vw;
}
.footer__container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
ul li {
  list-style: none;
}
@media (min-width: 800px) {
  .footer__copyright {
    margin-top: 20px;
  }
  .footer__col-list ul {
    margin-left: 20px;
  }
  .footer__col-list {
    display: flex;
  }
  p.footer__info-site {
    max-width: 24vw;
  }
  .footer__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
@media (max-width: 800px) {
  .footer__socials {
    width: 285px;
  }
  .footer__col-logo {
    position: relative;
  }
  .footer__copyright {
    position: absolute;
    top: 480px;
  }
  .footer__container {
    /* padding-bottom: 10vh; */
    width: 100%;
  }
}
</style>
