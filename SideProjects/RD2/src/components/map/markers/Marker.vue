<template>
  <l-marker
    v-if="isGroup && markerData.display || !isGroup && sectionDisplay"
    :lat-lng="markerData.position"
  >
    <appPopup :popupText="markerData.title"></appPopup>
    <l-icon
      :icon-size="markerData.icon.icon_size ? markerData.icon.icon_size : [32, 32]"
      v-if="markerData.icon"
      :icon-url="markerData.icon.url"
    ></l-icon>
  </l-marker>
</template>

<script>
import { LMarker, LIcon } from "vue2-leaflet";
import appPopup from "./shared/Popup";

export default {
  components: {
    LMarker,
    LIcon,
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

