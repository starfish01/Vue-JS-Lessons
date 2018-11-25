<template>
   <v-container grid-list-md text-xs-left>
    <v-card dark color="primary">
    <v-layout row >
          <v-flex xs3 ><v-btn @click="addSectionButton()" target="_blank">Add Component</v-btn></v-flex>
          <v-flex xs3 >
          <v-dialog v-model="dialog" width="600px">
        <v-btn slot="activator" @click="exportJSON()" dark>Export JSON</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">JSON File</span>
          </v-card-title>
          <v-card-text>
            <span class="grey--text">{{ testData}}</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>   
    </v-layout>
    </v-card>
    <div v-for="i in sections" :key="i">
      <appButtonSection :sectionID="i" ></appButtonSection>
    </div>
  </v-container>
</template>

<script>

import ButtonSection from './ButtonSection.vue'

export default {
  data(){
    return{
      sections:[],
      dialog:false,
      testData:{
    "name": null,
    "badge": null,
    "image": null,
    "image_down": null,
    "class_name": null,
    "module_id": null,
    "css": null,
    "settings": null,
    "id":null
  }

    }
  },
  components:{
    appButtonSection:ButtonSection
  },
  methods:{
    addSectionButton(){
      let sectionId = this.sections.length;
      this.sections.push(sectionId)
      //this.sections.push(new Component(appButtonSection))
      //console.log(this.sections)
    },
    exportJSON(){
      


      
    }
  }
}
</script>

<style>


</style>
