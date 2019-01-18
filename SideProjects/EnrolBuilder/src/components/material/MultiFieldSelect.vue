<template>
  <div>
    <v-container fluid>
      {{item.selectedAction}}

      <v-layout row wrap>
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
      checkboxObject:{},
      };
  },
  methods: {
    sendingBackData() {
       if(this.item.selectedAction == 'exclude' ){
          this.item.excludeField = this.checkboxObject;
       }
       if(this.item.selectedAction == 'excludeRequired' ){
          this.item.requiredExclude = this.checkboxObject;
       }


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
    if(this.item.selectedAction == 'exclude' ) {
      if(this.item.excludeField !== null){
        this.checkboxObject = this.item.excludeField;
      }
    }

    if(this.item.selectedAction == 'excludeRequired' ) {
      if(this.item.requiredExclude !== null){
        this.checkboxObject = this.item.requiredExclude;
      }
    }

    if(this.item.selectedAction == 'include') {
      
    }
  }
};
</script>

<style>
</style>
