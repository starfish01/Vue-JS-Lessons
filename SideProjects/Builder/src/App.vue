<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Project Builder v0.23</v-toolbar-title>
    </v-toolbar>
    <v-content>

      <component :is="currentComponent"></component>

    </v-content>
    <v-footer app fixed>
      <span>&copy; {{(new Date()).getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script>

import BuilderMain from './components/Builder/BuilderMain.vue'

export default {
  data () {
    return {
      currentComponent: 'appBuilderMain',
      drawer: false,
      props: {
        source: String
      }
    }
  },
  components: {
    appBuilderMain: BuilderMain
  }
}
</script>
