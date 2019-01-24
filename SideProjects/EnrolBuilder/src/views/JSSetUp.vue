<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex sm12>
        <material-card color="warning" title="Output">
          <v-layout wrap>
            <v-flex sm4>
              <v-switch label="Guardian confirm" v-model="guardianConfirmSwitch"></v-switch>
            </v-flex>
            <v-flex sm4>
              <v-switch label="Add required function" v-model="addRequiredFunction"></v-switch>
            </v-flex>
            <v-flex sm4>
              <v-switch label="Guardian Function" v-model="addGuardianFunction"></v-switch>
            </v-flex>
          </v-layout>
          <v-btn
            color="primary"
            :disabled="userAddedFileds.length > 0 ? false : true"
            @click="output()"
          >Output</v-btn>
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
          <b>G</b> - Guardian field /
          <b>R</b>

           - Required Field
          <table>
            <div v-for="(item, index) in userAddedFileds" :key="index">
              <v-flex sm12 v-if="item.regFieldType">
                <td>
                  <v-checkbox label="G" v-model="item.guardianField"/>
                </td>
                <td>
                  <v-text-field
                    label="Active"
                    autofocus
                    @change="activeFieldChangeFN(index)"
                    type="number"
                    v-model.number="item.activeField"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="First Active"
                    type="number"
                    v-model.number="item.firstActive"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="Last Active"
                    :disabled="item.firstActive == '' ? true: false"
                    type="number"
                    v-model.number="item.lastActive"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="Conditions"
                    @click="gatherFields(item,index,3)"
                    v-model="item.conditions"
                  />
                </td>
                <td>
                  <v-text-field
                    label="Exclude"
                    :disabled="item.firstActive >= item.lastActive"
                    @click="gatherFields(item,index,0)"
                    v-model="item.excludeField"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="Include"
                    @click="gatherFields(item,index,2)"
                    v-model="item.includeField"
                  ></v-text-field>
                </td>
                <td>
                  <v-checkbox label="R" v-if="!item.guardianField" v-model="item.required"/>
                </td>
                <td>
                  <v-text-field
                    label="Exclude"
                    v-if="item.required"
                    v-model="item.requiredExclude"
                    :disabled="item.firstActive >= item.lastActive"
                    @click="gatherFields(item,index,1)"
                  ></v-text-field>
                </td>
                <td>
                  <img
                    @click="deleteToggle(index)"
                    class="deleteButton"
                    src="../../src/assets/icons/close-circle.svg"
                  >
                </td>
              </v-flex>
              <v-flex sm12 v-if="item.label">
                <td>
                  <v-text-field v-model="item.labelValue"></v-text-field>
                </td>
                <td>
                  <img
                    @click="deleteToggle(index)"
                    class="deleteButton"
                    src="../../src/assets/icons/close-circle.svg"
                  >
                </td>
              </v-flex>

              <v-flex sm12 v-if="item.singleRequiredField">
                <td>
                  <v-text-field
                    label="Active"
                    autofocus
                    @change="activeFieldChangeFN(index)"
                    type="number"
                    v-model.number="item.activeField"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="First Active"
                    type="number"
                    v-model.number="item.firstActive"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="Last Active"
                    :disabled="item.firstActive == '' ? true: false"
                    type="number"
                    v-model.number="item.lastActive"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="Conditions"
                    @click="gatherFields(item,index,3)"
                    v-model="item.conditions"
                  />
                </td>
                <td>
                  <v-text-field
                    label="Exclude"
                    :disabled="item.firstActive >= item.lastActive"
                    @click="gatherFields(item,index,0)"
                    v-model="item.excludeField"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    label="Include"
                    @click="gatherFields(item,index,2)"
                    v-model="item.includeField"
                  ></v-text-field>
                </td>

                <td>
                  <img
                    @click="deleteToggle(index)"
                    class="deleteButton"
                    src="../../src/assets/icons/close-circle.svg"
                  >
                </td>
              </v-flex>
            </div>
          </table>
          <v-layout wrap>
            <v-flex sm9>
              <v-btn color="primary" @click="addNewField()">Add</v-btn>

              <v-btn color="primary" @click="addNewLabel()">Label</v-btn>

              <v-btn
                color="primary"
                @click="singleConditionalRequired()"
              >Single Conditionally Required</v-btn>
            </v-flex>
            <v-flex sm3>
              <v-btn color="danger" @click="deleteLocalStorage()">Clear</v-btn>
            </v-flex>
          </v-layout>
        </material-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" persistent width="500">
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

    <v-snackbar v-model="snackbar" :bottom="'bottom'" :right="'right'" :timeout="2000">Copied!
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import MultiFieldSelect from "../components/material/MultiFieldSelect.vue";
import AddFieldSelect from "../components/material/AddFieldSelect.vue";
import * as jsTemplate from "../templates/jsTemplate.js";

