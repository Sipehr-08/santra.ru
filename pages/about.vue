<template>
  <div class="about__wrapper new-about-wrapper">
    <div class="about__container">
      <div class="about-content">
        <div class="about__header-content">
          <h1>{{ aboutData.title }}</h1>
          <div class="header-content" v-html="aboutData.headercontent"></div>
          <img :src="aboutData.headerimage" alt="" />
          <p>
            {{ aboutData.headerimagefooter }}
          </p>
        </div>
        <div class="about__middle-content">
          <p v-html="aboutData.middlecontent"></p>

          <div class="content-image new-image-content">
            <vue-picture-swipe class="new-gall" :items="swiperImages" />
          </div>
        </div>
        <p>{{ aboutData.middleimagesfooter }}</p>
        <p>
          В мае 2015 мы открыли представительство в Москве. Это позволило
          сократить сроки доставки до 1-2 дней. Также мы заинтересованы в
          сотрудничестве с другими городами. У нас всегда в наличии весь
          ассортимент продукции, который мы доставим в ваш город в кратчайшие
          сроки
        </p>
        <div class="about__footer-content">
          <nuxt-link to="/partners">Как стать партнером?</nuxt-link>
        </div>
        <p>
          Мы занимаемся не только оптовой, но и розничной продажей. Наши дилеры
          — это квалифицированные сотрудники, которые работают уже долгие годы в
          сфере продажи автомобильных чехлов. Они помогут подобрать нужный
          дизайн и цвет накидки для Вашего салона, а также подробно объяснят,
          как установить его на сидение.
        </p>
        <p>
          Мы постоянно совершенствуемся, ведем разработку новых дизайнов и
          делаем упор на качество и практичность нашей продукции.
        </p>
        <p>
          Ассортимент продукции составляет около 60-70 наименований. В наших
          розничных точках и офисах оптовых продаж Вы можете найти продукцию на
          любой вкус. Мы подберем товары для самых щепетильных покупателей,
          которые хотят выделить свое авто среди других.
        </p>
        <div class="about__footer-content">
          <a href="/contacts/mainContacts">Контакты и адреса</a>
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
      aboutData: "",
      quest: {},
      swiperImages: [],
    };
  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/about").then((res) => {
      this.aboutData = res.data;
    });
    axios.get("https://project.a-lux.dev/api/quest").then((res) => {
      this.quest = res.data;
      this.quest.sertificat.forEach((element) => {
        this.swiperImages.push({
          src: element,
          thumbnail: element,
          w: 600,
          h: 800,
        });
      });
    });
  },
  methods: {
    showImage(id) {
      console.log(id);
      this.image = !this.image;
    },
  },
};
</script>
<style scoped>
.about__container {
  /* margin: 10px; */
  padding: 10px;
}
@media (min-width: 1201px) {
  .about__container {
    max-width: 1200px;
  }
}
.about__header-content img {
  max-width: 885px;
  width: 100%;
}
.about__middle-content__images-wrappe-inner {
  display: flex;
  justify-content: space-around;
}
.about__middle-content__images-wrapper img {
  width: 100%;
  max-width: 150px;
}
.about__middle-content__images-wrapper {
  justify-content: space-around;
  margin: 50px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: max-content;
  overflow: hidden;
}
.header-content {
  line-height: 1.5em;
  font-size: 18px;
  margin: 2em 0;
}
p {
  margin: 30px 30px 30px 0;
  font-size: 18px !important;
}
.about__footer-content {
  margin: 18px 18px 18px 0;
  font-size: 18px;
}

.image-view {
  width: 33%;
  cursor: pointer;
  margin-right: 20px;
}

.openImage {
  width: 200px;
}

.about__container {
  width: 100%;
  margin: 0 auto;
}

.content-image {
  padding: 30px 0;
  width: 100%;
}
.new-gall .my-gallery {
  justify-content: flex-start;
}

.about__container p {
  font-size: 20px !important;
  line-height: 1.5em !important;
}

img + p,
.about__middle-content + p {
  font-size: 15px !important;
  margin-top: 10px;
}

.about-content {
  max-width: 885px;
}
@media screen and (max-width: 700px) {
  .new-about-wrapper .about__container p {
    font-size: 18px !important;
  }
  .new-about-wrapper .about__container img + p,
  .new-about-wrapper .about__container .about__middle-content + p {
    font-size: 15px !important;
    color: #7d7d7d;
  }

  .new-about-wrapper .content-image {
    padding: 0;
  }
}
</style>
