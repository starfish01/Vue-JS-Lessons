<template>
  <v-app>
    <Header />
    <v-content>
      <Base />
    </v-content>
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
