<template>
  <section class="js-horizontal-collapse  horizontal-collapse ">
    <ul class="horizontal-collapse__inner accordion-block" :class="{'notAccordion' : Opened}">
      <HorizontalCollapseItem className="horizontal-collapse__item--1"  :class="{'notOpen': Opened && (index != 1), 'bg--1':  Opened && (index === 1)}" @open="opened(1)" @close="closed()" >
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Защита от износа</h2>
          <span class="plus-x" :class="{'x-min' : index != 1}">+</span>
        </div>
        <div class="horizontal-collapse__active-content" >
          <h2 class="horizontal-collapse__heading fat" >Защита от износа</h2>
          <p class="horizontal-collapse__body">
            Накидки защищают салон от потертостей и износа.
            Накидки можно постирать в режиме деликатной стирки.
            Они не потеряют форму и не выцветут даже после 30 000 циклов использования.
          </p>
        </div>
      </HorizontalCollapseItem>

      <HorizontalCollapseItem className="horizontal-collapse__item--2" :class="{'notOpen': Opened && (index != 2), 'bg--2':  Opened && (index === 2)}" @open="opened(2)" @close="closed()">
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Защита от окрашивания</h2>
          <span class="plus-x" :class="{'x-min' : index != 2}">+</span>
        </div>
        <div class="horizontal-collapse__active-content">
          <h2 class="horizontal-collapse__heading fat">Защита от окрашивания</h2>
          <p class="horizontal-collapse__body">
            Обезопасьте кожу своего авто от окрашивания джинсами и другими материалами.
          </p>
        </div>
      </HorizontalCollapseItem>

       <HorizontalCollapseItem className="horizontal-collapse__item--3"  :class="{'notOpen':  Opened && (index != 3)}" @open="opened(3)" @close="closed()">
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Лёгкая установка </h2>
          <span class="plus-x" :class="{'x-min' : index != 3}">+</span>
        </div>
        <div class="horizontal-collapse__active-content" >
          <h2 class="horizontal-collapse__heading fat">Лёгкая установка</h2>
          <p class="horizontal-collapse__body">
             Простая установка, которая займет не более 10 минут.
            <iframe class="iframe" src="https://www.youtube.com/embed/6uWLxa7ihnE"> </iframe> 
          </p>
        </div>
      </HorizontalCollapseItem>

      <HorizontalCollapseItem className="horizontal-collapse__item--4" :class="{'notOpen':  Opened && (index != 4), 'bg--4':  Opened && (index === 4)}" @open="opened(4)" @close="closed()">
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Ручная работа</h2>
          <span class="plus-x" :class="{'x-min' : index != 4}">+</span>
        </div>
        <div class="horizontal-collapse__active-content">
          <h2 class="horizontal-collapse__heading fat">Ручная работа</h2>
          <p class="horizontal-collapse__body">
             CANTRA — автомобильные накидки ручной работы. Форма накидок вырезается вручную, каждый ромбик, кант и детали крепления — все прошивается швеями на профессиональном оборудовании.<br>
            Ручное изготовление легко отличить хотя бы присмотревшись к ромбам: если их строчит швея, они идут ровные и четко смыкаются друг с другом в одной точке.<br>
            Швеи прошивают все слои накидки насквозь, поэтому даже при постоянном использовании форма накидок CANTRA не изменится. 
          </p>
        </div>
      </HorizontalCollapseItem>

    </ul>
  </section>
</template>

<script>
import HorizontalCollapseItem from "~/components/accordionitem.vue";

export default {
  name: "HorizontalCollapse",
  components: {
    HorizontalCollapseItem
  },
  data(){
    return{
     Opened: false,
     index: 0,
    }
  },
  methods:{
      closed(){
        this.Opened = false
        this.index = 0
      },
      opened(a){
        this.index = a
        this.Opened = true
      }
  },
};
</script>

<style lang="scss">
$transitionDurationMs: 0.5s;
.accordion-block{
    max-width: 1000px;
    background: url('@/assets/img/bigchaiirs.png');
    background-size: contain;
    background-repeat: no-repeat;
}
.iframe{
  width: 810px;
  height: 477px;
  
  // height: 100%;
  margin-top: 10px;
}
.horizontal-collapse {
//   max-width: 1000px;
  margin: 0 auto;
  max-width: 1000px;
  width: 90%;
    height: 655px;
    // width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // margin-bottom: 5rem;
  color: black;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  &__inner {
    padding: 0;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &__item {
    min-height: 42rem;
    list-style: none;
    padding: 0;
    overflow: hidden;
    min-width: 10rem;
    max-width: 40rem;
    position: relative;
    transition: width $transitionDurationMs;
    border-right: 1px solid white;
    &:first-child {
      border-left: 1px solid white;
    }

    &.is-active {
      // color: #fff;

      .horizontal-collapse__inactive-content .horizontal-collapse__heading {
        opacity: 0;
      }

      .horizontal-collapse__active-content {
        opacity: 1;
      }
    }
  }

  &__item-inner {
    padding: 3rem;
  }

  &__inactive-content {
    opacity: 1;
    transition: opacity $transitionDurationMs;
    position: absolute;
    bottom: 2rem;
    left: 1rem;

    .horizontal-collapse__heading {
        width: 80%;
      user-select: none;
      cursor: default;
      // font-size: 3rem;   
      // line-height: 3rem;
      color: black;
      margin-bottom: 0;

    }
  }

  &__active-content {
    opacity: 0;
    transition: opacity $transitionDurationMs;
    cursor: default;
  }

  &__heading {
    margin-top: 0;
    font-size: 24px;
  }
  

  &__body {
    margin-bottom: 2rem;
    line-height: 1.3;
    font-size: 18px;
    // font-family: 'Lato', sans-serif;
    width: 50%;
  }

  &__link {
    display: inline-block;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    line-height: 1;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 1.7rem;
    font-weight: bold;
  }
}
.horizontal-collapse__inner{
  cursor: pointer;
}
.notOpen  .horizontal-collapse__inactive-content {
        writing-mode: vertical-rl;
      text-orientation: mixed;
      display: flex;
      // width: 100%;
      flex-flow:row-reverse;
      justify-content: space-between;
      align-items: center;
      transform: rotate(180deg);
}
.notOpen{
      width: 50px !important;
      min-width: 30px !important;
}
.notAccordion{
  background: none;
}
// .horizontal-collapse__heading{
//   font-size: 18px;
// }

.plus-x{
  width: 34px;
  height: 34px;
  background-color: #fff;
  // display: block;
  display: flex;
  align-items: center;
  margin: 15px 15px 0 0;
  justify-content: center;
  border-radius: 20px;
  text-align: center;
  // padding-top: 6px;
  font-size: 31px;
  color: #979797;
  transform: rotate(-45deg);
}
.notOpen .plus-x{
  margin: 0 0 15px 0;
  transform: rotate(0deg);
}

.x-min{
  transform: rotate(0deg);
}
.bg--1 {
  background-image: url('@/assets/img/seats.jpg');
}

.bg--2 {
  background-image: url('@/assets/img/women.jpg');
}
.bg--4 {
  background-image: url('@/assets/img/handmade.jpg');
}
.fat{

    font-weight: 600;
}
</style>
