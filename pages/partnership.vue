<template>
  <div class="cantra_content partnership">
    <div
      class="partnership_top_block"
      v-bind:style="{
        'background-image':
          'url(' +
          '/storage/partner-mains/May2022/HifaBGucT7rx6DchZzFP.jpg' +
          ')',
      }"
    >
      <div class="partnership_top_block_left">
        <div class="partnership__top__content" v-html="main.content"></div>
        <div class="partnership-icon">
          <a
            href="https://www.instagram.com/cantra.ru/"
            target="_blank"
            class="partnership_insta"
            ><img src="../assets/img/social/insta.png" alt=""
          /></a>
          <a
            href="https://www.youtube.com/channel/UCZDI20Z_t1Q76Z3xrwHPz_Q"
            target="_blank"
            class="partnership_ytb"
            ><img src="../assets/img/social/ytb.png" alt=""
          /></a>
          <a
            href="https://www.facebook.com/cantra.ru"
            target="_blank"
            class="partnership_fb"
            ><img src="../assets/img/social/fb.png" alt="" />
          </a>
          <a
            href="https://vk.com/cantrarf"
            target="_blank"
            class="partnership_vk"
            ><img src="../assets/img/social/vk.png" alt="" />
          </a>
        </div>
      </div>
    </div>

    <div class="partnership_second_block">
      <h1>Что такое CANTRA?</h1>
      <div class="partnership_red_stripe"></div>
      <div>
        Компания CANTRA - лидер по производству премиальных автонакидок на
        территории СНГ.
      </div>
    </div>
    <div
      class="partnership_third_block"
      v-bind:style="{
        'background-image':
          'url(' +
          '/storage/partner-bios/May2022/FIsi2SqmEsmt7yPU3Vjm.jpg' +
          ')',
      }"
    >
      <div>
        <div class="success_years">
          <h4>{{ bio.step1 }}</h4>
          <ul class="success_years-item" v-html="bio.step1_content"></ul>
        </div>
        <div class="success_years">
          <h4>{{ bio.step2 }}</h4>
          <ul class="success_years-item" v-html="bio.step2_content"></ul>
        </div>
        <div class="success_years">
          <h4>{{ bio.step3 }}</h4>
          <ul class="success_years-item" v-html="bio.step3_content"></ul>
        </div>
        <div class="success_years">
          <h4>{{ bio.step4 }}</h4>
          <ul class="success_years-item" v-html="bio.step4_content"></ul>
        </div>
      </div>
    </div>
    <div class="partnership_fifth_block">
      <h2>cantra в цифрах</h2>
      <div class="partnership_red_stripe"></div>
      <div class="cantra_numbers">
        <!-- <pre>
            {{cards[0].title}}
        </pre> -->
        <div v-for="item in cards" :key="item.id">
          <img :src="item.background" />
          <div class="cantra_numbers_text">
            <span>{{ item.title }}</span>
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="partnership_sixth_block">
      <div>
        <h2>{{ benefit.title }}</h2>
        <div class="partnership_red_stripe"></div>
        <ul
          class="parnership_sixth-item new-partnership-ul"
          v-html="benefit.content"
        ></ul>
      </div>
      <div>
        <img :src="benefit.image" />
      </div>
    </div>
    <div class="partnership__reviews">
      <Reviews />
    </div>
    <div class="partnership__biz">
      <reviewsBiz />
    </div>
    <div class="partnership_ninth_block">
      <h2>наша команда</h2>
      <div class="partnership_red_stripe"></div>
      <div class="our_team">
        <img :src="team.image" v-for="team in team" :key="team.id" />
      </div>
      <div class="red_mystery"></div>
    </div>
    <div class="partnership_fourth_block">
      <h2>Оставьте заявку</h2>
      <div class="partnership_red_stripe"></div>
    </div>
    <div class="callback-contactm_partnership">
      <form
        class="form-horizontal"
        id="form-contactm_partnership"
        @submit.prevent="sendData"
      >
        <input
          type="text"
          name="request_name"
          v-model="name"
          value=""
          id="input-name"
          class="form-control"
          placeholder="Имя"
          required
        />

        <input
          type="text"
          name="request_email"
          v-model="email"
          value=""
          id="input-mail"
          class="form-control"
          placeholder="Email"
          required
        />

        <input type="text" class="form-control" v-model="phone" id="recall-name" placeholder="Телефон" ref="phone" required onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,10}$/.test(this.value));" />
        <!-- <the-mask
          type="text"
          :mask="['+7 (###) ###-##-##']"
          :masked="false"
          v-model="phone"
          class="form-control"
          placeholder="Телефон"
          required
        /> -->

        <input
          type="submit"
          class="button submit-contactm_partnership"
          value="Отправить заявку"
        />
      </form>
      <div class="form-response-success" v-if="isSuccess">
        <svg
          fill="#3c763d"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="20px"
          height="20px"
        >
          <path
            d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z"
          />
        </svg>
        Заявка отправлена
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TheMask } from "vue-the-mask";
import Reviews from "~/components/layout/reviews.vue";
import reviewsBiz from "~/components/layout/reviewsBiz.vue";

