<template>
  <v-app>
    <Base fluid />
  </v-app>
</template>

<script>
import Base from "./components/Base";
export default {
  name: "App",
  components: {
    Base
  },
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
@font-face {
  font-family: myFirstFont;
  src: url("/fonts/redemption.woff");
}

#app,
h3,
h2,
label {
  font-family: myFirstFont;
  font-weight: 400;
}
.field {
  .label {
    font-weight: 400;
  }
}
h4 {
  font-weight: 400;
  font-size: 1rem;
}
h2 {
  font-size: 2rem;
  color: white;
}
</style>