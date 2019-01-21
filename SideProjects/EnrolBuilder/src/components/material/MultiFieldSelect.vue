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

      // console.log(this.checkboxObject)

      for (var key in this.checkboxObject) {
        if (this.checkboxObject.hasOwnProperty(key)) {
          if(!this.checkboxObject[key]){
            delete this.checkboxObject[key];
          }
        }
      }

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
      if(this.item.includeField !== null){
        //need to add the included field to be able to exclude them from the required output
        console.log(this.item.includeField)
      }
    }

    if(this.item.selectedAction == 'include') {
      
    }
  }
};
</script>

<style>
</style>
