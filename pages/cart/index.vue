<template>
  <div class="container">
    <h1 class="header_cart">Оформление заказа</h1>
    <p v-if="cartEmpty" class="header__error">
      В корзине пока ничего нет.
      <nuxt-link to="/catalog/">Выберите накидки</nuxt-link>
    </p>
    <nuxt-link to="/catalog/" class="continue_shopping" href="/"
      >Продолжить покупки</nuxt-link
    >
    <div class="row" v-if="!cartEmpty">
      <table class="table_design table table-bordered" style="border: none">
        <thead class="mob_cart_hide" style="border: none">
          <tr>
            <td class="text-left mob_cart_hide"></td>
            <td class="text-left">Товар</td>
            <td class="text-left" style="width: 100px">Кол-во</td>
            <td class="text-left" style="width: 110px">Цена</td>
            <td class="mob_cart_hide">Убрать</td>
          </tr>
        </thead>
        <tbody style="border: none">
          <tr v-for="(item, index) in sorted" :key="index">
            <td
              class="text-center img_posit mob_cart_hide"
              style="border: none"
            >
              <img :src="item.image" />
            </td>
            <td class="text-left mob_name_prod">
              <div class="transform_mob">
                <nuxt-link :to="'/cantra-products/' + item.slug" class="on_prod_link">
                  <div v-html="item.name"></div>
                </nuxt-link>
                <p v-if="!item.spechial">Цвета накидок: {{ item.selectedColorName }}</p>
              </div>
            </td>
            <td class="text-left mob_prod_quantity" style="">
              <div
                class="input-group btn-block"
                style="max-width: 200px; display: flex"
              >
                <button class="minus" @click="ammMinus(item, index)">-</button>
                <span class="form-control product_quantity">{{
                  item.ammount
                }}</span>
                <button class="plus" @click="ammPlus(item, index)">+</button>
              </div>
            </td>
            <td class="text-left price_format" v-if="!item.procent && item.spechial == null">
              {{
                Number(
                  item.colors[
                    item.colors.indexOf(
                      item.colors.find((obj) => {
                        return obj.id === item.selectedColor;
                      })
                    )
                  ].price - item.colorDiscount
                ) * Number(item.ammount) || Number(item.discount) * Number(item.ammount) ||
                Number(item.price) * Number(item.ammount)
              }}
              р.
            </td>
            <td class="text-left price_format" v-else-if="item.spechial == 1">
              {{ item.price * item.ammount }}
              р.
            </td>
            <td class="text-left price_format" v-else>
              {{ item.price * item.ammount }}
              <!-- {{
                Number(
                  item.colors[
                    item.colors.indexOf(
                      item.colors.find((obj) => {
                        return obj.id === item.selectedColor;
                      })
                    )
                  ].price - item.colorDiscount
                ) * Number(item.ammount) ||
                Number(item.price - item.price / item.procent) *
                  Number(item.ammount)
              }} -->
              р.
            </td>
            <td class="mob_cart">
              <div class="mob_cart-bin" @click="removeItem(index)">
                <img src="@/assets/img/svg/clin.png" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <form v-if="!cartEmpty" @submit.prevent="sendFormData()">
      <div class="forms">
        <div class="forms__titles">
          <h1 class="forms__titles-title">Клиент</h1>
          <h1 class="forms__titles-title">Доставка или самовывоз</h1>
        </div>
        <div class="forms__inputs">
          <div class="forms__inputs__left">
            <div class="forms__inputs__block">
              <h1 class="forms__inputs__block-title">
                <span class="required">*</span>Ф.И.О.
              </h1>
              <input
                type="text"
                class="forms__inputs__block-input"
                minlength="10"
                v-model="name"
                required
              />
            </div>
            <div class="forms__inputs__block">
              <h1 class="forms__inputs__block-title">
                <span class="required">*</span>Телефон
              </h1>
              <input type="text" minlength="11" v-model="phone" class="forms__inputs__block-input" required onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,10}$/.test(this.value));">
            </div>
            <div class="forms__inputs__block">
              <h1 class="forms__inputs__block-title">
                <span class="required">*</span>Эл. почта
              </h1>
              <input
                type="text"
                class="forms__inputs__block-input"
                minlength="10"
                v-model="email"
                required
              />
            </div>
          </div>
          <div class="forms__inputs__right">
            <div class="forms__inputs__block forms__inputs__block-checkboxes">
              <div class="forms__inputs__block-checkbox">
                <input
                  type="radio"
                  v-model="delivery"
                  value="1"
                  id="delivery-1"
                />
                <label for="delivery-1">Доставка</label>
              </div>
              <div class="forms__inputs__block-checkbox">
                <input
                  type="radio"
                  v-model="delivery"
                  value="2"
                  id="delivery-2"
                />
                <label for="delivery-2">Самовывоз</label>
              </div>
            </div>
            <div class="forms__inputs__block" v-if="delivery == 1">
              <h1 class="forms__inputs__block-title">Город доставки</h1>
              <input
                type="text"
                v-model="deliveryCity"
                class="forms__inputs__block-input"
                required
              />
            </div>
            <div class="forms__inputs__block" v-if="delivery == 1">
              <h1 class="forms__inputs__block-title">Адрес доставки</h1>
              <input
                type="text"
                v-model="deliveryAddress"
                class="forms__inputs__block-input"
                required
              />
            </div>
          </div>
        </div>
        <div class="forms__biginput">
          <h1 class="forms__biginput-title">Ваше сообщение</h1>
          <textarea type="text" class="forms__biginput-input" v-model="message"></textarea>
        </div>
        <!-- <di> -->
      </div>
      <div class="payment">
        <h2 class="payment__title">Выберите способ оплаты</h2>
        <div class="payment__inputs">
          <div class="payment__input">
            <input
              type="radio"
              id="money1"
              v-model="payment"
              :checked="payment === 1"
              value="1"
              class="payment__input-checkbox"
            />
            <label for="money1" class="payment__input-text">
              <div class="payment__input-name">
                <img src="@/assets/img/png/cash.png" />
                <p>Наличными курьеру</p>
              </div>
            </label>
          </div>
          <div class="payment__input">
            <input
              type="radio"
              id="money2"
              v-model="payment"
              :checked="payment === 2"
              value="2"
              class="payment__input-checkbox"
            />
            <label for="money2" class="payment__input-text">
              <div class="payment__input-name">
                <img src="@/assets/img/png/cards.png" />
                <p>Сейчас онлайн</p>
              </div>
            </label>
          </div>
          <div class="payment__input">
            <input
              type="radio"
              id="money3"
              v-model="payment"
              :checked="payment === 3"
              value="3"
              class="payment__input-checkbox"
            />
            <label for="money3" class="payment__input-text">
              <div class="payment__input-name">
                <img src="@/assets/img/png/paypal.png" />
                <p>PayPal</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form__agreement">
          <div class="input policy_block">
            <input
              class="checkout_pub_policy"
              type="checkbox"
              id="custom_field[address][1][]"
              name="custom_field[address][1][]"
              v-model="isAgreed"
              value="1"
              checked=""
            />
            <label class="tick_label" for="custom_field[address][1][]"
              ><div class="tick"></div
            ></label>
            <span class="policy_text"
              >Я согласен(-а) с
              <a href="/policy" target="_blank"
                >политикой обработки персональных данных</a
              ></span
            >
          </div>
        </div>
      </div>
      <div
        class="promo"
        v-if="!couponActive"
        @click="couponActive = !couponActive"
      >
        Есть промокод?
      </div>
      <div class="for_promo">
        <button
          type="submit"
          id="tmdbuttonorder"
          class="btn btn-primary"
          onclick="gtag('event', 'order', {'event_name': 'checkout'})"
          :disabled="disableButton"
        >Оформить заказ</button>
        <span class="totalitazer"><span>Итого:</span> {{ finalPrice }} р.</span>
        <div
          class="form-group coupan"
          style="display: block"
          v-if="couponActive"
        >
          <div class="input-group">
            <input
              type="text"
              name="coupon"
              value=""
              v-model="promo"
              placeholder="У Вас есть промокод?"
              id="input-coupon"
              class="form-control"
            />
            <span class="input-group-btn">
              <input
                type="button"
                value="Применить"
                @click="checkPromo"
                id="button-coupon"
                class="btn btn-primary"
              />
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { TheMask } from "vue-the-mask";
import Input from "~/components/input.vue";
import axios from "axios";


