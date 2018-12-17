<template>
     <div>
        <v-btn @click="dialog=true">Background</v-btn>

        <v-dialog v-model="dialog" persistent max-width="700px">
            <v-card>
                <v-card-title>
                    <span class="headline">Background Set Up</span>
                </v-card-title>
            </v-card>
            <v-card>
                <v-container grid-list-md >

                            <v-flex xs12>
                                <v-text-field label="Background Image URL" v-model="backgroundImageColor.URL"></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field label="Background Colour #" v-model="backgroundImageColor.Color" ></v-text-field>
                            </v-flex>
                            
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
export default {
    data() {
        return {
            dialog:false,
            backgroundImageColor:{URL:null, Color:null}
        }
    },
    methods:{
        closeDialogButton(){
            returnData()
            this.dialog = false;
        },
        returnData() {
            
            this.$emit('backgroundImageColor', this.backgroundImageColor)
        
        }
    }

}
</script>

<style>

</style>
