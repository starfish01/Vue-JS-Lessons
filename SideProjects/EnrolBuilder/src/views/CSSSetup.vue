<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>


      <v-flex sm8 class="imageBackground" style="height:288px; background-repeat: no-repeat; background-size: 100%; " :style="{ 'background-image':'url('+imgUrlAdded+')'}">
        
        <div style="width:50%; float:left;">
          <img src="/../../img/digistorm.svg" class="digistormImg"/>
         <p style="font-size:16px !important">Welcome to<br>
         Digistorm<br>
         Enrolment Form<br>
        Fees and some other text</p>
        </div>
<v-spacer></v-spacer>
        <div :style="{color: colorItems[9].hex.hex8, background:colorItems[8].hex.hex8, }" style="background:blue; padding:10px; width:168px;margin-left:auto;margin-right:0px; margin-bottom:auto;top:-7px; margin-top:-12px">
          <p>introduction text<br>
          <ul>
            <li>List item</li>
            <li>List item</li>  
          </ul><br>Sample text</p>
        <v-btn :color="btnColor" @mouseleave="btnHoverStateFn(false)" @mouseover="btnHoverStateFn(true)" small><span :style="{color: colorItems[4].hex.hex8}">Start</span></v-btn>
        </div>  

        <div style="width: 50%; height:33%" :style="{'background-color':colorItems[0].hex.hex8}">Overlay Color</div>


        </v-flex>     
      
      <v-flex sm4>
        <v-card-text  :style="{color:colorItems[13].hex.hex8, borderColor:colorItems[11].hex.hex8,background:colorItems[10].hex.hex8}" style="border:5px solid;height:288px;">
         <img src="/../../img/digistorm.svg" class="digistormImg"/>

          <p>If you have any questions please contact us on<br>
          <a :style="{color:colorItems[13].hex.hex8}" href="tel:0411 111 111">0411 111 111</a> or email us at<br>
          <a :style="{color:colorItems[13].hex.hex8}" href="mailto:patrick.labes@digistorm.com.au">test@digistorm.com.au</a>.</p>

         <hr :style="{background:colorItems[12].hex.hex8, borderColor:colorItems[12].hex.hex8}">
         <p>Stu Dent</p>
         <p>Mr P Labes</p>
       </v-card-text>
      </v-flex>
      
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
                <!-- <v-flex xs6>
                  <v-text-field
                    :label="colorItems[3].name"
                    :value="colorItems[3].hex.hex8"
                    @click="colorPickerDialogFn(3)"
                  ></v-text-field>
                </v-flex> -->
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[4].name"
                    :value="colorItems[4].hex.hex8"
                    @click="colorPickerDialogFn(4)"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            
                
                
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    :label="colorItems[5].name"
                    :value="colorItems[5].hex.hex8"
                    @click="colorPickerDialogFn(5)"
                  ></v-text-field>
                </v-flex>
              
                <!-- <v-flex xs6>
                  <v-text-field
                    :label="colorItems[6].name"
                    :value="colorItems[6].hex.hex8"
                    @click="colorPickerDialogFn(6)"
                  ></v-text-field>
                </v-flex> -->
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

//bootstrap
// import 'bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  data() {
    return {
      cssOutPut: "",
      btnHoverState:false,
      imageUrl:'/../../img/bgtemp.jpg',
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
    btnHoverStateFn(val){
      this.btnHoverState = val
    },
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
    },
    
  },
  watch: {
    colorPickerDialog: function(newValue) {
      newValue ? this.currentComponent = 'appColorPicker' : this.currentComponent = ''
    }
  },
  computed: {
    btnColor() {
      if(this.btnHoverState){
        return this.colorItems[5].hex.hex8
      }else{
        return this.colorItems[2].hex.hex8
      }
    },
    someValue() {
      return "hello";
    },
    imgUrlAdded(){
      if(this.backgroundImageUrl != ''){
        return this.backgroundImageUrl
      } else {
        return '/../../img/bgtemp.jpg'
      }
    }
  },
  components: {
    "chrome-picker": Chrome,
    appColorPicker: Colorpicker
  },
  mounted(){
    
  }
};
</script>

<style scoped>
.imageBackground:after{
 background-color: #563d7c;
content: "";
display: block;
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.4;
}
.digistormImg {
  width: 45%;
}
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
