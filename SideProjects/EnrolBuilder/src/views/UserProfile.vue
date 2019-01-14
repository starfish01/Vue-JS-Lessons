<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <!-- Setting CSS Values -->
      <v-flex sm12 md6>
        <material-card color="warning" title="Set CSS Values" text>
          <v-card-text>
            <v-container class="pa-0" grid-list-xl fluid>
              <v-btn primary @click="outPutData()">Output</v-btn>

              <h3>Landing Page</h3>
              <p>{{backgroundImageUrl}}</p>

              <v-text-field label="Background Image Url" v-model="backgroundImageUrl"></v-text-field>

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
        { hex: "#194d33", name: "Button Colour" },
        { hex: "#194d33", name: "Button Colour Hover" }
      ],
      idColorSelector: 0,
      colorPickerDialog: false
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
</style>
