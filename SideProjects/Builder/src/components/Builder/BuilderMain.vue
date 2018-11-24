<template>
   <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex  xs12>
        <v-card dark color="primary">
          <v-card-text class="px-6"></v-card-text>
          <v-card-text class="px-6"><v-btn @click="addSectionButton()" target="_blank">Add Component</v-btn></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
    <div v-for="i in sections" :key="i">
      <appButtonSection :sectionID="i"></appButtonSection>
    </div>
  </v-container>
</template>

<script>

import ButtonSection from './ButtonSection.vue'

export default {
  data(){
    return{
      sections:[]

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
    }
  }
}
</script>

<style>


</style>
