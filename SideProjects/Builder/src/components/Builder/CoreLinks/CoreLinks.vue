<template>
<span>
    <v-flex xs12>Core Links
        <v-btn @click="addCoreLink()">Add</v-btn>
    </v-flex>

    <v-expansion-panel popout>
            <v-expansion-panel-content xs12 v-for="links in coreLinksAdded" :key="links.key"> 
                <div slot="header">Item</div>
                <v-card>
                    <v-card-text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card> 
            </v-expansion-panel-content>         
    </v-expansion-panel>

    <!-- <v-expansion-panel popout>
            <v-expansion-panel-content
              v-for="(item,i) in 5"
              :key="i"
            >
              <div slot="header">Item</div>
              <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel> -->

    </span>
</template>

<script>
import Link from './Link'

export default {
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
