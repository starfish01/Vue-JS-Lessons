<template>
  <chrome-picker v-model="color"/>
</template>

<script>
import { Chrome } from "vue-color";
export default {
  props: { colourFromParent: Object },
  data() {
    return {
      colorValue: this.colourFromParent.hex
    };
  },
  components: {
    "chrome-picker": Chrome
  },
  computed: {
    color: {
      get() {
        return this.colorValue;
      },
      set(newVal) {
        this.value = newVal;
        // console.log(this.colourFromParent.hex);
        this.$emit("colorChange", this.value);
      }
    }
  },
  created: function() {
    
  }
};
</script>

<style>
</style>
