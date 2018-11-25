<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="700px">
            <v-btn slot="activator" :color="btnComponentSet" fab large dark>
                <v-icon>add</v-icon>
            </v-btn>
        <v-card>
            <v-card-title>
                <span class="headline">User Profile - {{ button.name }}</span>
            </v-card-title>
        </v-card>
        <v-card>
        <v-container grid-list-md  >
            <v-layout wrap >
     
                <v-flex xs12 sm6 >
                    <v-text-field label="Button Title" required v-model="button.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-select
                        :items="['Reach Link', 'Events', 'Schoolbox Events', '...']"
                        label="Button Type"
                        
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-text-field label="Module #"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-autocomplete
                        :items="['Parent', 'Student', 'Staff']"
                        label="Permission To View"
                        multiple
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Up"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Down" ></v-text-field>
                </v-flex>
                
                <v-flex xs12 sm6>
                    
                </v-flex>
            </v-layout>
            </v-container>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
        </v-card>
        </v-dialog>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            dialog:false
        }
    },
    props:['button'],
    computed:{
        btnComponentSet(){
            if (!this.button.name == null || !this.button.name == ''){
                return "primary"
            }
            return "warning"
        }
    },

}
</script>

<style>

</style>
