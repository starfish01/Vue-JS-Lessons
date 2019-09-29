<template>
  <l-popup>
    <div>{{popupText}}</div>
  </l-popup>
</template>

<script>
import { LPopup } from "vue2-leaflet";
export default {
  components: {
    LPopup
  },
  props: {
    popupText: {
      type: String
    }
  }
};
</script>

<style>
</style>
