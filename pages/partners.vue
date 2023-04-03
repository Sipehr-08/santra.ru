<template>
  <div class="partners-page about__wrapper">
    <div class="partner-about__container">
      <div class="about__header">
        <div class="about__header-content-item__left">
          <h1 class="title">{{ jobs.title }}</h1>
          <div class="about__header-content" v-html="jobs.headercontent"></div>
          <img :src="jobs.headerimage" alt="" />
          <p>
            {{ jobs.headerimagefooter }}
          </p>
        </div>
        <div class="about__header-content-item__right">
          <div class="about__header-content-item">
            <h2>Контакты оптового отдела</h2>
            <p>
              Российская Федерация Московская обл., п. Вёшки, ул.Выставочная 53.
              Офис 12.
              <nuxt-link to="/contacts/mainContacts"
                >Смотреть на карте</nuxt-link
              >
            </p>
            <div class="about__header-content-item__contacts">
              <p>+7 (916) 775-91-54</p>
              <p cl>+7 (499) 967-84-41</p>
              <a href="mailto:opt@cantra.ru">opt@cantra.ru</a>
            </div>
          </div>
          <div v-if="width >= 767" class="about__header-content-item">
            <div class="wide-form recalling partner-form" v-if="!dataSent">
              <form
                class="form-horizontal"
                id="form-contactm_recall"
                @submit.prevent="formSend"
              >
                <h3 class="h3-text">
                  Оставьте заявку, мы свяжемся с Вами сами
                </h3>
                <div class="input-blocks">
                  <div class="input">
                    <input
                      class="form-control"
                      type="text"
                      name="recall-name"
                      v-model="name"
                      id="recall-name"
                      placeholder="Ваше имя"
                      required
                    />
                    <p class="hint">Как к Вам обращаться менеджеру</p>
                  </div>
                  <div class="input">
                    <input
                      class="form-control"
                      v-model="email"
                      id="recall-name"
                      placeholder="Ваш E-mail"
                      required
                    />
                    <p class="hint">Ваш E-mail</p>
                  </div>
                  <div class="input">
                    <the-mask
                      class="form-control"
                      v-model="phone"
                      id="recall-name"
                      :mask="['+7 (###) ###-##-##']"
                      :masked="false"
                      placeholder="Введите номер телефона"
                      required
                    />
                    <p class="hint">Контактный телефон</p>
                  </div>
                  <div class="input policy_block_ask_again">
                    <input
                      type="checkbox"
                      id="pub_policy_ask_again"
                      name="pub_policy_ask_again"
                      checked=""
                    />
                  </div>
                </div>
                <div class="button_center">
                  <input
                    type="submit"
                    class="button light-red-button submit"
                    value="Отправить"
                  />
                </div>
                <div class="recall_danger"></div>
              </form>
            </div>

            <div class="form-response-success" v-if="isSuccess">
              <svg
                fill="#3c763d"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="20px"
                height="20px"
              >
                <path
                  d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z"
                />
              </svg>
              Заявка отправлена
            </div>
          </div>
        </div>
      </div>
      <div v-if="jobs" class="about__middle-content">
        <h2 class="about__middle-header">Мы гарантируем</h2>
        <div
          class="about__middle-content-inner"
          v-for="card in jobs.card"
          :key="card.index"
        >
          <img :src="card.logo" alt="" />
          <h3>{{ card.title }}</h3>
          <p v-html="card.content"></p>
        </div>
      </div>
      <div class="about__footer-content">
        <div class="about__footer-files">
          <a href="https://project.a-lux.dev/api/jobs?event=1">
            Перечень рекомендуемых мероприятий
          </a>
        </div>
        <div class="about__footer-files">
          <a href="https://project.a-lux.dev/api/jobs?job=1">
            Сводная ведомость рез-ов проведения специальной оценки условий труда
          </a>
        </div>
      </div>
      <div v-if="width <= 767" class="about__header-content-item">
        <div class="wide-form recalling partner-form" v-if="!dataSent">
          <form
            class="form-horizontal"
            id="form-contactm_recall"
            @submit.prevent="formSend"
          >
            <h3 class="h3-text">Оставьте заявку, мы свяжемся с Вами сами</h3>
            <div class="input-blocks">
              <div class="input">
                <input
                  class="form-control"
                  type="text"
                  v-model="name"
                  placeholder="Ваше имя"
                  required
                />
                <p class="hint">Как к Вам обращаться менеджеру</p>
              </div>
              <div class="input">
                <input
                  class="form-control"
                  type="text"
                  v-model="email"
                  placeholder="Ваш E-mail"
                  required
                />
                <p class="hint">Ваш E-mail</p>
              </div>
              <div class="input">
                <the-mask
                  class="form-control"
                  v-model="phone"
                  :mask="['+7 (###) ###-##-##']"
                  :masked="false"
                  placeholder="Введите номер телефона"
                  required
                />
                <p class="hint">Контактный телефон</p>
              </div>
              <div class="input policy_block_ask_again">
                <input
                  type="checkbox"
                  id="pub_policy_ask_again"
                  name="pub_policy_ask_again"
                  checked=""
                />
              </div>
            </div>
            <div class="button_center">
              <input
                type="submit"
                class="button light-red-button submit"
                value="Отправить"
              />
            </div>
            <div class="recall_danger"></div>
          </form>
        </div>

        <div class="form-response-success" v-if="isSuccess">
          <svg
            fill="#3c763d"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="20px"
            height="20px"
          >
            <path
              d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z"
            />
          </svg>
          Заявка отправлена
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { TheMask } from "vue-the-mask";

