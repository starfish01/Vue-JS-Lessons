<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <!-- Example Screen -->
      <v-flex xs8>
        <material-card color="warning" title="Dashboard" text>
          <v-card-text
            class="landingPageStyle"
            :style="{backgroundImage: backgroundImageUrl == '' ? 'url(' + '/img/bgtemp.jpg' + ')' : 'url(' + backgroundImageUrl + ')'}"
          >
            <v-container class="pa-0" grid-list-xl fluid>
              <v-layout row>
                <v-flex xs6>
                  <p class="templateText">Welcome to</p>
                  <p class="templateText">School City</p>
                </v-flex>
                <v-flex xs6>
                  <v-jumbotron class="jumbotronExample" style="background-color:red">
                    <v-container>
                      <v-layout>
                        <v-flex>
                          <p>Welcome to the site</p>

                          <p
                            class="subheading"
                          >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluidum.</p>

                          <v-divider class="my-3"></v-divider>

                          <v-btn class="mx-0" color="primary" large>See more</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-jumbotron>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex xs4>
        <material-card color="warning" title="SideBar" text>
          <v-card-text>
            <v-container class="pa-0" grid-list-xl fluid></v-container>
          </v-card-text>
        </material-card>
      </v-flex>

      <!-- Setting CSS Values -->
      <v-flex sm12 md6>
        <material-card color="warning" title="Set CSS Values" text>
          <v-card-text>
            <v-container class="pa-0" grid-list-xl fluid>
              <v-btn primary @click="outPutData()">Output</v-btn>

              <h3>Landing Page</h3>

              <v-text-field label="Background Image Url" v-model="backgroundImageUrl"></v-text-field>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :value="colorItems[2].hex"
                    @click="colorPickerDialogFn(2)"
                    label="Background Color (Set trancparency)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :value="colorItems[7].hex"
                    @click="colorPickerDialogFn(7)"
                    :label="colorItems[7].name"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <legend>Main Button</legend>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :value="colorItems[0].hex"
                    @click="colorPickerDialogFn(0)"
                    label="Button Colour"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Button hover Colour"
                    :value="colorItems[1].hex"
                    @click="colorPickerDialogFn(1)"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    label="Button Text Colour"
                    :value="colorItems[3].hex"
                    @click="colorPickerDialogFn(3)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Button border colour"
                    :value="colorItems[4].hex"
                    @click="colorPickerDialogFn(4)"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <legend>Jumbotron</legend>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[5].name"
                    :value="colorItems[5].hex"
                    @click="colorPickerDialogFn(5)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[6].name"
                    :value="colorItems[6].hex"
                    @click="colorPickerDialogFn(6)"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-dialog v-model="colorPickerDialog" width="225">
                <app-color-picker @colorChange="colorItems[idColorSelector] = $event"></app-color-picker>
              </v-dialog>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>

      <!-- Output Values -->
      <v-flex sm12 md6>
        <material-card color="warning" title="CSS Output" text>
          <v-card-text>
            <v-container class="pa-0" grid-list-xl fluid>
              <textarea v-model="cssOutPut"></textarea>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as cssTemplate from "../templates/cssTemplate.js";
import { Chrome } from "vue-color";
import Colorpicker from "../components/material/ColorPicker.vue";

export default {
  data() {
    return {
      cssOutPut: "",
      backgroundImageUrl: "",
      colors: "#194d33",
      colorItems: [
        { hex: "#194d33", name: "Button Colour", id: 0 },
        { hex: "#194d33", name: "Button Colour Hover", id: 1 },
        { hex: "#194D3354", name: "Background Color", id: 2 },
        { hex: "#000000", name: "Button text Colour", id: 3 },
        { hex: "#194D33", name: "Button border Colour", id: 4 },
        { hex: "#194D33", name: "Jumbotron Colour", id: 5 },
        { hex: "#194Df33", name: "Jumbotron Text Colour", id: 6 },
        { hex: "#194Df33", name: "Text Colour", id: 7 }
      ],
      idColorSelector: 0,
      colorPickerDialog: false,
      backgroundColorExample: "#000",
      backgroundTemp: "/img/bgtemp.jpg"
    };
  },
  methods: {
    outPutData() {
      let styleProfile = new cssTemplate.CSSstyling();
      styleProfile.setImageUrl(this.backgroundImageUrl);
      this.cssOutPut = styleProfile.getStyleSheet();
    },
    colorPickerDialogFn(colID) {
      this.colorPickerDialog = true;
      this.idColorSelector = colID;
    }
  },
  watch: {
    colorPickerDialog: function(newValue, oldValue) {
      console.log(newValue);
    }
  },
  computed: {
    someValue() {
      return "hello";
    }
  },
  components: {
    "chrome-picker": Chrome,
    "app-color-picker": Colorpicker
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
}
.landingPageStyle {
  height: 220px;
}

.landingPageStyle img {
  width: 100%;
}

.templateText {
  font-size: 20px !important;
  font-weight: 600;
}

.jumbotronExample {
  height: 195px;
  background-color: red;
  width: 174px;
}
</style>
