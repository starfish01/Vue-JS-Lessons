<template>
  <v-container>
          <p>{{hello}}</p>
          <button @click="clicker">get data</button>
          <p>{{newsitedata}}</p>
  </v-container>
</template>

<script>
import { mapActions,mapState  } from 'vuex'
import metadata from '../scrape'


  export default {
    data(){
      return{
        hello:"hello",
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
        console.log('clicked');
        let x = metadata
        console.log(x)
      }
    }
  }
</script>

<style>

</style>
