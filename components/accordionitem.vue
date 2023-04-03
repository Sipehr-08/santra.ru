<template  >
  <li
    @click="activate" 
    v-on-clickaway="away"
    :style="
      `width: ${
        isActive ? itemMaxWidth+'px' : 100+'%' 
      };min-width: ${itemMinWidth}px;max-width: ${itemMaxWidth}px;`
    "
    class="js-horizontal-collapse-item  horizontal-collapse__item"
    :class="{ 'is-active': isActive, [className]: true, }"
    tabindex="0"
    role="button"
  >
    <div
      :style="`width: ${itemMaxWidth}px`"
      class="js-horizontal-collapse-item-inner  horizontal-collapse__item-inner"
    >
      <slot></slot>
    </div>
  </li>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "HorizontalCollapseItem",
  mixins: [clickaway],
  data() {
    return {
      isActive: false,
      itemMinWidth: 150,
      isOpen: true,
      itemMaxWidth: 1000
    };
  },    
  watch: {
      isActive(){
        if(this.isActive){
          this.$emit('open')
        }
        else{
          this.$emit('close')
        }

      }
    },
  methods: {
    activate(){
      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 10);
    },
    away() {
      this.isActive = false;
    },
  },
  props: ["className"]
};
</script>

<style></style>
