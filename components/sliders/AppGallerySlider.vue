<template>
  <div>
    <div class="sixth_block delay_galleria" v-if="gallery.length > 1">
      <div class="cantra_content">
        <h2 class="h2-text">Фотогалерея</h2>
        <div id="galleria">
          <swiper class="swiper" :options="swiperOptions" ref="swiperTop">
            <swiper-slide
              v-for="(item, index) in gallery"
              :key="index"
              class="swiper-slide sliding-swiper"
            >
              <img :src="item" alt="" class="swiper-img" />
            </swiper-slide>
          </swiper>
          <div class="gallery-thumbs__slider">
            <button class="swiper-button-prev delay_galleria-prev"></button>
            <swiper
              class="swiper gallery-thumbs new-thumbs"
              :options="swiperOptionThumbs"
              ref="swiperThumbs"
            >
              <swiper-slide v-for="(item, index) in gallery" :key="index">
                <img
                  :src="item"
                  class="swiper-img"
                />
              </swiper-slide>
            </swiper>
            <button class="swiper-button-next delay_galleria-next"></button>
          </div>

          <div class="gallery-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    gallery: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      swiperOptionThumbs: {
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
      selectImageIndex: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      }, 1000);
    });
  },
};
</script>

