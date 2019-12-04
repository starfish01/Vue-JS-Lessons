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

      <div v-if="markerPoints.length" class="controls-nav-map-menu">
        <span class="sidemenu" v-if="displayMenu">
          <v-icon @click="displayMenuChange()" dark>mdi-arrow-right</v-icon>
        </span>
        <span class="sidemenuin" v-if="!displayMenu">
          <v-icon @click="displayMenuChange()" dark>mdi-arrow-left</v-icon>
        </span>
        <transition name="slide">
          <div class="controls-nav-map-menu-inside" v-if="displayMenu">
            <div style="text-align:center">
              <h3 class="subtitle">Red Dead Map Online</h3>
              <hr />
            </div>
            <div class="columns is-multiline">
              <template v-for="(group, groupIndex) in mapData">
                <div class="column is-centered is-full" v-bind:key="'' + groupIndex">{{group.title}}</div>
                <template v-for="(section, sectionIndex) in group.groups">
                  <div
                    class="column is-centered is-full"
                    v-bind:key="'' + groupIndex + sectionIndex"
                  >
                    <v-checkbox
                      @change="sectionClicked(section)"
                      class="shrink font-weight-bold checkboxclicker"
                      :label="section.title"
                      v-model="section.display"
                      hide-details
                    ></v-checkbox>
                  </div>

                  <template v-if="!section.group && section.locations.length > 1">
                    <template v-for="(item, i) in section.locations">
                      <div
                        v-bind:key="i + section.title + groupIndex"
                        class="column is-one-third is-half-touch subchecklistitem"
                      >
                        <v-checkbox
                          class="shrink ma-0 pa-0"
                          :label="item.title"
                          v-model="item.display"
                          hide-details
                        ></v-checkbox>
                      </div>
                    </template>
                  </template>
                </template>
              </template>
            </div>
          </div>
        </transition>
      </div>
      <div class="latinfo">{{ mousePosition.lat - 85 }}, {{ mousePosition.lng + 180 }}</div>
      <!-- end Navbar -->
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

export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    appMarker,
    appCircle,
    appPolygon
  },
  methods: {
    getMousePosition(event) {
      this.mousePosition = {
        lat: event.latlng.lat.toFixed(2),
        lng: event.latlng.lng.toFixed(2)
      };
    },
    displayMenuChange() {
      // console.log(this.displayMenu);
      this.displayMenu = !this.displayMenu;
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
    },
    sectionClicked(section) {
      const sectionReference = section.locations;
      const displayValue = section.display;

      sectionReference.forEach(function(location) {
        location.display = displayValue;
      });
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

      console.log(outputMaker);

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
      bounds: null,
      displayMenu: false,
      mousePosition: { lat: 0, lng: 0 },
      checkboxGroup: [],
      markerMakerSection: "",
      markerMakerItem: "",
      markerMakeOutput: "",
      markerMakeArray: [],
      selectedIcon: "",
      selectedIconString: "",
      markerMakerGroup: "",
      testMarkerData: "",
      mapDataDisplay: []
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
h3 {
  color: white;
}
.latinfo {
  bottom: 0;
  position: absolute;
  z-index: 999;
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
  overflow-y: auto;
  height: 600px;
}
.label.v-label.theme--light {
  font-size: 0.8em;
}
.location-button {
  position: absolute;
  background: white;
  z-index: 9999;
  font-size: 20px;
  left: auto;
  right: 10px;
  top: 10px;
  padding: 10px;
  border: 1px gray solid;
  border-radius: 3px;
}
.location-button-exit {
  position: absolute;
  z-index: 9999;
  left: auto;
  right: 8px;
  top: 8px;
  padding: 0px;
}
.controls-nav-map-menu {
  top: 0;
  position: absolute;
  right: 0;
  z-index: 1000;
  height: 100%;
  @media screen and (min-width: 769px) {
    width: 40%;
  }

  .subchecklistitem {
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
  .sidemenu {
    position: absolute;
    left: -34px;
    background: #948066;
    padding: 5px;
    border-bottom-left-radius: 10px;
  }
  .sidemenuin {
    position: absolute;
    right: 0;
    background: #948066;
    padding: 5px;
    border-bottom-left-radius: 10px;
  }
  .controls-nav-map-menu-inside {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    background: #948066;
    padding: 10px;
  }
  .checkboxclicker {
    .v-input--selection-controls__input {
      display: none;
    }
  }
  .column {
    padding-top: 0;
    padding-bottom: 0;
  }

  .b-checkbox {
    &.checkbox {
      .check {
        display: none;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
</style>
