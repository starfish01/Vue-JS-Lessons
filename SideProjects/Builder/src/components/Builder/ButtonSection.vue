<template>
    <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
            <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Button-Group ###</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items >
                    <v-select class="buttonSectionSelect"
                        :items="buttonLayout"
                        label="Buttons per row"
                        v-model="buttonLayoutSelectedButton"
                        solo
                    ></v-select>
                    <v-select class="buttonSectionSelect"
                        :items="buttonPermissionView"
                        label="Default View"
                        solo
                    ></v-select>
                    <v-btn @click="addButtonToComponent()">Add</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-flex>
                <v-card dark color="primary" >
                    <v-layout row wrap px-3>
                        <v-flex xs4 text-xs-center v-for="button in buttonsAdded" :key="button.key">
                            {{ button.name }} 
                            {{button.id}}
                            <v-dialog   max-width="700px">
                                <v-btn slot="activator" :color="btnComponentSet" fab large dark @click="btnBtnClick(button)">
                                    <v-icon>add</v-icon>
                                </v-btn>
                               

                                <appButtonDetails :button="button"></appButtonDetails>

                            </v-dialog>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import ButtonDetails from './ButtonDetails.vue'
import ButtonTemplate from '../../template/buttonTemplate'

export default {
    data(){
        return{
                buttonPermissionView:['Default','Parent','Staff','Student'],
                buttonLayout:['1','2','3','4','5','6'],
                buttonSelectItems:['Link','Reach Calendar','Contacts','SingleLink'],
                buttonsAdded:[],
                buttonTemplate:{},
                buttonLayoutSelectedButton:'this',
                
        }
    },
    props:['sectionID'],
    methods:{
        addButtonToComponent(){
            let newButton = ButtonTemplate;

            newButton.id = 'button-' + this.sectionID + '-' + this.buttonsAdded.length


            this.buttonsAdded.push(newButton)

        },
        btnBtnClick(id){
            
            //console.log(this.sectionID)
        }
    },
    computed:{
        btnComponentSet(){
            if (this.buttonsAdded[this.buttonsAdded.length-1].name == null || this.buttonsAdded[this.buttonsAdded.length-1].name == ''){
                return "warning"
            }
            return "primary"
        }
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
