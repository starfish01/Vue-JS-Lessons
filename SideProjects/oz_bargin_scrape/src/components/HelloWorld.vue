<template>
  <v-container>
          <v-btn @click="clicker">get data</v-btn>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>
                <v-flex v-for="i in data" :key="`3${i}`" xs6>
                  <v-card dark color="primary">
                    <v-card-text class="px-6">{{ i.title }}</v-card-text>
                    <v-card-text class="px-6"><v-btn :href="ozBarginLink(i.link)" target="_blank">Open Link</v-btn></v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>



  </v-container>
</template>

<script>
import { mapActions,mapState  } from 'vuex'
import metadata from '../scrape'


  export default {
    data(){
      return{
        data:0
      }
    },
    computed:{
      newsitedata(){
        return this.$store.state.siteData
      },
      
    },
    methods:{
      ...mapActions([
        'getSiteData'
      ]),
      clicker(){
        this. data = metadata
      },
      ozBarginLink(link){
        return 'https://www.ozbargain.com.au'+link
      }
    }
  }
</script>

<style>

</style>
