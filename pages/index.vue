<template>
  <div class="common-home">
    {{test}}
    <div class="first__block" v-if="sliderData.length > 0">
      <div class="cantra_content cantra__content">
        <div class="universal__square">
          <div class="universal__square-title">{{ mainTitle.title }}</div>
          <div class="universal__square-content">{{ mainTitle.content }}</div>
        </div>
        <div class="first__swiper">
          <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            :options="miniSwiper"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: true,
            }"
          >
            <swiper-slide
              style="height: 100%"
              v-for="slide in sliderData"
              :key="slide.id"
              draggable="false"
            >
              <!-- <div  draggable="false" class="adaptive__img"> -->
              <a :href="slide.url">
                <img
                  style="width: 100%; height: 100%"
                  class="slider__image"
                  :src="slide.image"
                  draggable="false"
                />
              </a>
              <!-- </div> -->
            </swiper-slide>
          </swiper>
          <!-- <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            :options="swiperOptions">

            <swiper-slide v-for="(item,index) in gallery" :key="index" class="swiper-slide sliding-swiper">
               <img :src="item" alt=""  class="swiper-img"/>

            </swiper-slide>
          </swiper> -->
        </div>
      </div>
    </div>
    <div class="second_block">
      <div class="cantra__content">
        <Input />
      </div>
    </div>
    <div class="third_block">
      <div class="cantra_content">
        <h2 class="h2-text">Накидки из алькантары и меха</h2>
        <div class="row mob_products index__products">
          <!-- <div v-for="(el, index) in products" :key="el.index">
      {{index}}
    </div> -->
          <product-card
            v-for="(product, index) in products"
            :key="index"
            :price="product.price"
            :discount="product.discount"
            :image="product.image"
            :type="product.type"
            :id="product.id"
            :name="product.name"
            :brand="product.brand"
            :color="product.colors.length"
            :slug="product.slug"
          />
        </div>

        <div class="my_pagination">
          <div v-for="(page, index) in pages" :key="page.index">
            <span @click="pagination(page), (activePage = index)" :class="{ active_pag: index === activePage }" class="choosed_pag">{{ page }}</span>
          </div>
          <!-- &nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;. -->
        </div>
      </div>
    </div>
    <div class="fourth_and_half_block">
      <div class="cantra_content">
        <a class="cantra_sale_block" href="/sale/">
          <div class="sale_label">АКЦИЯ</div>
          <div>
            <img
              class="PB_options_image double_trouble"
              src="@/assets/img/doubletrouble.jpg"
            />
            <div class="pb_price">
              <div class="two_products">
                <span>Два полных комплекта<br /></span>
                <div>со скидкой 10%</div>
              </div>
              <strike class="sale_price">13960</strike>
              <strong
                ><span class="PB_bundle_total_price">12564 руб. </span></strong
              >
              <div class="two_products_order_btn">Заказать</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="cantra_content five_reasons_heading">
      <h2 class="h2-text">
        Мы делаем качественные, стильные накидки ручной работы
      </h2>
      <h3>5 причин выбрать CANTRA</h3>
    </div>
    <div class="fifth_block fifth_block_home_page">
      <div class="cantra_content">
        <accordion class="onDesktop" />
        <div class="accordion onMobile">
          <img
            src="@/assets/img/bigchaiirs.png"
            style="max-width: 700px; width: 100%"
          />
          <div class="accordion__content">
            <div>
              <div
                class="accordion__header"
                :class="{ 'is-active': accordionOpen === 1 }"
                @click="openSlide(1)"
              >
                <h3 class="accordion__header-title">Защита от износа</h3>
                <div class="accordion__header-plus">+</div>
              </div>
              <div class="accordion__body" :class="{ open: accordionOpen === 1 }">
                <p class="accordion__body-content">
                  Накидки защищают салон от потертостей и износа. Накидки можно
                  постирать в режиме деликатной стирки. Они не потеряют форму и не
                  выцветут даже после 30 000 циклов использования.
                </p>
              </div>
            </div>

            <div>
              <div
                class="accordion__header"
                :class="{ 'is-active': accordionOpen === 2 }"
                @click="openSlide(2)"
              >
                <h3 class="accordion__header-title">Защита от окрашивания</h3>
                <div class="accordion__header-plus">+</div>
              </div>
              <div class="accordion__body" :class="{ open: accordionOpen === 2 }">
                <p class="accordion__body-content">
                  Обезопасьте кожу своего авто от окрашивания джинсами и другими
                  материалами.
                </p>
              </div>
            </div>

            <div>
              <div
                class="accordion__header"
                :class="{ 'is-active': accordionOpen === 3 }"
                @click="openSlide(3)"
              >
                <h3 class="accordion__header-title">Лёгкая установка</h3>
                <div class="accordion__header-plus">+</div>
              </div>
              <div class="accordion__body" :class="{ open: accordionOpen === 3 }">
                <p class="accordion__body-content">
                  <iframe
                    style="width: 100%; height: 100%"
                    class="iframe"
                    src="https://www.youtube.com/embed/6uWLxa7ihnE"
                  >
                  </iframe>
                </p>
              </div>
            </div>

            <div>
              <div
                class="accordion__header"
                :class="{ 'is-active': accordionOpen === 4 }"
                @click="openSlide(4)"
              >
                <h3 class="accordion__header-title">Ручная работа</h3>
                <div class="accordion__header-plus">+</div>
              </div>
              <div class="accordion__body" :class="{ open: accordionOpen === 4 }">
                <p class="accordion__body-content">
                  CANTRA — автомобильные накидки ручной работы. Форма накидок
                  вырезается вручную, каждый ромбик, кант и детали крепления — все
                  прошивается швеями на профессиональном оборудовании. Ручное
                  изготовление легко отличить хотя бы присмотревшись к ромбам:
                  если их строчит швея, они идут ровные и четко смыкаются друг с
                  другом в одной точке. Швеи прошивают все слои накидки насквозь,
                  поэтому даже при постоянном использовании форма накидок CANTRA
                  не изменится.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <Individual></Individual>
    <!-- <AppGallerySlider :gallery="gallery"/> -->

    <div class="sixth_block delay_galleria" v-if="gallery.length > 1">
      <div class="cantra_content">
        <h2 class="h2-text">Фотогалерея</h2>
        <div id="galleria">
          <div class="gall-main">
            <swiper class="swiper" :options="galleryOptions" ref="gallerySlider">
              <swiper-slide
                v-for="(item, index) in gallery"
                :key="index"
                class="swiper-slide sliding-swiper"
              >
                <img :src="item" alt="" class="swiper-img" />
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev gall-btn gall-prev"></div>
            <div class="swiper-button-next gall-btn gall-next"></div>
          </div>
          <div class="gallery-thumbs__slider">
            <button class="swiper-button-prev delay_galleria-prev"></button>
            <swiper
              class="swiper gallery-thumbs new-thumbs"
              :options="galleryOptionsThumbs"
              ref="gallerySliderThumbs"
            >
              <swiper-slide v-for="(item, index) in gallery" :key="index">
                <img :src="item" class="swiper-img" />
              </swiper-slide>
            </swiper>
            <button class="swiper-button-next delay_galleria-next"></button>
          </div>

          <div class="gallery-pagination"></div>
        </div>
      </div>
    </div>

    <div class="seventh_block">
      <div class="cantra_content">
        <div class="ninth_block_content">
          <div class="top_product_info">
            <div class="h2-text">Отзывы клиентов</div>

            <h3>
              Мы любим и уважаем наших клиентов. Каждый ваш отзыв очень важен
              для нас!<br />
              Вы помогаете нам понять, что мы не зря делаем свое дело!
            </h3>
          </div>
          <Reviews :show-title="false" />
        </div>
      </div>
    </div>
    <div class="eight_block">
      <div class="cantra_content">
        <div class="ask_danger_success" v-if="success">
          <div class="text_success_green">Спасибо, ваша заявка принята</div>
          <div class="text_success_recall">
            В ближайшее время с вами свяжется менеджер и уточнит детали заказа.
          </div>
          <div class="button_ok">OK</div>
        </div>
        <Input
          text="Оставьте заявку, мы свяжемся с Вами сами <br /> Менеджер свяжется с Вами и уточнит детали заказа"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Input from "~/components/input.vue";
