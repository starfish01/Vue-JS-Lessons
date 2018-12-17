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
                                <v-text-field label="Background Image URL" v-model="backgroundImageColor.image"></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field label="Background Colour #" v-model="backgroundColor" :disabled="true" ></v-text-field>
                            </v-flex>
                            

                
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
            backgroundImageColor:{
            "name": "background",
            "css": null,
            "image": null,
            "settings": null,
            "collection": null
          },
          backgroundColor:null
        }
    },
    methods:{
        compileData() {
            let checker = false;

            if(this.backgroundImageColor.image != null){
                if(this.backgroundImageColor.image.trim().length > 0){
                    checker = true
                }
            }

            if(checker){
                this.backgroundImageColor.css = {
                    "background-size": "cover",
                    "background-position": "center center"
                }
            }else{
                this.backgroundImageColor.image = null
                this.backgroundImageColor.css = null
            }
        },
        closeDialogButton(){
            this.compileData()
            this.returnData()
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
