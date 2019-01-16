<template>
  <div>
    <!-- <div v-for="condition in conditions" :color="primary" :key="condition.length()" class="col-sm-2 stock-block">
              <v-text-field style="padding:0 10px"/>
    </div>-->
    <!-- need to pass array to here -->
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
  }
};
</script>

<style>
</style>
