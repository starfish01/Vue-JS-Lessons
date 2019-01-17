<template>
  <div>
    <v-container fluid>
      <v-layout row>
        
        <v-flex xs4 pa-2 order-lg2 >
          <v-card dark tile flat color="error">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <div v-for="condition in conditions" :color="primary" :key="condition.length()" class="col-sm-2 stock-block">
              <v-text-field style="padding:0 10px"/>
    </div>-->
    <!-- need to pass array to here -->
{{item}}

    <v-btn @click="sendingBackData()">Add</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  methods: {
    sendingBackData() {
        this.item.activeField = 77;
      this.$emit("itemReturn",this.item);
    }
  },
  computed:{
    
  }
};
</script>

<style>
</style>
