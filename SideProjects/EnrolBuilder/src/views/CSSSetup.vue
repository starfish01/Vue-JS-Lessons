<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <!-- Example Screen -->
      <!-- <v-flex xs8>
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
      </v-flex>-->
      <!-- Setting CSS Values -->
      <v-flex sm12 md6>
        <material-card color="warning" title="Set CSS Values" text>
          <v-card-text >
            <v-container class="pa-0" grid-list-xl fluid>

              <h3>Landing Page</h3>

              <v-text-field label="Background Image Url" v-model="backgroundImageUrl"></v-text-field>

              <v-layout row>
                <v-flex xs6>
                  

                  <v-text-field
                    :value="colorItems[0].hex.hex8"
                    @click="colorPickerDialogFn(0)"
                    :label="colorItems[0].name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :value="colorItems[1].hex.hex8"
                    @click="colorPickerDialogFn(1)"
                    :label="colorItems[1].name"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <legend>Main Button</legend>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :value="colorItems[2].hex.hex8"
                    @click="colorPickerDialogFn(2)"
                    :label="colorItems[2].name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[3].name"
                    :value="colorItems[3].hex.hex8"
                    @click="colorPickerDialogFn(3)"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[4].name"
                    :value="colorItems[4].hex.hex8"
                    @click="colorPickerDialogFn(4)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[5].name"
                    :value="colorItems[5].hex.hex8"
                    @click="colorPickerDialogFn(5)"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[6].name"
                    :value="colorItems[6].hex.hex8"
                    @click="colorPickerDialogFn(6)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[7].name"
                    :value="colorItems[7].hex.hex8"
                    @click="colorPickerDialogFn(7)"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <legend>Jumbotron</legend>

              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[8].name"
                    :value="colorItems[8].hex.hex8"
                    @click="colorPickerDialogFn(8)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[9].name"
                    :value="colorItems[9].hex.hex8"
                    @click="colorPickerDialogFn(9)"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <h3>Alert Info Panel</h3>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[10].name"
                    :value="colorItems[10].hex.hex8"
                    @click="colorPickerDialogFn(10)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[11].name"
                    :value="colorItems[11].hex.hex8"
                    @click="colorPickerDialogFn(11)"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[12].name"
                    :value="colorItems[12].hex.hex8"
                    @click="colorPickerDialogFn(12)"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[13].name"
                    :value="colorItems[13].hex.hex8"
                    @click="colorPickerDialogFn(13)"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-dialog v-model="colorPickerDialog" width="225">
                <component v-bind:is="currentComponent" :colourFromParent="colorItems[idColorSelector].hex" @colorChange="colorItems[idColorSelector].hex = $event"></component>
              </v-dialog>

            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>

      <!-- Output Values -->
      <v-flex sm12 md6>
        <material-card color="warning" title="CSS Output" text>

          <v-btn :color="'primary' " @click="outPutData()">Output</v-btn>
          <v-btn :color="'primary'" v-clipboard="cssOutPut" @click="snackbar = true;">Copy</v-btn>

          <v-card-text>
            <v-container class="pa-0" grid-list-xl fluid>
              <textarea rows="34" v-model="cssOutPut"></textarea>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-snackbar
        v-model="snackbar"
        :bottom="'bottom'"
        :right="'right'"
        :timeout="2000"
      >
        Copied!
        <v-btn
          color="pink"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

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
      currentComponent:'',
      backgroundImageUrl: "",
      colors: "#194d33",
      snackbar:false,
      colorItems: [
        {hex: { hex8: "#194D3354" },name: "Background Color (transparent)", id: 0},
        { hex: { hex8: "#000000" }, name: "Heading Text Colour", id: 1 },
        { hex: { hex8: "#D3A22B" }, name: "Button Colour", id: 2 },
        { hex: { hex8: "#D3A22B" }, name: "Button Border Colour", id: 3 },
        { hex: { hex8: "#000000" }, name: "Button Text Colour", id: 4 },
        { hex: { hex8: "#e5af2b" }, name: "Button Hover Colour", id: 5 },
        { hex: { hex8: "#e5af2b" }, name: "Button Hover Border Colour", id: 6 },
        { hex: { hex8: "#000000" }, name: "Button Text Hover Colour", id: 7 },
        { hex: { hex8: "#FFFFFF" }, name: "Jumbotron Colour", id: 8 },
        { hex: { hex8: "#000000" }, name: "Jumbotron Text Colour", id: 9 },
        { hex: { hex8: "#FFFFFF" }, name: "Background Colour", id: 10 },
        { hex: { hex8: "#FFFFFF" }, name: "Boarder Colour", id: 11 },
        { hex: { hex8: "#000000" }, name: "HR Colour", id: 12 },
        { hex: { hex8: "#000000" }, name: "Text Colour", id: 13 }
      ],
      idColorSelector: 0,
      colorPickerDialog: false,
      backgroundColorExample: "#000",
      backgroundTemp: "/img/bgtemp.jpg"
    };
  },
  methods: {
    outPutData() {
      let styleProfile = new cssTemplate.CSSstyling(
        this.colorItems,
        this.backgroundImageUrl
      );
      //styleProfile.setImageUrl(this.backgroundImageUrl);
      this.cssOutPut = styleProfile.getStyleSheet();
    },
    colorPickerDialogFn(colID) {
      this.idColorSelector = colID;
      this.colorPickerDialog = true;
    }
  },
  watch: {
    colorPickerDialog: function(newValue) {
      newValue ? this.currentComponent = 'appColorPicker' : this.currentComponent = ''
    }
  },
  computed: {
    someValue() {
      return "hello";
    }
  },
  components: {
    "chrome-picker": Chrome,
    appColorPicker: Colorpicker
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
