<template>
  <div class="container">
    <div class="brands-logos">
      <nuxt-link
        v-for="(auto, index) in autos"
        class="brands-logos__logo"
        :key="index"
        :to="'/autobrands/' + auto.id"
      >
        <img :src="auto.logo" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  layout: "default",
  head() {
    return {
      title: "Марки авто - Главная",
    };
  },
  data() {
    return {
      autos: [],
    };
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/auto").then((res) => {
      this.autos = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.brands-logos {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  // justify-content: flex-start;
  align-items: center;
  &__logo {
    margin: 20px;
  }
}

@media (max-width: 800px) {
  .brands-logos {
    &__logo {
      margin: 0px;
    }
  }
}
</style>
