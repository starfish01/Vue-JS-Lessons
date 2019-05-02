<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>E1</span>
        <span class="font-weight-light">Scrape</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" flat dark v-on="on">Version 0.2.2</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Version 0.2.2</v-card-title>

          <v-card-text><p>Last updated: 2/05/2019</p>
            <ul>
              <li>Added the ability to add multiple pages at once</li>
            </ul>
            <br>
            <p>Last updated: 24/04/2019</p>
            <ul>
              <li>Output JSON, all of it as singleLines</li>
            </ul>
            <br>
            <p>Update: 17/04/2019</p>
            <ul>
              <li>Fix for fields with hidden titles</li>
              <li>Started work on mapping captured data</li>
            </ul>
            <br>
            <p>Doesn't support:</p>
            <ul>
              <li>Funnel Mapping is not correctly set up</li>
              <li>Conditionally required yet</li>
              <li>Multipage set up yet</li>
            </ul>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dialog: false
    };
  }
};
</script>