import ProductCard from "~/components/product-card.vue";
import axios from "axios";
import Reviews from "~/components/layout/reviews.vue";
import accordion from "~/components/accordionhorizontal.vue";
import { TheMask } from "vue-the-mask";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Individual from "~/components/individual.vue";

export default Vue.extend({
  head() {
    return {
      title: 'Накидки на автомобильные сиденья, автонакидки для автомобилей от производителя Cantra™',
      meta: [
        { hid: 'description', name: 'description', content: 'Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.'},
        { hid: 'keywords', name: 'keywords', content: 'накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA' }
      ]
    }
  },
  components: {
    Input,
    accordion,
    ProductCard,
    Reviews,
    TheMask,
    Swiper,
    SwiperSlide,
    Individual
    // AppGallerySlider: () => import("@/components/sliders/AppGallerySlider.vue"),
  },
  layout: "default",
  data() {
    return {
      test: '',
      activePage: 0,
      pages: "",
      currentPage: 1,
      customActive: 1,
      phone: "",
      name: "",
      product: "",
      mainTitle: "",
      products: "",
      wholePrice: 0,
      accordionOpen: 0,
      gallery: [],
      colors: "",
      message: "",
      personal: "",
      whatsappNumber: "",
      priceActive: 0,
      success: false,
      src: "@/assets/img/bigchaiirs.png",
      sliderData: "",
      activeSuede: "",
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      galleryOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,
        navigation: {
          nextEl: ".gall-next",
          prevEl: ".gall-prev",
        },
      },
      galleryOptionsThumbs: {
        spaceBetween: 30,
        slidesPerView: 3,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 5,
        navigation: {
          nextEl: ".delay_galleria-next",
          prevEl: ".delay_galleria-prev",
        },
        breakpoints: {
          600: {
            spaceBetween: 30,
          },
          300: {
            spaceBetween: 10,
          },
        },
      },
    };
  },
  computed: {
    swiperOptions() {
      return {
        slidesPerView: 1,
        // centeredSlides: true,
        spaceBetween: 10,
      };
    },
    miniSwiper() {
      return {
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 10,
      };
    },

    swiperTop() {
      return this.$refs.swiperTop.$swiper;
    },

    swiperThumbs() {
      return this.$refs.swiperThumbs.$swiper;
    },
  },

  watch: {
    customActive() {
      if (Number(this.customActive) === 1) {
        this.wholePrice = Number(this.personal.type[this.priceActive].price);
        this.isLoaded = false
      } else {
        this.wholePrice = this.personal.type[this.priceActive].price - 2000;
        this.isLoaded = false
      }
    },
    priceActive() {
      if (Number(this.customActive) === 1) {
        this.wholePrice = Number(this.personal.type[this.priceActive].price);
      } else {
        this.wholePrice = this.personal.type[this.priceActive].price - 2000;
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const swiperTop = this.$refs.gallerySlider.$swiper;
        const swiperThumbs = this.$refs.gallerySliderThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      }, 2000);
    });

    axios.get("https://project.a-lux.dev/api/title").then((res) => {
      this.whatsappNumber = res.data.whatsapp;
    });
    axios
      .post(`https://project.a-lux.dev/api/items?page=${1}`, {
        id: "",
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        // this.currentPage = res.data.current_page;
        // this.pages = res.data.last_page;
      });
    axios.get(`https://project.a-lux.dev/api/index?page=${1}`).then((res) => {
      this.product = res.data;
      this.mainTitle = res.data.main_title;
      this.personal = res.data.create;
      this.gallery = res.data.gallery[0].image;
      this.sliderData = res.data.slider;
      this.products = res.data.items.data;
        this.currentPage = res.data.items.current_page;
        this.pages = res.data.items.last_page;
    });
  },
  methods: {
    openSlide(pos) {
      if (this.accordionOpen == pos) {
        this.accordionOpen = 0;
      } else {
        this.accordionOpen = pos;
      }
    },
    func() {
      this.suedeActive = 0;
    },
    pagination(page) {
      this.currentPage = page;
      axios
        .get(`https://project.a-lux.dev/api/index?page=${page}`, {
          id: "",
          order: "",
          type: "",
          season: "",
        })
        .then((res) => {
          this.currentPage = res.data.items.current_page;
          this.pages = res.data.items.last_page;
          this.products = res.data.items.data;
        });
    },
    sentData() {
      this.$axios.post("https://project.a-lux.dev/api/application", {
        name: this.name,
        phone: this.phone,
      });
      this.success = true;
    },
  },
});
</script>
<style lang="scss">
  .relative {
    position: relative;
  }
  .construct-images {
    max-width: 552px;
    width: 100%;
    position: relative;
  }
  .your_logo {
    position: absolute;
    width: 160px !important;
    height: 123px !important;
    top: 180px;
    left: 199px;
    right: auto !important;
  }

