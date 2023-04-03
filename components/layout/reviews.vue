<template>
  <div class="insta_slick_slider" v-if="reviews.length > 0">
    <div class="share" v-if="showTitle">
      <h2>Звезды выбирают Cantra</h2>
    </div>
    <swiper
      class="swiper"
      :slides-per-view="4"
      :space-between="1"
      :options="swiperOption"
    >
      <swiper-slide v-for="item in reviews" :key="item.id" class="swiper-slide">
        <div class="insta_slider_block">
          <div class="photo_with_cover">
            <img :src="item.image" class="star-photo"/>
          </div>
          <div>
            <img :src="item.logo" />
            <div class="insta_nickname">
              {{ item.name }}<br />
              <a rel="nofollow" :href="item.url" target="_blank" tabindex="0">{{
                item.tag
              }}</a>
            </div>
            <div
              class="insta_feedback"
              :class="{ insta_feedback_open: feedopen === item.id }"
            >
              {{ item.content }}
              <div class="insta_feedback_toggle"></div>
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
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination-reviews new-pag"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  components: { Swiper, SwiperSlide },
  data() {
    return {
      reviews: "",
      feedopen: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          900: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          1000: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
        },
        slidesPerGroup: 1,
        pagination: {
          el: ".swiper-pagination-reviews",
          type: "bullets",
          clickable: "true",
        },
      },
    };
  },
  props: {
    title: String,
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/index  ").then((res) => {
      this.reviews = res.data.review;
    });
  },
});
</script>

<style scoped>
.share h2 {
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

.insta_slick_slider .swiper-container {
  width: 100% !important;
}
.insta_toggle-btn {
  cursor: pointer;
}
@media (max-width: 1100px) {
  .insta_slick_slider .swiper-slide {
    height: 80vh;
    width: 300px;
    margin-top: 100px;
  }
}
.swiper-pagination-bullet {
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #000;
  opacity: 1;
  margin: 0 5px;
  background: rgba(0, 0, 0, 0.2);
  width: 20px !important;
  height: 20px !important;
}
.swiper-pagination-bullet-active {
  color: #fff;
  opacity: 0.75 !important;
  background: black !important;
}
.swiper-pagination {
  position: unset !important;
  margin-bottom: 3%;
}
.swiper-pagination {
  width: 100%;
}

@media screen and (max-width: 550px) {
  .insta_slick_slider .swiper-container {
    width: calc(100% + 20px) !important;
  }

  .share h2 {
    margin-top: 0;
    padding: 0 5px;
  }

  .insta_slick_slider .swiper-slide {
    padding: 0 10px;
  }

  .sixth_block .h2-text {
    margin-top: 0;
  }

  .star-photo {
    max-height: 290px;
    object-fit: cover;
    object-position: top;
  }
}
</style>
