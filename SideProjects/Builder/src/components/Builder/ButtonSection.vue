<template>
    <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
            <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Button-Group ###</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items >

                    <v-select 
                        :items="buttonLayout"
                        label="Buttons per row"
                        solo
                    ></v-select>

                    <v-select 
                        :items="buttonPermissionView"
                        label="Default View"
                        solo
                    ></v-select>

                </v-toolbar-items>
            </v-toolbar>
            
            <v-flex>
                <v-card dark color="primary" >
                    <v-layout row wrap px-3>
                    <v-flex xs3>
                        <v-select
                            :items="buttonSelectItems"
                            label="Button Type"
                            solo
                        ></v-select>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                            label="Module #"
                            single-line
                            solo
                        ></v-text-field>   
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                            label="Button Up URL"
                            single-line
                            solo
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                       <v-text-field
                            label="Button Down URL"
                            single-line
                            solo
                        ></v-text-field>
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
                something:"something",
                everthing:"everthing",
                buttonPermissionView:['Default','Parent','Staff','Student'],
                buttonLayout:['1','2','3','4','5','6'],
                buttonSelectItems:['Link','Reach Calendar','Contacts','SingleLink']

        }
    }

}
</script>

<style>

</style>
