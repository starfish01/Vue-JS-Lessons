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
      <l-tile-layer :url="url" />

      <l-control class="example-custom-control">
        <ul>
          <li v-for="(section, i) in mapData" v-bind:key="i">{{ section.title }}</li>
        </ul>
      </l-control>

      <template v-for="(section, i) in mapData">
        <template v-if="section.display">
          <l-marker v-for="(item,i) in section.locations" v-bind:key="i" :lat-lng="item.position">
            <l-popup>
              <div @click="innerClick">{{item.title}}</div>
            </l-popup>
          </l-marker>
        </template>
      </template>
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
  LWMSTileLayer,
  LPopup,
  LTooltip
} from "vue2-leaflet";
import { latLng } from "leaflet";

import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LControlLayers,
    LWMSTileLayer,
    LPopup,
    LTooltip
  },
  mounted() {},
  methods: {
    innerClick() {
      alert("Click!");
    },
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
    showLongText() {
      this.showParagraph = !this.showParagraph;
    }
  },
  data() {
    return {
      url: "/map-assets/{z}/{x}/{y}.png",
      zoom: 2,
      center: [42, 0],
      bounds: null,
      mousePosition: { lat: 0, lng: 0 },
      // withPopup: latLng(47.41322, -1.219482),
      // pointtwo: [70.41322, -1.219482],

      mapData: [
        {
          id: 1,
          title: "Premium Cigarettes",
          display: true,
          locations: [
            {
              title: "Text Here",
              position: [70.41322, -1.219482]
            },
            {
              title: "Second one",
              position: [47.41322, -1.219482]
            }
          ]
        },
        {
          id: 1,
          title: "Ho",
          display: true,
          locations: [
            {
              title: "Text 1222222",
              position: [40.41322, -1.219482]
            }
          ]
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
.example-custom-control {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}
</style>
