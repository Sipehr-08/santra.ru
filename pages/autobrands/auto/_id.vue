<template>
  <div class="container" v-if="marks.length != 0">
    <div class="marks">
      <vue-picture-swipe :items="items" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: `${this.marks.name}` || ''
    }
  },
  async fetch() {
    await this.$axios.get(`https://project.a-lux.dev/api/auto/mark/${this.$route.params.id}`).then((res) => {
      this.marks = res.data;
    })
  },
  data() {
    return {
      marks: [],
      items: [],
      imgg: null,
    };
  },
  mounted() {
    let url =
      "https://project.a-lux.dev/api/auto/mark/" +
      window.location.pathname.split("/").pop();
    this.$axios.get(url).then((res) => {
      this.marks = res.data;
      this.imgg = res.data.images;
      this.imgg.forEach((element) => {
        this.items.push({
          src: element,
          thumbnail: element,
          w: 1000,
          h: 1000,
        });
      });
    });
  },
};
</script>

<style scoped>
.my-gallery img {
  width: 100% !important;
  max-width: 376px !important;
  object-fit: cover !important;
  max-height: 283px !important;
}
.my-gallery {
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr !important;
}
.pswp__img {
  width: auto !important;
  height: auto !important;
}
</style>
