<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-text-field label="URL"/>
        <v-btn @click="scrapeBtn()">Scrape</v-btn>

        <p>{{data}}</p>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as metadata from '../scrape'

export default {
  data: () => ({
    data:0
  }),
  methods:{
    scrapeBtn(){
      // this.data = metadata.data('hj')
      this.data = metadata.scrapFn()
    }

  }
};
</script>

<style>
</style>
