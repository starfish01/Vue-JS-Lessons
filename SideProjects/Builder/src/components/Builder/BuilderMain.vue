<template>
  <v-container grid-list-md text-xs-left>
    <v-card dark color="primary">
      <v-layout row pl-3>
        <v-flex xs3>
          <v-select
            v-model="deviceSelected"
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
      
      <v-flex xs3>
        <app-dash-board-images
          @dashboardImages="dashboardImages = $event"
        ></app-dash-board-images>
      </v-flex>
      
      <v-flex xs3 >
        <v-switch teal darken-3
          label="Schoolbox Permissions"
          v-model="schoolboxPermissionsAllowed"
        ></v-switch>
      </v-flex>




    </v-layout>
  </v-card>
    <div v-for="i in sections" :key="i">
      <appButtonSection
        :sectionID="i"
        :schoolboxPermissionsAllowed="schoolboxPermissionsAllowed"
        @sectionButtonData="allButtons[i] = $event"
        @sectionCSSData="allCSS[i] = $event"

      ></appButtonSection>
    </div>
  </v-container>
</template>

<script>
import ButtonSection from './ButtonSection.vue'
import DashBoardImages from './DashBoardImages.vue'
import * as CSSTemplate from '../../template/cssTemplate.js'

export default {
  data () {
    return {
      exportvalues: [{ title: 'JSON', key: '1', data: 'JSON' }, { title: 'CSS', key: '2', data: 'CSS' }, { title: 'Module', key: '3', data: 'Module' }],
      sections: [],
      dashboardImages:[],
      allButtons: [],
      allModules: [],
      allCSS: [],
      dialog: false,
      buttons: [],
      schoolboxPermissionsAllowed:false,
      deviceSelected:"Mobile"
    }
  },
  computed: {

  },

  components: {
    appButtonSection: ButtonSection,
    appDashBoardImages: DashBoardImages
  },
  methods: {
    addSectionButton () {
      let sectionId = this.sections.length
      this.sections.push(sectionId)
    },
    exportJSON () {

      // All for buttons
      let b2 = []
      let modulesTogether = []

      let amountOfDashboardImages = [];
      
      this.dashboardImages.forEach((element,i) => {
        amountOfDashboardImages.push(
          {"image": `refer_to_css_${i+1}`}
      )});

      this.allButtons.forEach(element => {
        let scrapper = []

        element.forEach(element => {
          modulesTogether.push(element.mod)

          scrapper.push({
            'name': element.name,
            'badge': element.badge,
            'image': element.image,
            'image_down': element.image_down,
            'class_name': element.class_name,
            'module_id': element.class_name,
            'css': element.css,
            'settings': element.settings
          }
          )
        })

        let newbrn = {
          'css': null,
          'buttons':
          scrapper
        }
        b2.push(newbrn)
      })

      let device = 'ERROR'

      let sectionsJSON = {
        'sections': [
          {
          "name": "slider",
          "css": null,
          "image": null,
          "settings": {
            "fade": true
          },
          "collection": [
            amountOfDashboardImages
          ]
          },
          {
            'name': 'buttons',
            'css': null,
            'image': null,
            'settings': null,
            'collection': b2
          }
        ]
      }

      if(this.deviceSelected == 'Mobile'){
        device = {'mobile':sectionsJSON};
      }else{
        device = {'tablet':sectionsJSON};
      }
      
      this.exportvalues[0].data = {
        'devices': {
          device
        }
      }

      // END BUTTON

      // All for CSS

      let dashboardImagesCSS = ' ';

      this.dashboardImages.forEach((element,i) => {
        dashboardImagesCSS += `.dashboard-slider-image:nth-child(${i}) { background-image: url("${element}"); } `
      });



      let sectionLayoutCSS = ' ';
      this.allCSS.forEach((element,index) => {
        sectionLayoutCSS +=  `#button-group-${index} .dashboard-button { width: ${element}} `
      });

      this.exportvalues[1].data = CSSTemplate.newObject()
      if(this.schoolboxPermissionsAllowed){
        this.exportvalues[1].data += ".for-student, .for-staff, .for-parent, .for-none {display: none;} html.role-type-student .for-student, html.role-type-staff .for-staff, html.role-type-admin .for-staff, html.role-type-parent .for-parent {display: block;}"
      }

     this.exportvalues[1].data+=sectionLayoutCSS;
     this.exportvalues[1].data+=dashboardImagesCSS

      // END CSS

      // All for Modules

      /// ///////////////////////////////////
      /// I need to export each module into one array

      // console.log(modulesTogether)

      this.exportvalues[2].data = modulesTogether

      // End Modules
    },
    dump () {

    }
  }
}
</script>

<style>

</style>