<template>
    <div>
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
            <v-btn color="blue darken-1" flat >Close</v-btn>
            <v-btn color="blue darken-1" flat >Save</v-btn>
        </v-card-actions>
        </v-card>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:['button']

}
</script>

<style>

</style>
