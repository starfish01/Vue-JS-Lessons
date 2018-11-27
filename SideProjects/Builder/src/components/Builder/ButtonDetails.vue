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
                        :items="['Reach Link', 'Events', 'Schoolbox Events', 'Core Links','...']"
                        label="Button Type"
                        v-model="buttonSelect"
                        
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-text-field label="Module #"  v-model="button.module_id"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 >
                    <v-autocomplete
                        :items="['Parent', 'Student', 'Staff']"
                        label="Permission To View"
                        multiple
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Up" v-model="button.image"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Down" v-model="button.image_down"></v-text-field>
                </v-flex>
                
                <v-flex xs12 >
                    <v-checkbox label="Translations:" v-model="translationCheckbox"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6 v-if="translationCheckbox">
                    <v-text-field label="Title" placeholder="Sport" @blur="translationSetUp({'title':$event.target.value})"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 v-if="translationCheckbox">
                    <v-text-field label="Empty" placeholder="No Sport Notices" @blur="translationSetUp({'empty':$event.target.value})"></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="translationCheckbox">
                    <v-text-field label="Message" placeholder="There are currently no sport notices." @blur="translationSetUp({'desc':$event.target.value})"></v-text-field>
                </v-flex>

                <v-flex xs12 v-if="buttonSelect == 'Core Links'">
                    Core Links
                    <appCoreLinks :coreLinksAdded="coreLinksAdded"></appCoreLinks>
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
import CoreLinks from './CoreLinks/CoreLinks.vue'

export default {
    data(){
        return{
            dialog:false,
            translationArray:{},
            translationCheckbox:false,
            buttonSelect:'',
            coreLinksAdded:[]
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
    methods:{
        translationSetUp(value){
            if(value.title){
                this.translationArray.title = value.title
            }else if(value.empty){
                this.translationArray.empty = value.empty
            }else if(value.desc){
                this.translationArray.desc = value.desc
            }

            
            
            // This creates the JSON file just need to find out how to hook it up to the button
            console.log(this.translationArray)
        },
        addCoreLink(){
            console.log(this.coreLinksAdded)
            this.coreLinksAdded.push({'key':this.coreLinksAdded.size})
        }
    },
    components:{
        appCoreLinks: CoreLinks
    }



}
</script>

<style>

</style>
