<template>
  <div class="contacts__container" v-if="contactRes.length > 0">
    <div class="contacts__header-wrapper">
      <h1 class="contacts__header">Контакты</h1>
      <select
        id="contacts-select"
        v-model="routerId"
        @change="$router.push('/contacts/' + routerId)"
      >
        <option :value="1">
          <nuxt-link to="/contacts/"> Офис компании </nuxt-link>
        </option>
        <option
          v-for="contact in contactRes"
          :key="contact.id"
          :value="contact.id"
        >
          <nuxt-link :to="`/contacts/${contact.id}`">
            {{ contact.name }}
          </nuxt-link>
        </option>
      </select>
    </div>
    <div class="main-contacts__content-wrapper">
      <div class="main-contacts__content-left">
        <!-- <a
          class="main-contacts__content__open-map"
          v-if="isMobile"
          @click="isMapOpen = !isMapOpen"
          >Посмотреть на карте</a
        > -->
        <div v-for="map in contactIdRes" :key="map.id">
          <div v-if="map.type === 'content'" class="main-contacts__content">
            <h1 class="contacts__header-content">
              {{ map.content }}
            </h1>
            <div class="main-contacts__img-subcontent-wrapper">
              <p class="contacts__sub-content" v-html="map.subcontent"></p>
              <a :href="`mailto:${map.contactfield}`"
                ><p v-if="map.contactfield">
                  {{ map.contactfield }}
                </p></a
              >
              <div
                v-if="map.content === 'Телефоны'"
                class="main-contacts__wts-img"
              >
                <img src="../../assets/img/wts.png" alt="" />
              </div>
            </div>
          </div>
          <a
            class="main-contacts__content__open-map"
            v-if="isMobile && map.content == 'Офис'"
            @click="isMapOpen = !isMapOpen"
            >Посмотреть на карте</a
          >
          <div v-if="map.type === 'contact'" class="main-contacts__content">
            <h1 class="contacts__header-content">
              {{ map.content }}
            </h1>
            <div
              v-if="map.contactfield"
              class="main-contacts__img-subcontent-wrapper"
            >
              <a :href="`tel:${map.contactfield}`">
                <p class="contacts__sub-content">
                  {{ map.contactfield }}
                </p>
              </a>
              <a :href="`tel:${map.secondcontactfield}`">
                <p class="contacts__sub-content">
                  {{ map.secondcontactfield }}
                </p>
              </a>
              <div
                v-if="map.content === 'Телефон'"
                class="main-contacts__wts-img"
              >
                <img src="../../assets/img/wts.png" alt="" />
              </div>
              <p class="only-wts">(Только WhatsApp)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="main-contacts__content-right" :class="{ active: isMapOpen }">
        <div
          v-for="map in contactIdRes"
          :key="map.id"
          class="main-contacts__content-map"
        >
          <p
            v-if="map.type === 'map'"
            class="contacts__map-content"
            v-html="domDecoder(map.subcontent)"
          ></p>
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
      contactRes: [],
      routerId: 1,
      contactIdRes: "",
      isMobile: false,
      isMapOpen: false,
      // content: false,
      // j: [],
      map: false,
    };
  },
  methods: {
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        "<!doctype html><body>" + str,
        "text/html"
      );
      return dom.body.textContent;
    },
  },
  mounted() {
    let check;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    this.isMobile = check;
    axios.get("https://project.a-lux.dev/api/contact").then((res) => {
      this.contactRes = res.data;
      this.contactRes.shift();
    });

    axios
      .get(`https://project.a-lux.dev/api/contact/${this.routerId}`)
      .then((res) => {
        this.contactIdRes = res.data;
      });
  },
};
</script>
<style>
  
#contacts-select option {
  font-size: 20px;
}
p.only-wts {
  position: relative;
  font-size: 14px;
  left: 5px;
}
.contacts__header-content {
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 600;
}
option {
  font-size: 25px;
  height: 10vh;
}
.main-contacts__wts-img img {
  width: 100%;
  margin: 17px -7px;
  width: 40px;
  right: 37px;
  padding: 5px 0;
}
.main-contacts__content {
  width: 280px;
}
@media (min-width: 1201px) {
  .main-contacts__wts-img {
    float: inline-start;
    width: 30px !important;
    position: absolute;
    top: -53px;
    left: 177px;
  }
}
@media (max-width: 1000px) {
  .contacts__content-wrapper {
    width: 600px;
    flex-flow: column;
    margin: auto;
  }
}

