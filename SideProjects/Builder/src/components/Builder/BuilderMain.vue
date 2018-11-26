<template>
   <v-container grid-list-md text-xs-left>
    <v-card dark color="primary">
    <v-layout row >
          <v-flex xs3 ><v-btn @click="addSectionButton()" target="_blank">Add Component</v-btn></v-flex>
          <v-flex xs3 ><v-btn @click="dump()" target="_blank">dump</v-btn></v-flex>
          <v-flex xs3 >
          <v-dialog v-model="dialog" width="600px">
        <v-btn slot="activator" @click="exportJSON()" dark>Export JSON</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">JSON File</span>
          </v-card-title>
          <v-card-text>
            <span class="grey--text">{{ allButtons }}</span>
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
      <appButtonSection :sectionID="i" @sectionButtonData="allButtons[i] = $event" @sectionDataReturn="databuilder($event)"></appButtonSection>
    </div>
  </v-container>
</template>

<script>

import ButtonSection from './ButtonSection.vue'


export default {
  data(){
    return{
      sections:[],
      allButtons:[],
      dialog:false,
      

    }
  },
  computed:{

  },


  components:{
    appButtonSection:ButtonSection
  },
  methods:{
    addSectionButton(){
      let sectionId = this.sections.length;
      this.sections.push(sectionId)

    },
    exportJSON(){

    },
    databuilder(data){
      console.log(data)
    },
    dump(){
      //console.log(this.allButtons)

      if(this.allButtons.length > 1){
        console.log('multi array')
        this.allButtons.forEach(element => {
          console.log(element)
        });

      }else{
        console.log('single Array')
        console.log(this.allButtons[0])
      }

    }
  }
}
</script>

<style>


</style>
