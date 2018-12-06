<template>

    <div>
         <v-btn @click="dialog=true">Dashboad Images</v-btn>

        
        <v-dialog v-model="dialog" persistent max-width="700px">
        <v-card>
            <v-card-title>
                <span class="headline">Dashboard Images</span>
            </v-card-title>
        </v-card>
        <v-card>
        <v-container grid-list-md  >
            <v-layout wrap >
                <v-btn @click="addDashboardImage()">Add Dashboard Image</v-btn>

                <v-flex xs12 v-for="(image, i) in dashboardImages" :key="i">
                    <v-text-field
                        label="Dashboard Image"
                        v-model="dashboardImages[i]"
                    ></v-text-field>

                </v-flex>

            </v-layout>
               
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
        return {
            dialog: false,
            dashboardImages:['']
        }
    },
    methods: {
        closeDialogButton(){
            this.dialog = false;
        },
        addDashboardImage(){
            let val = this.dashboardImages[this.dashboardImages.length-1];
            if( val.length > 0){
                this.dashboardImages.push("");
            }
        }
    }

}
</script>

<style>

</style>
