<template>
    <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
            <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Button-Group - {{ sectionID }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items >

                    <v-btn @click="addButtonToComponent()">Add</v-btn>

                </v-toolbar-items>
            </v-toolbar>
            <v-flex>
                <v-card dark color="primary" >
                    <v-layout row wrap px-3>

                        <draggable class="somethingTownContainer" v-model="buttonsAdded" :end="returnData()" >

                            <div class="somethingTown" v-for="button in buttonsAdded" :key="button.key">
                                <appButtonDetails
                                    :button="button"
                                    :returnFn="returnData"
                                    :deleteBtnFn="deleteBtn"
                                    :schoolboxPermissionsAllowed="schoolboxPermissionsAllowed"

                                    ></appButtonDetails>
                                {{ button.name}}<br>
                                {{ button.mod.name}}

                            </div>

                        </draggable>

                    </v-layout>
                </v-card>
            </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ButtonDetails from './ButtonDetails.vue'
import * as ButtonTemplate from '../../template/buttonTemplate'
import * as ModuleTemplate from '../../template/moduleTemplate'
import draggable from 'vuedraggable'

export default {
  data () {
    return {
      buttonPermissionView: ['Default', 'Parent', 'Staff', 'Student'],
      buttonLayout: ['1', '2', '3', '4', '5', '6'],
      buttonsAdded: [],
      CSSAdded: [],
      buttonTemplate: {},
      buttonLayoutSelectedButton: 'this'
    }
  },
  props: ['sectionID', 'sectionButtonData', 'sectionCSSData','schoolboxPermissionsAllowed'],
  methods: {
    addButtonToComponent () {
      // button template
      let newButton = new ButtonTemplate.newObject()

      newButton.id = 'button-' + this.sectionID + '-' + this.buttonsAdded.length
      newButton.sectionId = this.sectionID
      newButton.buttonId = this.buttonsAdded.length
      newButton.badge = false

      newButton.mod = new ModuleTemplate.newObject()

      this.buttonsAdded.push(newButton)
    },
    btnBtnClick (id) {

    },
    returnData () {
      this.$emit('sectionButtonData', this.buttonsAdded)
      this.$emit('sectionCSSData', this.CSSAdded)
    },
    deleteBtn (value) {

        let item = this.buttonsAdded.findIndex(x => x.id == value)

        this.buttonsAdded.splice(item,1);

    }

  },
  components: {
    appButtonDetails: ButtonDetails,
    draggable
  }

}
</script>

<style>
.buttonSectionSelect{
    max-width: 170px;
    margin: auto 10px auto 10px !important;
}
.somethingTown{
    display: -webkit-inline-box;
    width: 33%;
}
.somethingTownContainer{
    width:100%;
    justify-content: center;
}

</style>
