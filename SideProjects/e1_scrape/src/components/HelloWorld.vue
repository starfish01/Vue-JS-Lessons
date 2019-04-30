<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-btn @click="addURL()">+ URL</v-btn>

        <div v-for="(url,i) in arrayOfPages" v-bind:key="i">
          <v-layout row wrap>
            <v-flex md10>
              <v-text-field v-model="arrayOfPages[i]" label="URL"/>
            </v-flex>
            <v-flex md2>
              <v-btn @click="removeURL(i)">X</v-btn>
            </v-flex>
          </v-layout>
        </div>

        <div>
          <v-btn :disabled="arrayOfPages.length <= 0" @click="scrapeBtn()">Scrape</v-btn>
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
        <code>{{ funnelData }}</code>
      </v-flex>

      <v-flex xs6></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as metadata from "../scripts/scrape_scripts/scrape";
import * as funnelBuilder from "../scripts/funnel_format/funnelMapper";

export default {
  data: () => ({
    data: 0,
    buttonData: [],
    funnelData: [],
    arrayOfPages: [],
    buttonClicked: false,
    website3: "",
    website1:
      "https://msmc.digistormenrol.com.au/applications/enrolment/70nkzNpdGqwdyc3msPfbF90nGLqfNcMXzvb54mrrYDNjnMEQJH/step/family-information",
    website:
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
    addURL() {
      this.arrayOfPages.push("");
    },
    removeURL(i) {
      this.arrayOfPages.splice(i, 1);
    },
    scrapeBtn() {
      this.buttonClicked = true;

      let listOfSites = this.arrayOfPages;

      return new Promise((resolve, reject) => {
        let scrapData = metadata.scrapFn2(listOfSites);
        resolve(scrapData);
      }).then(scrapData => {
        this.buttonData = scrapData;

        //convert data
        this.funnelData = funnelBuilder.funnelMapper(scrapData);

        console.log("we waited");
      });
    },
    btnDataPrint() {
      console.log(this.buttonData);
    },
    ScrapeData() {
      this.arrayOfPages.forEach(url => {
        metadata.scrapFn(url);
      });
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
