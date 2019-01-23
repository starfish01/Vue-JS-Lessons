<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn
      slot="activator"
      class="elevation-0"
      color="grey"
      dark
      fab
      fixed
      style="top: 96px;"
      top
    >
      <v-icon>mdi-check-all</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
             <v-checkbox label="Clone Status"/>
             <v-checkbox label="Clone default form"/>
             <v-checkbox label="Rename Form"/>
             <v-checkbox label="Upload Logo"/>
             <v-checkbox label="Edit Welcome message"/>
             <v-checkbox label="Edit Jumbotron"/>
             <v-checkbox label="Set Form Style Defaults"/>
             <v-checkbox label="Import TASS Data"/>
             <v-checkbox label="Build Form"/>
             <v-checkbox label="Style Email"/>
             <v-checkbox label="Configure Export"/>   
            <v-divider class="mt-3"/>
            <div>
      <div class="text-xs-center mb-3">{{ panel }}</div>
      <v-expansion-panel
        v-model="panel"
        expand
      >
        <v-expansion-panel-content
          v-for="(item, i) in 5"
          :key="i"
        >
          <div slot="header">Item</div>
          <v-card>
            <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
          
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    colors: [
      'primary',
      'info',
      'success',
      'warning',
      'danger'
    ],
    images: [
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg'
    ]
  }),

  computed: {
    ...mapState('app', ['image', 'color']),
    color () {
      return this.$store.state.app.color
    }
  },

  methods: {
    ...mapMutations('app', ['setImage']),
    setColor (color) {
      this.$store.state.app.color = color
    }
  }
}
</script>

<style lang="scss">
  .v-avatar,
  .v-responsive {
    cursor: pointer;
  }
</style>
