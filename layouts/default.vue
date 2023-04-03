<template>
  <div>
    <client-only>
      <script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1613629-emD2C"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-1613629-emD2C" style="position:fixed; left:-999px;" alt=""/></noscript>
      <!-- Google Tag Manager (noscript) -->
      <noscript
        ><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TVQC8M7"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
      <!-- End Google Tag Manager (noscript) -->
      <Header />
      <Nuxt />
      <Footer />
      <div class="whatsapp-icon" v-if="whatsappNumber">
        <a :href="'https://wa.me/' + whatsappNumber" target="_blank">
          <img class="whatsapp-icon__image" src="@/assets/img/whatsapp.svg" />
        </a>
      </div>
    </client-only>
  </div>
</template>

<script>
import topLine from "~/components/layout/top-line.vue";
import Vue from "vue";
import Header from "~/components/layout/header.vue";
import Footer from "~/components/layout/footer.vue";
import axios from "axios";
export default Vue.extend({
  components: { Header, Footer, topLine },
  data() {
    return {
      whatsappNumber: "",
    };
  },
  created() {
    if (this.$route.query.utm_source == "admitad") { //создаем куки адмитада
      this.$cookiz.set("admitad_uid", this.$route.query.admitad_uid, {
        path: "/",
        maxAge: 60 * 60 * 24 * 90,
      });
    } else { 
        if (this.$route.query.utm_source !== undefined) {
          this.$cookiz.set("admitad_uid", '', { // убераем куки адмитада
          path: "/",
          maxAge: 60 * 60 * 24 * 90,
        });
      } 
    }

    // if (this.$route.query.admitad_uid) {
    //   this.$cookiz.set("admitad_uid", this.$route.query.admitad_uid, {
    //     path: "/",
    //     maxAge: 60 * 60 * 24 * 90,
    //   });
    // }

  },
  mounted() {
    axios.get("https://project.a-lux.dev/api/title").then((res) => {
      this.whatsappNumber = res.data.whatsapp;
    });
  },
});
</script>

<style lang="scss"></style>
