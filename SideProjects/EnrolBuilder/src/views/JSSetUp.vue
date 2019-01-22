<template>
  <v-container fill-height fluid grid-list-xl>


<v-layout wrap>
      <v-flex sm12>
        <material-card color="warning" title="Output">
            <v-switch label="Guardian confirm" v-model="guardianConfirmSwitch"></v-switch>
             <v-btn color="primary" :disabled="userAddedFileds.length > 0 ? false : true" @click="output()">Output</v-btn>
             <!-- <v-btn color="primary" :disabled="jsOutPut == '' ? true : false" v-clipboard="jsOutPut" @click="snackbar = true;">Copy</v-btn> -->
             <v-card-text>
                <!-- <v-textarea v-if="jsOutPut == ''? false : true" box v-model="jsOutPut" ></v-textarea> -->
                <div id="outputJS" contenteditable="true" v-if="jsOutPut == ''? false : true" box>
                  <p class="outputCodeDisplayPara" v-for="(val, i) in jsOutPut" :key="i">{{val}}</p>
                </div>
          </v-card-text>
        </material-card>
        
      </v-flex>






      <v-flex sm12>
        <material-card color="warning" title="JS Show Hide">
          <b>G</b> - Guardian field / <b>R</b> - Required Field

              <table>
              
               <div v-for="(item, index) in userAddedFileds" :key="index">
                 
              <td>
                <v-checkbox label="G" v-model="item.guardianField"/>
              </td>
              
              <td>
                <v-text-field label="Conditions" @click="gatherFields(item,index,3)" v-model="item.conditions"/>
              </td>

              <td>
                <v-text-field label="Active" @change="activeFieldChangeFN(index)" type="number" v-model.number="item.activeField"></v-text-field>
              </td>
              <td>
                <v-text-field label="First Active" type="number" v-model.number="item.firstActive"></v-text-field>
              </td>
              <td>
                <v-text-field label="Last Active" :disabled="item.firstActive == '' ? true: false" type="number" v-model.number="item.lastActive"></v-text-field>
              </td>
              <td>
                <v-text-field label="Exclude" :disabled="item.firstActive >= item.lastActive" @click="gatherFields(item,index,0)" v-model="item.excludeField"></v-text-field>
              </td>
              <td>
                <v-text-field label="Include" @click="gatherFields(item,index,2)" v-model="item.includeField"></v-text-field>
              </td>
              <td>
                <v-checkbox label="R" v-if="!item.guardianField" v-model="item.required"/>
              </td>
              <td>
                <v-text-field label="Exclude" v-if="item.required" v-model="item.requiredExclude" :disabled="item.firstActive >= item.lastActive" @click="gatherFields(item,index,1)"></v-text-field>
              </td>
              <td>
                
                <img @click="deleteToggle(index)" class="deleteButton" src="../../src/assets/icons/close-circle.svg">
              </td>
              </div>
            
              </table>
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


<v-snackbar
        v-model="snackbar"
        :bottom="'bottom'"
        :right="'right'"
        :timeout="2000"
      >
        Copied!
        <v-btn
          color="pink"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>



  </v-container>
</template>

<script>
import MultiFieldSelect from "../components/material/MultiFieldSelect.vue";
import AddFieldSelect from '../components/material/AddFieldSelect.vue';
import * as jsTemplate from "../templates/jsTemplate.js";


export default {
  data: () => ({
    dialog: false,
    dataCompiler:null,
    snackbar:false,
    componentForFieldSelect: '',
    selectedField: null,
    jsOutPut:'',
    guardianConfirmSwitch:true,
    layoutTemplate: {
      guardianField: false,
      conditions:null,
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
      }else if(buttontype === 3){
        item.selectedAction = 'conditions'
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
    },
    output(){
      
      let returnData = this.dataCompiler.getData(this.userAddedFileds);

      let outPutData=[];

      // console.log(returnData.gurdianList.length)

      if(returnData.gurdianList.length > 0){

        outPutData.push(this.dataCompiler.gurardianTemplate().topElement);


        for (let i = 0; i < returnData.gurdianList.length; i++) {        
          outPutData.push(`${returnData.gurdianList[i]}`);
        }

        outPutData.push(this.dataCompiler.gurardianTemplate().bottomElement);

      }
    
      for (let i = 0; i < returnData.normalList.length; i++) {
        outPutData.push(`${returnData.normalList[i]}`)
      }


      for (let i = 0; i < returnData.requiredList.length; i++) {
        outPutData.push(`${returnData.requiredList[i]}`);
      }

      // console.log(outPutData)
      this.jsOutPut = outPutData;

    }
    
  },
  created () {
    this.dataCompiler =  new jsTemplate.JStemplate();
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

<style scoped>
.outputCodeDisplayPara {
  line-height: 1.2;
}

#outputJS {
  background: lightgray;
  max-height: 150px;
  overflow-y: auto;
}
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

