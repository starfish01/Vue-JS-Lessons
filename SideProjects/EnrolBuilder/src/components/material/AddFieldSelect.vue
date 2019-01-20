<template>
  <div>
    <v-container fluid>
      {{item.selectedAction}}
      {{includedItems}}
      <v-layout row wrap>
        <v-flex xs3 pa-2 order-lg2 v-for="(item, index) in includedItems" :key="index">
           <v-text-field type="number" v-model.number="includedItems[index]" placeholder=""/> 
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
      };
  },
  methods: {
    sendingBackData() {
 
      if(this.includedItems.length === 0){
        this.item.includeField = null;
      }else{
        for (let index = 0; index < this.includedItems.length; index++) {
          if(this.includedItems[index] === ''){
            this.removeCondition(index)
          }
        }
        this.item.includeField = this.includedItems;
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
    if(this.item.includeField !== null){
      for (let index = 0; index < this.item.includeField.length; index++) {
        this.includedItems[index] = this.item.includeField[index]
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