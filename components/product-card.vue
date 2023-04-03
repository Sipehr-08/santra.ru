<template>
  <div class="product_list product-layout col-lg-4 col-md-3 col-sm-6 col-xs-12">
    <div class="product-thumb transition">
      <div class="image" style="position: relative">
        <nuxt-link class="image-link" :to="'/cantra-products/' + slug"
          ><img :src="image" alt="" title="" class="img-responsive" />
          <img
            src="@/assets/img/op3.png"
            class="copy-logo"
        /></nuxt-link>
      </div>
      <div class="caption">
        <div class="no-discount-wrapper" v-if="discount !== null">
          <p class="price" style="margin: 0">
            <span :class="{'through': discount}" style="padding-right: 5px">{{ price }}</span>
            <span> {{ discount }}руб. </span>
          </p>
        </div>
        <div class="discount-wrapper" v-else>
          <p class="price" style="margin: 0">{{ price }} рублей.</p>
        </div>

        <a
          href=""
          class="productNameAll"
          style="
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;
          "
        >
          <!-- <div v-html="brand" class="testItem"></div> -->
          <!-- <div class="slash">/</div> -->
          <div class="productName" v-html="name"></div>
        </a>
      </div>
    </div>
    <div class="more_group">
      <span class="count_colors">{{ color }} цветов</span>
      <div class="button-group">
        <p class="color-bl">
          <nuxt-link class="color" :to="'/cantra-products/' + slug"
            >Подробнее &gt;</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    discount: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    color: {
      type: Number,
      require: true,
    },
    id: {
      type: Number,
      require: true,
    },
    slug: {
      type: String,
      required: true
    }
  },
});
</script>

<style>
.productName {
  white-space: normal;
  text-align: left;
  font-weight: normal;
  line-height: 15px;
  font-size: 11px;
  color: #5e5e5e;
  width: 100%;
  /* width: 167px; */
}
img.img-responsive {
  object-fit: contain;
  min-height: 250px;
  width: 100%;
  max-height: 171px;
}
.slash {
  margin: 0 5px;
}
.testItem p {
  margin: 0;
}
.productNameAll {
  white-space: nowrap;
}
@media (max-width: 800px) {
  .productName {
    font-size: 11px;
  }

  .image-link {
    height: 220px;
  }

  .more_group {
    margin-bottom: 20px;
  }
}
.productCardImage::before {
  background: url("@/assets/img/png/logo.png") center no-repeat;
}
</style>
