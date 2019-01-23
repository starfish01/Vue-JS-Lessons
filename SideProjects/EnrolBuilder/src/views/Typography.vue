<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card
          color="warning"
          title="Tools"
        >
          <v-card-text>

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
            
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  data: () => ({
   panel: [false, false, false]
  })
}
</script>

<style lang="scss">
  
</style>