export default {
  components: {
    TheMask,
  },
  data() {
    return {
      jobs: "",
      name: "",
      email: "",
      phone: "",
      width: 0,
      dataSent: false,
      isSuccess: false
    };
  },
  methods: {
    formSend() {
      this.$axios.post("https://project.a-lux.dev/api/application", {
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
      this.name = this.email = this.phone = ''
      this.isSuccess = true;
      setTimeout(() => {
        this.isSuccess = false;
      }, 5000);
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  // created() {
  //   window.addEventListener("resize", this.updateWidth);
  //   this.updateWidth();
  // },
  mounted() {
    axios.get("https://project.a-lux.dev/api/jobs").then((res) => {
      this.jobs = res.data;
    });

    this.$nextTick(() => {
      window.addEventListener("resize", this.updateWidth);
      this.updateWidth();
    });
  },
  watch: {
    phone(n, old) {
      if (n == 8) {
        this.phone = '+7'
      }
    }
  }
};
</script>
<style scoped>
.partner-about__container .h3-text {
  width: unset;
}

.top-line__items {
  width: 100%;
  max-width: 92vw !important;
}
.about__middle-header {
  position: absolute;
  top: -80px;
  font-size: 40px;
  font-family: "Lato-Light", sans-serif;
}
.about__middle-content {
  margin-top: 100px;
  position: relative;
}
.about__middle-content {
  width: 100%;
  display: grid;
  padding: 10px;
  grid-column-gap: 65px;
  grid-template-columns: 1fr 1fr;
  max-width: 65%;
}
.wide-form {
  display: flex;
  /* justify-content: right; */
  /* align-items: center; */
  margin-right: 0;
}
.partner-about__container {
  padding: 10px;
  width: 100%;
  margin: 0 auto;
}
#form-contactm_recall #recall-name,
#form-contactm_recall #recall-ph {
  padding: 0;
}
#form-contactm_recall .input:nth-child(2) {
  margin: 0;
}
.hint {
  margin: 0;
  font-size: 12px !important;
}
.about__footer-files {
  font-size: 15px;
  padding: 5px;
}
@media (max-width: 750px) {
  .about__middle-content {
    grid-template-columns: 1fr;
  }
  #form-contactm_recall {
    height: 400px;
  }

  .partner-about__container {
    max-width: 421px !important;
  }
  .about__header-content-item__right {
    display: block !important;
  }
  .about__header-content-item {
    margin: 0 auto;
  }
}
@media (min-width: 1201px) {
  #form-contactm_recall .button_center:nth-child(3) {
    margin-left: 47px;
    margin-top: 15px;
  }
  .about__header-content-item__left[data-v-d89446b8] {
    margin: 0;
  }
  .partner-about__container {
    max-width: 1200px;
  }
  .about__header-content-item {
    text-align: left;
    width: 100%;
    max-width: 554px;
    margin-right: 40px !important;
    margin-top: 20px;
  }
  .about__header {
    height: 350px;
    justify-content: space-between;
    display: flex;
  }
}
.about__header-content-item {
  width: 100%;
  max-width: 347px;
}
@media (max-width: 1200px) {
  .partner-about__container {
    max-width: 751px;
  }
  .about__header-content-item__right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
}
#form-contactm_recall .button_center:nth-child(3) {
  margin-left: 20px;
}
#form-contactm_recall {
  display: block;
  margin-top: 2em;
  width: 100%;
  max-width: 350px;
  background: #ffefe4;
  border-radius: 10px;
  padding: 10%;
  border: 1px solid #fbe0ce;
  box-shadow: 0px 4px 8px 1px #ccc;
}
.about__header-content img {
  width: 100% !important;
  max-width: 383px !important;
}
.about__middle-content__images-wrappe-inner {
  display: flex;
  justify-content: space-around;
}
.about__middle-content__images-wrapper img {
  width: 100%;
  max-width: 150px;
}
.about__middle-content__images-wrapper {
  justify-content: space-around;
  margin: 50px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: max-content;
  overflow: hidden;
}
.header-content {
  line-height: 1.5em;
  font-size: 18px;
  width: 75%;
  margin: 2em 0;
}
.about__header-content-item__left {
  width: 65%;
  margin-right: 10%;
}
.about__header-content-item__right {
  width: 25%;
}
p {
  margin-bottom: 30px;
  font-size: 18px !important;
}
.about__footer-content {
  margin: 18px;
  font-size: 18px;
}
@media (min-width: 1201px) {
  .about__wrapper .partner-about__container {
    max-width: 1200px;
  }
}
.partner-about__container {
  width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 3.8em;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  line-height: 1.13;
  color: black;
}

.partner-form .input-blocks {
  flex-direction: column;
}

.form-response-success {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: #3c763d;
  font-size: 16px;
  line-height: 18px;
}

.form-response-success svg {
  margin-right: 5px;
}
</style>
