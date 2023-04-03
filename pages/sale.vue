<template>
  <div class="container" v-if="fullItems">
    <div class="sale" v-for="(sale, index) in sales" :key="index">
      <h2>{{ sale.title }}</h2>
      <div class="sale_label">АКЦИЯ</div>
      <!-- <pre>
                {{'/storage/' + sale.image}}
            </pre> -->
      <div class="PB_image">
        <img
          :src="sale.image"
          style="cursor: pointer"
          @click.prevent="openModal(index)"
          class="PB_options_image double_trouble"
        />
      </div>
      <div class="sale-page-info">
        <div class="sale-page-info__price">
          <strike class="oldprice">{{ sale.oldprice }} р.</strike>
          <p class="price">{{ sale.newprice }} р.</p>
        </div>
        <div
          class="sale-page-info__button"
          @click.prevent="openModal(sale.items)"
          style="cursor: pointer"
        >
          <span>Выбрать цвет</span>
        </div>
      </div>
      <sales-modal
        v-if="modalOpen"
        @closeModal="modalOpen = false"
        :items="openModal(sale.items)"
        :procent="procent"
        :sale-id="sale.id"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SalesModal from "~/components/sale/SalesModal.vue";

export default Vue.extend({
  components: { SalesModal },
  layout: "default",
  data() {
    return {
      i: 0,
      chosenColors: [],
      totalPrice: 0,
      sales: [],
      fullItems: [],
      products: "",
      items: [],
      salesItems: "",
      modalOpen: false,
      procent: 0,
    };
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/sale").then((res) => {
      this.sales = res.data;
      // alert(res.data[0].procent)
      this.procent = res.data[0].procent;
      this.salesItems = res.data[0].items;
      this.salesItems.forEach((e, index) => {
        e.salesId = index + 1;
      });
      this.$axios.post("https://project.a-lux.dev/api/items", {}).then((res) => {
        this.products = res.data;
        this.salesItems.forEach((element) => {
          // var items = []
          // element.items.forEach(e => {
          // this.items.push(element)
          this.items.push(
            this.products.find((obj) => {
              return obj.id === element.id;
            })
          );
          // });
          //   console.log("ITEMS", this.items);
        });
        this.fullItems.push(this.items);
      });
    });
  },
  methods: {
    openModal(a) {
      this.modalOpen = true;
      return a;
    },
  },
});
</script>
