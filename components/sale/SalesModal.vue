<template>
  <div>
    <form
      class="modal"
      v-if="chosenColors.length != 0"
      @click.self="$emit('closeModal')"
      @submit.prevent="sendtoCart()"
    >
      <div class="modal__product" style="z-index: 99999">
        <div
          class="modal__product-card"
          v-for="(item, indexx) in items"
          :key="indexx"
        >
          <img
            class="modal__product-card__image"
            v-if="item.images"
            :src="
              item.images.find((obj) => {
                return (
                  obj.color === item.colors[Number(chosenColors[indexx])].id
                );
              }).images[0]
            "
          />
          <div
            class="modal__product-card__title"
            style="display: flex; flex-flow: wrap"
          >
            <!-- <div v-html="item.brand" style="margin: 0"></div> -->
            {{ item.name }}
          </div>
          <div class="modal__product-card__color" v-if="item.colors">
            <h4 class="modal__product-card__color-title">Цвета накидок:</h4>
            <h3 class="modal__product-card__color-description">
              {{ item.colors[chosenColors[indexx]].name }}
            </h3>
          </div>
          <div class="modal__product-card__colors">
            <img
              class="modal__product-card__colors-ball"
              v-for="(color, index) in item.colors"
              :key="index"
              @click="changeColor(indexx, index)"
              :src="color.logo"
            />
          </div>
        </div>
        <div class="modal__product-actions">
          <div class="modal__product-actions__price">
            {{ totalPrice }} р.
          </div>
          <div class="modal__product-actions__button">
            <input type="submit" value="Добавить в корзину" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      totalProcent: 0,
      chosenColors: [],
      totalPrice: 0,
      just: null,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    procent: {
      type: Number,
      required: true,
    },
    saleId: {
      type: [Number, String]
    }
  },
  mounted() {
    this.chosenColors = [];
    this.totalPrice = 0;
    this.items.forEach((element) => {
      this.chosenColors.push(0);
    });
    this.checkPrice();
  },
  methods: {
    sendtoCart() {
      if (localStorage.cartItems) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        var newProducts = [];
        this.items.forEach((element, index) => {
          let colorExist = 0;
          cartItems.forEach((elementt, indexx) => {
            if (
              elementt.color === element.colors[this.chosenColors[index]].id
            ) {
              colorExist = indexx + 1;
            }
          });
          if (!colorExist) {
            newProducts.push({
              id: element.id,
              ammount: 1,
              color: element.colors[this.chosenColors[index]].id,
              colorName: element.colors[this.chosenColors[index]].name,
              procent: this.procent,
              saleId: this.saleId,
              price: element.price
            });
          } else {
            cartItems[colorExist - 1].ammount++;
          }
        });
        if (newProducts.length > 0) {
          localStorage.setItem(
            "cartItems",
            JSON.stringify([...cartItems, ...newProducts])
          );
        } else {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      } else {
        let cartItems = [];

        this.items.forEach((element, index) => {
          cartItems.push({
            id: element.id,
            ammount: 1,
            color: element.colors[this.chosenColors[index]].id,
            colorName: element.colors[this.chosenColors[index]].name,
            procent: this.procent,
            saleId: this.saleId,
              price: element.price
          });
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }

      this.$emit('closeModal')
      this.$router.push("/cart");
    },
    checkPrice() {
      this.totalPrice = 0;
      this.items.forEach((element, index) => {

        if (element.colors[this.chosenColors[index]].price) {
          const selectedColorPrice = Number(element.colors[this.chosenColors[index]].price)
          const selectedColorSaleSum = selectedColorPrice / 100 * this.procent
          const selectedColorResult = selectedColorPrice - selectedColorSaleSum

          this.totalPrice += Number(selectedColorResult)
        } else {
          const selectedPrice = Number(element.price);
          const selectedSalePrice = selectedPrice / 100 * this.procent;
          const selectedResult = selectedPrice - selectedSalePrice
          this.totalPrice += Number(selectedResult);
        }
      });
    },
    changeColor(itemIndex, colorIndex) {
      this.chosenColors[itemIndex] = colorIndex;
      this.checkPrice();
      this.$forceUpdate();
    },
  },
  computed: {
    result() {
      let price = 0;
    }
  }
});
</script>

