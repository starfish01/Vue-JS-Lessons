<template>
  <v-container fluid class="teal lighten-3">
    <v-layout class="mb-5">
      <addTop></addTop>
    </v-layout>
    <v-layout>
      <v-row>
        <v-col cols="12" md="2">
          <appLRSponser></appLRSponser>
        </v-col>
        <v-col style="background:blue" cols="12" md="8">
          <appMap></appMap>
        </v-col>
        <v-col cols="12" md="2">
          <appLRSponser></appLRSponser>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import Map from "../components/map/Map";
import TopSponsor from "../components/sponsor/Top";
import LeftRightSponser from "../components/sponsor/LeftRight";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    appMap: Map,
    addTop: TopSponsor,
    appLRSponser: LeftRightSponser
  }
};
</script>
