<template>
  <div style="height: 100%; width: 100%">
    <l-map
      style="height: 100%; width: 100%"
      @mousemove="getMousePosition"
      :zoom="zoom"
      :center="center"
      :maxZoom="5"
      :minZoom="2"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :noWrap="true" :url="url"></l-tile-layer>
      <div class="info-lat-long">
      <span>{{ mousePosition.lat }} x {{ mousePosition.lng }}</span>
    </div>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  mounted() {},
  methods: {
    getMousePosition(event) {
      this.mousePosition = {
        lat: event.latlng.lat.toFixed(2),
        lng: event.latlng.lng.toFixed(2)
      }
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  data() {
    return {
      url: "/map-assets/{z}/{x}/{y}.png",
      zoom: 2,
      center: [42, 0],
      bounds: null,
      mousePosition:{lat:0,lng:0}
    };
  }
};
</script>
<style scoped>
.info-lat-long {
    padding: 5px;
    position: absolute;
    z-index: 999;
    bottom: 0px;
    font-weight: 600;
}

</style>
