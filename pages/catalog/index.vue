<template>
  <div class="cantra-content-wrapper new-catalog-items">
    <div class="cantra_content">
      <h2 class="catalog_header_category" @click="chekUrl()">Каталог</h2>
      <div class="category">
        <div @click="$router.push({name: 'catalog-type', params: {type: type.slug}})" v-for="type in types" :key="type" class="category-item">
            {{ type.name }}
        </div>
      </div>
      <div style="display: flex; justify-content: space-between">
        <div class="category-sort">
          <div class="sort">
            <svg width="24px" height="24px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-class">
              <path d="M1.6665 10H12.6687" stroke="#788998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.6665 5H18.3332" stroke="#788998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.6665 15H7.22317" stroke="#788998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>
            Сортировать
          </span>
          </div>
          <span @click="price = ''" :class="price !== '' ? 'sort-item' : ''" >
          Все
        </span>
          <span @click="price = 'desc'" :class="price !== 'desc' ? 'sort-item' : ''">
          Сначала дорогие
        </span>
          <span @click="price = 'ask'"  :class="price !== 'ask' ? 'sort-item' : ''">
          Сначала дешёвые
        </span>
          <span @click="price = 'new'"  :class="price !== 'new' ? 'sort-item' : ''">
          Новинки
        </span>
        </div>
        <div class="category-sort">
          <div class="sort">
            <svg width="24px" height="24px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-class">
              <path d="M1.6665 10H12.6687" stroke="#788998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.6665 5H18.3332" stroke="#788998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.6665 15H7.22317" stroke="#788998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>
            Сортировать по сезону
          </span>
          </div>
          <span @click="season = ''" :class="season !== '' ? 'sort-item' : ''" >
          Все
        </span>
          <span v-for="season_name in seasons" :key="season_name" @click="season = season_name" :class="season !== season_name ? 'sort-item' : ''">
          {{ season_name }}
        </span>
        </div>
      </div>
      <div class="filters">
        <select class="item" v-model="price" @change="selectedType(price)">
          <option value="">Все</option>
          <option
            v-for="(filter, index) in prices"
            :value="filter.value"
            :key="index"
          >
            {{ filter.title }}
          </option>
        </select>
        <select style="margin-top: 6px" class="item" v-model="season" @change="selectedType(season)">
          <option value="">По сезону</option>
          <option
            v-for="(filter, index) in seasons"
            :value="filter"
            :key="index"
          >
            {{ filter }}
          </option>
        </select>
