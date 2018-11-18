<template>
  <v-container>
          <p>{{hello}}</p>
          <button @click="getSiteData">get data</button>
          <p>{{newsitedata}}</p>
  </v-container>
</template>

<script>
import { mapActions,mapState  } from 'vuex'

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

    }
  }
</script>

<style>

</style>
