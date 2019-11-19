<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-select
          v-model="Type"
          :items="items"
          label="Type"
          item-text="title"
          item-value="id"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
   data: () => ({
     items: [
        {'title' : 'Something', 'value':'1'}
      ]
   })

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