<style lang="scss">
@media (max-width: 707px) {
  .modal__product-card {
    width: unset !important;
    margin: 0 auto;
  }
  .modal__product {
    flex-direction: block;
  }
}
.modal__product-actions__button {
  position: unset !important;
}
.modal__product-actions {
  justify-content: center;
}
.modal {
  &__product {
    max-width: 1120px;
    width: 100%;
    max-height: 700px;
    background: #fff;
    position: absolute;
    left: 50%;
    border-radius: 5px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    top: 50%;
    display: flex;
    overflow-y: auto;
    flex-flow: wrap;
    transform: translate(-50%, -50%);
    &-card {
      width: 49%;
      margin-bottom: 80px;
      &__image {
        max-width: 300px;
        width: 100%;
      }
      &__title {
        color: #000 !important;
        font-size: 20px;
        width: 90%;
        // font-weight: bold;
        text-decoration: none;
        padding-bottom: 5px;
        line-height: 24px;
        margin: auto;
        text-align: left;
        margin-bottom: 15px;
        align-items: center;
        // display: block;
        p {
          margin: 0 !important;
        }
      }
      &__title:hover {
        text-decoration: underline;
      }
      &__color {
        text-align: left;
        width: 90%;
        margin: auto;
        &-title {
          font-size: 15px;
          color: #000000;
          text-transform: none;
          font-weight: 300;
        }
        h4 {
          margin: 0;
          font-size: 15px;
          color: #000000;
          text-transform: none;
          font-weight: 300;
        }
        h3 {
          margin: 0 0 20px;
          font-size: 20px;
          font-weight: bold;
          color: #000000;
        }
      }
      &__colors {
        width: 90%;
        display: flex;
        // max-width: 371px;
        margin: auto;
        flex-flow: wrap;
        img {
          margin: 5px;
          cursor: pointer;
        }
      }
    }
    &-actions {
      width: 90%;
      max-height: 50px;
      height: 50px;
      position: relative;
      display: flex;
      margin: auto;
      margin-bottom: 25px;
      &__price {
        width: 100%;
        text-align: center;
        font-family: Lato-Bold, sans-serif;
        font-size: 25px;
        color: #000000;
      }
      &__button {
        position: absolute;
        right: 0;
        top: 0;
        input {
          width: 210px;
          height: 44px;
          border-radius: 100px;
          background: #f42f2f;
          border: none;
          color: white;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
          box-shadow: 0 1px 6px 0 rgba(213, 51, 51, 0.36),
            inset 0 -2px 0 0 rgba(159, 36, 36, 0.5);
        }
      }
    }
  }
}

.sale {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  h2 {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 85px;
    color: #000000;
  }
  &-page-info {
    max-width: 700px;
    width: 100%;
    display: flex;
    margin: auto;
    margin-top: 15px;
    justify-content: space-between;
    .price {
      font-family: Lato-Bold, sans-serif;
      font-size: 25px;
      color: #000000;
      margin: 0;
    }
    .oldprice {
      line-height: 15px;
      font-size: 20px;
      color: #000000;
      margin-right: 10px;
    }
    &__button {
      display: flex;
      align-items: flex-end;
      span {
        // width: 20%;
        margin: 0 auto;
        font-size: 15px;
        line-height: 1.53;
        text-align: center;
        color: #de2828;
        background: none;
        border: none;
        box-shadow: none;
        text-decoration: underline;
        padding: 0;
        display: inline-block;
        text-shadow: none;
        margin-bottom: 5px;
        float: right;
        margin-right: 16px;
      }
    }
  }

  .PB_image {
    max-width: 700px;
    margin: auto;
    img {
      width: 100%;
    }
  }
}
</style>
