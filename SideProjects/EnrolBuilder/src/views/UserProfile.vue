<template>
    <v-container
      fill-height
      fluid
      grid-list-xl
    >
      <v-layout wrap>
        <!-- Setting CSS Values -->
        <v-flex sm12 md6>
          <material-card
            color="warning"
            title="Set CSS Values"
            text="">

            <v-card-text>
            
              <v-container
                class="pa-0"
                grid-list-xl
                fluid
              >
              <v-btn primary @click="outPutData()">Output</v-btn>
              
              <h3>Landing Page</h3>
              <p>{{backgroundImageUrl}}</p>
              <v-text-field 
                label="Background Image Url"
                v-model="backgroundImageUrl"
              ></v-text-field>
              <v-text-field
              :value="colors.hex"
                label="Button Colour"
              ></v-text-field>
              
               <v-btn color="primary" dark @click="dialog3 = true">Open Dialog 3</v-btn>


<v-dialog v-model="dialog3" >
          

                    <chrome-picker v-model="colors" />


        </v-dialog>





              <v-text-field
                label="Button hover Colour"
              ></v-text-field>

              {{colors.hex}}

                    <chrome-picker v-model="colors" />
              

            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>

      <!-- Output Values -->
        <v-flex sm12 md6>
          <material-card
            color="warning"
            title="CSS Output"
            text="">

            <v-card-text>
            
              <v-container
                class="pa-0"
                grid-list-xl
                fluid
              >

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
import { Chrome } from 'vue-color'


export default {
  data () {
    return {
      cssOutPut: '',
      backgroundImageUrl:'',
      colors:{
  hex: '#194d33'},
  dialog3:false
    }
  },
  methods: {
    outPutData() {
      let styleProfile = new cssTemplate.CSSstyling();
      styleProfile.setImageUrl(this.backgroundImageUrl);
      this.cssOutPut = styleProfile.getStyleSheet();
    },
    someFunction() {
      console.log('somethingelse')
    }
  },
  components: {
    'chrome-picker': Chrome
  }
  
}
</script>

<style scoped>
textarea{
  width: 100%;
}
</style>
