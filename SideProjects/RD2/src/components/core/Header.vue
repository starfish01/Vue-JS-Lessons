<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>RDOMAP.COM</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-bind:href="item.url"
        text
        v-for="(item, index) in menuItems"
        v-bind:key="index"
      >{{item.title}}</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
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
