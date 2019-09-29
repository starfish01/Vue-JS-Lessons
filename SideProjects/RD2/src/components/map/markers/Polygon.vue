<template>
  <div>
    <LPolygon
      v-if="isGroup && markerData.display || !isGroup && sectionDisplay"
      :lat-lngs="markerData.position"
      :color="markerData.colour"
    >
      <appPopup :popupText="markerData.title"></appPopup>
    </LPolygon>
  </div>
</template>

<script>
import { LPolygon } from "vue2-leaflet";
import appPopup from "./shared/Popup";

export default {
  components: {
    LPolygon,
    appPopup
  },
  props: {
    markerData: {
      type: Object
    },
    isGroup: {
      type: Boolean
    },
    sectionDisplay: {
      type: Boolean
    }
  }
};
</script>