<!--        <select class="item" v-model="type" @change="selectedType(type)">-->
<!--          <option value="">По типу</option>-->
<!--          <option v-for="(filter, index) in types" :value="filter.name" :key="index">-->
<!--            {{ filter.name }}-->
<!--          </option>-->
<!--        </select>-->
<!--        <select class="item" v-model="season" @change="selectedType(season)">-->
<!--          <option value="">По сезону</option>-->
<!--          <option-->
<!--            v-for="(filter, index) in seasons"-->
<!--            :value="filter"-->
<!--            :key="index"-->
<!--          >-->
<!--            {{ filter }}-->
<!--          </option>-->
<!--        </select>-->
<!--        <p class="filters-null" @click="filtersNull">Сбросить сортировку</p>-->
      </div>
      <div v-if="swichData" class="catalog__items featured_line">
        <div
          class="product_list product-layout"
          v-for="product in products"
          :key="product.id"
        >
          <div class="product-thumb transition">
            <!-- <img style="position: absolute; top: 0; height: 0; width: 100%; height: 100%" src="@/assets/img/png/logo.png" class="img-responsive"> -->
            <div style="position: relative" class="image">
              <nuxt-link :to="'/cantra-products/' + product.slug"
                ><img :src="product.image" alt="" class="img-responsive" />
                <img
                  src="@/assets/img/op3.png"
                  class="copy-logo"
                />
              </nuxt-link>
            </div>
            <div class="caption">
              <p class="price">
                <span :class="{'through': product.discount}">{{ product.price }} руб.</span>
                <span class="price-discount" v-if="product.discount">{{ product.discount }} руб.</span>
                <span class="price-tax"></span>
              </p>
              <nuxt-link :to="'/cantra-products/' + product.slug"
                ><h4>
                  <a style="display: flex; align-items: center" href="">
                    <!-- <div
                    v-html="product.brand"
                    class="descriptionCat-item"
                    style="height: 100%"
                  ></div> -->

                    <div class="productName" v-html="product.name"></div
                  ></a></h4
              ></nuxt-link>
            </div>
            <div class="more_group">
              <span class="count_colors" v-if="product.colors.length != 0"
                >{{ product.colors.length }} цветов</span
              >
              <div class="button-group">
                <nuxt-link :to="'/cantra-products/' + product.slug"
                  ><p class="color-bl">
                    <a class="color">Подробнее</a>
                  </p></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="catalog__items featured_line">
        <div
          class="product_list product-layout"
          v-for="product in savedData"
          :key="product.id"
        >
          <div class="product-thumb transition">
            <!-- <img style="position: absolute; top: 0; height: 0; width: 100%; height: 100%" src="@/assets/img/png/logo.png" class="img-responsive"> -->
            <div style="position: relative" class="image">
              <nuxt-link :to="'/cantra-products/' + product.slug"
                ><img :src="product.image" alt="" class="img-responsive" />
                <img
                  src="@/assets/img/op3.png"
                  class="copy-logo"
                />
              </nuxt-link>
            </div>
            <div class="caption">
              <p class="price">
                <span>{{ product.price }} руб.</span>
                <span class="price-tax"></span>
              </p>
              <nuxt-link :to="'/cantra-products/' + product.slug"
                ><h4>
                  <a style="display: flex; align-items: center" href="">
                    <!-- <div
                    v-html="product.brand"
                    class="descriptionCat-item"
                    style="height: 100%"
                  ></div> -->

                    <div class="productName" v-html="product.name"></div
                  ></a></h4
              ></nuxt-link>
            </div>
            <div class="more_group">
              <span class="count_colors" v-if="product.colors.length != 0"
                >{{ product.colors.length }} цветов</span
              >
              <div class="button-group">
                <nuxt-link :to="'/cantra-products/' + product.slug"
                  ><p class="color-bl">
                    <a class="color">Подробнее</a>
                  </p></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog__footer-content-wrapper">
      <div class="catalog__footer-content-inner">
        <div v-html="footer.headercontent" class="footer-content__header"></div>
        <div class="catalog__footer-content__middle">
          <div
            v-html="footer.leftmiddlecontent"
            class="footer-content__middle-left"
          ></div>
          <div
            v-html="footer.rightmiddlecontent"
            class="footer-content__middle-right"
          ></div>
        </div>
      </div>
    </div>
    <div v-html="footer.footercontent" class="catalog__footer catalog__footer-bottom"></div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: 'Купить чехол на автомобиль - описание, фото, отзывы, цена от производителя Cantra™',
      meta: [
        { hid: 'description', name: 'description', content: '★ Продажа чехлов на автомобиль от  официального производителя Cantra™★ Доступная цена, гарантия, доставка и салоны по всей России.'},
        { hid: 'keywords', name: 'keywords', content: 'чехол на автомобиль цена, чехол на автомобиль цена, купить чехол на автомобиль в интернет, сколько стоит чехол на автомобиль'}
      ]
    }
  },
  data() {
    return {
      footer: "",
      products: [],
      prices: [{title: 'Сначала дешёвые',  value: 'asc'}, {title: 'Сначала дорогие',  value: 'desc'}, {title: 'Новинки',  value: 'new'}],
      types: [],
      seasons: [],
      price: "",
      type: "",
      season: "",
      filterData: [],
      filterings: {
        price: "",
        type: "",
        season: "",
      },
      savedData: "",
      swichData: true,
    };
  },
  watch: {
    price() {
      this.selectedType('price')
    },
    season() {
      this.selectedType('season')
    }
  },
  mounted() {
      // this.chekUrl()
    this.$axios.get("https://project.a-lux.dev/api/footer").then((res) => {
      this.footer = res.data;
    });
    // if (this.$route.query.price == '' || this.$route.query.season == '' ||  this.$route.query.type == '') {
    this.$axios
      .post("https://project.a-lux.dev/api/items", {
        id: "",
        order: this.$route.query.price,
        type: this.$route.query.type,
        season: this.$route.query.season,
      })
      .then((res) => {

        if (this.$route.query.type === 'sport') {
          const sport = res.data.filter((item) => {
            return item.secondtype === "Спортивные"
          })

          this.products = sport
        } else {
          this.products = res.data;
        }

        this.savedData = this.products.slice();

        this.products.forEach((element) => {
          if (!this.seasons.includes(element.season) && element.season !== null) {
            this.seasons.push(element.season);
          }
        });


      });

      this.$axios.get('https://project.a-lux.dev/api/items').then(res => {
        this.types = res.data
      })
    // } else {
    // }
  },
  methods: {
    chekUrl() {
      if ( this.$route.query.price !== '') {
        console.log('price')
        this.price = this.$route.query.price
      }
      if ( this.$route.query.season !== '') {
        console.log('season')
        this.season = this.$route.query.season
      }
      if ( this.$route.query.type !== '') {
        console.log('type')
        this.type = this.$route.query.type
      }
        this.sendURL()
      // console.log(!this.$router.query.type)
      // console.log(!this.$router.query.price)
      // console.log(!this.$router.query.season)
    },
    sendURL() {
      console.log('lol')
      this.$axios
        .post("https://project.a-lux.dev/api/items", {
          id: "",
          order: this.price,
          type: this.type,
          season: this.season,
        }).then((res) => {
          this.products = res.data;
          this.swichData = true;
          })
    },
    selectedPrice(a) {
      this.filterings.price = a;
      this.swichData = true;
      switch (a) {
        case "min-price":
          this.products.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "max-price":
          this.products.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        default:
          this.products = this.savedData;
          break;
      }
    },
    filtersNull() {
      this.filterings.price = "";
      this.filterings.type = "";
      this.filterings.season = "";
      this.price = "";
      this.type = "";
      this.season = "";
      this.swichData = false;
    },
    selectedType(a) {
      this.filterings.type = a;
      console.log(a)
      console.log(this.$route.query)

      this.$axios
        .post("https://project.a-lux.dev/api/items", {
          id: "",
          order: this.price,
          type: this.type,
          season: this.season,
        })
        .then((res) => {
          this.products = res.data;
          this.swichData = true;
          this.$router.push({
              query:{
                type:  this.type,
                price:  this.price,
                season:  this.season,
              }
            })
        });
    },
  },
};
</script>