export default Vue.extend({
  layout: "default",
  head() {
    return {
      title: 'Накидки на автомобильные сиденья, автонакидки для автомобилей от производителя Cantra™',
      meta: [
        { hid: 'description', name: 'description', content: 'Все накидки для сидений автомобиля изготовлены из высококачественного материала Premium класса - алькантары! Покупайте накидки для машины в интернет магазине CANTRA и защитите сиденья своего авто.'},
        { hid: 'keywords', name: 'keywords', content: 'накидки на сиденья автомобиля, компания Cantra, автонакидки из алькантары, накидки из алькантары, автомобильные накидки Cantra, автомобильные накидки, меховые накидки на автомобиль, накидки из искусственного меха, меховая детская накидка, интернет магазин автонакидок, автонакидки для сидений, производство авто чехлов из алькантара, авточехлы, чехлы автомобильные, чехлы для авто, чехлы для автомобиля, накидки на сидения, чехлы для машины, чехлы для сидений автомобиля, CANTRA'},
      ]
    }
  },
  data() {
    return {
      main: "",
      mainImage: "",
      benefit: "",
      bio: "",
      cards: "",
      team: "",
      name: "",
      email: "",
      phone: "",
      isSuccess: false
    };
  },
  components: {
    reviewsBiz,
    Reviews,
    TheMask,
  },
  mounted() {
    this.$axios.get("https://project.a-lux.dev/api/partner").then((res) => {
      this.main = res.data.main;
      this.mainImage = this.main.image;
      this.bio = res.data.bio;
      this.cards = res.data.card;
      this.benefit = res.data.benefit;
      this.team = res.data.command;
    });
  },
  methods: {
    sendData() {
      this.$axios
        .post("https://project.a-lux.dev/api/applicationjob", {
          name: this.name,
          email: this.email,
          phone: this.phone,
        })
        .then((res) => {
          if(res.status == '200' || res.status == '201') {
            this.isSuccess = true
            this.name = this.email = this.phone = ''
            setTimeout(() => {
              this.isSuccess = false
            }, 5000)
          }
        });
    },
  },
  watch: {
    phone(n, old) {
      if (n == 8) {
        this.phone = '7'
      }
      if (n == 9) {
        this.phone = '79'
      }
    }
  }
});
</script>
<style lang="scss">
.form-response-success {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: #3c763d;
  font-size: 16px;
  line-height: 18px;
  svg {
    margin-right: 5px;
  }
}
@media (max-width: 1205px) {
  .red_mystery {
    width: 100%;
    margin-top: -456px;
    position: relative;
    margin-left: 0;
    top: 70vh;
  }
  .our_team {
    position: absolute;
    z-index: 111;
    left: 12vw;
  }
  .our_team img:nth-child(1) {
    margin: 0px auto 15px;
    display: block;
  }
}
@media (max-width: 800px) {
  .partnership__top__content {
    width: 277px !important;
    font-size: 14px;
    line-height: 24px;
  }
  .partnership_top_block_left {
    margin-top: 15px !important;
  }
  .partnership_top_block_left div:nth-child(2) {
    margin-top: 15px;
  }
}
.Reviews {
  margin-top: 100px;
}
ul.parnership_sixth-item p {
  font-size: 14px !important;
}
.partnership_third_block > div {
  padding-right: 26px;
}
p {
  font-size: 1.1em;
}
.partnership__top__content {
  //   font-size: 16px;
  //   line-height: 19px;
  width: 372px;
}
@media (max-width: 730px) {
  .partnership_top_block {
    background: url("@/assets/img/bigimagemobile.jpg") !important;
    &_left {
      font-size: 16px !important;
      line-height: 19px !important;
    }
  }
  .partnership_third_block {
    background: url("@/assets/img/chronology_mob.jpg") !important;
  }
  .success_years {
    margin: 0 !important;
    height: auto;
    h4 {
      font-size: 14px !important;
    }
    &-item {
      margin: 0 !important;
      line-height: 12px !important;
      li {
        font-size: 12px !important;
        margin: 0 !important;
        line-height: 14px !important;
      }
      p {
        font-size: 12px !important;
        margin: 0 !important;
        line-height: 14px !important;
      }
    }
    ul {
      line-height: 12px !important;
      li {
        font-size: 12px !important;
        line-height: 12px !important;
      }
      p {
        font-size: 12px !important;
        line-height: 12px !important;
      }
    }
  }
  .success_years > ul > p,
  .success_years ul li {
    font-size: 12px !important;
    line-height: 14px !important;
  }

  .success_years:nth-child(1) {
    margin-top: -10px !important;
  }

  .success_years:nth-child(2) {
    margin-top: 30px !important;
  }

  .success_years:nth-child(3) {
    margin-top: 10px !important;
  }

  .success_years:nth-child(4) {
    margin-top: 8px !important;
  }
}

@media screen and (max-width: 550px) {
  .partnership_top_block_left div:nth-child(2) {
    margin-top: 37px !important;
  }
}

.new-partnership-ul {
  max-width: 475px;
}
</style>
