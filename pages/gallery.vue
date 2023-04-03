<template>
  <div class="new-gallery new__gallery">
    <div id="gall" class="cantra_content">
      <!-- <img v-for="(image, index) in images" @click="handleSlideTo(index)" :key="index" :src="image"> -->
      <vue-picture-swipe
        v-if="swiperImages && swiperImages.length > 0"
        :items="swiperImages"
        class="imgimg"
      />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  head() {
    return {
      title: 'Накидки на автомобильные сиденья, автонакидки для автомобилей от производителя Cantra™',
      meta: [
        {hid: 'description', name: 'description', content: 'Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.'},
        {hid: 'keywords', name: 'keywords', content: 'накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA'},
      ]
    }
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      swiperImages: [],
      images: "",
      isModal: false,
      initial: 1,
      swiperOptions: {
        slidesPerView: 1,
        // loop: true,
        spaceBetween: 50,

        initialSlide: this.initial,
        // centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      //   swiper: null,
    };
  },
  mounted() {
    this.$axios
      .get("https://project.a-lux.dev/api/gallery")
      .then((res) => {
        console.log(res.data)
        this.images = res.data.image;
        this.images.forEach((element) => {
          this.swiperImages.push({
            src: element,
            w: 768,
            h: 500,
            thumbnail: element,
          });
        });
      })
      // .then(() => {
      //   const images = document.querySelectorAll(".gallery-thumbnail");
      //   const wrapper = document.createElement("div");
      //   wrapper.setAttribute("class", "mini-block");
      //   const firstBlock = [6, 7]
      //   for (let i = 0; i < firstBlock.length; i++) {
      //     images[firstBlock[i]].parentNode.insertBefore(wrapper, images[firstBlock[i]]);
      //     wrapper.appendChild(images[firstBlock[i]]);
      //   }
      // });
  },
  methods: {
    // onSwiper(swiper) {
    //     console.log(swiper)
    //     this.swiper = swiper;
    // },

    handleSlideTo() {
      this.isModal = !this.isModal;
    },
  },
});
</script>

<style>
img.pswp__img {
  position: relative;
  width: 100%;
  /* max-width: 768px !important; */
  height: auto !important;
  max-height: 1000px;
  object-fit: contain;
}
.pswp__img--placeholder {
  display: none;
}
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
}
.bigswiper {
  margin: auto;
  position: relative;
  /* max-height: 600px; */
  max-width: 900px;
  width: 100%;
  /* max-height: 800px; */
}
.swiper {
  max-height: 800px;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  margin: 0;
  top: 50% !important;
  transform: translateY(-50%) !important;
  /* display: none; */
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 70px;
}
.swiper-button-prev {
  left: -60px;
}
.swiper-button-next {
  right: -60px;
}

.new__gallery .pswp__img {
      max-height: 100%;
}
</style>
