<template>
<span>
    <v-flex xs12>Core Links
        <v-btn @click="addCoreLink()">Add</v-btn>
    </v-flex>

    <v-expansion-panel popout >
            <v-expansion-panel-content class="indigo darken-4" xs12 v-for="link in coreLinksAdded" :key="link.key"> 
                <div slot="header">{{ link.buttonTitle }} - {{ buttonTypeSelected }}</div>
                <v-card>
                    <v-container grid-list-md  >
            <v-layout wrap >
                <v-flex xs6 >
                    <v-select
                        :items="['URL', 'Facebook', 'Twitter']"
                        label="Button Type"
                        v-model="buttonTypeSelected"
                    ></v-select>
                </v-flex>
                <v-flex xs6 >
                    <v-text-field label="Title" v-model="link.buttonTitle"></v-text-field>
                </v-flex>
                <v-flex xs6 >
                    <v-text-field label="Link" v-if="buttonTypeSelected == 'URL'"></v-text-field>
                </v-flex>
                <v-flex xs6 >
                    <v-checkbox label="Open Link Externally?"  v-if="buttonTypeSelected == 'URL'" ></v-checkbox>
                </v-flex>

                <v-flex xs6 >
                    <v-text-field label="Android Id" v-if="buttonTypeSelected == 'Facebook'"></v-text-field>
                </v-flex>
                <v-flex xs6 >
                    <v-text-field label="Apple Id" v-if="buttonTypeSelected == 'Facebook'"></v-text-field>
                </v-flex>

                <v-flex xs6 >
                    <v-text-field label="Android Id" v-if="buttonTypeSelected == 'Twitter'"></v-text-field>
                </v-flex>
                <v-flex xs6 >
                    <v-text-field label="Apple Id" v-if="buttonTypeSelected == 'Twitter'"></v-text-field>
                </v-flex>



            </v-layout>
                    </v-container>
                </v-card> 
            </v-expansion-panel-content>         
    </v-expansion-panel>


    </span>
</template>

<script>
import Link from './Link'

export default {
    data(){
        return{
            buttonTypeSelected:'',
            buttonTitle:''
        }
    },
    props:['coreLinksAdded'],
    methods:{
        addCoreLink(){
            this.coreLinksAdded.push(this.coreLinksAdded.length)
        }
    },
    components:{
        appLink:Link
    }

}
</script>

<style>

</style>
