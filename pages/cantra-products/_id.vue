<template>
  <div itemscope="" class="content catalog-item product_content">
    <div class="first__block no-margin">
      <div class="images">
        <div class="images-choose">
          <!-- <img v-for="(img,index) in images[i].images" :key="index" :src="img">  -->
          <div
            class="new-gallery-choose"
            v-for="(img, index) in images"
            :key="index"
            @click="changePic(index)"
          >
            <img :src="img" />
          </div>
        </div>
        <div class="image-zoom with-mark" v-if="zitems.length > 0">
          <vue-photo-zoom-pro
            :highUrl="zitems[this.i].src"
            class="image-zoom-img"
          >
            <img class="image-zoom-image" :src="zitems[this.i].src" alt="" />
            <!-- <vue-picture-swipe :items="zitems"></vue-picture-swipe> -->
          </vue-photo-zoom-pro>
        </div>
      </div>
      <div class="description">
        <div class="item-card">
          <div class="description-text">
            <h1
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
              "
            >
              <div style="font-size: 17px" v-html="product.name"></div>
            </h1>
            <p>{{ product.title }}</p>
          </div>

          <div class="color-title is-just-text" v-if="colors">
            {{ currentColorName }}
          </div>
          <div class="description-color" v-if="colors">
            <div class="description-colors">
              <img
                class="description-colors-logo"
                v-for="color in colors"
                @click="setColor(color.id, color.name, color)"
                :key="color.id"
                :title="color.name"
                :src="color.logo"
                :class="{ 'selected-color': currentColor == color.id }"
              />
            </div>
            <div class="text-danger" v-if="isError">Выберите цвет накидок</div>
          </div>

          <div class="description-button">
            <div class="description-button__price">
              <div
                v-if="wholeColor && wholeColor.type != 2"
                class="price is-just-text"
              >
                <div v-if="product.discount !== null">
                  <strike> {{ product.price }} руб. </strike>
                  {{ product.discount }} руб.
                </div>
                <div v-else-if="product.discount === null">
                  {{ product.price }} руб.
                </div>
                <!-- {{ product.discount }} руб. -->
              </div>
              <!-- <h1 v-else>{{product.price>}}</h1> -->

              <div v-else-if="product.spechial" class="price is-just-text">
                <div>{{ product.price }} руб.</div>
              </div>

              <div class="price is-just-text" v-else>
                <div v-if="wholeColor.discount !== null">
                  <strike> {{ wholeColor.price }} руб. </strike>
                  {{ wholeColor.discount }} руб.
                </div>
                <div v-else-if="wholeColor.discount === null">
                  {{ wholeColor.price }} руб.
                </div>
                <!-- {{ wholeColor.price }} руб. -->
              </div>
            </div>
            <div>
              <button
                type="button"
                id="button-cart"
                v-if="product.spechial"
                @click="addToCart"
                class="description-button_add spechial"
                style="position: relative"
              >
                Добавить в корзину >
              </button>
              <button
                type="button"
                id="button-cart"
                v-if="currentColor && !product.spechial"
                @click="addToCart"
                class="description-button_add"
                style="position: relative"
              >
                Добавить в корзину >
                <span
                  class="succes_order succes_order_product"
                  v-if="dataSent"
                  style="display: block"
                >
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Товар добавлен
                </span>
              </button>
              <button
                type="button"
                id="button-cart"
                v-if="!currentColor && !product.spechial"
                @click="addToCartFail"
                class="description-button_add"
              >
                Добавить в корзину >
              </button>
              <div v-if="dataSent" class="alert alert-success success_design">
                <button
                  @click="dataSent = !dataSent"
                  type="button"
                  class="close"
                  data-dismiss="alert"
                >
                  Продолжить покупки
                </button>
                <nuxt-link to="/cart/">>Оформить заказ </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mode mode_mob_hide">
      <div class="char__tab">
        <div class="char__tab-content">
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 1"
            :class="{ underlined: selectedContent === 1 }"
          >
            Описание товара
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 2"
            :class="{ underlined: selectedContent === 2 }"
          >
            Доставка
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 3"
            :class="{ underlined: selectedContent === 3 }"
          >
            Подробнее о товаре
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 4"
            :class="{ underlined: selectedContent === 4 }"
          >
            О бренде
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 5"
            :class="{ underlined: selectedContent === 5 }"
          >
            Отзывы
          </p>
        </div>
      </div>
      <div class="char__content">
        <div class="content__info" v-if="selectedContent === 1">
          <div class="content__info-content" v-html="product.leftcolumn"></div>
          <img
            v-if="product.middleimage !== '/storage/'"
            class="middleimage product-info-image"
            :src="product.middleimage"
          />
          <div class="content__info-content" v-html="product.rightcolumn"></div>
        </div>
        <div
          class="content__info content__delivery"
          style="justify-content: space-between"
          v-if="selectedContent === 2"
        >
          <div class="content__info-block">
            <div class="content__info-content">
              <h3>Доставка Москва:</h3>
              <p>
                По Москве мы осуществляем доставку в течении 1-2 дней после 
                оформления заказа. Специалист может установить накидки на 
                сиденья авто: стоимость установки комплекта накидок на передние 
                сиденья - 1000 руб., полного комплекта - 1200 руб.. Стоимость доставки 
                в пределах МКАД: 490 руб. Стоимость доставки за пределами МКАД: 
                590 руб. до 10км.
              </p>
              <h3>Доставка по всей России:</h3>
              <p>
                Доставка заказов осуществляется курьерской службой CDEK и Почтой
                России. Сроки доставки: CDEK: 3-7 дней* Почта: 3-14 дней*
              </p>
              <h3>Доставка по миру:</h3>
              <p>
                В другие страны мы осуществляем доставку курьерской компанией
                EMS. Заказы оформляются по полной предоплате, если на сайте по
                какой-то причине у вас не получается оплатить заказ, оператор
                посоветует вам другие варианты оплаты при оформлении заказа.
                Срок доставки зависит от вашей страны.
                <br />
                *Предоставленные временные рамки являются приблизительными.
                Точные сроки доставки, а так же стоимость, Вам озвучит наш
                оператор, при подтверждении заказа.
              </p>
            </div>
          </div>
          <div class="content__info-block">
            <div class="content__info-content">
              <h3>Оплата:</h3>
              <p>
                Вы можете оплатить посылку в момент ее получения. Такой вид
                оплаты возможен при выборе доставки курьерской службой CDEK, а
                также Почтой России - курьером. На нашем сайте Вы можете
                оплатить покупку: VISA, MasterCard, PayPal.
              </p>
            </div>
          </div>
        </div>
        <div class="content__info" v-if="selectedContent === 3">
          <div class="content__info-bigcontent" v-html="product.more"></div>
        </div>
        <div class="content__info" v-if="selectedContent === 4">
          <div class="content__info-content">
            <!-- <h3>О бренде:</h3> -->
            <div v-html="product.brand"></div>
          </div>
        </div>
        <div class="content__review" v-if="selectedContent === 5">
          <h3 class="content__info-title">Оставьте ваш отзыв</h3>
          <form class="review_form" @submit.prevent="sendReview">
            <div class="smallboxes">
              <input type="text" v-model="name" placeholder="Ваше имя" />
              <input type="text" v-model="city" placeholder="Город" />
              <input
                type="text"
                v-model="carType"
                required
                placeholder="Автомобиль*"
              />
              <input type="text" v-model="carColor" placeholder="Цвет" />
            </div>
            <textarea
              type="text"
              class="big-input"
              v-model="message"
              required
              placeholder="Ваш отзыв*"
            ></textarea>
            <div class="boxes">
              <div class="drop_block" v-if="!dragActive">
                <div class="explanation_text">
                  <span>Перетащите фото сюда</span><br />
                  или <span>выберите из библиотеки</span><br />
                  <span class="file_name"></span>
                </div>
                <input
                  id="drop_field"
                  type="file"
                  @change="uploadFiles"
                  name="file"
                  multiple
                  accept="image/x-png,image/gif,image/jpg,image/png,image/jpeg"
                />
                
              </div>
              <input
                type="submit"
                class="btn btn-primary submit submit_red_awards"
                value="Отправить"
              />
            </div>
          </form>
          <div>
            <p v-for="(e, index) in files" :key="index">{{e.name}} <span style="color:green; font-weight: 700; font-size: 12px;">Загруженно</span></p>
          </div>
          <div class="review_move">
            <div
              class="review_block"
              v-for="review in reviews"
              :key="review.id"
            >
              <div class="review_cred">
                <div><img src="@/assets/img/png/user_photo.png" /></div>
                <div>{{ review.name }}</div>
              </div>
              <div class="review_data">
                <div><span>г.</span>&nbsp;{{ review.city }}</div>
                <div><span>автомобиль:</span>&nbsp;{{ review.auto }}</div>
                <div><span>цвет:</span>&nbsp;{{ review.color }}</div>
              </div>
              <div class="review_post">
                {{ review.message }}
                <div class="review_imgs">
                  <vue-picture-swipe
                    :items="getReviewsImages(review.id)"
                  ></vue-picture-swipe>
                </div>
              </div>
              <div class="review--answer" v-if="review.answer">
                <div class="review--answer-photo">
                  <img src="@/assets/img/call-center-2.png" alt="" />
                </div>
                <div class="review--answer-content">
                  <div class="review--answer-name">Менеджер CANTRA</div>
                  <div
                    class="review--answer-message"
                    v-html="review.answer"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fifth_block fifth_block_home_page onMobile">
      <div class="cantra_content">
        <div class="accordion onMobile">
          <div class="accordion__content">
            <div
              class="accordion__header"
              :class="{ 'is-active': accordionOpen === 1 }"
              @click="openSlide(1)"
            >
              <h3 class="accordion__header-title">Описание товара</h3>
              <div class="close-accordion">+</div>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 1 }">
              <p
                class="accordion__body-content"
                v-html="product.leftcolumn"
              ></p>
              <img
                class="accordion__body-content-img"
                :src="product.middleimage"
                alt=""
              />
              <p
                class="accordion__body-content"
                v-html="product.rightcolumn"
              ></p>
            </div>
            <div
              class="accordion__header"
              :class="{ 'is-active': accordionOpen === 2 }"
              @click="openSlide(2)"
            >
              <h3 class="accordion__header-title">Доставка</h3>
              <div class="close-accordion">+</div>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 2 }">
              <div class="accordion__body-content">
                <h3>Доставка Москва:</h3>
                <p>
                  По Москве мы осуществляем доставку в течении 1-2 дней после 
                  оформления заказа. Специалист может установить накидки на 
                  сиденья авто: стоимость установки комплекта накидок на передние 
                  сиденья - 1000 руб., полного комплекта - 1200 руб.. Стоимость доставки 
                  в пределах МКАД: 490 руб. Стоимость доставки за пределами МКАД: 
                  590 руб. до 10км.
                  <!--  -->
                  <!-- По Москве мы осуществляем доставку в течении 1-2 дней после
                  оформления заказа. Наш специалист может БЕСПЛАТНО установить
                  накидки на Ваш автомобиль в момент доставки. Стоимость
                  доставки в пределах МКАД: 290 руб. Стоимость доставки за
                  пределами МКАД: 390 руб. до 10км. -->
                </p>
                <h3>Доставка по всей России:</h3>
                <p>
                  Доставка заказов осуществляется курьерской службой CDEK и
                  Почтой России. Сроки доставки: CDEK: 3-7 дней* Почта: 3-14
                  дней*
                </p>
                <h3>Доставка по миру:</h3>
                <p>
                  В другие страны мы осуществляем доставку курьерской компанией
                  EMS. Заказы оформляются по полной предоплате, если на сайте по
                  какой-то причине у вас не получается оплатить заказ, оператор
                  посоветует вам другие варианты оплаты при оформлении заказа.
                  Срок доставки зависит от вашей страны.
                  <br />
                  *Предоставленные временные рамки являются приблизительными.
                  Точные сроки доставки, а так же стоимость, Вам озвучит наш
                  оператор, при подтверждении заказа.
                </p>
              </div>
            </div>
            <div
              class="accordion__header"
              :class="{ 'is-active': accordionOpen === 3 }"
              @click="openSlide(3)"
            >
              <h3 class="accordion__header-title">Подробнее о товаре</h3>
              <div class="close-accordion">+</div>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 3 }">
              <p class="accordion__body-content" v-html="product.more"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form
      class="product__recomendations"
      @submit.prevent="addToCartRecommendated"
      v-if="product.recomendation"
    >
      <p class="product__recomendations-title">Рекомендации для вас</p>
      <div class="product__recomendations-products">
        <div
          class="recomendation-card"
          v-for="(recommendation, index) in product.recomendation"
          :key="index"
        >
        <nuxt-link :to="'/cantra-products/' + recommendation.slug">
          <img class="recomendation-card__img" :src="recommendation.image" />
          <p class="recomendation-card__price">{{ recommendation.price }} р.</p>
        </nuxt-link>
          <div
            class="recomendation-card__title"
            style="display: flex; align-items: center; margin: 0"
          >
            <!--            <div v-html="recommendation.brand" style="margin: 0"></div>-->
            {{ recommendation.name }}
          </div>
          <input
            type="checkbox"
            v-model="checkedRecommendations[index].active"
            class="recomendation-card__checkbox"
            @change="recommendationActive(recommendation, index)"
          />
        </div>
        <div class="product__recommendations-info">
          <div class="product__recommendations-info__title">
            <p>{{ fullrecomendationPrice }} р</p>
          </div>
          <input
            type="submit"
            value="Товар добавлен"
            class="product__recommendations-info__button is__success"
            v-if="recSent"
          />
          <input
            v-else
            type="submit"
            value="Добавить в корзину"
            class="product__recommendations-info__button"
          />
          <div v-if="recSent" class="alert alert-success success_design">
            <button
              @click="recSent = !recSent"
              type="button"
              class="close"
              data-dismiss="alert"
            >
              Продолжить покупки
            </button>
            <nuxt-link to="/cart/">>Оформить заказ </nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="modal"
        v-if="activeRecommendation"
        @click.self="
          checkedRecommendations[
            checkedRecommendations.indexOf(
              checkedRecommendations.find((obj) => {
                return obj.id === activeRecommendation.id;
              })
            )
          ].active = false;
          activeRecommendation = null;
        "
      >
        <form
          class="recommendation__choose"
          @submit.prevent="submitRecommendation()"
        >
          <div
            class="close-recommendation"
            @click="activeRecommendation = null"
          >
            &times;
          </div>
          <div class="recommendation__choose-colors">
            <h2
              v-if="colorRecommendation === ''"
              class="recommendation__choose-colors-title"
            >
              Выберите цвет*
            </h2>
            <h2 v-else class="recommendation__choose-colors-title">
              {{ colorRecommendation }}
            </h2>
            <div class="recommendation__choose-colors-images">
              <div
                class="color-new"
                v-for="(color, index) in recommendations.find((obj) => {
                  return Number(obj.id) === activeRecommendation.id;
                }).colors"
                @click="recommendatedColor(color, index)"
                :key="index"
                :class="{
                  'is-active': color.id == recommendationChoosenColor.id,
                }"
              >
                <img
                  class="recommendation__choose-colors-color"
                  :src="color.logo"
                />
              </div>
              <!-- {{recommendations.find((obj)=> {return Number(obj.item_id) === activeRecommendation.id})}} {{Number(recommendations[1].item_id.id) === activeRecommendation.id}} -->
            </div>
          </div>
          <div class="recommendation__choose-button">
            <input type="submit" value="   Выбрать опцию >   " />
          </div>
        </form>
      </div>
    </form>
    <div class="hide_all_reviews">
      <div class="mobile_review" :class="{ inactive: closedReviews }">
        <div class="mobile_review_head">Отзывы</div>
        <div
          class="review_tab_mobile"
          v-for="review in reviews"
          :key="review.id"
        >
          <div class="review_block">
            <div class="review_cred">
              <div><img /></div>
              <div>{{ review.name }}</div>
            </div>
            <div class="review_data">
              <div><span>г.</span>{{ review.city }}</div>
              <div><span>автомобиль:</span>{{ review.auto }}</div>
              <div><span>цвет:</span>{{ review.color }}</div>
            </div>
            <div class="review_post">
              {{ review.message }}
              <div class="review_imgs">
                <vue-picture-swipe
                  :items="getReviewsImages(review.id)"
                ></vue-picture-swipe>
              </div>
            </div>
            <div class="review--answer" v-if="review.answer">
              <div class="review--answer-photo">
                <img src="@/assets/img/call-center-2.png" alt="" />
              </div>
              <div class="review--answer-content">
                <div class="review--answer-name">Менеджер CANTRA</div>
                <div
                  class="review--answer-message"
                  v-html="review.answer"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="insta_feedback_toggle" v-if="closedReviews"></div>
      </div>
      <a @click="closedReviews = !closedReviews" class="insta_toggle-btn"
        >Раскрыть</a
      >
      <h2>Оставьте ваш отзыв</h2>
      <form
        class="form-horizontal"
        id="form-awards"
        @submit.prevent="sendReview"
      >
        <fieldset class="formRow">
          <div class="awards_block_form">
            <div class="formRow--item">
              <label class="formRow--input-wrapper js-inputWrapper">
                <input
                  type="text"
                  v-model="name"
                  name="awards_name"
                  class="formRow--input js-input"
                  id="awards_name"
                  placeholder="Ваше имя"
                /><span class="placeholder"></span>
              </label>
            </div>
            <div class="formRow--item">
              <label class="formRow--input-wrapper js-inputWrapper">
                <input
                  type="text"
                  v-model="city"
                  name="awards_city"
                  class="formRow--input js-input"
                  id="awards_city"
                  placeholder="Город"
                /><span class="placeholder"></span>
              </label>
            </div>
            <div class="formRow--item">
              <label class="formRow--input-wrapper js-inputWrapper">
                <input
                  type="text"
                  v-model="carType"
                  name="awards_car"
                  class="formRow--input js-input"
                  id="awards_car"
                  placeholder="Автомобиль"
                /><span class="placeholder"></span>
              </label>
            </div>
            <div class="formRow--item">
              <label class="formRow--input-wrapper js-inputWrapper">
                <input
                  type="text"
                  v-model="carColor"
                  name="awards_color"
                  class="formRow--input js-input"
                  id="awards_color"
                  placeholder="Цвет"
                /><span class="placeholder"></span>
              </label>
            </div>
            <div class="formRow--item">
              <label class="formRow--input-wrapper js-inputWrapper">
                <textarea
                  name="awards_feedback"
                  v-model="message"
                  class="formRow--input js-input"
                  id="awards_feedback"
                  placeholder="Ваш отзыв"
                ></textarea
                ><span class="placeholder"></span>
              </label>
            </div>
            <div class="drop_block">
              <div class="explanation_text">
                <span>Выберите фото из библиотеки</span><br />
                <!-- <span class="file_name"></span> -->
              </div>
              <input
                id="drop_field"
                type="file"
                @change="uploadFiles"
                name="file"
                multiple
                accept="image/x-png,image/gif,image/jpg,image/png,image/jpeg"
                ref="files"
              />
            </div>
            <div class="buttons awards_button" style="width: auto">
              <input
                type="submit"
                style="position: static"
                class="btn btn-primary submit submit_red_awards"
                value="Отправить"
              />
            </div>
          </div>
        </fieldset>
      </form>
      <!-- <form enctype="multipart/form-data" id="form-upload">
          <div class="drop_block">
              <div class="explanation_text">
                  <span>Перетащите фото сюда</span><br> или <span>выберите из библиотеки</span><br>
                  <span class="file_name"></span>
              </div>
          <input id="drop_field" type="file" name="file" multiple="multiple" accept="image/x-png,image/gif,image/jpeg">
          </div>
      </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VuePhotoZoomPro from "vue-photo-zoom-pro";
