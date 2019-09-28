<template>
  <div style="height: 100%; width: 100%;">
    <l-map
      style="height: 100%; width: 100%; background:#D5B7AB"
      @mousemove="getMousePosition"
      :zoom="zoom"
      :center="center"
      :maxZoom="5"
      :minZoom="2"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :noWrap="true" />

      <l-control class="example-custom-control">
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

      <template v-for="(section) in mapData">
        <template v-if="section.type === 'marker'">
          <template v-for="(item,i) in section.locations">
            <template v-if="section.group">
              <l-marker v-if="item.display" v-bind:key="i + section.title" :lat-lng="item.position">
                <l-popup>
                  <div @click="innerClick">{{item.title}} + {{ i }}</div>
                </l-popup>
              </l-marker>
            </template>
            <template v-if="!section.group">
              <l-marker
                v-if="section.display"
                v-bind:key="i + section.title"
                :lat-lng="item.position"
              >
                <l-popup>
                  <div @click="innerClick">{{item.title}} + {{ i }}</div>
                </l-popup>
              </l-marker>
            </template>
          </template>
        </template>
        <template v-if="section.type === 'circle'">
          <template v-for="(item,i) in section.locations">
<template v-if="section.group">
            <l-circle
             v-if="item.display"
              :color="item.colour"
              v-bind:key="i + section.title"
              :lat-lng="item.position"
              :radius="item.radius"
            >
              <l-popup :content="item.title" />
            </l-circle>
</template>
            <template v-if="!section.group">

              <l-circle
             v-if="section.display"
              :color="item.colour"
              v-bind:key="i + section.title"
              :lat-lng="item.position"
              :radius="item.radius"
            >
              <l-popup :content="item.title" />
            </l-circle>

</template>
          </template>
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
  LTooltip,
  LCircle
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
    LTooltip,
    LCircle
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
    },
    sectionClicked(i) {
      console.log(i)
      const sectionReference = this.mapData[i];
      const displayValue = sectionReference.display;

      // Need to check if this is a group section or not if its not we just need to update the parent
      if (sectionReference.group) {
        sectionReference.locations.forEach(function(location) {
          location.display = displayValue;
        });
        // Update all items
      } else {
        return;
      }
    }
  },
  data() {
    return {
      url: "/map-assets/{z}/{x}/{y}.png",
      zoom: 2,
      center: [42, 0],
      bounds: null,
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
              display: true
            },
            {
              title: "Location B",
              position: [47.41322, -1.219482],
              display: true
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
              position: [40.41322, -1.219482],
              display: true
            },
            {
              title: "Text new",
              position: [43.41322, 4.219482],
              display: true
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
              colour:'green',
              radius: 450000
            },
            {
              title: "Circle",
              position: [20.41322, 30.219482],
              display: true,
              colour:'red',
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
              display: true,
              colour:'red',
              radius: 450000
            },
            {
              title: "Circle",
              position: [30.41322, 60.219482],
              display: true,
              colour:'blue',
              radius: 450000
            }
          ]
        },

        // {
        //   title: "Bear",
        //   display: true,
        //   group: false,
        //   type: "polygon",
        //   locations: [
        //     {
        //       title: "Poly bear",
        //       position: [
        //         [47.2263299, -1.6222],
        //         [47.21024000000001, -1.6270065],
        //         [47.1969447, -1.6136169],
        //         [47.18527929999999, -1.6143036],
        //         [47.1794457, -1.6098404],
        //         [47.1775788, -1.5985107],
        //         [47.1676598, -1.5753365],
        //         [47.1593731, -1.5521622],
        //         [47.1593731, -1.5319061],
        //         [47.1722111, -1.5143967],
        //         [47.1960115, -1.4841843],
        //         [47.2095404, -1.4848709],
        //         [47.2291277, -1.4683914],
        //         [47.2533687, -1.5116501],
        //         [47.2577961, -1.5531921],
        //         [47.26828069, -1.5621185],
        //         [47.2657179, -1.589241],
        //         [47.2589612, -1.6204834],
        //         [47.237287, -1.6266632],
        //         [47.2263299, -1.6222]
        //       ],
        //       display: true
        //     }
        //   ]
        // }
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
.label.v-label.theme--light {
  font-size: 0.8em;
}
</style>
