<template>
  <div class="reviewsBiz__biz">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="item in reviewsBiz"
        :key="item.id"
        class="swiper-slide review-slide"
      >
        <div class="review-biz__item">
          <h2 class="review-biz__header">
            {{ item.title }}
          </h2>
          <img src="https://cantra.ru/image/my_images/quotes.png" alt="" />
          <div
            :class="{ insta_feedback_open: feedopen === item.id }"
            class="insta_feedback review-biz__content"
          >
            <!-- v-html="item.content" -->
            {{ item.content }}
            <div class="insta_feedback_toggle"></div>
          </div>
        </div>
        <a
          class="insta_toggle-btn"
          @click.prevent="feedopen = item.id"
          v-if="feedopen != item.id"
          >Раскрыть</a
        >
        <a
          class="insta_toggle-btn"
          @click.prevent="feedopen = 0"
          v-if="feedopen === item.id"
          >Скрыть</a
        >
        <p class="review__line"></p>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination new-pag"></div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default Vue.extend({
  name: "reviewsBiz",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      feedopen: 0,
      reviewsBiz: [],
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        initialSlide: 5,
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: "true",
        },
      },
    };
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/partner").then((res) => {
      this.reviewsBiz = res.data.review_biz;
      this.swiperOption.initialSlide = res.data.review_biz.length
    });
  },
});
</script>
<style scoped>
.swiper-slide-active {
  position: relative;
}
.swiper-slide-active::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  height: 60%;
  width: 1px;
  background: #000;
  transform: translateY(-50%);
}
.review__line {
  border-right: 1px solid black;
}
.insta_feedback_toggle {
  height: 252px;
}
.insta_feedback {
  height: 170px;
}
.review-biz__header {
  text-align: center;
  font-size: 16px;
  color: #000000;
  line-height: 1.24;
  font-weight: 600;
  text-transform: uppercase;
}
.review-biz__content {
  text-align: center;
}
.review-biz__item {
  width: 100%;
  max-width: 485px;
  margin: 0 auto;
}
.review-slide {
  width: 50% !important;
}

@media screen and (max-width: 550px) {
  .review-slide {
    width: 100% !important;
  }
}
</style>
