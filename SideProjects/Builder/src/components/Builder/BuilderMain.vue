<template>
  <v-container grid-list-md text-xs-left>
    <v-card dark color="primary">
      <v-layout row pl-3>
        <v-flex xs3>
          <v-select 
            :items="['Mobile', 'Tablet']"
            label="Layout Device"
          ></v-select>
        </v-flex>
        <v-flex xs3 >
          <v-dialog persistent v-model="dialog" width="600px">
        <v-btn slot="activator" @click="exportJSON()" dark>Export JSON</v-btn>
        <v-card>
          <v-tabs 
            color="cyan"
            dark
            slider-color="yellow"
          >
            <v-tab
              v-for="n in exportvalues"
              :key="n.key"
              ripple
            >
              {{ n.title }} 
            </v-tab>
            <v-tab-item
              v-for="n in exportvalues"
              :key="n.key"
            >
              <v-card flat>
                <v-card-text>{{ n.data }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>   
  </v-layout>
</v-card> 
  <v-card dark color="primary">
    <v-layout row >
      <v-flex xs3 ><v-btn @click="addSectionButton()" target="_blank">Add Component</v-btn></v-flex>
      <v-flex xs3 ><v-btn @click="dump()" target="_blank">dump</v-btn></v-flex>    
    </v-layout>
  </v-card>
    <div v-for="i in sections" :key="i">
      <appButtonSection 
        :sectionID="i" 
        @sectionButtonData="allButtons[i] = $event" 
        @sectionDataReturn="databuilder($event)"
        @sectionCSSData="allCSS[i] = $event"
        
      ></appButtonSection>
    </div>
  </v-container>
</template>

<script>
import ButtonSection from './ButtonSection.vue'
import * as CSSTemplate from '../../template/cssTemplate.js'

export default {
  data(){
    return{
      exportvalues:[{title:'JSON',key:'1',data:'JSON'},{title:'CSS',key:'2',data:'CSS'},{title:'Module',key:'3',data:'Module'}],
      sections:[],
      allButtons:[],
      allModules:[],
      allCSS:[],
      dialog:false,
      buttons:[],
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
      //All for buttons
        let b2 = [];
        let modulesTogether = [];

        this.allButtons.forEach(element => {
        let scrapper = []

        element.forEach(element => {

        modulesTogether.push(element.mod)

        scrapper.push( {
          "name": element.name,
          "badge": element.badge,
          "image": element.image,
          "image_down": element.image_down,
          "class_name": element.class_name,
          "module_id": element.class_name,
          "css": element.css,
          "settings": element.settings
          }
        )
      });

      let newbrn = {
        "css": null,
        "buttons": 
          scrapper
        };
        b2.push(newbrn)
      });

      this.exportvalues[0].data = {"devices":{
        "mobile": {
          "sections": [
             {
            "name": "buttons",
            "css": null,
            "image": null,
            "settings": null,
            "collection": b2
            }
          ]
      }}}

      //END BUTTON

      //All for CSS

      this.exportvalues[1].data = CSSTemplate.newObject()

      //END CSS

      //All for Modules

      //////////////////////////////////////
      ///I need to export each module into one array

      //console.log(modulesTogether)

      this.exportvalues[2].data = modulesTogether

     

      //End Modules

    },
    databuilder(data){
      console.log(data)
    },
    dump(){
      
    }
  }
}
</script>

<style>


</style>
