<template>
  <div class="quest__wrapper">
    <div class="quest__conatiner">
      <div class="quest__header">
        <img
          id="quest__headerimage"
          class="quest__headerimage"
          :src="quest.headerimage"
          alt=""
        />
        <h1 id="quest__headertitle" class="quest__headertitle">
          {{ quest.headertitle }}
        </h1>
        <div id="quest__headercontent" class="quest__headercontent">
          {{ quest.headercontent }}
        </div>
      </div>
      <div class="quest_benefits">
        <div v-html="quest.middleleftcontent" class="quest_benef"></div>
        <div>
          <img :src="quest.middleimage" alt="" />
        </div>
        <div v-html="quest.middlerightcontent" class="quest_flaw"></div>
      </div>
      <reviews title="ЗВЕЗДЫ ВЫБИРАЮТ CANTRA" class="mt0" />
      <div class="share sert-title">
        <br />
        <h2>СЕРТИФИКАТЫ</h2>
      </div>
      <div class="cantra_content">
        <vue-picture-swipe
          v-if="swiperImages && swiperImages.length > 0"
          :items="swiperImages"
          class="documentsImages"
        />
      </div>

      <!-- <div class="modal" v-if="isModal" @click="isModal = !isModal">
        <div class="bigswiper">
          <div class="swiper-button-prev"></div>
          <swiper
            class="swiper"
            @init="console.log(swiper)"
            :options="swiperOptions"
          >
            >
            <swiper-slide
              v-for="(image, index) in quest.sertificat"
              :key="index"
            >
              <img :src="image" class="slide-img" />
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
        </div>
      </div> -->
      <div class="third_block new-third">
        <div class="cantra_content">
          <div class="share sert-title">
            <h2>ПОДОБРАТЬ НАКИДКИ</h2>
          </div>
          <div class="row mob_products index__products">
            <product-card
              v-for="product in products"
              :key="product.id"
              :price="product.price"
              :image="product.image"
              :type="product.type"
              :id="product.id"
              :name="product.name"
              :brand="product.brand"
              :color="product.colors.length"
              :slug="product.slug"
            />
          </div>

          <div class="all_prod_quest_btn">
            <nuxt-link to="/catalog">Посмотреть полный ассортимент</nuxt-link>
          </div>

          <!-- <nuxt-link to="/catalog" class="is-mobile button"
            >Посмотреть полный ассортимент</nuxt-link
          > -->
        </div>
      </div>
      <!-- <AppGallerySlider :gallery="gallery"/> -->

      <div class="sixth_block delay_galleria" v-if="gallery.length > 1">
        <div class="cantra_content">
          <h2 class="h2-text">Фотогалерея</h2>
          <div id="galleria">
            <div class="gall-main">
              <swiper class="swiper" :options="galleryOptions" ref="swiperTop3">
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
                ref="swiperThumbs3"
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductCard from "~/components/product-card.vue";
import reviews from ".././components/layout/reviews.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    reviews,
    ProductCard,
    Swiper, SwiperSlide
  },
  setup() {
    return {
      // modules: [Pagination],
    };
  },
  data() {
    return {
      products: "",
      images: "",
      isModal: false,
      initial: 1,
      swiperImages: [],
      gallery: [],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 50,
        initialSlide: this.initial,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      galleryOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".gall-next",
          prevEl: ".gall-prev",
        },
      },
      galleryOptionsThumbs: {
        spaceBetween: 30,
        slidesPerView: 3,
        slideToClickedSlide: true,
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
      quest: "",
    };
  },
  methods: {
    handleSlideTo() {
      this.isModal = !this.isModal;
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const swiperTop = this.$refs.swiperTop3.$swiper
        const swiperThumbs = this.$refs.swiperThumbs3.$swiper

        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      }, 5000);
    });

    axios.get("https://project.a-lux.dev/api/quest").then((res) => {
      this.products = res.data.items;
      this.quest = res.data;
      this.quest.sertificat.forEach((element) => {
        this.swiperImages.push({
          src: element,
          thumbnail: element,
          w: 600,
          h: 800,
        });
      });
    });
    axios.get("https://project.a-lux.dev/api/index").then((res) => {
      this.gallery = res.data.gallery[0].image;
    });
    axios
      .post("https://project.a-lux.dev/api/items", {
        id: "",
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        // this.products = res.data;
      });
    axios.get("https://project.a-lux.dev/api/index").then((res) => {
      this.product = res.data;
      this.mainTitle = res.data.main_title;
      this.personal = res.data.create;
      this.gallery = res.data.gallery[0].image;
      this.sliderData = res.data.slider;
    });
  },
  computed: {
    swiperTop() {
      return this.$refs.swiperTop.$swiper;
    },

    swiperThumbs() {
      return this.$refs.swiperThumbs.$swiper;
    },
  },
};
</script>
<style lang="scss" scoped>
.all_prod_quest_btn a {
  color: #ffffff;
  &:hover {
    color: #ffffff !important;
  }
}
.all_prod_quest_btn {
  width: 377px;
  height: 44px;
  border-radius: 6px;
  background-image: radial-gradient(circle at 50% 0, #ff482e, #ed1d1d);
  font-family: Lato-Bold, sans-serif;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 57px;
  text-align: center;
  padding-top: 12px;
}
.documentsImages {
  display: flex !important;
  width: 100% !important;
  max-width: 100%;
}

.documentsImages .my-gallery {
  display: flex;
  align-items: flex-start;
  width: 100%;

  figure {
    max-width: 250px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.share {
  h2 {
    margin-top: 60px;
    margin-bottom: 40px;
    color: #000000;
    font-weight: normal;
    line-height: 27px;
    font-size: 18px;
    text-transform: uppercase;
    border-bottom: 1px solid #000000;
    font-family: Lato, sans-serif;
    text-align: unset;
  }
}
.cantra_content img {
  width: 100% !important;
  max-width: 539px !important;
  display: unset !important;
}
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
}
.cantra_content {
  // display: flex;
  // justify-content: space-around;
}
.cantra_content img {
  width: 100%;
  max-width: 199px;
  display: flex;
}
@media (max-width: 1250px) {
  .quest__middle-image img {
    width: 100%;
    max-width: 320px;
  }

  #galleria {
    height: 200px;
  }
  .swiper-img {
    object-fit: cover "lmfs" posnd;
  }
}
.quest__body div {
  /* display: inline-block; */
}
.quest__body {
  justify-content: center;
  /* display: flex; */
  margin-top: 113px;
}
@media (max-width: 500px) {
  #quest__conatiner {
    max-width: 500px !important;
  }
  //#quest__headertitle {
  //  font-size: 4.6vw !important;
  //  padding: 0 !important;
  //  top: 55px !important;
  //  left: 2% !important;
  //  font-weight: 900 !important;
  //  width: 300px !important;
  //  line-height: 5vh !important;
  //}
  //#quest__headercontent {
  //  left: 6% !important;
  //  padding: 0 !important;
  //  top: 20vh !important;
  //  font-size: 4vw !important;
  //  width: 91vw;
  //  background: none !important;
  //}
}
@media (max-width: 800px) {
  .all_prod_quest_btn {
    width: 100%;
    font-size: 16px;
  }
  .quest__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px !important;
    flex-direction: column;
  }

  .quest__headerimage {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
  }

  .quest__conatiner {
    max-width: 500px !important;
  }
  .quest__headertitle {
    font-size: 4vw !important;
    top: 0 !important;
    left: 0 !important;
    text-align: center !important;
    font-weight: 900 !important;
    width: 80% !important;
    line-height: 30px !important;
    padding: 0px !important;
    margin: 0px !important;
    position: relative !important;
  }
  .quest__headercontent {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    font-size: 15px !important;
    background: none !important;
    width: 80% !important;
    height: auto !important;
    padding: 0px !important;
    margin: 0px !important;
    text-align: center !important;
  }
  .quest_benefits {
    width: 100%;
    margin: 0 auto;
    display: flex;
    margin-top: 60px;
    justify-content: center;
  }
  .quest_flaw {
    width: auto;
  }
  .quest_benefits > div:nth-child(2) {
    position: absolute;
    left: 0;
    margin: 0;
    width: 100%;
    text-align: center;
  }
}
.quest__middle-leftContent {
  margin-top: 22px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 25px;
}
.quest__middle-image {
}
.quest__middle-rightContent {
  margin-top: 22px;
  font-size: 16px;
  margin-left: 25px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 25px;
}
@media (max-width: 1200px) {
  #quest__headertitle {
    font-size: 28px;
    top: -17%;
    left: 41%;
    width: 268px;
  }
  #quest__headercontent {
    left: 54%;
    top: 49%;
  }
  .quest__conatiner {
    max-width: 800px;
  }
}
@media (min-width: 1201px) {
  .quest__conatiner {
    max-width: 1220px;
  }
}
.quest__conatiner {
  width: 100%;
  margin: 0 auto;
}
.quest__headerimage {
  width: 100%;
}
.quest__header {
  position: relative;
}
.quest__headertitle {
  font-size: 48px;
  line-height: 50px;
  text-transform: uppercase;
  text-align: left;
  font-family: Lato-Bold, sans-serif;
  color: #ffffff;
  width: 415px;
  position: absolute;
  margin: 0 auto;
  padding-top: 87px;
  top: 0%;
  left: 30%;
}
.quest__headercontent {
  font-size: 18px;
  text-align: left;
  left: 48%;
  color: #ffffff;
  width: 336px;
  top: 48%;
  height: 118px;
  position: absolute;
  line-height: 23px;
  background: url(https://cantra.ru/images/framebord.png) no-repeat center
    center;
  padding-left: 30px;
  padding-top: 25px;
}

@media screen and (max-width: 550px) {
  .quest__header {
    height: 290px !important;
  }
  .quest__headertitle {
    font-size: 30px !important;
    font-family: Lato-Bold, sans-serif;
    font-weight: 700;
    line-height: 1.1;
  }

  .quest__conatiner {
    max-width: 310px !important;
  }

  .quest__headercontent {
    font-size: 20px !important;
    line-height: 24px;
    margin-top: 30px !important;
    width: 100% !important;
  }
}
</style>
