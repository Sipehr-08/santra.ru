<template>
  <div class="content certify content_certify">
    <div class="fake_original_block">
      <h1>{{ mains.title }}</h1>
      <p>{{ mains.content }}</p>
    </div>
    <div
      class="fake_original_block"
      v-for="fake in items.sections"
      :key="fake.id"
      :ref="fake.id"
    >
      <figure class="cd-image-container">
        <div class="cd-image">
          <img :src="fake.origin" alt="Original Image" />
          <range-slider
            :start-animation="true"
            class="cd-handle"
            min="0"
            max="100"
            step="0.1"
            v-model="sliderValue"
            >></range-slider
          >
        </div>
        <span class="cd-image-label" v-if="sliderValue !== 100">Оригинал</span>

        <div class="cd-resize-img" :style="{ width: sliderValue + '%' }">
          <!-- the resizable image on top -->
          <img :src="fake.fake" alt="Modified Image" />
          <span class="cd-image-label" v-if="sliderValue !== 0">Подделка</span>
        </div>
      </figure>
      <h2>{{ fake.title }}</h2>
      <p>{{ fake.content }}</p>
    </div>
  </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
import Vue from "vue";
export default Vue.extend({
  layout: "default",
  components: {
    RangeSlider,
  },
  data() {
    return {
      items: "",
      sliderValue: 50,
      mains: "",
    };
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/fake").then((res) => {
      this.items = res.data;
      this.mains = res.data.main;
    });

    setTimeout(() => {
      this.$nextTick(() => {
        addClassWithScroll();
      });
    }, 1000);

    window.addEventListener('scroll', addClassWithScroll)
  },
});

function addClassWithScroll() {
  const blocks = document.querySelectorAll(".fake_original_block");
  
  blocks.forEach((ref) => {
    if (ref.offsetTop - 400 <= window.pageYOffset) {
        ref.classList.add('is-active')
    }
  });
}
</script>

<style>
.content_certify {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
.cd-image {
  position: relative;
}
.cd-handle {
  width: 90% !important;
  z-index: 99;
  position: absolute;
  text-align: center;
  left: 5%;
  /* transform: translateX(); */
  top: 50%;
  transform: translateY(-50%);
}
.range-slider-rail,
.range-slider-fill {
  visibility: hidden !important;
}
.range-slider-knob {
  background: url("@/assets/img/handle.svg") no-repeat 100% !important;
  background-position: center !important;
  background-color: red !important;
  width: 40px !important;
  cursor: all-scroll !important;
  border: none !important;
  box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
  height: 40px !important;
}
.range-slider-knob:hover {
  background-color: #445b7c !important;
}
.cd-image-label {
  /* opacity: 100% !important; */
}

.fake_original_block.is-active .cd-resize-img {
  animation: cd-bounce-in 0.7s;
  width: 50%;
}
.cd-handle {
    transform: translate3d(0, 0, 0) scale(0);
}
.fake_original_block.is-active .cd-handle{
    transform: translate3d(0, 0, 0) scale(1);
    transition: transform 0.3s 0.7s, opacity 0s 0.7s;
}

@keyframes cd-bounce-in {
  0% {
    width: 0;
  }

  60% {
    width: 55%;
  }
  100% {
    width: 50%;
  }
}
</style>
