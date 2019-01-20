<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="warning" title="JS Show Hide">
          <!-- <v-data-table :headers="headers" :items="userAddedFileds" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>  -->
            
            <!-- <template slot="items" slot-scope="item"> -->
              <table>
              
               <div v-for="(item, index) in userAddedFileds" :key="index">
                 
              <td>
                <v-checkbox label="Guardian" v-model="item.guardianField"/>
              </td>
              <td>
                <v-text-field label="Active" @change="activeFieldChangeFN(index)" type="number" v-model.number="item.activeField"></v-text-field>
              </td>
              <td>
                <v-text-field label="First Active" type="number" v-model.number="item.firstActive"></v-text-field>
              </td>
              <td>
                <v-text-field label="Last Active" type="number" v-model.number="item.lastActive"></v-text-field>
              </td>
              <td>
                <v-text-field label="Exclude" :disabled="item.firstActive >= item.lastActive" @click="gatherFields(item,index,0)" v-model="item.excludeField"></v-text-field>
              </td>
              <td>
                <v-text-field label="Include" @click="gatherFields(item,index,2)" v-model="item.includeField"></v-text-field>
              </td>
              <td>
                <v-checkbox label="Required" v-if="!item.guardianField" v-model="item.required"/>
              </td>
              <td>
                <v-text-field label="Exclude" v-if="item.required" v-model="item.requiredExclude" :disabled="item.firstActive >= item.lastActive" @click="gatherFields(item,index,1)"></v-text-field>
              </td>
              <td>
                <img @click="deleteToggle(item.index)" class="deleteButton" src="../../src/assets/icons/close-circle.svg">
              </td>
              </div>
            
              </table>
            <!-- </template> -->
          <!-- </v-data-table> -->
          <v-btn color="primary" @click="addNewField()">Add</v-btn>
        </material-card>
      </v-flex>
    </v-layout>

    <!--  -->
    <v-dialog v-model="dialog" persistent  width="500">
      <v-card>
        
        <!-- <v-card-title class="headline">Title</v-card-title> -->
        <v-card-text>
          <div class="container">
            <div class="row">
              <component
                :item="selectedField"
                @itemReturn="returnActiveFields($event)"
                :is="componentForFieldSelect"
              ></component>
            </div>
          </div>
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import MultiFieldSelect from "../components/material/MultiFieldSelect.vue";
import AddFieldSelect from '../components/material/AddFieldSelect.vue';
export default {
  data: () => ({
    dialog: false,
    componentForFieldSelect: '',
    selectedField: null,
    layoutTemplate: {
      guardianField: false,
      activeField: null,
      firstActive: null,
      lastActive: null,
      excludeField: null,
      includeField: null,
      required: false,
      requiredExclude: null
    },
    userAddedFileds: [],
  }),
  methods: {
    addNewField() {
      let template = Object.assign({}, this.layoutTemplate);
      this.userAddedFileds.push(template);
    },
    gatherFields(item,index,buttontype) {
      if(buttontype === 0){
        item.selectedAction = 'exclude'
        this.componentForFieldSelect = "appMultiFieldSelect";
      }else if(buttontype === 1){
        item.selectedAction = 'excludeRequired'
        this.componentForFieldSelect = "appMultiFieldSelect";
      }else if(buttontype === 2){
        item.selectedAction = 'include'
        this.componentForFieldSelect = "appAddFieldSelect";
      }else{
        return;
      }
      item.index = index
      this.selectedField = item;
      this.dialog = true;
    },
    deleteToggle(index) {
        this.userAddedFileds.splice(index, 1)
    },
    activeFieldChangeFN(index){
      if(this.userAddedFileds[index].firstActive == null){
        this.userAddedFileds[index].firstActive = parseInt(this.userAddedFileds[index].activeField) + 1;
      }
    },
    returnActiveFields(event){
      this.userAddedFileds[event.index] = event;
      this.dialog = false;
      this.componentForFieldSelect = '';
      delete this.userAddedFileds[event.index].selectedAction;
      delete this.userAddedFileds[event.index].index;
    }
    
  },
  computed: {
    
  },
  watch:{
    
  },
  components: {
    appMultiFieldSelect: MultiFieldSelect,
    appAddFieldSelect: AddFieldSelect
  }
};
</script>

<style>
td {
  padding: 0 5px !important;
}
.stock-block {
  display: inline-block;
}

.deleteButton:hover{
  background-color: red
}
</style>