import "vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css";
export default Vue.extend({
  layout: "default",
  head() {
    return {
      title: `Купить ${
        this.pageInfo.name || ""
      } - цена, фото, отзывы, описание - интернет-магазин Cantra.ru`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${
            this.pageInfo.name || ""
          } - гарантия, выгодные цены! Купить ${
            this.pageInfo.name || ""
          } в интернет-магазине автомобильных накидок cantra.ru - +7 (499) 967-84-41`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${this.pageInfo.name || ""}`,
        },
      ],
    };
  },
  async fetch() {
    await axios
      .post("https://project.a-lux.dev/api/items", {
        id: Number(this.$route.params.id),
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        this.pageInfo = res.data;
      });
  },
  mounted() {
    // console.log(this.$route)
    let url = this.$route.params.id;
    // let url2 = "https://project.a-lux.dev/api/recommendation/" + url;
    // this.$axios.get(url2).then((res) => {
    //   this.recommendations = res.data;
    //   this.recommendations.forEach((element, index) => {
    //     this.checkedRecommendations.push({
    //       id: element.id,
    //       active: false,
    //     });
    //   });
    // });

    axios
      .post("https://project.a-lux.dev/api/items", {
        id: "",
        slug: url,
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        this.product = res.data;
        this.images = res.data.images[0].images;
        this.colors = res.data.colors;
        this.wholeColor = res.data.price;
        res.data.images.forEach((element) => {
          this.allImages.push(element);
          this.imageColors.push(element.color);
        });
        res.data.images[0].images.forEach((element) => {
          this.zitems.push({
            src: element,
            w: 800,
            h: 800,
          });
        });
        this.$set(this.zitems[this.i], "thumbnail", this.zitems[this.i].src);
        this.recommendations = res.data.recomendation;
        res.data.recomendation.forEach((element, index) => {
          this.checkedRecommendations.push({
            id: element.id,
            active: false,
          });
        });
        this.getReviews(res.data.id);
      });
  },
  components: {
    VuePhotoZoomPro,
  },
  data() {
    return {
      img: [],
      imgArray: [],
      clicked: null,
      images: "",
      activeRecommendation: null,
      recommendations: "",
      wholeColor: "",
      recommendatedCart: [],
      recommendationChoosenColor: "",
      colors: "",
      checkedRecommendations: [],
      zitems: [],
      currentColor: false,
      name: "",
      closedReviews: true,
      recSent: false,
      accordionOpen: 0,
      city: "",
      carType: "",
      carColor: "",
      message: "",
      imageColors: [],
      reviews: "",
      dragActive: false,
      allImages: [],
      product: "",
      fullrecomendationPrice: 0,
      i: 0,
      isError: false,
      selectedContent: 1,
      currentColorName: "Выберите цвет",
      dataSent: false,
      files: [],
      colorRecommendation: "",
      pageInfo: {},
    };
  },
  methods: {
    getReviewsImages(id) {
      let images = [];
      this.reviews.forEach((review) => {
        if (review.id === id) {
          review.images.forEach((image) => {
            images.push({
              src: image,
              w: 1920,
              h: 1080,
              thumbnail: image,
            });
          });
        }
      });
      return images;
    },
    getReviews(id) {
      this.$axios
        .post("https://project.a-lux.dev/api/items/review", {
          item_id: Number(id),
        })
        .then((res) => {
          this.reviews = res.data;
        });
    },
    openSlide(num) {
      if (this.accordionOpen == num) {
        this.accordionOpen = 0;
      } else {
        this.accordionOpen = num;
      }
    },
    addToCartRecommendated() {
      console.log(localStorage.getItem("cartItems"))
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (localStorage.getItem("cartItems") == null) {
        localStorage.setItem("cartItems", JSON.stringify(this.recommendatedCart));
      } else {
        this.recommendatedCart.forEach((e) => {
          cartItems.push(e)
          localStorage.setItem("cartItems", JSON.stringify(cartItems))
        })
      }
      // this.recommendatedCart.forEach((element) => {
      //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
      //   cartItems.push(element);
        
      // });
      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.recSent = !this.recSent;
      this.fullrecomendationPrice = 0;
    },

    submitRecommendation() {
      this.recommendatedCart.push({
        id: this.activeRecommendation.id,
        ammount: 1,
        color: this.recommendationChoosenColor.id,
        colorName: this.recommendationChoosenColor.name,
        price: this.activeRecommendation.price,
        name: this.activeRecommendation.name,
      });

      this.fullrecomendationPrice += this.activeRecommendation.price;
      this.activeRecommendation = null;
      this.recommendationChoosenColor = "";
    },
    recommendatedColor(a, b) {
      this.colorRecommendation = a.name;
      this.recommendationChoosenColor = a;
    },
    recommendationActive(a, b) {
      let isInActive = this.recommendatedCart.find((obj) => {
        return obj.id === a.id;
      });

      if (!isInActive) {
        this.activeRecommendation = a;
      } else {
        this.fullrecomendationPrice -= a.price;
        this.recommendatedCart.splice(
          this.recommendatedCart.indexOf(isInActive),
          1
        );
      }
    },
    // priceViews(money) {
    //   console.log(money)
    //   this.fullrecomendationPrice += money
    // },

    // recommendationActive(a, b) {
    //   console.log(a, b);
    //   let isInActive = this.recommendatedCart.find((obj) => {
    //     return obj.id === a.id;
    //   });
    //   if (isInActive === undefined) {
    //     this.activeRecommendation = a;
    //   } else {
    //     this.fullrecomendationPrice -= a.price;
    //     this.recommendatedCart.splice(
    //       this.recommendatedCart.indexOf(isInActive),
    //       1
    //     );
    //   }
    // },

    uploadFiles(event) {
      // this.imgArray = event.target.files;
      // if (this.imgArray.length > 3) {
      //   alert("Можно загрузить не более 3 фотографий :(");
      //   return;
      // }
        console.log(event.target.files)
      Array.from(event.target.files).forEach((e) => {
        this.files.push(e);
        console.log(this.files)
      });

      // if (this.files.length > 3) {
      //   alert("Можно загрузить не более 3 фотографий :(");
      //   this.files = this.files.splice(1);
      //   return;
      // }
    },
    sendReview() {
      let cringe = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      let fd = new FormData();
      let url = window.location.pathname.split("/").pop();

      fd.append("item_id", url);
      fd.append("name", this.name);
      fd.append("city", this.city);
      fd.append("auto", this.carType);
      fd.append("color", this.carColor);
      fd.append("message", this.message);
      if (this.files && this.files.length > 0) {
        for (let i = 0; i < this.files.length; i++) {
          fd.append("images[]", this.files[i]);
        }
      }

      this.$axios
        .post("https://project.a-lux.dev/api/items/review/create", fd, cringe)
        .then((res) => {
          alert("Ваш отзыв был отправлен !");
          this.name =
            this.city =
            this.carType =
            this.carColor =
            this.message =
              "";
          this.files = this.imgArray = [];
          this.$refs.files.value = "";
          this.getReviews();
        });
    },
    changePic(a) {
      console.log("zitems", this.zitems);
      delete this.zitems[this.i].thumbnail;
      this.i = a;
      this.$set(this.zitems[this.i], "thumbnail", this.zitems[this.i].src);
    },
    closeRecommendation(recommendation) {
      console.log(recommendation.id);
    },
    setColor(a, b, c) {
      this.currentColor = a;
      this.wholeColor = c;
      this.currentColorName = b;
      this.isError = false;
      this.images = this.allImages[this.imageColors.indexOf(a)].images;
      this.zitems = [];
      this.allImages[this.imageColors.indexOf(a)].images.forEach((element) => {
        this.zitems.push({
          src: element,
          w: 800,
          h: 800,
        });
      });
      this.$set(this.zitems[this.i], "thumbnail", this.zitems[this.i].src);
    },
    addToCartFail() {
      this.isError = true;
    },
    addToCart() {
      if (localStorage.cartItems) {
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let isExist = false;
        let colorExist = false;
        cartItems.forEach((element, index) => {
          if (element.id === Number(this.product.id)) {
            isExist = index + 1;
          } else {
            return false;
          }
          if (element.color === this.currentColor) {
            colorExist = true;
          } else {
            return false;
          }
        });
        if (isExist && colorExist) {
          cartItems[isExist - 1].ammount++;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          this.dataSent = true;
        } else {
          cartItems.push({
            id: this.product.id,
            ammount: 1,
            color: this.currentColor,
            colorName: this.currentColorName,
            is_special: this.product.spechial,
            name: this.product.name,
            price: this.product.price,
          });
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          this.dataSent = true;
        }
      } else {
        let cartItems = [];
        cartItems.push({
          id: this.product.id,
          ammount: 1,
          color: this.currentColor,
          colorName: this.currentColorName,
          is_special: this.product.spechial,
          name: this.product.name,
          price: this.product.price,
        });
        this.dataSent = true;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    },
  },
});
</script>
<style lang="scss">
.image-zoom-image {
  max-width: 100%;
  object-fit: contain;
}