export default Vue.extend({
  layout: "default",
  components: {
    TheMask,
  },
  data() {
    return {
      admitad_uid: "",
      procent: "",
      promo: "",
      unsorted: "",
      sorted: [],
      name: "",
      couponActive: false,
      cartItems: "",
      payment: 1,
      cartEmpty: false,
      phone: "",
      delivery: 1,
      message: "",
      isAgreed: 1,
      email: "",
      deliveryCity: "",
      deliveryAddress: "",
      finalPrice: 0,
      // totalPrice: "",
      promocodeMoney: 0,
      promocodePercent: 0,
      disableButton: false
    };
  },
  methods: {
    checkPromo() {
      //   try {
      this.$axios
        .post("https://project.a-lux.dev/api/promo", {
          promo: this.promo,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data.type === "money") {
              this.promocodeMoney = res.data.value;
            } else {
              this.promocodePercent = res.data.value;
            }
          }
        })
        // }
        .catch((error) => {
          if (error.response.status === 404) {
            alert("Промокода не существует");
          }
        });
    },
    sendFormData() {
      this.disableButton = true;
      this.admitad_uid = this.GetAdmitadUid('admitad_uid')
      let dataSent = [];
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      cartItems.forEach((element) => {
        console.log(element);
        while (element.ammount) {
          let el = {
            id: element.id
          }
          if (element.color) {
            el.color = element.color
          }
          if (element.saleId) {
            el.saleId = element.saleId
          }
          dataSent.push(el);
          element.ammount--;
        }
      });
            console.log("pay", this.payment)
      if (this.GetAdmitadUid('admitad_uid') == null) {
        this.$axios
          .post("https://project.a-lux.dev/api/order/create", {
            fio: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message,
            promo: this.promo,
            type_payment: Number(this.payment),
            city: this.deliveryCity,
            address: this.deliveryAddress,
            delivery_type: Number(this.delivery),
            paid: "1",
            items: dataSent,
            api_token: "",
          })
          .then((res) => {
            localStorage.setItem("cartData", JSON.stringify(res.data));
            if (this.payment !== 1 ) {
              location.href = res.data.Order.paymenturl
            }
            this.disableButton = false
          });
      } else  {
        this.$axios
          .post("https://project.a-lux.dev/api/order/create", {
            fio: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message,
            promo: this.promo,
            type_payment: Number(this.payment),
            city: this.deliveryCity,
            address: this.deliveryAddress,
            delivery_type: Number(this.delivery),
            paid: "1",
            items: dataSent,
            api_token: "",
            admitad_uid: this.admitad_uid
          })
          .then((res) => {
            localStorage.setItem("cartData", JSON.stringify(res.data));
            if (this.payment !== 1 ) {
              location.href = res.data.Order.paymenturl
            }
            this.disableButton = false
          });
        
      }
        // axios.get("https://ad.admitad.com/r?campaign_code=85aed9e6f6&postback=1&postback_key=49bE6D6D6902DA87E4696A8a43ac9321&action_code=1&uid=&order_id="+this.sorted.product_id+"&price="+this.sorted.price+"&position_id=&position_count=&tariff_code=1&payment_type=sale&currency_code=&quantity=tariff_code=1")
        if (this.payment == 1 ) {
          this.$router.push("/cart/receipt");
        }
    },

    removeItem(a) {
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
      this.cartItems.splice(a, 1);
      this.sorted.splice(a, 1);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      if (this.cartItems.length === 0) {
        this.cartEmpty = true;
      }
    },
    ammMinus(a, b) {
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
      this.cartItems[b].ammount--;
      if (this.cartItems[b].ammount > 0) {
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        this.sorted[b].ammount = this.cartItems[b].ammount;
      } else {
        this.cartItems.splice(b, 1);
        this.sorted.splice(b, 1);
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        if (this.cartItems.length === 0) {
          this.cartEmpty = true;
        }
      }
    },
    ammPlus(a, b) {
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
      this.cartItems[b].ammount++;
      this.sorted[b].ammount++;
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    GetAdmitadUid(name) {
      var name_cook = name+"=";
      var spl = document.cookie.split(";");
      for(var i=0; i<spl.length; i++) {
        var c = spl[i];
        while(c.charAt(0) == " ") {
          c = c.substring(1, c.length);
        }
        if(c.indexOf(name_cook) == 0) {
          return c.substring(name_cook.length, c.length);
        }
      }
      return null;
    },

  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/sale").then((res) => {
      this.procent = res.data[0].procent;
    });
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems && cartItems.length != 0) {
      this.$axios.post("https://project.a-lux.dev/api/items", {}).then((res) => {
        this.unsorted = res.data;
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let cartId = [];
        let cartColorId = [];
        cartItems.forEach((element) => {
          cartId.push(element.id);
          cartColorId.push(element.colorId);
        });
        cartId.forEach((element, index) => {
          let unsortedVariable = this.unsorted.find((obj) => {
            return obj.id === element;
          });

          let cartAmmount = Number(cartItems[index].ammount);
          let cartColor = cartItems[index].color;
          let cartColorName = cartItems[index].colorName;
          let productProcent = cartItems[index].procent || null;
          let productPrice = cartItems[index].price || null;
          let is_special = cartItems[index].is_special
          let productName = cartItems[index].name
          // let cartColorPrice = '';
          // sorted.forEach((e) => {

          // })
          // let totalPrice = discount;
          let a = Object.assign({}, unsortedVariable, {
            ammount: cartAmmount,
            selectedColor: cartColor,
            selectedColorName: cartColorName,
            procent: productProcent,
            price: productPrice,
            spechial: is_special,
            name: productName
            // totalPrice: totalPrice,
          });

          this.sorted.push(a);
          // let discount = [];

          this.sorted.forEach((e) => {
            // e.discount = (e.price / 100) * this.procent;
            if (e.colorDiscount) {
              e.colorDiscount =
              (e.colors.find((c) => c.id === e.selectedColor).price / 100) *
              this.procent;
            }

            // discount.push((e.price / 100) * this.procent);
          });
        });
      });
      setInterval(() => {
        this.finalPrice = 0;
        this.sorted.forEach((element) => {
          if (element.procent && element.spechial == null) {
            if (!element.colorDiscount) {
              this.finalPrice +=
                Number(element.price - element.price / element.procent) *
                Number(element.ammount);
            } else {
              element.colors.forEach((color) => {
                if (
                  color.price &&
                  element.colorDiscount &&
                  color.id === element.selectedColor
                ) {
                  this.finalPrice +=
                    (color.price - element.colorDiscount) * element.ammount;
                }
              });
            }
          } else if (element.spechial == 1 && !element.selectedColor) {
            this.finalPrice += element.price * element.ammount
          } else {
            this.finalPrice +=
            Number(
              element.colors[
              element.colors.indexOf(
                element.colors.find((obj) => {
                        return obj.id === element.selectedColor;
                      })
                    )
                  ].price - element.colorDiscount
                ) * Number(element.ammount) ||
              element.discount * element.ammount ||
              element.price * element.ammount;
          }
        });
        if (this.promocodeMoney > 0) {
          this.finalPrice = this.finalPrice - this.promocodeMoney;
        }
        if (this.promocodePercent > 0) {
          this.finalPrice =
            this.finalPrice - this.finalPrice / this.promocodePercent;
        }
      }, 1500);
    } else {
      this.cartEmpty = true;
    }
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
<style lang="scss">
td.mob_cart {
  padding: 0 !important;
}
.input-group.btn-block {
  position: relative;
  right: 59px;
}
.forms {
  max-width: 900px !important;
  width: 100%;

  &__biginput {
    &-input {
      width: 85%;
      height: 150px;
    padding: 10px;
    font-size: 15px;
    }
  }
  &__titles {
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    &-title {
      width: 100%;

      margin: 0 !important;
      color: #090909;
      font-weight: 900;
      font-size: 20px;
    }
  }
  &__inputs {
    width: 100%;
    display: flex;
    &__left,
    &__right {
      width: 100%;
    }
    &__block {
      margin-top: 8px;
      &-checkboxes {
        display: flex;
        max-width: 316px;
        height: 60px;
        margin-bottom: 16px;
        align-items: flex-end;
      }
      &-checkbox {
        width: 100%;
        display: flex;
        align-items: center;
        input {
          position: absolute;
          overflow: hidden;
          width: 1px;
          height: 1px;
          clip: rect(0 0 0 0);

          &:checked + label::before {
            content: "•";
            color: red;
          }
        }
        label {
          display: flex;
          align-items: center;
          font-size: 15px;
          cursor: pointer;
          &::before {
            display: block;
            margin-right: 10px;
            content: "";
            width: 26px;
            height: 26px;
            border-radius: 50%;
            flex-shrink: 0;
            border: 1px solid rgba(0, 0, 0, 0.5);
            background: #f5f5f5;
            font-size: 27px;
            line-height: 19px;
            text-align: center;
          }
        }
      }
      &-title {
        margin: 0;
        font-size: 15px;
        margin-bottom: 8px;
        & > .required {
          color: #f00;
          font-weight: bold;
          margin-right: 5px;
        }
      }
      &-input {
        max-width: 316px;
        height: 40px;
        width: 100%;
        border-radius: 3px;
        background-color: #ffffff;
        border: solid 1px #bdbdbd;
        box-shadow: none;
        font-size: 15px;
        padding-left: 15px;
      }
    }
  }
}
.on_prod_link {
  display: flex;
}
@media (max-width: 768px) {
  .price_format {
    vertical-align: bottom !important;
  }
}
.panel-heading {
  font-weight: 900;
  font-size: 20px;
}
.custom_textarea {
  max-width: 800px;
  width: 100%;
  height: 100px !important;
}
.row_big {
  /* max-width: 900px; */
}

