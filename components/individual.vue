<template>
  <div id="fourth_block" class="fourth_block" v-if="personal">
    <div class="cantra_content">
      <h2 class="h2-text">
        Создайте индивидуальный дизайн для себя или в подарок близким
      </h2>
      <div class="mobile">
        <div class="personal__items-right onMobile" v-if="suedeActive !== 0">
          <img class="layer1" :src="personal.type[priceActive].image" />
          <img class="layer2" :src="personal.suede[suedeActive].image" />
          <img class="layer3" :src="personal.string[stringActive].image" />
          <img class="layer4" :src="personal.edging[edgingActive].image" />
        </div>
      </div>
      <form class="personal" @submit.prevent="personalOrderSend()">
        <div class="personal__size">
          <div
            class="personal__size-checkbox"
            v-for="(type, index) in personal.type"
            :key="type.id"
          >
            <input
              type="radio"
              :id="'checkbox' + type.id"
              v-model="priceActive"
              @change="wholePrice = personal.type[priceActive].price"
              :value="index"
            />
            <label :for="'checkbox' + type.id">{{ type.title }}</label>
          </div>
        </div>
        <div class="personal__items">
          <div class="personal__items-left">
            <div class="personal__colors">
              <select v-model="suedeActive" class="material_type">
                <option value="0">Цвет замши</option>
                <option
                  v-for="(type, index) in personal.suede"
                  :value="index"
                  :key="type.id"
                >
                  {{ type.name }}
                </option>
              </select>
              <select v-model="stringActive" class="material_type">
                <option value="0">Цвет строчки</option>
                <option
                  v-for="(type, index) in personal.string"
                  :value="index"
                  :key="type.id"
                >
                  {{ type.name }}
                </option>
              </select>
              <select class="material_type" v-model="edgingActive">
                <option value="0">Цвет окантовки</option>
                <option
                  v-for="(type, index) in personal.edging"
                  :value="index"
                  :key="type.id"
                >
                  {{ type.color }}
                </option>
              </select>
            </div>
            <div class="personal__logo">
              <div class="personal__logo-checkbox">
                <input
                  type="radio"
                  value="0"
                  v-model="customActive"
                  id="withoutLogo"
                />
                <label for="withoutLogo">Без логотипа</label>
              </div>
              <div class="personal__logo-withFile">
                <div class="personal__logo-checkbox">
                  <input
                    type="radio"
                    value="1"
                    v-model="customActive"
                    id="withLogo"
                  />
                  <label for="withLogo">С логотипом</label>
                </div>
                <label v-if="customActive" class="file">
                  <div class="file-text">Выберите файл...</div>
                  <input type="file" class="file" @change="uploadFile" />
                </label>
              </div>
            </div>
            <div class="personal__inputs">
              <input
                v-model="personalName"
                class="personal__inputs-small"
                placeholder="Ваше имя"
                required
              />
              <input type="text" class="personal__inputs-small" v-model="personalPhone" id="recall-name" placeholder="Ваш номер" required ref="phone" onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,10}$/.test(this.value));" />
              <!-- <the-mask
                v-model="personalPhone"
                :mask="['+7 (###) ###-##-##']"
                :masked="false"
                class="personal__inputs-small"
                placeholder="Ваш номер"
                required
              /> -->
              <textarea
                class="personal__inputs-big"
                v-model="personalMessage"
                placeholder="Ваш комментарий..."
              ></textarea>
            </div>
            <p class="personal__ps">
              *Индивидуальный заказ выполняется по 50% предоплате.<br />
              Сроки изготовления - 1.5-2 недели.<br />
              Точную сумму и детали оплаты Вам сообщит оператор.
            </p>
            <h2 class="personal__price showInMobile" v-if="personal">
              От {{ calculatePrice }} рублей
            </h2>
            <div class="personal__submit">
              <input
                type="submit"
                class="personal__submit-button"
                :class="{ success: isPersonalSuccess }"
                :value="
                  isPersonalSuccess ? 'Заказ отправлен' : 'Отправить заказ'
                "
              />
              <div class="input policy_customorder">
                <input
                  type="checkbox"
                  id="policy_customorder"
                  name="policy_customorder"
                  checked=""
                />
                <label class="tick_label_customorder" for="policy_customorder"
                  ><div class="tick_customorder"></div
                ></label>
                <span class="policy_text_customorder"
                  >Я согласен(-а) с
                  <a href="/policy" target="_blank"
                    >политикой обработки персональных данных</a
                  ></span
                >
              </div>
              <div class="personal--success" v-if="isPersonalSuccess">
                <div @click="isPersonalSuccess = false">Продолжить покупки</div>
              </div>
            </div>
            <h2 class="personal__price showInDesktop" v-if="personal">
              От {{ calculatePrice }} рублей
            </h2>
          </div>
          <div class="personal__size is-mobile-flex">
            <div
              class="personal__size-checkbox"
              v-for="(type, index) in personal.type"
              :key="type.id"
            >
              <input
                type="radio"
                :id="'checkbox' + type.id"
                v-model="priceActive"
                @change="wholePrice = personal.type[priceActive].price"
                :value="index"
              />
              <label :for="'checkbox' + type.id">{{ type.title }}</label>
            </div>
          </div>
          <div
            class="personal__price construct-images relative"
            v-if="
              isLoaded &&
              suedeActive == 0 &&
              stringActive == 0 &&
              edgingActive == 0
            "
          >
            <img class="layer4" src="../assets/img/constructorImg.jpg" alt="" />
          </div>
          <div
            class="personal__items-right onDesktop construct-images relative"
            v-else-if="
              suedeActive !== 0 || stringActive !== 0 || edgingActive !== 0
            "
          >
            <img class="layer1" :src="personal.type[priceActive].image" />
            <img class="layer2" :src="personal.suede[suedeActive].image" />
            <img class="layer3" :src="personal.string[stringActive].image" />
            <img class="layer4" :src="personal.edging[edgingActive].image" />
            <img
              class="your_logo"
              src="../assets/img/your_logo.png"
              alt=""
              v-if="customActive == 1"
            />
          </div>
          <div class="personal__price construct-images" v-else>
            <img
              class="layer4"
              src="../assets/img/black-mini.jpg"
              alt=""
              v-if="customActive == 0"
            />
            <div v-else-if="customActive == 1">
              <img class="layer4" src="../assets/img/black-mini.jpg" alt="" />
              <img class="your_logo" src="../assets/img/your_logo.png" alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { TheMask } from "vue-the-mask";