.review_imgs {
  .my-gallery {
    display: flex;
    align-items: flex-start;
  }
  .gallery-thumbnail {
    width: 50px;
    height: 50px;
    a {
      margin-right: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
    img {
      height: 100%;
    }
  }
  .pswp__zoom-wrap {
    transform: translate3d(0, 0, 0) !important;
    padding: 50px 0;
  }
  .pswp__img {
    width: auto !important;
    height: auto !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    max-width: 100%;
    max-height: 90%;
  }
}
.review--answer {
  display: flex;
  align-items: flex-start;
  padding-left: 150px;
  padding-top: 45px;
  &-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &-content {
    margin-left: 15px;
    margin-top: 17px;
  }
  &-name {
    font-size: 14px;
    line-height: 18px;
  }
  &-message {
    margin-top: 15px;
    font-size: 14px;
    line-height: 18px;
  }
}
.color-new {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid transparent;

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}
.color-new.is-active {
  border: 2px solid #ddd;
}
h1.price strike {
  padding-right: 5px;
}
.fileInput {
}
.content {
  overflow: hidden;
}
.close-accordion {
  font-size: 24px;
  background: #fff;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 31px;
  color: #979797;
  border-radius: 50%;
  cursor: pointer;
  margin-left: auto;
  transition: 0.3s;
}

.accordion__header-title {
  cursor: pointer;
}

.accordion__header {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  &.is-active {
    .close-accordion {
      transform: rotate(45deg);
      transition: 0.3s;
    }
  }
}
.close-recommendation {
  font-size: 24px;
  padding: 0px 10px 0px 0px;
  margin: 0px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
}

.recommendation__choose-colors {
  margin-top: 0px !important;

  &-color {
    width: 30px;
  }
}

img.accordion__body-content-img {
  width: 100%;
  padding: 10px;
  max-width: 260px;
}
@media (max-width: 1251px) {
  .content__info-content {
    max-width: 211px !important;
  }
  .content__info {
    display: block !important;
    //     flex-direction: column;
  }
}
.content__info-content p {
  font-size: 14px !important;
  margin-bottom: 15px !important;
}
.content__info-content {
  max-width: 395px !important;
  font-size: 16px !important;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
}
// .right-coll {
//     width: 35vw;
// }
// .fifth_block{
//     margin-top: 40px;
// }
.product__recommendations-info {
  max-width: 200px;
  width: 300px;
  height: 100%;
  display: flex;
  flex-flow: column;
  height: 300px;
  align-items: flex-start;
  justify-content: center;
  &__title {
    // height: 60%;
    padding-top: 50px;
    font-size: 20px;
    font-weight: 600;
    p {
      margin: 0;
    }
  }
  &__button {
    border: 1px solid #db2c29;
    background: #ffffff;
    color: #db2c29;
    font-size: 16px;
    line-height: 27px;
    border-radius: 0;
    margin-top: 15px;
    box-shadow: none;
    text-shadow: none;
    padding: 5px 10px;
    // height: 40%;
  }
}
.recommendation__choose {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 400px;
  width: 100%;
  background: rgba(245, 245, 245, 1);
  height: auto;
  padding: 15px 0;
  transform: translate(-50%, -50%) !important;

  &-colors {
    max-height: 300px;
    height: 100%;
    margin: 20px 15px;
    background: #fff;
    padding-bottom: 10px;
    &-title {
      margin: 0 15px;
      padding-top: 20px;
      font-size: 12px;
      font-weight: normal;
    }
    &-images {
      width: 90%;
      margin: 10px auto;
      display: flex;
      flex-flow: wrap;
    }
    &-color {
      cursor: pointer;
    }
  }
  &-button {
    margin: auto;
    // border-top: 1px sol black;
    text-align: center;
    input {
      border: 1px solid #db2c29;
      background: #ffffff;
      color: #db2c29;
      font-size: 16px;
      line-height: 27px;
      border-radius: 0;
      padding-top: 5px;
      box-shadow: none;
      text-shadow: none;
    }
  }
}
.recomendation-card::before {
  content: "+";
  position: absolute;
  right: -20px;
  top: 50%;
  font-size: 30px;
  color: red;
  transform: translateY(-50%);
}

.recomendation-card__img {
  height: 200px;
  object-fit: contain;
}

.recomendation-card:nth-last-child(2)::before {
  content: "=";
}
.recomendation-card {
  position: relative;
  max-width: 230px;
  width: 100%;
  display: flex;
  text-align: left;
  margin-right: 30px;
  flex-flow: column;
  align-items: center;
  &__img {
    max-width: 200px;
  }
  &__price {
    width: 90%;
    margin: 0;
    text-align: left;
    margin-bottom: 5px;
    font-size: 15px;
  }
  &__title {
    width: 90%;
    text-align: left;
    p {
      margin: 0 !important;
    }
    margin-bottom: 20px !important;
  }
  &__checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    margin: auto !important;
    padding-top: 20px !important;
    text-align: center;
  }
}
.product__recomendations {
  &-products {
    display: flex;
  }
  &-title {
    margin-top: 60px;
    margin-bottom: 40px;
    color: #000000;
    font-weight: normal;
    line-height: 27px;
    font-size: 18px;
    text-transform: uppercase;
    width: 362px;
    border-bottom: 1px solid #000000;
    font-family: "Lato", sans-serif;
  }
}
.accordion {
  &__content {
    width: 90%;
    margin: auto;
  }
  &__header {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 10px 0 20px 0;
    &:first-child {
      border-top: 0;
    }
  }
  &__body {
    max-height: 0px;
    transition: 0.3s ease-in-out all;
    overflow: hidden;
    &-content {
      font-size: 15px;
      // width: 80%;
      // margin: auto;
    }

    &.open {
      overflow-y: auto;
    }
  }
}
.open {
  // display: flex;
  max-height: 300px;
  height: 100%;
  overflow: scroll;
  transition: 0.5s ease-in-out all;
}

