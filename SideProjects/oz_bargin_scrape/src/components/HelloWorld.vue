<template>
  <v-container>
          <p>{{hello}}</p>
          <button @click="getData">get data</button>
          <p>{{data}}</p>
  </v-container>
</template>

<script>
import {ozSiteData} from '../../src/scrape.js'

  export default {
    data(){
      return{
        hello:"hello",
        data:0
      }
    },
    computed:{
      
    },
    methods:{
      getData(){
        this.data = ozSiteData;
      }
    }
  }
</script>

<style>

</style>
