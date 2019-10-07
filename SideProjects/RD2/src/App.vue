<template>
  <v-app>
    <Header />
    <!-- <v-content class="yellow"> -->

    <Base fluid />

    <!-- </v-content> -->
  </v-app>
</template>

<script>
import Base from "./components/Base";
import Header from "./components/core/Header";
export default {
  name: "App",
  components: {
    Base,
    Header
  },
  data: () => ({
    //
  })
};
</script>
