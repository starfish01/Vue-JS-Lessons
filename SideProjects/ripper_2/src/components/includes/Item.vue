<template>
  <div class="card">
    <div class="list is-hoverable">
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <b-field label="Title">
              <b-input v-model="location.title"></b-input>
            </b-field>
          </div>
          <div class="column is-one-third">
            <b-field label="Message">
              <b-input></b-input>
            </b-field>
          </div>

          <div class="column is-one-third">
            <b-field label="Marker Type">
              <b-select v-model="location.type" expanded placeholder="Select">
                <option
                  v-for="option in markerTypes"
                  :value="option.id"
                  :key="option.id"
                >{{ option.title }}</option>
              </b-select>
            </b-field>
          </div>

          <template v-if="location.type === 'marker'">
            <div class="column is-one-quarter">
              <b-field label="Lat">
                <b-input v-model="location.position[0]"></b-input>
              </b-field>
            </div>
            <div class="column is-one-quarter">
              <b-field label="Lat">
                <b-input v-model="location.position[1]"></b-input>
              </b-field>
            </div>
            <div class="column is-one-quarter">
              <b-field label="Icon">
                <b-select v-model="selectedIcon" expanded placeholder="Select">
                  <option value>No Icon</option>
                  <option v-for="option in 256" :value="option" :key="option">{{option}}</option>
                </b-select>
              </b-field>
            </div>
            <div class="column is-one-quarter">
              <img :src="selectedIconCom" />
            </div>
          </template>

          <template v-if="location.type === 'circle'">
            <div class="column is-one-quarter">
              <b-field label="Lat">
                <b-input v-model="location.position[0]"></b-input>
              </b-field>
            </div>
            <div class="column is-one-quarter">
              <b-field label="Lat">
                <b-input v-model="location.position[1]"></b-input>
              </b-field>
            </div>
            <div class="column is-one-quarter">
              <b-field label="Colour">
                <b-input v-model="location.colour">red</b-input>
              </b-field>
            </div>
            <div class="column is-one-quarter">
              <b-field label="Radius">
                <b-input v-model="location.radius"></b-input>
              </b-field>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: Object
  },
  data() {
    return {
      outputData: [],
      selectedDropdown: "",
      selectedIcon: "",
      markerTypes: [
        { title: "Marker", id: "marker" },
        { title: "Circle", id: "circle" },
        { title: "Polygon", id: "polygon" }
      ]
    };
  },

  methods: {
    addItem() {
      this.outputData.push("d");
    },
    removeIcon() {
      delete this.location.icon;
    },
    addIcon(iconUrl) {
      this.location.icon = {
        url: iconUrl
      };
    }
  },
  computed: {
    selectedIconCom() {
      if (!this.selectedIcon) {
        this.removeIcon();
        return "";
      }
      let image = this.selectedIcon;
      if (image < 10) {
        image = "00" + image;
      } else if (image < 100) {
        image = "0" + image;
      }
      const iconUrl = "marker/RDOIcons/image_part_" + image + ".png";
      this.addIcon(iconUrl);
      return iconUrl;
    }
  }
};
</script>

<style>
img {
  margin-top: 33px;
}
</style>
