<template>
  <div style="height: 100%; width: 100%;">
    <l-map
      style="height: 100%; width: 100%; background:#D3B790"
      @mousemove="getMousePosition"
      :zoom="zoom"
      :center="center"
      :maxZoom="8"
      :minZoom="2"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :noWrap="true" />

      <!-- User Checkboxes -->

      <div v-if="!displayMenu" class="location-button">
        <v-btn icon>
          <v-icon @click="displayMenuChange()" dark>mdi-map</v-icon>
        </v-btn>
      </div>

      <div v-if="displayMenu" class="location-button-exit">
        <v-btn icon>
          <v-icon @click="displayMenuChange()" dark>mdi-close</v-icon>
        </v-btn>
      </div>

      <template v-if="displayMenu">
        <div @mouseleave="displayMenuChange()">
          <l-control @mouseleave="displayMenuChange()" class="example-custom-control">
            <template v-for="(section, i) in mapData">
              <v-checkbox
                @change="sectionClicked(i)"
                class="shrink font-weight-bold"
                v-bind:key="i"
                :label="section.title"
                v-model="section.display"
                hide-details
              ></v-checkbox>
              <template v-if="section.group && section.locations.length > 1">
                <v-checkbox
                  v-for="(item,i) in section.locations"
                  v-bind:key="i + section.title"
                  class="shrink ma-0 pa-0"
                  :label="item.title"
                  v-model="item.display"
                  hide-details
                ></v-checkbox>
              </template>
            </template>

            <template v-for="(section, i) in mapData">
              <v-checkbox
                @change="sectionClicked(i)"
                class="shrink font-weight-bold"
                v-bind:key="i"
                :label="section.title"
                v-model="section.display"
                hide-details
              ></v-checkbox>
              <template v-if="section.group && section.locations.length > 1">
                <v-checkbox
                  v-for="(item,i) in section.locations"
                  v-bind:key="i + section.title"
                  class="shrink ma-0 pa-0"
                  :label="item.title"
                  v-model="item.display"
                  hide-details
                ></v-checkbox>
              </template>
            </template>
          </l-control>
        </div>
      </template>

      <!-- Types of Markers -->

      <template v-for="(section) in mapData">
        <!-- Marker -->

        <template v-if="section.type === 'marker'">
          <appMarker
            v-for="(item,i) in section.locations"
            v-bind:key="i + section.title"
            :markerData="item"
            :isGroup="section.group"
            :sectionDisplay="section.display"
          ></appMarker>
        </template>

        <!-- Circle -->

        <template v-if="section.type === 'circle'">
          <appCircle
            v-for="(item,i) in section.locations"
            v-bind:key="i + section.title"
            :markerData="item"
            :isGroup="section.group"
            :sectionDisplay="section.display"
          ></appCircle>
        </template>

        <!-- Polygon -->

        <template v-if="section.type === 'polygon'">
          <appPolygon
            v-for="(item,i) in section.locations"
            v-bind:key="i + section.title"
            :markerData="item"
            :isGroup="section.group"
            :sectionDisplay="section.display"
          ></appPolygon>
        </template>
      </template>

      <!-- end markers -->

      <!-- <div>{{info-lat-long()}}</div> -->
    </l-map>
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
      console.log(this.displayMenu);
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
    sectionClicked(i) {
      console.log(i);
      const sectionReference = this.mapData[i];
      const displayValue = sectionReference.display;
      if (sectionReference.group) {
        sectionReference.locations.forEach(function(location) {
          location.display = displayValue;
        });
      } else {
        return;
      }
    }
  },
  data() {
    return {
      url: "https://s.rsg.sc/sc/images/games/RDR2/map/game/{z}/{x}/{y}.jpg",
      zoom: 2,
      center: [42, 0],
      bounds: null,
      displayMenu: false,
      mousePosition: { lat: 0, lng: 0 },
      mapData: [
        {
          title: "Premium Cigarettes",
          display: true,
          group: true,
          type: "marker",
          locations: [
            {
              title: "Location A",
              position: [70.41322, -1.219482],
              display: true,
              icon: {
                url: "marker/RDOIcons/image_part_076.png",
                icon_size: [40, 50]
              }
            },
            {
              title: "Location B",
              position: [47.41322, -1.219482],
              display: true,
              icon: {
                url: "marker/RDOIcons/image_part_076.png"
              }
            }
          ]
        },
        {
          title: "Horse",
          display: true,
          group: false,
          type: "marker",
          locations: [
            {
              title: "Text 1222222",
              position: [40.41322, -1.219482]
            },
            {
              title: "Text new",
              position: [43.41322, 4.219482]
            }
          ]
        },
        {
          title: "Deer",
          display: true,
          group: true,
          type: "circle",
          locations: [
            {
              title: "Circle",
              position: [10.41322, 50.219482],
              display: true,
              colour: "green",
              radius: 450000
            },
            {
              title: "Circle",
              position: [20.41322, 30.219482],
              display: true,
              colour: "red",
              radius: 450000
            }
          ]
        },
        {
          title: "Bear",
          display: true,
          group: false,
          type: "circle",
          locations: [
            {
              title: "Circle",
              position: [20.41322, 70.219482],
              colour: "red",
              radius: 450000
            },
            {
              title: "Circle",
              position: [30.41322, 60.219482],
              colour: "blue",
              radius: 450000
            }
          ]
        },

        {
          title: "Croc",
          display: true,
          group: true,
          type: "polygon",
          locations: [
            {
              title: "Poly Croc",
              position: [
                [47.2263299, -1.6222],
                [48.21024000000001, -10.6270065],
                [49.1969447, -20.6136169],
                [50.18527929999999, -20.6143036],
                [55.1794457, -22.6098404],
                [60.1775788, -23.5985107],
                [47.2263299, -1.6222]
              ],
              display: true
            },
            {
              title: "Poly Croc",
              position: [
                [57.2263299, 1.6222],
                [58.21024000000001, 10.6270065],
                [59.1969447, 20.6136169],
                [60.18527929999999, 20.6143036],
                [65.1794457, 22.6098404],
                [50.1775788, 23.5985107],
                [57.2263299, 1.6222]
              ],
              display: true
            }
          ]
        },
        {
          title: "Bat",
          display: true,
          group: false,
          type: "polygon",
          locations: [
            {
              title: "Poly Bat",
              position: [
                [17.2263299, -1.6222],
                [18.21024000000001, -10.6270065],
                [19.1969447, -20.6136169],
                [20.18527929999999, -20.6143036],
                [25.1794457, -22.6098404],
                [30.1775788, -23.5985107],
                [27.2263299, -1.6222]
              ],
              display: true
            },
            {
              title: "Poly Bat",
              colour: "red",
              position: [
                [37.2263299, 1.6222],
                [38.21024000000001, 10.6270065],
                [39.1969447, 20.6136169],
                [40.18527929999999, 20.6143036],
                [55.1794457, 22.6098404],
                [40.1775788, 23.5985107],
                [37.2263299, 1.6222]
              ],
              display: true
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
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
</style>
