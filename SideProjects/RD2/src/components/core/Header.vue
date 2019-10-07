<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>RDOMAP.COM</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-bind:href="item.url"
        text
        v-for="(item, index) in menuItems"
        v-bind:key="index"
      >{{item.title}}</v-btn>
    </v-toolbar-items>

    <span class="hidden-md-and-up">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon dark>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-title>
              <v-btn text small v-bind:href="item.url">{{ item.title }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      menuItems: [
        { title: "Chat/Discord", url: "https://discord.gg/ksE4hZh" },
        { title: "Map", url: "https://rdomap.com/" },
        { title: "Guides", url: "https://rdomap.com/guides" },
        { title: "About Us", url: "https://rdomap.com/about-us" },
        {
          title: "Privacy Policy/T&Cs",
          url: "https://rdomap.com/privacy-policy-t-cs"
        },
        { title: "Donate", url: "https://rdomap.com/donate" }
      ]
    };
  },
  methods: {}
};
</script>
