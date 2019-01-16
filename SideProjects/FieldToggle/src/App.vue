<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs">
          <label>Active Field</label><br>
          <input v-model="activeField" type="number" placeholder="">
        </div>
        <div class="col-xs">
          <label>First Field</label><br>
          <input v-model="firstField"  type="number" placeholder="">
        </div>
        <div class="col-xs">
          <label>Last Field</label><br>
          <input v-model="lastField" type="number" placeholder="">
        </div>
        <div class="col-xs">
          <label>conditions</label><br>
            <div v-for="(condition, index) in conditions" :key="index"> 
               <input v-model="conditions[index]" placeholder=""> <button type="button" class="btn btn-danger btn-sm deleteButton" @click="removeCondition(index)">Delete</button>
            </div>
            <img class="addButton" src="../src/assets/add.svg" @click="addCondition">
        </div>
        
      </div>
      <br>
      <div class="row">
        <div class="col-xs">
          <p>forms.toggle_fields({{ activeField }}, {{conditionFields}}, {{conditions}});</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'component-name',
  components: {},
  data() {
      return {
        activeField:'',
        firstField:'',
        lastField:'',
        conditions:[''],
        fields:[]
  }
},
methods: {
  addCondition() {
    console.log('something');
    this.conditions.push("");
  },
  removeCondition(index){
    this.conditions.splice(index, 1)
  },
},
computed: {
  conditionFields () {
    if(this.firstField.length > 0 & this.lastField.length > 0){
      if(this.firstField < this.lastField){
        let numberArray = []
        for (let index =  Number(this.firstField); index <= this.lastField; index++) {
          numberArray.push(index);
        }
        
        return numberArray;
      }
    }
    return [this.firstField];
  }
}
    
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.addButton{
      width: 10%;
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