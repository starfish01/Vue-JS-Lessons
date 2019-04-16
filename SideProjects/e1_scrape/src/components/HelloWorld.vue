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
      </v-flex>
      <v-flex xs6>
        <h3>Enrol</h3>
        <hr>
        <code v-if="buttonData.length > 0 && buttonClicked">{{ buttonData }}</code>
      </v-flex>
      <v-flex xs6>
        <h3>Funnel</h3>
        <hr>
        <code v-if="buttonData.length > 0 && buttonClicked">{{ funnelData }}</code>
      </v-flex>
      <v-flex xs6></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as metadata from "../scripts/scrape_scripts/scrape";
import * as funnelBuilder from '../scripts/funnel_format/funnelMapper';

export default {
  data: () => ({
    data: 0,
    buttonData: [],
    funnelData:'',
    buttonClicked: false,
    website: "",
    website3:"https://msmc.digistormenrol.com.au/applications/enrolment/70nkzNpdGqwdyc3msPfbF90nGLqfNcMXzvb54mrrYDNjnMEQJH/step/family-information"
   ,website2:
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
      this.buttonData = [];

      metadata.scrapFn(this.website);

      this.buttonData = metadata.pages;


      // this.funnelData = funnelBuilder.funnelMap;

    },
    btnDataPrint() {
      console.log(this.buttonData);
    }
  }
};
</script>

<style>
code {
    width: 90%;
    text-align: left;
    margin: 0px 10px;
}
</style>
