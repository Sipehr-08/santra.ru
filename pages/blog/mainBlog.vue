<template>
  <div class="blog__wrapper">
    <div class="blog__conatiner">
      <h1>Блог</h1>
      <br>
      <br>
      <br>
      <div v-for="(item, index) in blog" :key="index" class="blog__item">
        <nuxt-link :to="'/blog/' + item.id">
          <img :src="item.image" alt="" />
          <h2>{{ item.title }}</h2>
          <div class="content-blog" v-html="item.preview" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  head() {
    return {
      title: 'Блог',
      meta: [
        {hid: 'description', name: 'description', content: 'Блог Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.'},
        {hid: 'keywords', name: 'keywords', content: 'Блог накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA'},
      ]
    }
  },
  data() {
    return {
      blog: "",
    };
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/blog").then((res) => {
      this.blog = res.data;
    });
  },
};
</script>
<style scoped>
.blog__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.blog__conatiner {
  width: 100% !important;
  /* max-width: 80% !important; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
}

.blog__conatiner div:nth-child(n + 2) {
  margin-left: 0px !important;
}

a {
  text-decoration-line: none;
  color: black;
}
h2 {
  transition: 0.3s;
}
h2:hover {
  transition: 0.3s;
  color: red;
}
.blog__item {
  /* margin-bottom: 5vh; */
  /* margin: 0 auto; */
  vertical-align: top;
  display: inline-block;
}

.blog__item img{
  width: 100%;
  max-width: 100% !important;
}


.content-blog {
  margin-left: 0px !important;
}

.blog__item img {
  width: 100%;
  max-width: 350px;
}
@media (min-width: 1201px) {
  .blog__conatiner {
    max-width: 1140px;
  }
}
@media (max-width: 800px) {
  .blog__conatiner h1 {
    margin-left: 10px !important;
  }
  .blog__conatiner div:nth-child(n + 2) {
    margin-left: 10px !important;
  }
  .blog__item {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .blog__conatiner {
    max-width: 750px;
  }
}

.blog__conatiner {
  /* grid-template-columns: repeat(2, 30vw); */
  /* grid-template-rows: 52vh; */
  grid-column-start: 16vw;
  /* display: grid; */
  /* text-align: center; */
  /* justify-content: center; */
  width: 76%;
  /* align-items: center; */
  margin: 0 auto;
}
.blog__conatiner div:nth-child(n + 2) {
  margin-left: 150px;
}

@media screen and (max-width: 550px) {
  .blog__conatiner {
    display: flex !important;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 15px;
  }

  .blog__conatiner div {
    margin-left: 0 !important;
  }

  .blog__conatiner div:nth-child(n + 2) {
    margin-left: 0 !important;
  }
}
</style>
