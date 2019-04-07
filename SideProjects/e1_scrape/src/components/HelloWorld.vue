<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-text-field v-model="website" label="URL"/>
        <v-btn :disabled="website === ''" @click="scrapeBtn()">Scrape</v-btn>
        <p>{{data}}</p>        

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as metadata from "../scrape";

export default {
  data: () => ({
    data: 0,
    website: "https://digistorm-college.digistormenrol.com.au/applications/general/vnZoQC12xDbXqSpFEaXjTndqlCfFzY0bguiBEr5P18CyOTy3Bw/family"
  }),
  computed: {
    isURL() {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return pattern.test(this.website);
    }
  },
  methods: {
    scrapeBtn() {
      // this.data = metadata.data('hj')
      // console.log(this.website);
      metadata.scrapFn(this.website)
      this.data = metadata.metadata;
    }
  }
};
</script>

<style>
</style>
