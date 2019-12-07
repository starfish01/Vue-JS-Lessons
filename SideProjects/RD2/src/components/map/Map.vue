<template>
  <div style="height: 100%; width: 100%;">
    <div>
      <div class="columns is-multiline">
        <div class="column is-1">
          <b-field label="Icon">
            <b-select v-model="selectedIcon" expanded placeholder="Select">
              <option value>No Icon</option>
              <option v-for="option in 256" :value="option" :key="option">{{option}}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-1">
          <img :src="selectedIconCom" />
        </div>

        <div class="column is-one-quarter">
          <b-field label="Item Section">
            <b-input v-model="markerMakerSection"></b-input>
          </b-field>
        </div>

        <div class="column is-one-quarter">
          <b-field label="Item Group">
            <b-input v-model="markerMakerGroup"></b-input>
          </b-field>
        </div>

        <div class="column is-one-quarter">
          <b-field label="Item Title">
            <b-input v-model="markerMakerItem"></b-input>
          </b-field>
        </div>

        <div class="column is-one-quarter">
          <button class="button is-medium is-primary" @click="alert">Example data</button>
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column">
          <b-field label="Output">
            <b-input v-model="markerMakeOutput" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
    </div>
    <l-map
      style="height: 100%; width: 100%; background:#D3B790"
      @mousemove="getMousePosition"
      :zoom="zoom"
      :center="center"
      :maxZoom="8"
      :minZoom="2"
      @update:zoom="zoomUpdated"
      @click="clickCheck(mousePosition)"
      id="map"
    >
      <l-tile-layer :url="url" :noWrap="true" />

      <!-- Types of Markers -->

      <template v-for="section in markerPoints">
        <!-- Marker -->
        <appMarker
          v-if="section.type === 'marker' && section.display"
          :key="section.id"
          :markerData="section"
        ></appMarker>

        <!-- Circle -->
        <appCircle
          v-if="section.type === 'circle'  && section.display"
          :key="section.id"
          :markerData="section"
        ></appCircle>

        <!-- Polygon -->
        <appPolygon
          v-if="section.type === 'polygon'  && section.display"
          :key="section.id"
          :markerData="section"
        ></appPolygon>

        <!-- end markers -->
      </template>

      <!-- Navbar -->

      <appNavBar v-if="markerPoints.length" :mapData="mapData"></appNavBar>

      <!-- end Navbar -->

      <div class="latinfo">{{ mousePosition.lat - 85 }}, {{ mousePosition.lng + 180 }}</div>
    </l-map>
    <div class="columns is-multiline">
      <div class="column">
        <b-field label="TEST">
          <b-input v-model="testMarkerData" type="textarea"></b-input>
        </b-field>
        <button @click="clickDataTest()" class="button is-medium is-primary">Test data</button>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControl } from "vue2-leaflet";
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";

import appMarker from "./markers/Marker";
import appCircle from "./markers/Circle";
import appPolygon from "./markers/Polygon";

import appNavBar from "./includes/Navbar";

export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    appMarker,
    appCircle,
    appPolygon,
    appNavBar
  },
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
    clickCheck(mousePosition) {
      const item = {
        title: this.markerMakerItem,
        display: true,
        type: "marker",
        position: [mousePosition.lat, mousePosition.lng]
      };

      if (this.selectedIcon) {
        item.icon = {
          url: this.selectedIconString
        };
      }

      this.markerMakeArray.push(item);

      let outputMaker = {
        title: this.markerMakerSection,
        groups: [
          {
            title: this.markerMakerGroup,
            display: false,
            group: true,
            locations: this.markerMakeArray
          }
        ]
      };

      this.markerMakeOutput = JSON.stringify(outputMaker);
    },
    alert() {
      this.$buefy.dialog.alert(JSON.stringify(this.mapData));
    },
    clickDataTest() {
      const mapDataPoints = [];

      const runningData = [JSON.parse(this.testMarkerData)];

      runningData.forEach((section, sectionIndex) => {
        section.groups.forEach((group, groupIndex) => {
          group.locations.forEach((location, locationIndex) => {
            location.id = "" + sectionIndex + groupIndex + locationIndex;
            mapDataPoints.push(location);
          });
        });
      });

      this.mapData = [JSON.parse(this.testMarkerData)];

      this.markerPoints = mapDataPoints;
    }
  },
  props: {
    mapData: Array,
    markerPoints: Array
  },
  data() {
    return {
      url: "https://s.rsg.sc/sc/images/games/RDR2/map/game/{z}/{x}/{y}.jpg",
      zoom: 2,
      center: [60, -40],
      displayMenu: false,
      mousePosition: { lat: 0, lng: 0 },
      markerMakerSection: "",
      markerMakerItem: "",
      markerMakeOutput: "",
      markerMakeArray: [],
      selectedIcon: "",
      selectedIconString: "",
      markerMakerGroup: "",
      testMarkerData: ""
    };
  },
  computed: {
    selectedIconCom() {
      if (!this.selectedIcon) {
        return "";
      }
      let image = this.selectedIcon;
      if (image < 10) {
        image = "00" + image;
      } else if (image < 100) {
        image = "0" + image;
      }
      const iconUrl = "marker/RDOIcons/image_part_" + image + ".png";
      this.selectedIconString = iconUrl;
      return iconUrl;
    }
  }
};
</script>
<style lang="scss" scoped>
#map {
  z-index: 10;
}
.latinfo {
  bottom: 0;
  position: absolute;
  z-index: 999;
}
</style>