export default {
  data: () => ({
    dialog: false,
    dataCompiler: null,
    snackbar: false,
    componentForFieldSelect: "",
    selectedField: null,
    jsOutPut: "",
    addRequiredFunction: true,
    addGuardianFunction: true,
    guardianConfirmSwitch: true,
    layoutTemplate: {
      regFieldType: true,
      guardianField: false,
      conditions: null,
      activeField: null,
      firstActive: null,
      lastActive: null,
      excludeField: null,
      includeField: null,
      required: false,
      requiredExclude: null
    },
    userAddedFileds: []
  }),
  methods: {
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.userAddedFileds);
      localStorage.setItem("jsUserAddedFields", parsed);
    },
    deleteLocalStorage() {
      //need to delete from local
      this.jsOutPut =''
      this.userAddedFileds = [];
    },
    singleConditionalRequired() {
      let template = Object.assign({}, this.layoutTemplate);
      template.regFieldType = false;
      template.singleRequiredField = true;
      this.userAddedFileds.push(template);
      this.saveToLocalStorage();
    },
    addNewLabel() {
      this.userAddedFileds.push(
        Object.assign(
          {},
          {
            label: true,
            labelValue: "",
            postion: this.userAddedFileds.length - 1
          }
        )
      );
      this.saveToLocalStorage();
    },
    addNewField() {
      let template = Object.assign({}, this.layoutTemplate);
      this.userAddedFileds.push(template);
      this.saveToLocalStorage();
    },
    gatherFields(item, index, buttontype) {
      if (buttontype === 0) {
        item.selectedAction = "exclude";
        this.componentForFieldSelect = "appMultiFieldSelect";
      } else if (buttontype === 1) {
        item.selectedAction = "excludeRequired";
        this.componentForFieldSelect = "appMultiFieldSelect";
      } else if (buttontype === 2) {
        item.selectedAction = "include";
        this.componentForFieldSelect = "appAddFieldSelect";
      } else if (buttontype === 3) {
        item.selectedAction = "conditions";
        this.componentForFieldSelect = "appAddFieldSelect";
      } else {
        return;
      }
      item.index = index;
      this.selectedField = item;
      this.dialog = true;
    },
    deleteToggle(index) {
      this.userAddedFileds.splice(index, 1);
      this.saveToLocalStorage();
    },
    activeFieldChangeFN(index) {
      if (this.userAddedFileds[index].firstActive == null) {
        this.userAddedFileds[index].firstActive =
          parseInt(this.userAddedFileds[index].activeField) + 1;
      }
      this.saveToLocalStorage();
    },
    returnActiveFields(event) {
      this.saveToLocalStorage();
      this.userAddedFileds[event.index] = event;
      this.dialog = false;
      this.componentForFieldSelect = "";
      delete this.userAddedFileds[event.index].selectedAction;
      delete this.userAddedFileds[event.index].index;
    },
    output() {
      this.saveToLocalStorage();
      let returnData = this.dataCompiler.getData(this.userAddedFileds);

      let outPutData = [];

      if (this.guardianConfirmSwitch) {
        outPutData.push(this.dataCompiler.guardianConfirmation());
      }

      if (returnData.requiredList.length > 0 && this.addRequiredFunction) {
        outPutData.push(this.dataCompiler.requiredTemplate());
      }

      if (returnData.gurdianList.length > 0) {
        if (this.addGuardianFunction) {
          outPutData.push(this.dataCompiler.gurardianTemplate().topElement);
        }

        for (let i = 0; i < returnData.gurdianList.length; i++) {
          outPutData.push(`${returnData.gurdianList[i]}`);
        }
        if (this.addGuardianFunction) {
          outPutData.push(this.dataCompiler.gurardianTemplate().bottomElement);
        }
      }

      for (let i = 0; i < returnData.normalList.length; i++) {
        outPutData.push(`${returnData.normalList[i]}`);
      }

      for (let i = 0; i < returnData.requiredList.length; i++) {
        outPutData.push(`${returnData.requiredList[i]}`);
      }

      // console.log(outPutData)
      this.jsOutPut = outPutData;
    }
  },
  mounted() {
    this.dataCompiler = new jsTemplate.JStemplate();

    if (localStorage.getItem("jsUserAddedFields")) {
      try {
        this.userAddedFileds = JSON.parse(
          localStorage.getItem("jsUserAddedFields")
        );
      } catch {
        localStorage.removeItem("jsUserAddedFields");
      }
    }
  },
  computed: {},
  watch: {},
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

.deleteButton:hover {
  background-color: red;
}
</style>