export default {
  components: { TheMask },
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
    },
  },

  methods: {
    uploadFile(event) {
      this.logo = event.target.files[0];
      alert("Фото успешно загружено(-ы)!");
    },
    personalOrderSend() {
      let fd = new FormData();
      fd.append('type', this.personal.type[this.priceActive].id || 0)
      fd.append('suede', this.personal.suede[this.suedeActive].id || 0)
      fd.append('string', this.personal.string[this.stringActive].id || 0)
      fd.append('edging', this.personal.edging[this.edgingActive].id || 0)
      fd.append('name', this.personalName)
      fd.append('number', this.personalPhone)
      fd.append('comment', this.personalMessage)
      fd.append('price', this.calculatePrice)

      if (this.customActive == 1 && !this.logo) {
        alert('Выберите логотип!')
        return
      }

      if (this.customActive == 1 && this.logo) {
        fd.append('image', this.logo)
      }

      axios
        .post("https://project.a-lux.dev/api/inapplication", fd,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then((this.isPersonalSuccess = true));
    },
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
        this.personalPhone = '7'
      }
      if (n == 9) {
        this.personalPhone = '79'
      }
    }
  },

  mounted() {
    this.isLoaded = true;
    axios.get(`https://project.a-lux.dev/api/index?page=${1}`).then((res) => {
      this.personal = res.data.create;
    });
  },
};
</script>
