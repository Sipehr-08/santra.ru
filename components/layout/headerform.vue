<template>
  <div>
    <div
      class="ask_danger_success"
      :class="{ active: dataSent }"
      v-if="dataSent"
    >
      <div class="text_success_green">Спасибо, ваша заявка принята</div>
      <div class="text_success_recall">
        В ближайшее время с вами свяжется менеджер и уточнит детали заказа.
      </div>
      <div class="button_ok" @click="dataSent = !dataSent">OK</div>
    </div>
    <div class="contact-with" style="display: block" v-if="!dataSent">
      <div class="width" style="">
        <p>Ваш телефон</p>
        <form
          class="form-horizontal"
          id="form-contactm_quickcall"
          @submit.prevent="sendForm"
        >
        <input type="text" v-model="phone" id="recall-name" placeholder="Введите номер телефона" ref="phone" required onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,10}$/.test(this.value));" />
          <!-- <the-mask
            v-model="phone"
            :mask="['+7 (###) ###-##-##']"
            :masked="false"
            placeholder="Введите номер телефона"
            required
          /> -->
          <div class="input policy_block_quickcall">
            <input
              type="checkbox"
              id="pub_policy_quickcall"
              name="pub_policy_quickcall"
              required
            />
            <label class="tick_label_quickcall" for="pub_policy_quickcall"
              ><div class="tick_quickcall"></div
            ></label>
            <span class="policy_text_quickcall"
              >Я согласен(-а) с
              <a href="/policy" target="_blank"
                >политикой обработки персональных данных</a
              ></span
            >
          </div>
          <input type="submit" class="send_callback" value="Перезвоним сами" />
        </form>

        <div class="contact-with__contacts">
          <a href="tel:84999678441">+7 (499) 967-84-41</a>
          <a href="tel:89169473555">+7 (916) 947-35-55</a>
          <div class="wts-div">
            <img src="../../assets/img/new-whatsapp.svg" alt="" />
          </div>
          <a style="display: none" href="#">Онлайн-чат</a>
          <a href="/contacts/mainContacts">Контакты</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TheMask } from "vue-the-mask";
export default Vue.extend({
  components: {
    TheMask,
  },
  data() {
    return {
      dataSent: false,
      phone: "",
    };
  },
  methods: {
    sendForm() {
      this.$axios
        .post("https://project.a-lux.dev/api/application", {
          phone: this.phone,
        })
      this.dataSent = true;
    },
  },
  watch: {
    phone(n, old) {
      if (n == 8) {
        this.phone = '7'
      }
      if (n == 9) {
        this.phone = '79'
      }
    }
  }
});
</script>

<style>
.contact-with__contacts {
  display: flex;
  align-items: center;
}
.contact-with__contacts a {
  margin-left: 10px;
  font-size: 1.3em;
}
</style>
