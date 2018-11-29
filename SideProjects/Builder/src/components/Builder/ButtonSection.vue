<template>
    <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
            <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Button-Group - {{ sectionID }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items >
                    <!-- <v-select class="buttonSectionSelect"
                        :items="buttonLayout"
                        label="Buttons per row"
                        v-model="buttonLayoutSelectedButton"
                        solo
                    ></v-select>
                    <v-select class="buttonSectionSelect"
                        :items="buttonPermissionView"
                        label="Default View"
                        solo
                    ></v-select> -->
                    <v-btn @click="addButtonToComponent()">Add</v-btn>
                    <!-- <v-btn @click="returnData()">Return</v-btn> -->
                    
                </v-toolbar-items>
            </v-toolbar>
            <v-flex>
                <v-card dark color="primary" >
                    <v-layout row wrap px-3>
                        <v-flex xs4 text-xs-center v-for="button in buttonsAdded" :key="button.key">
                            {{ button.name }} 
                            {{button.id}}
                            <appButtonDetails 
                                :button="button"
                                :returnFn="returnData"
                                
                                ></appButtonDetails>
                        </v-flex>
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

export default {
    data(){
        return{
                buttonPermissionView:['Default','Parent','Staff','Student'],
                buttonLayout:['1','2','3','4','5','6'],
                buttonSelectItems:['Link','Reach Calendar','Contacts','SingleLink'],
                buttonsAdded:[],
                modulesAdded:[],
                CSSAdded:[],
                buttonTemplate:{},
                buttonLayoutSelectedButton:'this',
                
        }
    },
    props:['sectionID','sectionButtonData','sectionModulesData','sectionCSSData'],
    methods:{
        addButtonToComponent(){

            //button template
            let newButton = new ButtonTemplate.newObject;

            newButton.id = 'button-' + this.sectionID + '-' + this.buttonsAdded.length
            newButton.sectionId = this.sectionID;
            newButton.buttonId = this.buttonsAdded.length;
            newButton.badge = false;

            newButton.mod = new ModuleTemplate.newObject

            this.buttonsAdded.push(newButton)

            //module template
           //let newModules = new ModuleTemplate.newObject
            //this.modulesAdded.push(newModules)


        },
        btnBtnClick(id){
            
            //console.log(this.sectionID)
        },
        returnData(){
            
            console.log(this.buttonsAdded)
            

            this.$emit('sectionButtonData',this.buttonsAdded)
            this.$emit('sectionModulesData',this.modulesAdded)
            this.$emit('sectionCSSData',this.CSSAdded)

        },
    },
    
    components:{
            appButtonDetails:ButtonDetails
    }

}
</script>

<style>
.buttonSectionSelect{
    max-width: 170px;
    margin: auto 10px auto 10px !important;
}

</style>
