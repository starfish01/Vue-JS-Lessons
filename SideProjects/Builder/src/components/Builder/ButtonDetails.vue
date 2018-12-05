<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="700px">
            <v-btn slot="activator" :color="btnComponentSet" fab large dark>
                <v-icon>add</v-icon>
            </v-btn>
        <v-card>
            <v-card-title>
                <span class="headline">Button - {{ button.name }}</span>
            </v-card-title>
        </v-card>
        <v-card>
        <v-container grid-list-md  >
            <v-layout wrap >

                <v-flex xs12 sm6 >
                    <v-text-field label="Button Title" required v-model="button.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-select
                        :items="buttonSelectionList"
                        label="Button Type"
                        v-model="selectedButtonType"
                        item-text="text"
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-text-field label="Module #"  v-model="button.module_id"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 v-if="schoolboxPermissionsAllowed">
                    <v-autocomplete
                        :items="['Parent', 'Student', 'Staff']"
                        label="Permission To View"
                        v-model="selectedSchoolboxPermissions"
                        multiple
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Up" v-model="button.image"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Down" v-model="button.image_down"></v-text-field>
                </v-flex>
                <v-flex xs4 >
                    <v-checkbox label="Badge?" v-model="button.badge"></v-checkbox>
                </v-flex>
                <v-flex xs4 >
                    <v-checkbox label="Screenshot?" v-model="button.mod.use_screenshot"></v-checkbox>
                </v-flex>
                <v-flex xs4 >
                    <v-checkbox label="Translations:" v-model="translationCheckbox"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6 v-if="translationCheckbox">
                    <v-text-field label="Title" placeholder="Sport" @blur="translationSetUp({'title':$event.target.value})"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 v-if="translationCheckbox">
                    <v-text-field label="Empty" placeholder="No Sport Notices" @blur="translationSetUp({'empty':$event.target.value})"></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="translationCheckbox">
                    <v-text-field label="Message" placeholder="There are currently no sport notices." @blur="translationSetUp({'desc':$event.target.value})"></v-text-field>
                </v-flex>

                <v-flex xs12 v-if="button.mod.name == 4">
                    Core Links
                    <appCoreLinks :coreLinksAdded="coreLinksAdded"></appCoreLinks>
                </v-flex>
            </v-layout>
            </v-container>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  flat color="error" @click="deleteDialog = true">Delete</v-btn>
            <v-btn color="blue darken-1" flat @click="closeDialogButton()">Close</v-btn>
            
<v-dialog
        v-model="deleteDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete?</v-card-title>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="error darken-1"
              @click="deleteButton()"
            >
              YES
            </v-btn>
  
            <v-btn
              color="blue darken-1"
              
              @click="deleteDialog = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


        </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import CoreLinks from './CoreLinks/CoreLinks.vue'
import * as ListOfButtons from '../../template/listOfButtons'

export default {
  data () {
    return {
      dialog: false,
      translationArray: { title: null, empty: null, desc: null },
      translationCheckbox: false,
      buttonSelectionList: ListOfButtons.newObject(),
      selectedButtonType: null,
      selectedSchoolboxPermissions:[],
      deleteDialog:false,
      coreLinksAdded: []
    }
  },
  props: { 'button': Object,
    'returnFn': Function,
    'deleteBtnFn':Function,
    'schoolboxPermissionsAllowed':Boolean
  },
  computed: {
    btnComponentSet () {
      if (!this.button.name == null || !this.button.name == '') {
        return 'primary'
      }
      return 'warning'
    }
  },
  methods: {
    translationSetUp (value) {
      if (value.title) {
        this.translationArray.title = value.title
      } else if (value.empty) {
        this.translationArray.empty = value.empty
      } else if (value.desc) {
        this.translationArray.desc = value.desc
      }
    },
    addCoreLink () {
      this.coreLinksAdded.push({ 'key': this.coreLinksAdded.size })
    },
    setUpModuleJSON () {
      let tranlations = this.getTranslations()

      let nameAndPlatform = this.getNameAndPlatform()

      this.button.mod = {
        id: this.button.module_id,
        use_screenshot: this.button.mod.use_screenshot == true,
        name: (nameAndPlatform == null) ? '' : nameAndPlatform.text,
        platform: (nameAndPlatform == null) ? '' : nameAndPlatform.platform,
        settings: null,
        translations: tranlations,
        icons: []
      }
    },
    getTranslations () {
      let tranlations = {}

      if (this.translationArray.title != null) {
        if (this.translationArray.title != null && this.translationArray.empty == null) {
          tranlations = {
            'list': {
              'title': this.translationArray.title }
          }
        }
        if (this.translationArray.title != null && this.translationArray.empty != null) {
          tranlations = {
            'list': {
              'title': this.translationArray.title,
              'empty': {
                'title': this.translationArray.empty,
                'message': this.translationArray.desc
              }
            }
          }
        }
      } else {
        tranlations = null
      }

      return tranlations
    },
    getNameAndPlatform() {
      let selectedValue = this.selectedButtonType

      let nameAndPlatform = this.buttonSelectionList.find(function (element) {
        return element.value == selectedValue
      })

      return nameAndPlatform
    },
    createCSSForSchoolboxPermissions(){

      let CSSstring = '';
      let checker = false;

      if(this.selectedSchoolboxPermissions.includes('Parent')){
        CSSstring = "for-parent "
        checker = true
      }
      if(this.selectedSchoolboxPermissions.includes('Staff')){
        CSSstring += "for-staff "
        checker = true
      }
      if(this.selectedSchoolboxPermissions.includes('Student')){
        CSSstring += "for-student "
        checker = true
      }

      if(!checker)
      {
        CSSstring = null
      }

      this.button.class_name = CSSstring

    },
    closeDialogButton () {

      if(this.schoolboxPermissionsAllowed){
        this.createCSSForSchoolboxPermissions()
      }else{
        this.button.class_name = null
      }


      this.setUpModuleJSON()

      this.dialog = false
      this.returnFn()
    },
    buttonSelectOnChange () {

    },
    deleteButton(){
        this.deleteDialog = false
        this.dialog = false
        this.deleteBtnFn(this.button.id)

    }
  },
  components: {
    appCoreLinks: CoreLinks
  }

}
</script>

<style>

</style>
