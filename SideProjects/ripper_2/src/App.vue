<template>
  <div id="app">
    <main-body></main-body>
  </div>
</template>

<script>
import MainBody from "./components/Main.vue";

export default {
  name: "app",
  components: {
    MainBody
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.buttons {
  margin-bottom: 10px !important;
}
</style>