.product_content .accordion__content {
  padding-top: 0;
}

.review_move {
  margin-top: 60px;
}
.boxes {
  max-width: 650px;
  position: relative;
}
.submit_red_awards {
  position: absolute;
  top: 10px;
  background-color: #ff482e;
  right: 0;
}
.drop_block {
  margin: 0;
}
.drag-n-drop {
  width: 400px;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.review_form {
  width: 100%;
  height: 100%;
}
.big-input {
  width: 646px;
  margin-top: 15px;
  height: 100px;
  border: solid 1px #cdcdcd;
  background-color: #ffffff;
  padding-left: 12px;
  padding-top: 12px;
  font-size: 17px;
  color: #171717;
  resize: none;
}
.smallboxes {
  max-width: 650px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  input {
    width: 148px;
    letter-spacing: 0.2px;
    font-weight: 400;
    resize: none;
    transition: all 0.2s ease;
    height: 32px;
    border-radius: 0;
    border: solid 1px #cdcdcd;
    background-color: #ffffff;
    padding-left: 12px;
    font-size: 17px;
    color: #171717;
  }
}

.char__content {
  padding-top: 30px;
}
.content__info {
  // min-height: 30vw;
  display: flex;
  align-items: flex-start;
  &-title {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 300;
    color: #000000;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  &-block {
    width: 100%;
    height: auto;
  }
  img {
    // max-width: 579px;
    // height: 300px;
    // max-width: 302px;
    height: 332px;
    margin: 10px;
    width: 100%;
    object-fit: contain;
  }
  .product-info-image {
    width: auto;
    height: auto;
    max-width: 800px;
    margin-left: 20px;
  }
  &-bigcontent {
    // width: 90%;
    font-size: 14px !important;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    p {
      font-size: 14px !important;
    }
    h1 {
      font-size: 14px;
      line-height: 18px;
      color: #000000;
      font-weight: normal;
      margin-bottom: 20px;
    }
  }
  &-content {
    max-width: 500px;
    font-size: 14px !important;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    p {
      font-size: 14px !important;
    }
    h3 {
      font-size: 14px;
      line-height: 18px;
      color: #000000;
      font-weight: normal;
      // margin-bottom: 20px;
    }
  }
}

.char__tab {
  width: 100%;
  border-bottom: 1px solid black;
  &-content {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
  }
  &-h1-text {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: 0.1s ease-in all;
    border-bottom: 3px solid transparent;
  }
  &-h1-text:hover {
    color: rgba(0, 0, 0, 0.85);
    transition: 0.1s ease-in all;
    // border-bottom: 1px solid rgb(219, 44, 41);
  }
}
.underlined {
  color: rgb(0, 0, 0);
  transition: 0.1s ease-in all;
  border-bottom: 3px solid rgb(219, 44, 41);
}
.onMobile {
  display: none;
}

.color-title {
  padding: 10px 0 0 0;
}
.first__block {
  width: 100%;
  max-height: 600px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.images {
  display: flex;
  justify-items: center;
}
.image-zoom {
  max-width: 400px;
}
// .img-region{
//             width: 100% !important;
//             height: 400px !important;
// }
.images-choose img {
  height: 100% !important;
  max-height: 100px !important;
}
.images-choose {
  display: flex;
  flex-flow: column;
  max-height: 350px;
  height: 100%;
  overflow-y: auto;
  max-width: 100px;
  width: 100%;
  margin-right: 50px;
}
.new-gallery-choose, .images-choose + .image-zoom .vue-photo-zoom-pro {
  position: relative;
  &::after {
    content: "";
    background-image: url("@/assets/img/op3.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  img {
    max-width: 100% !important;
    height: auto !important;
  }

  .selector {
    z-index: 3;
  }
}
.description {
  &-text {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  }
  &-color {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  &-colors {
    width: 100%;
    display: flex;
    max-width: 371px;
    margin: auto;
    flex-flow: wrap;
    &-logo {
      margin: 1px 5px;
      cursor: pointer;
      // border: 0.1mm solid black;
      border: 2px solid transparent;
      width: 21px;
      border-radius: 45px;
      &.selected-color {
        border: 2px solid #ddd;
      }
    }
  }
  &-button {
    max-height: 200px;
    height: 100%;
    &_add {
      width: 80%;
      height: 40px;
      color: #db2c29;
      font-size: 16px;
      line-height: 27px;
      font-family: "Lato", sans-serif;
      background: #fff;
      border: 1px solid #db2c29;
    }
  }
}

.with-mark {
  .my-gallery {
    position: relative;
  }
  .gallery-thumbnail {
    a {
      display: block;
      position: relative;
      overflow: hidden;
      &::after {
        content: "";
        background-image: url("@/assets/img/op3.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .first__block {
    flex-flow: column;
    margin-bottom: 100px;
  }

  .product_content .first__block {
    margin-bottom: 0 !important;
  }

  .product__recomendations-title {
    margin-top: 30px;
  }

  .no-margin {
    margin-bottom: 0 !important;
  }
  .images-choose {
    margin: 0;
  }
  .img-region {
    padding-left: 10px;
  }

  .review--answer {
    padding-left: 35px;
  }
}
@media (max-width: 707px) {
  .onMobile {
    display: block !important;
  }
}
.hide_all_reviews {
  margin-top: 20px;
}
.mobile_review {
  overflow: hidden;
  height: auto;
}
.inactive {
  height: 200px !important;
}
.gallery-thumbnail {
  max-width: 600px;
  max-height: 600px;
  img {
    width: 100%;
  }
}

@media (max-width: 800px) {
  .first__block {
    max-height: 100%;
    margin-bottom: 0px;
  }

  .product__recomendations {
    padding-bottom: 100px;
    max-width: 300px;
  }
  .product__recomendations-products {
    position: relative;
  }
  .recomendation-card {
    max-width: 100px;
    max-height: fit-content;
    height: 100%;
    &__img {
      max-width: 75px;
    }
    &__title {
      flex-flow: wrap;
    }
    &__checkbox {
      margin: 0;
    }
  }
  .product__recommendations-info {
    position: absolute;
    bottom: -100px;
    height: auto;
    width: 100%;
    max-width: 300px;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    background: #f7f7f7;
    padding: 15px;
    border: 1px solid #ccc;
    &__title {
      margin: 0;
      padding: 0;
      margin-left: 10px;
    }
    &__button {
      margin: 0;
    }
  }
}
.activated {
  border: 2px solid #ddd;
  border-radius: 22px;
}

@media screen and (max-width: 550px) {
  .mobile_review {
    // height: auto !important;
  }

  .images-choose img {
    max-height: 50px !important;
  }
}
</style>
