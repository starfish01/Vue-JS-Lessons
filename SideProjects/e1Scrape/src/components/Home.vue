<template>
  <v-layout wrap>
    <v-btn>Scrape</v-btn>
    <v-btn :color="'primary' ">Output</v-btn>
    <v-text-field v-model="urlLink" label="URL"></v-text-field>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    urlLink: ""
  }),
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
