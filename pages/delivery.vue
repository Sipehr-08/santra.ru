<template>
  <div class="delivery__wrapper">
    <div class="delivery__container">
      <div class="delivery__header">
        <h1 v-html="delivery.title"></h1>
        <div
          class="delivery__headercontent new-content"
          v-html="delivery.headercontent"
        ></div>
      </div>
      <div class="delivery__body new-content">
        <div v-html="delivery.middlecontent"></div>
      </div>
      <div class="delivery__footer">
        <h2 v-html="delivery.footertitle" class="footer is-h2"></h2>
        <div class="delivery__footer-images">
          <div v-for="img in delivery.footerimages" :key="img.index">
            <img :src="img" alt="" />
          </div>
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
      delivery: "",
    };
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/delivery").then((res) => {
      this.delivery = res.data;
    });
  },
};
</script>

<style scoped>
.delivery__headercontent {
  margin-top: 40px;
  margin-bottom: 50px;
}
.column.coll4.delivery-info {
  font-size: 15px;
  font-weight: 700;
}
.delivery__container {
  padding: 10px;
}
.delivery__footer {
  margin: 0 0 0 0;
}
.column .column .delivery-info {
  display: flex;
}
.delivery__footer-images img {
  margin-right: 50px;
  width: auto;
  height: 35px;
  align-items: center;
}
@media (min-width: 1201px) {
  .delivery__container {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .delivery__container {
    max-width: 800px;
  }

  .delivery__footer-images {
    overflow: scroll;
  }
}
.delivery__container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}
.column.coll4.delivery-info {
  display: flex;
  width: 283px;
  justify-content: space-around;
}
.delivery__footer-images {
  display: flex;
  padding-top: 20px;
}

.delivery__header h1 {
  font-weight: 700;
  margin: 0;
  font-size: 34px;
  color: #000000;
}

.is-h2 {
  font-family: "Lato-Bold", sans-serif;
  font-size: 60px;
  color: #000000;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

@media screen and (max-width: 550px) {
  .delivery__header h1 {
    font-family: "Lato-Bold", sans-serif;
    font-size: 35px;
    margin: 0;
    color: #000000;
    line-height: 1.13;
  }

  .is-h2 {
    font-size: 34px;
    margin-top: 0.5em;
  }
}
</style>
