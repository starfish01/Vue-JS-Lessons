<template>
  <div>
    <v-container fluid>
      {{item.selectedAction}}

      <v-layout row wrap>
        <v-flex xs3 pa-2 order-lg2 v-for="(fieldNumber,index) in checkboxObject" :key="index">
            {{fieldNumber}} - {{index}}
            <v-checkbox   class="text-xs-center"
            v-model="checkboxObject[index]" 
            :label="index"></v-checkbox>
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
      checkboxObject:{},
      };
  },
  methods: {
    sendingBackData() {

      //  console.log(this.checkboxObject)

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
        // console.log(this.item.requiredExclude)
        this.checkboxObject = this.item.requiredExclude;
      }
      //console.log(this.checkboxObject)
      if(this.item.includeField !== null){
        //need to add the included field to be able to exclude them from the required output
        for (let i = 0; i < this.item.includeField.length; i++) {

        if(this.checkboxObject[this.item.includeField[i]] == null) {
          this.checkboxObject[this.item.includeField[i]] = false
        } else if(this.checkboxObject[this.item.includeField[i]] == false){
          this.checkboxObject[this.item.includeField[i]]= false
        }else if(this.checkboxObject[this.item.includeField[i]] == true) {
          this.checkboxObject[this.item.includeField[i]] = true
        } else {
          console.log('we missed something')
        }
        }
      }
    }


    

    if(this.item.selectedAction == 'include') {
      
    }

    let firstActive = Number(this.item.firstActive);
    let lastActive = Number(this.item.lastActive);

    if (firstActive < lastActive) {
      for (let index = firstActive; index <= lastActive; index++) {
        if(this.checkboxObject[index] == null){
          this.checkboxObject[index] = false
        }else{
          this.checkboxObject[index] = true
        }
        
      }
    } else {
      if(this.checkboxObject[firstActive] == null){
          this.checkboxObject[firstActive] = false
        }else{
          this.checkboxObject[firstActive] = true
        }
    }


  }
};
</script>

<style>
</style>
