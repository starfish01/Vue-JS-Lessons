<template>
  <v-container>
          <v-btn @click="clicker">get data</v-btn>

          <ul>
            
            <li v-for="item in data">
            {{ item.title }}
            </li>
          </ul>


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
      }
    },
    methods:{
      ...mapActions([
        'getSiteData'
      ]),
      clicker(){
        this. data = metadata
      }
    }
  }
</script>

<style>

</style>
