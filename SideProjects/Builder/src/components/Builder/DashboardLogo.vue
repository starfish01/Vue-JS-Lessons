<template>
<div>
        <v-btn @click="dialog=true">Dashboard Logo</v-btn>
        <v-dialog v-model="dialog" persistent max-width="700px">
            <v-card>
                <v-card-title>
                    <span class="headline">Dashboard Logo</span>
                </v-card-title>
            </v-card>
            <v-card>
                <v-container grid-list-md  >   
                    <v-text-field pa-20
                        label="Dashboard Image URL"
                        v-model="dashboardlogourl"
                    ></v-text-field>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="closeDialogButton()">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialog:false,
            dashboardlogourl:null
        }
    },
    methods:{
        closeDialogButton(){
            if(this.dashboardlogourl != null){
                if( this.dashboardlogourl.length > 0){
                
                    //build the module for logo here looks like this
                    let logoToTheDashBoard = 
                       {
                        "name": "logo",
                        "css": null,
                        "image": this.dashboardlogourl,
                        "settings": null,
                        "collection": null
                        }

                        this.$emit('dashboardLogoImage', logoToTheDashBoard)


                        //console.log(logoToTheDashBoard)

                }
            }
            
            this.dialog = false
        }
    }

}
</script>

<style>

</style>
