<template>
  <div class="container" v-if="brands.length != 0">
    <div class="brand__links">
      <nuxt-link
        v-for="(link, index) in brands.mark"
        :key="index"
        v-html="link.name"
        :to="'/autobrands/auto/' + link.id"
      >
      </nuxt-link>
    </div>
    <div class="brand__text" v-html="brands.content"></div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: `★ Купить чехлы на автомобильные сидения ${this.brands.name} - автонакидки для автомобилей от производителя Cantra™`,
      meta: [
        { hid: 'description', name: 'description', content: `★ Чехлы на сиденья для автомобиля ${this.brands.name} -  Высокое качество, доступная цена, гарантия, доставка и салоны по всей России.`},
        { hid: 'keywords', name: 'keywords', content: `чехлы на автомобильные сидения, ${this.brands.name} чехлы сидений магазин, ${this.brands.name} чехлы на сиденья интернет магазин, ${this.brands.name} сколько стоит чехлы сидении, ${this.brands.name} чехлы для автомобилей интернет магазин`},
      ]
    }
  },
  async fetch() {
    await this.$axios.get(`https://project.a-lux.dev/api/auto/${this.$route.params.id}`).then((res) => {
      this.brands = res.data;
    });
  },
  data() {
    return {
      brands: [],
    };
  },
  mounted() {
    let url = "https://project.a-lux.dev/api/auto/" + this.$route.params.id;
    this.$axios.get(url).then((res) => {
        // res.data.name.splice(1,1 )
      this.brands = res.data;
    });
  },
};
</script>

<style lang="scss">
.brand {
  &__links {
    font-size: 18px;
    display: flex;
    flex-flow: column;
    // display: block;
    line-height: 28px;
    color: #000 !important;

    margin-bottom: 20px;
    a {
      color: #000 !important;
    }
  }
}
</style>
