<template>
  <div class="rebuy__container">
    <div class="rebuy__wrapper">
      <div v-for="(item, index) in rebuy" :key="index" class="rebuy__item">
        <h1>{{ item.title }}</h1>
        <p v-html="item.subtitle"></p>
        <div class="rebuy__pdf" v-if="item.id === 1">
          <a href="https://project.a-lux.dev/api/rebuy?download=1">
            <img src="https://cantra.ru/img/pdf.png" alt="" />
            <span>
              Форма заявления на возврат <br />
              <b>.PDF, 419 Kb</b></span
            >
          </a>
        </div>
        <div v-if="item.danger !== null">
          <p class="rebuy__item-danger" v-html="item.danger"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      rebuy: "",
    };
  },
  methods: {
    downloadFile() {
      axios.get("https://project.a-lux.dev/api/rebuy?download=1");
    },
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/rebuy").then((res) => {
      this.rebuy = res.data;
    });
  },
};
</script>
<style scoped>

.rebuy__pdf a {
  /* text-align: center; */
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 300px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  cursor: pointer;
}
.rebuy__pdf img {
  margin-right: 10px;
}
a {
  text-decoration-line: none;
  color: black;
}
@media (min-width: 1201px) {
  .rebuy__container {
    max-width: 1200px;
  }
}
@media (max-width: 800px) {
  .rebuy__container h1 {
    margin-left: 10px !important;
  }
  .rebuy__item {
    display: block;
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .rebuy__container {
    max-width: 750px;
  }
}

.rebuy__container {
  margin: 0 auto 50px auto;
}
</style>
