<template>
  <div>
    <v-container fluid>
      {{item.selectedAction}}
      {{includedItems}}
      <v-layout row wrap>
        <v-flex xs3 pa-2 order-lg2 v-for="(item, index) in includedItems" :key="index">
           <v-text-field v-model="includedItems[index]" placeholder=""/> 
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
      console.log()
    },
    sendingBackData() {
      this.item.includeField = this.includedItems;
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
    console.log(this.item.includeField) 
    console.log(this.includedItems)
    if(this.item.includeField !== null){
      this.includedItems = this.item.includedItems.slice(0);
      console.log(this.includedItems)
    }

  }
  
  }

</script>

<style scopped>
.addButton{
      width: 5%;
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