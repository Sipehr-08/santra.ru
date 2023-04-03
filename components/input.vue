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
      <div class="wide-form recalling" v-if="!dataSent">
        <h3 class="h3-text" v-html="text"></h3>
        <form
          class="form-horizontal"
          id="form-contactm_recall"
          @submit.prevent="formSend"
        >
          <div class="input-blocks">
            <div class="input">
              <input
                class="form-control"
                type="text"
                name="recall-name"
                v-model="name"
                id="recall-name"
                placeholder="Имя (Как к вам обращаться)"
                required
              />
              <!--<p class="hint">Как к Вам обращаться менеджеру</p>-->
            </div>
            <div class="input">
              <input type="text" class="form-control" v-model="phone" id="recall-name" placeholder="Ваш номер" ref="phone" required onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,10}$/.test(this.value));">
              <!-- <the-mask
                class="form-control phone-input"
                v-model="phone"
                id="recall-name"
                :mask="['+7 (###) ###-##-##']"
                :masked="false"
                placeholder="Ваш номер"
                ref="phone"
                required
              /> -->
              <!--<p class="hint">Контактный телефон</p>-->
            </div>
            <div class="input policy_block_ask_again">
              <input
                type="checkbox"
                id="pub_policy_ask_again"
                name="pub_policy_ask_again"
                checked=""
              />
              <label class="tick_label_ask_again" for="pub_policy_ask_again"
                ><div class="tick_ask_again"></div
              ></label>
              <span class="policy_text_ask_again"
                >Я согласен(-а) с
                <a href="/policy" target="_blank"
                  >политикой обработки персональных данных</a
                ></span
              >
            </div>
          </div>
          <div class="button_center">
            <input
              type="submit"
              class="button light-red-button submit"
              onclick="gtag('event', 'lead', {'event_name': 'callback'})"
              value="Отправить"
            />
          </div>
          <div class="recall_danger"></div>
        </form>
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
  props: {
    text: {
      type: String,
      default: 'Оставьте заявку, мы свяжемся с Вами сами'
    }
  },
  data() {
    return {
      name: "",
      phone: "",
      dataSent: false,
    };
  },
  methods: {
    formSend() {
      this.$axios.post("https://project.a-lux.dev/api/application", {
        name: this.name,
        phone: this.phone,
      });
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
.text_success_green {
  font-size: 27px;
}
#recall-name {
  /* width: auto !important; */
}
.wide-form .recalling {
  text-align: center;
  display: block;
}
input#recall-name {
  font-size: 16px !important;
  outline: none;
}
input#recall-name:focus {
  box-shadow: none !important;
  border-color: #c4c4c4;
}
.h3-text {
  width: 460px;
  margin: 0 auto;
  font-size: 18px !important;
}

.input {
  /*width: 20%;*/
}

.column-left {
  padding: 0px !important;
}

.active {
  display: block;
  height: 100px;
}
.ask_danger_success {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.wide-form {
  padding: 15px;
  background: #faf5f2 !important;
}
.wide-form .h3-text {
  max-width: 220px;
  font-weight: normal;
    line-height: 27px;
    font-size: 18px;
    color: #000000;
}
.wide-form .input-blocks {
  display: flex;
  align-items: center;
}

.wide-form .policy_block_ask_again {
  height: auto;
  display: flex !important;
  align-items: center;
  cursor: pointer;
}
@media (max-width: 600px) {
  .wide-form {
    padding: 0;
    max-width: 100% !important;
  }
  .wide-form .h3-text {
    text-align: center;
    margin: 10px 0;
  }
}
@media (max-width: 1100px) {
  .second_block .cantra_content #column-left {
    height: 100%;
  }
  .button_center {
    width: 100%;
  }
  #form-contactm_recall .light-red-button {
    position: unset;
    margin: auto;
    margin-top: 15px;
    max-width: 250px;
    width: 100%;
    /* display: none !important; */
    margin-bottom: 15px;
  }
}
.second_block .cantra_content #column-left {
  display: flex;
  justify-content: center;
}
.wide-form {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faf5f2 !important;
}
.second_block .cantra_content #column-left h3.h3-text {
  margin: 0;
}
#form-contactm_recall {
  /* width: 460px; */
  display: flex;
  align-items: center;
  justify-content: center;
}
#form-contactm_recall {
  margin: 0;
  display: flex;
}
#form-contactm_recall .light-red-button {
  position: inherit;
}
@media (max-width: 768px) {
  #form-contactm_recall {
    flex-flow: column;
    /* padding-top: 20px; */
  }
  .wide-form {
    flex-flow: column;
    background: #faf5f2 !important;
    /* justify-content: space-between; */
  }
  

  input#recall-name {
    font-size: 12px !important;
  }

  .second_block .wide-form .h3-text {
    margin-bottom: 0;
  }

  .second_block #form-contactm_recall .light-red-button {
    width: 114px;
    margin: 0 0 15px 0;
  }

  .second_block #form-contactm_recall #recall-name {
    width: 100%;
  }
}
</style>