@media (max-width: 700px) {
  .your_logo {
    width: 130px !important;
    height: 100px !important;
    top: 100px;
    left: 85px;
  }
  .personal__items {
    flex-flow: column !important;
    flex-direction: column-reverse !important;
  }
  .personal {
    display: flex !important;
    flex-direction: column-reverse !important;
  }
}
.eight_block .wide-form {
  flex-wrap: wrap;
}
.eight_block .wide-form .h3-text {
  max-width: 450px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.accordion__close {
  position: relative;
  color: black;
  bottom: -1px;
  /* width: 50px; */
  padding: 0 6px;
  display: inline;
  font-size: 25px;
  border-radius: 50%;
  border: 1px solid black;
  left: 227px;
}
@media (max-width: 707px) {
  .onMobile {
    display: block !important;
  }
}
.layer4 img {
  width: 100%;
  max-width: 510px;
}
.whatsapp-icon {
  max-width: 50px;
  position: fixed;
  right: 54px;
  bottom: 22px;
  width: 100%;
  z-index: 99999999999999;
}
.active_pag {
  color: red !important;
}
.my_pagination {
  display: flex;
  justify-content: center;
}
span.choosed_pag {
  cursor: pointer;
}
.common-home {
  overflow: hidden;
}
.cantra_content {
  max-width: 1200px;
}
.swiper-slide {
  text-align: center;
}
.form-control {
  font-size: 12px !important;
}
.accordion {
  &__content {
    width: 90%;
    margin: auto;
  }
  &__header {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
  &__body {
    max-height: 0px;
    transition: 0.5s ease-in all;
    overflow: hidden;
    &-content {
      font-size: 15px;
      // width: 80%;
      // margin: auto;
    }
  }
}
.open {
  // display: flex;
  max-height: 500px;
  height: 100%;
  transition: 0.5s ease-in all;
}

.material_type {
  max-width: 196px;
  width: 100%;
  margin-bottom: 20px;
  height: 39px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: #000000;
  opacity: 0.5;
  display: block;
  padding-left: 15px;
}
.personal {
  width: 100%;
  &__items {
    display: flex;
    justify-content: space-between;
    &-right {
      position: relative;
      img {
        position: absolute;
        width: 500px;
        height: 400px;
        right: 0;
      }
    }
  }
  &__submit {
    display: flex;
    max-width: 450px;
    margin-top: 10px;
    justify-content: space-between;
    position: relative;
    &-button {
      width: 226px;
      height: 39px;
      border-radius: 0;
      background: #db2c29;
      font-weight: normal;
      line-height: 24px;
      font-size: 16px;
      color: white;
      text-shadow: none;
      outline: none;
      border: none;

      &.success {
        background: radial-gradient(circle at 50% 0px, rgb(95, 194, 44), rgb(96, 154, 32));
        box-shadow: rgb(146 213 51 / 36%) 0 1px 6px 0, rgb(56 107 26 / 50%) 0 -2px 0 0;
      }
    }
    &-checkbox {
      display: flex;
      margin: auto;
      align-items: center;
    }

    .personal--success {
      position: absolute;
      left: -30px;
      top: calc(100% + 10px);
      width: 290px;
      height: 92px;
      background-color: #ffffff;
      box-shadow: 0 1px 9px 0 rgb(0 0 0 / 17%);
      padding-top: 24px;
      text-align: center;
      font-size: 17px;
      color: #2f75db;
      font-weight: normal;

      &::after {
        content: "";
        border: 15px solid transparent;
        border-bottom: 15px solid #FFF;
        position: absolute;
        left: 50%;
        top: -30px;
        transform: translateX(-50%);
      }

      & > div {
        text-decoration: underline;
        margin: 12px auto;
        cursor: pointer;
      }
    }
  }

  &__ps {
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #db2c29;
    display: inline-block;
    vertical-align: top;
    text-align: justify;
    margin-bottom: 5px;
  }
  &__inputs {
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    &-small {
      width: 196px;
      // width: 100%;
      height: 39px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      font-weight: normal;
      line-height: 27px;
      font-size: 16px;
      color: #000000;
      opacity: 0.9;
      display: block;
      margin-bottom: 20px;
      padding-left: 15px;
      outline: none;
    }
    &-big {
      width: 447px;
      // width: 100%;
      height: 115px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      border-radius: 0;
      border: none;
      line-height: 27px;
      padding-left: 15px;
      font-size: 16px;
      color: #000000;
      background-color: #ffffff;
      display: inline-block;
      margin-bottom: 15px;
      padding-top: 10px;
      outline: none;
    }
  }
  &__size,
  &__logo {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 20px;
    &-withFile {
      margin-left: 90px;
      height: 100%;
      display: flex;
      flex-flow: column;
      input {
        margin-top: 20px;
      }

      .file {
        margin-top: 5px;
        cursor: pointer;
        input {
          position: absolute;
          width: 1px;
          height: 1px;
          clip: rect(0 0 0 0);
          overflow: hidden;
        }

        &-text {
          margin-left: 36px;
          color: #6e91d6;
          line-height: 27px;
          font-size: 16px;
          text-decoration-line: underline;
        }
      }
    }
    &-checkbox {
      margin-right: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      cursor: pointer;
      input {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);

        &:checked + label::before {
          content: "•";
          color: red;
          border: 1px solid red;
        }
      }

      label {
        display: flex;
        align-items: center;
        margin: auto;
        font-size: 16px;
        line-height: 27px;
        color: #000000;
        width: 100%;
        height: 22px;
        border: none;
        margin: 0;
        background: transparent;
        &::before {
          display: block;
          margin-right: 10px;
          content: "";
          width: 26px;
          height: 26px;
          border-radius: 50%;
          flex-shrink: 0;
          border: 1px solid rgba(0, 0, 0, 0.5);
          font-size: 42px;
          line-height: 19px;
          text-align: center;
        }
      }
    }
  }
  &__colors {
    display: flex;
    max-width: 450px;
    justify-content: space-between;
    flex-flow: wrap;
  }
}

.index__products {
  display: flex !important;
  flex-flow: wrap !important;
}
::v-deep .agile__list {
  border-radius: 8px;
}
.first__block {
  margin-top: 20px;
  margin-bottom: 50px !important;
}
@media (max-width: 707px) {
  .cantra__content {
    justify-content: unset !important;
  }
}
.third_block .product-thumb.transition {
  height: auto !important;
}
@media (max-width: 707px) {
  .third_block .product-thumb.transition {
    // height: 269px !important;
  }

  .productName {
    height: 30px;
    overflow: hidden;
    padding-right: 5px;
  }
}
.cantra__content {
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.cantra__content > div {
  width: 100%;
}

.universal__square {
  width: 400px;
  height: 320px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  vertical-align: top;
}
.universal__square-title {
  line-height: 27px;
  max-width: 305px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  /* margin-top: 105px; */
}
.universal__square-content {
  line-height: 20px;
  max-width: 290px;
  font-size: 15px;
  text-align: center;
  color: #000000;
  margin-top: 10px;
}
.first__swiper {
  max-width: 750px;
  // width: 100%;
}
.slider__wrapper {
  position: relative;
  margin-bottom: 24px;
  display: flex;
}
.sliding {
  width: 100%;
}
.slider__image {
}
.hooper ul {
  display: flex !important;
  overflow: hidden;
}

.fsbanner {
  display: flex;
  width: 90%;
  margin: auto;
  background: url("@/assets/img/bigchaiirs.png");
  height: 100%;
}
.slide_card {
  width: 100%;
}

.galleria_container {
  width: 90%;
  margin: auto;
  max-height: 600px;
}
.galleria-image {
  max-width: 1000px;
  margin: auto;
}
.galleria-images img {
  height: 100%;
  width: 100%;
}
.sliding-swiper {
  margin: auto;
}
.swiper-img {
  /* max-height: 698px; */
  height: 100%;
  max-width: 539px;
  width: 100%;
}
.form-control {
  background-color: transparent;
  max-width: 264px;
  width: 100%;
  height: 39px;
  font-size: 16px;
  line-height: 27px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: none;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  color: #fff;
  opacity: 0.75 !important;
  background: black !important;
}
.swiper-pagination-bullet {
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #000;
  transform: scale(1) !important;
  opacity: 1;
  margin: 0 5px;
  background: rgba(0, 0, 0, 0.2);
  width: 20px !important;
  height: 20px !important;
}
.onDesktop {
  display: flex;
}
.onMobile {
  display: none;
}
.gallery-pagination {
  position: unset !important;
  margin-bottom: 3%;
  margin: auto;
  width: 100%;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  display: none !important;
}
.swiper-pagination-bullet-active-main,
.swiper-pagination-bullet-active-prev,
.swiper-pagination-bullet-active-next {
  display: none !important;
  transform: scale(1) !important;
}
@media (max-width: 1100px) {
  .first__swiper .swiper-container {
    height: 100%;
    width: 49% !important;
    display: flex;
  }
}
@media (max-width: 707px) {
  .top-line__items {
    justify-content: right;
  }
  .first__swiper .swiper-container {
    width: 100% !important;
  }
}
.top-line__items {
  max-width: 88vw !important;
}
.swiper-container {
  height: 100%;
}
.swiper-wrapper {
  position: relative;
  // top: 80px;
  height: 100%;
}
.personal__price img {
  width: 100%;
}

.fourth_block {
  width: auto;
}

@media (max-width: 1100px) {
  .personal__price img {
    max-width: 300px !important;
  }

  .cantra__content {
    width: 700px;
  }
  .universal__square {
    max-width: 250px;
    max-height: 200px;
  }
  .adaptive__img {
    max-height: 200px;
    img {
      height: 100%;
    }
  }
  .fourth_block {
    height: auto;
  }

  .personal__items {
    flex-flow: column;
    &-left {
      margin: auto;
    }
    &-right {
      height: 400px;
      img {
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
  .ninth_block_content {
    width: 90%;
    margin: auto;
  }
  .second_block .h2-text {
    margin-left: 20px;
  }
  .swiper-container {
    height: 100%;
    width: 90%;
    display: flex;
  }
  .galleria {
    width: 90%;
  }
  .onDesktop {
    // display: none !important;
  }
  .accordion__content {
    padding: 20px 0 0 0;

    & > div {
      &:last-child {
        .accordion__header {
          border-bottom: 0;
        }
      }
    }
  }
  .personal__items-left {
    width: 100%;
  }
  .personal__logo {
    width: 100%;
  }
  .personal__size-checkbox,
  .personal__logo-checkbox {
    flex-flow: column;
    align-items: center;
    height: 100%;
    width: 49%;
    margin: 0;
    text-align: center;
    input {
      margin: 0 !important;
    }
    label {
      max-width: unset;
      height: 100%;
    }
  }
  .personal__logo-withFile {
    width: 50%;
  }
  .personal__logo-withFile .personal__logo-checkbox {
    width: 100%;
  }
  .material_type {
    max-width: unset;
  }
  .personal__inputs-small {
    max-width: 130px;
  }
  .personal__submit {
    flex-flow: column;
    input {
      margin: auto;
    }
  }
  .personal__price {
    text-align: center;
  }
  .personal__items-right {
    height: 500px;
    // display: inline-block;
  }
  // .first__block{
  //   max-height: unset;
  // }
  // .first__block .cantra__content{
  //   flex-flow: column;
  //   align-items: center;
  // }
  // .universal__square{
  //   max-width: 700px;
  //   width: 100%;
  //   margin-bottom: 20px;
  // }
}
@media (max-width: 707px) {
  .onMobile {
    display: block !important;
  }

  .onDesktop {
    display: none !important;
  }
}

@media (max-width: 700px) {
  .swiper-slide {
    height: 100% !important;
    margin-right: 10px;
  }
  .first__block .cantra__content {
    flex-flow: column;
    margin: auto;
    max-width: 300px;
    align-items: center;
  }

  .first__swiper {
    // max-width: 200px;
    // display: none;
  }
  .adaptive__img {
    img {
      height: 100%;
      width: 65%;
    }
    max-height: 100px;
  }
  .universal__square {
    width: 100%;
    margin: auto;
    max-width: unset;
  }
  .mobile .personal__items-right {
    display: flex !important;
  }
  .personal__items-right {
    height: 350px;
    img {
      max-width: 300px;
      max-height: 300px;
    }
  }
  .insta_slider_block div img {
    width: 100%;
    margin-top: 80px;
    height: 100%;
  }
}


.new-catalog-items .product-thumb .image .copy-logo, .product_list .copy-logo {
  width: 100% !important;
  // height: 100px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: auto !important;
}

</style>
