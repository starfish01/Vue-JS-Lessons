<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-text-field v-model="website" label="URL"/>

        <div>
          <v-btn :disabled="website === ''" @click="scrapeBtn()">Scrape</v-btn>
        </div>

        <img
          v-if="buttonData.length === 0 && buttonClicked"
          style="width:10%"
          src="../assets/ripLoading.svg"
          alt
        >

        <code
          v-if="buttonData.length > 0 && buttonClicked"
        >{{ buttonData }}</code>

        <!-- <div v-if="buttonData.length > 0 && buttonClicked && buttonData[0] === 'Error'">
          <p v-if="buttonData.length > 0 && buttonClicked && buttonData[0] === 'Error'">ERROR</p>
          <img style="width:20%" src="../assets/error.gif" alt>
        </div> -->

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as metadata from "../scrape";

export default {
  data: () => ({
    data: 0,
    buttonData: [],
    buttonClicked: false,
    website: "",
    website1:
      "https://digistorm-college.digistormenrol.com.au/applications/general/EDHDIZiohSs4niIZmIEhgSyBkpu50h95lSvk2kdmiUSwNYayvU/step/student-details"
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
      this.buttonClicked = true;
      this.buttonData = []
      // this.data = metadata.data('hj')
      // console.log(this.website);
      metadata.scrapFn(this.website);
      // this.data = metadata.metadata;
      // this.buttonData = metadata.buttonData;
      this.buttonData = metadata.fieldData;
    },
    btnDataPrint() {
      console.log(this.buttonData);
    }
  }
};
</script>

<style>
</style>
