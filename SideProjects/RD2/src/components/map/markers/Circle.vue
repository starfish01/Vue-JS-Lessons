<template>
  <l-circle
    v-if="isGroup && markerData.display || !isGroup && sectionDisplay"
    :color="markerData.colour"
    :weight="markerData.weight ? markerData.weight : 0"
    :lat-lng="markerData.position"
    :radius="markerData.radius"
  >
    <appPopup :popupText="markerData.title"></appPopup>
  </l-circle>
</template>

<script>
import { LCircle } from "vue2-leaflet";
import appPopup from "./shared/Popup";

export default {
  components: {
    LCircle,

    appPopup
  },
  props: {
    markerData: {
      type: Object
    },
    isGroup: {
      type: Boolean
    }
  }
};
</script>

