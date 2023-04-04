const axios = require("axios");

export default {
  head: {
    title:
      "Накидки на автомобильные сиденья, автонакидки для автомобилей от производителя Cantra™",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [
      // { src: "https://www.googletagmanager.com/gtm.js?id=GTM-TVQC8M7" },
      // {
      //   type: "text/javascript",
      //   innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      //             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      //             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      //             })(window,document,'script','dataLayer','GTM-TVQC8M7');
      //     `,
      // },
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-55734909-4" },
      {
        type: "text/javascript",
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-55734909-4');`,
      },
      {
        type: "text/javascript",
        innerHTML: `window._retag = window._retag || [];
        window._retag.push({code: "9ce8887715", level: 0});
        (function () {
            var id = "admitad-retag";
            if (document.getElementById(id)) {return;}
                var s = document.createElement("script");
            s.async = true; s.id = id;
            var r = (new Date).getDate();
            s.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//cdn.lenmit.com/static/js/retag.min.js?r="+r;
            // s.src = "externaljs.php?file=retag.min.js";
            var a = document.getElementsByTagName("script")[0]
            a.parentNode.insertBefore(s, a);
        })()
          `,
      },
    ],
  },

  css: [
    "@/assets/css/style.css",
    "@/assets/css/stylesheet.css",
    "@/assets/css/bootstrap.css",
    "@/assets/css/reset.css",
  ],

  plugins: [
    { src: "~/plugins/vue-agile", ssr: false, mode: "client" },
    { src: "@/plugins/vue-swiper", ssr: false },
    { src: "@/plugins/vue-pictures", ssr: false },
  ],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/robots",
    ["cookie-universal-nuxt", { alias: "cookiz" }],
    "@nuxtjs/sitemap", // Всегда должен быть последним
  ],

  axios: {
    baseURL: "https://project.a-lux.dev",
  },

  build: {
    transpile: [
      // 'vue-upload-drop-images'
    ],
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },

  sitemap: {
    gzip: true,
    defaults: {
      changefreq: "daily",
      priority: 0.5,
      lastmod: new Date(),
      cdata: false,
    },
    async routes() {
      const products = await axios
        .post("https://project.a-lux.dev/api/items")
        .then((res) => res.data);

      const blogs = await axios
        .get("https://project.a-lux.dev/api/blog")
        .then((res) => res.data);

      const brands = await axios
        .get("https://project.a-lux.dev/api/auto")
        .then((res) => res.data);

      let routes = [];
      for (const product of products) {
        routes.push({
          url: `/cantra-products/${product.slug}`,
          changefreq: "weekly",
          priority: 1,
          lastmod: new Date(),
          img: [
            {
              url: product.image,
              caption: product.name,
              title: product.title,
            },
          ],
        });
      }

      for (const blog of blogs) {
        routes.push({
          url: `/blog/${blog.id}`,
          changefreq: "weekly",
          priority: 1,
          lastmod: new Date(),
          img: [
            {
              url: blog.image,
              caption: blog.title,
              title: blog.title,
            },
          ],
        });
      }

      for (const brand of brands) {
        routes.push({
          url: `/autobrands/${brand.id}`,
          changefreq: "weekly",
          priority: 1,
          lastmod: new Date(),
          img: [
            {
              url: brand.logo,
              caption: brand.name,
              title: brand.name,
            },
          ],
        });
      }

      return routes;
    },
  },

  robots: [
    {
      UserAgent: "*",
      Disallow: ["/cart", "/cart/receipt"],
    },
    {
      UserAgent: "YandexImages",
      Disallow: "/",
      Allow: "/assets/img",
    },
    {
      Host: "https://cantra-test.a-lux.dev",
      Sitemap: "https://cantra-test.a-lux.dev/sitemap.xml",
    },
  ],
};
