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
              <v-btn @click="outPutData()">Output</v-btn>

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

//import * as CSSTemplate from "../template/cssTemplate.js";
import * as cssTemplate from "../templates/cssTemplate.js";

export default {
  data () {
    return {
      cssOutPut: ''
    }
  },
  methods: {
    outPutData() {
      let s = cssTemplate.newObject();
      let x = cssTemplate.something();
      console.log(x)
      let user = new cssTemplate.CSSstyling('jimmy');
      user.sayHi();
    }
  }
  
}
</script>

<style scoped>
textarea{
  width: 100%;
}
</style>
