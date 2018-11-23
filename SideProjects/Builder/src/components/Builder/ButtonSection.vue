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
                    <v-flex :is="layoutButtonWidth"  v-for="button in buttonsAdded" :key="button">
                        something
                    </v-flex>
                    
                    </v-layout>
                </v-card>
            </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
                buttonPermissionView:['Default','Parent','Staff','Student'],
                buttonLayout:['1','2','3','4','5','6'],
                buttonSelectItems:['Link','Reach Calendar','Contacts','SingleLink'],
                buttonsAdded:[]
        }
    },
    methods:{
        addButtonToComponent(){
            console.log(this.buttonsAdded)
            this.buttonsAdded.push(this.buttonsAdded.length)
        }
    },
    computed:{
        layoutButtonWidth(){
            return "xs3"
        }
    }

}
</script>

<style>
.buttonSectionSelect{
    max-width: 170px;
    margin: auto 10px auto 10px !important;
}

</style>
