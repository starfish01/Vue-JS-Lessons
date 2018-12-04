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

                <v-flex xs12 sm6 >
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
            dialog: false
        }
    },
    methods: {
        closeDialogButton(){
            this.dialog = false;
        }
    }

}
</script>

<style>

</style>
