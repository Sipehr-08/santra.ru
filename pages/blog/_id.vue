<template>
  <div class="blog__wrapper new__blog-wrapper">
    <div class="blog__conatiner">
      <div v-if="blogId" class="blog__item">
        <img :src="blogId.image" alt="" />
        <!-- <h2>{{ blogId.title }}</h2> -->
        <p v-html="blogId.content"></p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  head() {
    return {
      title: this.info.title,
      meta: [
        {hid: 'description', name: 'description', content: '★ Продажа чехлов на автомобиль от  официального производителя Cantra™★ Доступная цена, гарантия, доставка и салоны по всей России.'},
        {hid: 'keywords', name: 'keywords', content: 'накидка на сиденье отзывы, накидка на сиденье отзывы, накидки на сиденья автомобиля отзывы, авто накидки отзывы'},
      ]
    }
  },
  async fetch() {
    await axios.get(`https://project.a-lux.dev/api/blog/${this.id}`).then((res) => {
      this.info = res.data
    });
  },
  data() {
    return {
      routerId: "",
      blogId: "",
      info: {}
    };
  },
  mounted() {
    axios.get(`https://project.a-lux.dev/api/blog/${this.id}`).then((res) => {
      this.blogId = res.data;
    });
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
<style scoped>
.blog__wrapper {
  height: 140vh;
}
.blog__item {
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  max-width: 750px;
  max-height: 650px;
}
.blog__item img {
  width: 100%;
  max-width: 750px;
  margin-bottom: 20px;
}
@media (min-width: 1201px) {
  .blog__conatiner {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .blog__conatiner {
    max-width: 750px;
  }
}
.blog__conatiner {
  width: 100%;
  margin: 0 auto;
}

.new__blog-wrapper {
  height: auto;
}
.new__blog-wrapper .blog__item {
  max-height: 100%;
}
</style>
