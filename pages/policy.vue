<template>
  <div class="policy__wrapper">
    <div class="policy__container">
      <div v-html="policy.title" class="policy__header"></div>
      <div v-html="policy.content" class="policy__content"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  head() {
    return {
      title: 'Политика в отношении обработки персональных данных',
      meta: [
        {hid: 'description', name: 'description', content: ''},
        {hid: 'keywords', name: 'keywords', content: ''},
      ]
    }
  },
  data() {
    return {
      policy: "",
    };
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/policy").then((res) => {
      this.policy = res.data;
    });
  },
};
</script>
<style scoped>
.policy__container {
  padding: 10px;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 1201px) {
  .policy__container {
    max-width: 1160px;
  }

}
@media (max-width: 1200px) {
  .policy__container {
    max-width: 800px;
  }
  .policy__header {
    font-size: 24px;
    line-height: 30px;
  }
}

@media screen and (max-width: 768px) {
  .policy__container {
    max-width: 320px;
  }
}
</style>
