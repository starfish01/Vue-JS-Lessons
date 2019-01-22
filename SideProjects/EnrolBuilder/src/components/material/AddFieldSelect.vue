<template>
  <div>
    <v-container fluid @keyup.enter="sendingBackData()">
      {{item.selectedAction}}
      <v-layout row wrap>
        <v-flex xs3 pa-2 order-lg2 v-for="(item, index) in includedItems" :key="index">
            <v-text-field :autofocus="index == 0" :type="conditionsFields ? '' : 'number'" :input="addFieldOnChangeEvent()" v-model="includedItems[index]" placeholder=""/> 
            <v-btn small color="error" @click="removeCondition(index)">Delete</v-btn>
        </v-flex>
        <img class="addButton" src="../../../src/assets/icons/add.svg" @click="addCondition">
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
        includedItems:[],
        conditionsFields:false
      };
  },
  methods: {

    addFieldOnChangeEvent(){

      //console.log(this.includedItems[this.includedItems.length-1].length>0)
      if(this.includedItems[this.includedItems.length-1].length>0) {
        this.addCondition();
      }
      // if(this.includedItems[this.includedItems.length].length > 0){
      //   console.log('something')
      // }

    },
    sendingBackData() {
 
      if(this.includedItems.length === 0){
        this.item.includeField = null;
      }else{
        for (let index = 0; index < this.includedItems.length; index++) {
          if(this.includedItems[index] === ''){
            this.removeCondition(index)
          }
        }

        if(this.item.selectedAction == 'include' ){
          let numberArray=[];
          for (let i = 0; i <  this.includedItems.length; i++) {
            numberArray.push( Number(this.includedItems[i]));
          }
          this.item.includeField = numberArray;
        }else if(this.item.selectedAction == 'conditions') {
          this.item.conditions = this.includedItems
        }

      }
      this.$emit("itemReturn",this.item);
    },
    addCondition() {
      this.includedItems.push("");
    },
    removeCondition(index){
      this.includedItems.splice(index, 1)
    },
  },
  created () {

    let workingArray;

    if(this.item.selectedAction == 'include' ){
      workingArray = this.item.includeField;

    }else if(this.item.selectedAction == 'conditions') {
      workingArray = this.item.conditions;
      this.conditionsFields=true;
    }


    if(workingArray !== null){
      for (let index = 0; index < workingArray.length; index++) {
        this.includedItems[index] = workingArray[index]
      }
    }
      this.addCondition();
    }

  }
  
  

</script>

<style scopped>
.addButton{
      width: 5%;
      height: 5%;
      margin-top: 10%;
    margin-left: 5%;
}
.addButton:hover {
  background-color: red;
}
.addButtonRow {
    text-align: left;
    padding-left: 9px;
}
.deleteButton{
  margin-left: 5px;
}

</style>