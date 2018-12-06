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
                   
                        <draggable v-model="dashboardImages" >
                            
                            <v-flex xs12 v-for="(image, i) in dashboardImages" :key="i" ma-2>
                                <v-card >
                                    <v-layout align-center justify-center row fill-height grey darken-1 >
                                        <v-flex xs6 pl-5>
                                            <v-text-field pa-20
                                                label="Dashboard Image"
                                                v-model="dashboardImages[i]"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-btn v-if="i != 0" flat color="warning" @click="dashboardImages.splice(i,1)">remove</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-flex>
                            
                        </draggable>
                        <v-btn @click="addDashboardImage()" v-if="addbButton" >Add Dashboard Image</v-btn>
                    
                
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
import draggable from 'vuedraggable'


export default {
    data(){
        return {
            dialog: false,
            dashboardImages:['']
        }
    },
    computed:{
        addbButton(){
            let val = this.dashboardImages[this.dashboardImages.length-1];
            if( val.length > 0){
                return true
            }
            return false
        }
    },
    methods: {
        closeDialogButton(){
            this.dialog = false;
            this.updateData()
        },
        addDashboardImage(){
            let val = this.dashboardImages[this.dashboardImages.length-1];
            if( val.length > 0){
                this.dashboardImages.push("");
            }
        },
        updateData(){
            this.$emit('dashboardImages', this.dashboardImages)
        }
    },
    components: {
    draggable
  }

}
</script>

<style>


</style>