.payment {
  // display: flex;
  &__inputs {
    max-width: 1000px;
    display: flex;
    margin-top: 20px;
  }
  &__input {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      position: absolute;
      overflow: hidden;
      width: 1px;
      height: 1px;
      clip: rect(0 0 0 0);

      &:checked + label::before {
        content: "•";
        color: red;
      }
    }
    label {
      display: flex;
      align-items: flex-start;
      font-size: 15px;
      cursor: pointer;
      &::before {
        display: block;
        margin-right: 10px;
        margin-top: 15px;
        content: "";
        width: 26px;
        height: 26px;
        border-radius: 50%;
        flex-shrink: 0;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background: #f5f5f5;
        font-size: 27px;
        line-height: 19px;
        text-align: center;
      }
    }

    &-text {
      max-width: 120px;
    }

    &-name p {
      color: #292929;
      font-weight: bold;
      font-size: 15px;
    }
  }
}
.img_posit {
  img {
    width: 100%;
  }
}
.mob_cart_hide-bin {
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}
.header__error {
  margin: 30px 0;
  min-height: 300px;
}
@media (max-width: 768px) {
  .mob_cart-bin {
    position: absolute;
    left: 0;
    margin-right: 20px;
  }
  .transform_mob {
    padding-left: 20px;
  }
  .forms__inputs {
    flex-flow: column;
    text-align: center;
  }
  .forms__biginput {
    max-width: 310px;
    margin: auto;
  }
  .forms__biginput-input {
    width: 100%;
    height: 75px;
  }
  .payment {
    max-width: 310px;
    margin: auto;
    &__input {
      width: 50%;
    }
    &__inputs {
      flex-flow: wrap;
    }
  }
  .form__agreement {
    text-align: center;
  }
  .forms__inputs__block-checkboxes {
    margin: auto;
  }
}
</style>
