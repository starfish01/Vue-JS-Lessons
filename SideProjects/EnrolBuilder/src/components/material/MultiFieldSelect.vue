<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        {{item.selectedAction}}
        <v-flex xs3 pa-2 order-lg2 v-for="(fieldNumber,index) in item.lastActive-item.firstActive" :key="index">
            <v-checkbox   class="text-xs-center"
            v-model="checkboxObject[item.firstActive + index]" 
            :label="labelValue(index)"></v-checkbox>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn color="primary"  @click="sendingBackData()">Save</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      checkboxes:[],
      checkboxObject:{}    };
  },
  methods: {
    sendingBackData() {
       
      this.item.excludeField = this.checkboxObject;

      this.$emit("itemReturn",this.item);
    },
    labelValue(index) {
      let val = index+this.item.firstActive 
      return val.toString();
    }
  },
  computed:{
    
  },
  created () {

    if(this.item.excludeField !== null){
      this.checkboxObject = this.item.excludeField;
    }
  }
};
</script>

<style>
</style>
