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

                    //    {
                    //     "name": "logo",
                    //     "css": {
                    //       "position": "relative",
                    //       "z-index": "3",
                    //       "background-color": "#ffffff"
                    //     },
                    //     "image": "https://digistorm-app-control.s3-ap-southeast-2.amazonaws.com/5b5ea75d0acabc21b1a7cfd73f83c1fa7a18ebc7411235891e4c2.png",
                    //     "settings": null,
                    //     "collection": null
                    //     }



                }
            }
            
            this.dialog = false
        }
    }

}
</script>

<style>

</style>