.main-contacts__content-left {
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.main-contacts__content-right {
  width: 50%;
}
.main-contacts__content-left div {
  padding-right: 10px;
  width: 50%;
}
.main-contacts__content-left div:first-child {
  width: 50%;
}
.main-contacts__content-left div:nth-child(5) {
  width: 100%;
}
.main-contacts__content-left div:nth-child(6) {
  width: 100%;
}
.main-contacts__content-left div:nth-child(7) {
  width: 100%;
}
.main-contacts__content-left div:nth-child(8) {
  width: 100%;
}
.main-contacts__content-left div:last-child {
  width: 100%;
}

@media screen and (max-width: 600px) {
  .main-contacts__content-left {
    width: 100%;
    overflow: hidden;
  }
  .footer__container {
    width: 100%;
  }
  .main-contacts__content-left div {
    width: 100%;
  }
  .main-contacts__content-left div:first-child {
    width: 100%;
  }

  .main-contacts__content-right {
    width: 100%;
  }
}

.contacts__sub-content p, .main-contacts__img-subcontent-wrapper a p, p.only-wts {
  font-size: 20px;
  line-height: 1.5em;
  color: #000;
  text-decoration: none;
}
.main-contacts__img-subcontent-wrapper a:hover {
  text-decoration: none;
}

.main-contacts__content-left div:nth-child(3) .main-contacts__img-subcontent-wrapper a p {
  color: #2f75db;
}

.contacts__header-wrapper h1 {
  font-size: 40px;
  font-family: "Lato-Bold", sans-serif;
  font-weight: 700;
  color: #000000;
  margin: 5px 0 0 0;
  /* margin-left: 13px; */
}
.main-contacts__content-map {
  margin-left: 15px;
}
.contacts__map-content {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}
.contacts__container {
  width: 100%;
  margin: 0 auto;
  height: auto;
}
.contacts__header-wrapper {
  display: flex;
}
@media (min-width: 1201px) {
  .contacts__container {
    max-width: 1200px;
  }
  .main-contacts__content-wrapper {
    display: flex;
  }
}
.canvas {
  max-width: 100%;
  height: 100%;
}
@media (max-width: 1200px) {
  .main-contacts__wts-img {
    float: inline-start;
    position: relative;
    width: 30px;
    top: -49px;
    left: 107px;
  }
  .contacts__map-content div iframe {
    margin: 0 auto;
    text-align: center;
    align-items: center;
    max-width: 250x !important;
  }
  .main-contacts__content-left {
    margin: 0px 15px;
  }
  .contacts__container {
    max-width: 750px;
  }
}
@media (max-width: 600px) {
  .contacts__header-wrapper {
    padding: 10px;
  }
  .main-contacts__content-wrapper {
    display: flex;
    flex-flow: column-reverse;
  }
  .main-contacts__content-right {
    height: 0;
    margin-top: 20px;
    transition: all ease-in-out 0.5s;
    overflow: hidden;
  }
  .active {
    height: 420px;
    transition: all ease-in-out 0.5s;
  }
  .contacts__map-content div iframe {
    margin: 0 auto;
    text-align: center;
    align-items: center;
    max-width: 90% !important;
  }
  h1.contacts__header {
    margin-left: 12px;
    font-size: 20px !important;
    color: #000000;
    font-family: "Lato-Bold", sans-serif;
    font-weight: 700;
    line-height: 1.13;
  }
  #contacts-select {
    width: auto !important;
    font-size: 20px !important;
    font-family: "Lato-Bold", sans-serif;
    font-weight: 700;
  }
  .main-contacts__content-left {
    grid-template-columns: 100%;
    margin-bottom: 0;
  }
  .main-contacts__content {
    width: 100%;
  }
  #contacts-select {
    margin: 0;
  }
}
@media (max-width: 707px) {
  .contacts__header {
    margin: 0 !important;
    font-size: 5vw !important;
    align-content: center;
  }
  #contacts-select {
    margin: 0 !important;
    align-content: center;
    height: unset !important;
    margin-left: 5px !important;
  }
  #contacts-select option {
    font-size: 12px;
  }
  .contacts__header-content {
    margin-top: 0;
  }
  .main-contacts__img-subcontent-wrapper a,
  p.only-wts {
    border-bottom: 1px solid #acc7ff;
    text-decoration: none;
    font-size: 20px;
    line-height: 1.5em;
    color: #2f75db;
  }
  .main-contacts__img-subcontent-wrapper a p, p.only-wts {
    color: #2f75db;
  }
  p.only-wts {
    display: inline-block;
    bottom: 0;
  }
  .main-contacts__wts-img {
    position: absolute;
    left: 180px;
    top: 50px;
    width: 50px !important;
  }

  .contacts__sub-content {
    font-size: 20px;
    line-height: 1.5em;
  }

  .main-contacts__content {
    margin-bottom: 30px;
    position: relative;
  }

  .main-contacts__content__open-map {
    font-size: 18px;
    border-bottom: 1px solid #acc7ff;
    text-decoration: none;
    color: #2f75db;
    display: inline-block;
    transform: translateY(-30px);
  }
  .main-contacts__content__open-map:hover {
    text-decoration: none;
  }

  .main-contacts__content-map {
    margin-left: 0;
  }

  .contacts__container {
    overflow: hidden;
  }
}
#contacts-select {
  font-family: "Lato-Bold", sans-serif;
  font-weight: 700;
  font-size: 35px;
  width: 310px;
  border: none;
  background: transparent;
  border-bottom: 2px dashed #77afff;
  color: #2f75db;
  margin-left: 8px;
  height: 53px;
}
</style>