<style lang="css">
.sort {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: #788998;
}
.category-sort {
  overflow-x: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.sort-item {
  cursor: pointer;
  font-variation-settings: "wght" 550;
  font-weight: 550;
  color: #2f75db;
}
.category {
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
}
.category-item {
  cursor: pointer;
  border-width: 2px;
  font-size: 14px;
  font-variation-settings: "wght" 550;
  width: -moz-max-content;
  width: max-content;
  background-color: #f3f4f5;
  border-radius: 50rem!important;
  padding: 4px 10px;
  white-space: nowrap;
  color: black !important;
}
.through {
  text-decoration: line-through;
}
.price-discount {
  color: #db2c29;
}
.filters {
  display: none !important;
  position: relative;
}

.footer-content__header {
  /* width: 90vw; */
  /* margin: 0 auto; */
  text-align: left;
  font-size: 18px;
  line-height: 24px;
}
.footer-content__header p {
  font-size: 18px;
  line-height: 24px;
  font-family: 'Lato', sans-serif;
}
/* @media */
.catalog__footer-content-inner {
  padding: 50px 0;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
}
.catalog__footer-content-wrapper {
  padding: 10px;
  margin: 0 auto;
  background: #f1f1f1;
}
.left_seo_block p {
  font-size: 18px;
  line-height: 24px;
  font-family: 'Lato', sans-serif;
}
@media (max-width: 1199px) {
  .catalog__footer-content-inner {
    max-width: 800px !important;
  }
  .catalog__footer-content__middle {
    flex-direction: column;
  }
}
.catalog__footer-content__middle {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.catalog__footer-content__middle .left_seo_block h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;
}
.footer-content__middle-right li {
  padding-bottom: 10px;
}

.catalog__footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 10px 0 10px;
}

