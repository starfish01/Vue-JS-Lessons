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
          <v-dialog v-model="dialog" width="600px">
        <v-btn slot="activator" @click="exportJSON()" dark>Export JSON</v-btn>



        <v-card>
          
           <v-toolbar>
<v-toolbar-title>Export</v-toolbar-title>

        <v-tabs
          slot="extension"
          v-model="model"
          centered
          
        >
          <v-tab
            v-for="i in export"
            :key="i.key"
            :href="`#tab-${i.title}`"
          >
            Item {{ i.title }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
          
          <v-card-text>

      <v-tabs-items v-model="model">
        <v-tab-item
          v-for="i in 3"
          :id="`tab-${i}`"
          :key="i"
        >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>



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
     
    <v-card dark color="primary">
    <v-layout row >
          <v-flex xs3 ><v-btn @click="addSectionButton()" target="_blank">Add Component</v-btn></v-flex>
          <v-flex xs3 ><v-btn @click="dump()" target="_blank">dump</v-btn></v-flex>
          
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
      export:[{title:'JSON',key:'1'},{title:'CSS',key:'2'},{title:'Module',key:'3'}],
      sections:[],
      allButtons:[],
      dialog:false,
      buttons:[],
       model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    
      

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

    let b2 = [];
    let buttons = this.allButtons[0]
    this.allButtons.forEach(element => {
      
      let scrapper = []

      

      element.forEach(element => {
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

      console.log(element)
      console.log(scrapper)

      let newbrn = {
                "css": null,
                "buttons": 
                  scrapper
                
                };
      b2.push(newbrn)

    });
    

    //should be able to do a for loop here
    // let scrapper = []

    // buttons.forEach(element => {
    //   scrapper.push( {
    //     "name": element.name,
    //     "badge": element.badge,
    //     "image": element.image,
    //     "image_down": element.image_down,
    //     "class_name": element.class_name,
    //     "module_id": element.class_name,
    //     "css": element.css,
    //     "settings": element.settings
    //     }
    //   )
    // });

    //end it here to insert down there


      this.buttons = {"devices":{
        "mobile": {
          "sections": [
             {
            "name": "buttons",
            "css": null,
            "image": null,
            "settings": null,
            "collection": 
                
                    b2
                
              
            }
          ]
      }}}

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
