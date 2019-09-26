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
      <l-control-layers position="topleft" />
      <l-tile-layer
        v-for="layer in layers"
        :key="layer.name"
        :layers="layer.layers"
        :visible="layer.visible"
        :name="layer.name"
        layer-type="base"
      />

      <!-- <l-marker :lat-lng="markerLatLng">
        <l-tooltip>Hello!</l-tooltip>
      </l-marker>-->

      <l-tile-layer :noWrap="true" :url="url"></l-tile-layer>
      <div class="info-lat-long">
        <span>{{ mousePosition.lat }} x {{ mousePosition.lng }}</span>
      </div>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LControl,
  LControlLayers,
  LWMSTileLayer
} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LControlLayers,
    LWMSTileLayer
  },
  mounted() {},
  methods: {
    getMousePosition(event) {
      this.mousePosition = {
        lat: event.latlng.lat.toFixed(2),
        lng: event.latlng.lng.toFixed(2)
      };
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    showAlert() {}
  },
  data() {
    return {
      url: "/map-assets/{z}/{x}/{y}.png",
      zoom: 2,
      center: [42, 0],
      bounds: null,
      mousePosition: { lat: 0, lng: 0 },
      markerLatLng: [47.31322, -1.319482],
      layers: [
        {
          name: "Boundaries",
          visible: false,
          layers: "ne:ne_10m_admin_0_boundary_lines_land"
        },
        {
          name: "Countries",
          visible: true,
          layers: "ne:ne_10m_admin_0_countries"
        },
        {
          name: "Boundaries and Countries",
          visible: true,
          layers:
            "ne:ne_10m_admin_0_boundary_lines_land,ne:ne_10m_admin_0_countries"
        }
      ]
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
.leaflet-control {
  border: 2px solid rgba(0, 0, 0, 0.2);
}
button.leaflet-control-layers-toggle {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
</style>
