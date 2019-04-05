<template>
  <v-container fill-height fluid grid-list-xl>
    <Home/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
