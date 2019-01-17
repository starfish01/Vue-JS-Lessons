<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs3 pa-2 order-lg2 v-for="(fieldNumber,index) in item.lastActive-item.firstActive" :key="index">
            <v-checkbox class="text-xs-center" v-model="checkboxes[index]" :label="labelValue(index)"></v-checkbox>
        </v-flex>

      </v-layout>
    </v-container>

    {{previouslyExcluded}}
 
    <v-btn @click="sendingBackData()">Add</v-btn>
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
      previouslyExcluded:[]
    };
  },
  methods: {
    sendingBackData() {
       
      let arrayOfFields = []

      this.checkboxes.forEach((field,index) => {
        if(field){
          arrayOfFields.push(this.item.firstActive + index)
        }
      });

      this.item.excludeField = arrayOfFields

      this.$emit("itemReturn",this.item);
    },
    labelValue(index) {
      //console.log( index+this.item.firstActive)
      let val = index+this.item.firstActive 
      return val.toString();
    }
  },
  computed:{
    
  },
  created () {
    this.previouslyExcluded = this.item.excludeField;

    //Up to here need to work out this array part


    "(fieldNumber,index) in item.lastActive-item.firstActive"



    console.log('created')
  }
};
</script>

<style>
</style>