.catalog__footer-bottom  p {
  font-family: 'Lato', sans-serif;
    font-weight: 400;
}
@media (max-width: 707px) {
  p.filters-null {
    position: absolute;
    top: 90px;
  }
  .category-sort {
    display: none;
  }
  .category {
    flex-wrap: wrap !important;
  }
  .filters {
    width: 100%;
    display: block !important;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
  .catalog__items .featured_line .product-thumb.transition {
    height: 438px !important;
    /* height: 269px !important; */
  }
}
.button-group {
  margin-bottom: 10px;
}
img.img-responsive {
  object-fit: contain;
  min-height: 218px;
  width: 100% !important;
  max-height: 171px !important;
}
/* .productName {
  white-space: normal;
  width: 67px;
} */
a:hover {
  color: red !important;
}
/* .product_list product-layout{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
} */

.new-catalog-items .product-thumb .image {
  width: 245px;
  height: 245px;
  margin: 0 auto;
}
.new-catalog-items .product-thumb {
  margin-bottom: 0;
  border-bottom: 1px solid #ddd !important;
}
.new-catalog-items .product-thumb a {
  height: 100%;
}
.new-catalog-items .product-thumb .image img {
  height: 100% !important;
}
.catalog__items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.product_list  {
  width: calc(100% / 4 - 30px);
  margin: 0 15px 20px 15px !important;
}

.product-thumb .image {
  width: 100%;
  height: 100%;
}
.product_list img {
  width: 100%;
  height: 250px !important;
  max-width: 100%;
  max-height: 100% !important;
  min-height: auto;
}
@media (max-width: 1000px) {

}
@media (max-width: 708px) {
  .product_list img {
    height: 100% !important;
    min-height: 152px !important;
  }
  .catalog__items {
    margin: 0 -5px;
  }
  .product_list {
    width: 49% !important;
    margin: 0 .5% !important;
  }

  .catalog__footer-content-inner {
    padding: 15px 0;
    max-width: 310px !important;
    margin: 0 auto;
  }

  .catalog__footer-bottom {
    max-width: 310px !important;
    padding: 50px 0 0 0;
  }

  .new-catalog-items .product-thumb .image {
    width: 100%;
    height: 100%;
  }
}
.product_list .product-thumb {
  border: none;
}
.more_group {
  width: 90%;
  margin: auto;
}
.product_list .price {
  font-size: 20px;
  display: inline-block;
  color: #292929;
}
.product_list h4 {
  display: block;
  text-align: left;
}
.product_list h4 a {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  line-height: 27px;
  font-size: 12px;
  color: #5e5e5e;
}
.product_list .caption {
  text-align: center;
  min-height: 38px;
}
.product_list .button-group {
  width: 142px;
  height: 39px;
  display: inline-block;
  border: 1px solid #db2c29;
  background: transparent;
  float: right;
}
.product_list .color-bl {
  text-align: center;
  margin-top: 4px;
}
html body .product_list .color {
  font-family: "Lato", sans-serif;
  color: #db2c29;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  border: none;
  text-decoration: none;
}
.product_list h4 a {
  /* cursor: text; */
  text-decoration: none;
  white-space: unset;
  line-height: 15px;
}
.product_list h4:hover a {
  color: red !important;
}

.product_list h4 {
  height: 27px;
}
.product_list .product-thumb {
  overflow: hidden;
}
.third_block .product_list .price,
.featured_line .product_list .price {
  display: block;
  text-align: left;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: #5e5e5e;
}
.filters {
  width: 100%;
  flex-flow: wrap;
  margin-bottom: 60px;
  display: flex;
}

.filters-null {
  color: #1e91cf;
  transition: 0.3s;
  cursor: pointer;
  /* position: absolute; */
  margin-top: 10px;
}

.filters-null:hover {
  color: #090909;
}
.item {
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: unset;
  font-size: 16px;
  width: 213px;
  margin-right: 40px;
  height: 34px;
  border-radius: 0;
  background: white;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

option {
  font-size: 15px !important;
}

@media (max-width: 1100px) {
  .item {
    margin-right: 14px;
  }
}
@media (max-width: 700px) {
  .item {
    width: 100%;
  }
}
.descriptionCat-item p {
  margin: 0;
}

</style>

