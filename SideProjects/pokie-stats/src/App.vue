<template>
  <div id="app">
    <b-navbar class="nav-bar" type="is-primary">
      <!-- <template slot="brand"> -->
      <!-- <b-navbar-item tag="router-link" :to="{ path: '/' }"> -->
      <!-- <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                > -->
      <!-- </b-navbar-item> -->
      <!-- </template> -->
      <!-- <template slot="start">
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons"></div>
        </b-navbar-item>
      </template> -->
      <template slot="start">
        <b-navbar-item href="https://patricklabes.com.au">
          Home
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container">
      <PokeStats />
    </div>
  </div>
</template>

<script>
import PokeStats from "./components/PokeStats.vue";

export default {
  name: "app",
  components: {
    PokeStats
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bar {
  margin-bottom: 10px;
}
.container {
  margin: 2% !important;
}
</style>
