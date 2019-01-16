<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="warning" title="JS Show Hide">
          <v-data-table :headers="headers" :items="userAddedFileds" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>
                <v-checkbox v-model="item.guardianField"/>
              </td>
              <td>
                <v-text-field type="number" v-model="item.activeField"></v-text-field>
              </td>
              <td>
                <v-text-field type="number" v-model="item.firstActive"></v-text-field>
              </td>
              <td>
                <v-text-field type="number" v-model="item.lastActive"></v-text-field>
              </td>
              <td>
                <v-text-field @click="gatherFields(item)" v-model="item.exclude"></v-text-field>
              </td>
              <td>
                <v-text-field v-model="item.include"></v-text-field>
              </td>
              <td>
                <v-checkbox v-if="!item.guardianField" v-model="item.required"/>
              </td>
              <td>
                <v-icon src="\src\assets\icons\close-circle.svg">close-circle</v-icon>
                d
                <v-flex
         
          ma-2
        >
          <v-tooltip
            top
            content-class="top">
            <v-icon slot="activator">
              'close-circle'
            </v-icon>
            <span>close-circle</span>
          </v-tooltip>
        </v-flex>
              </td>
              <td>
                <v-text-field
                  v-if="item.required"
                  v-model="item.requiredExclude"
                ></v-text-field>
              </td>
            </template>
          </v-data-table>
          <v-btn color="primary" @click="addNewField()">Add</v-btn>
        </material-card>
      </v-flex>
    </v-layout>

    <!--  -->
    <v-dialog v-model="dialog" width="500">
       <v-card>
        <v-card-title class="headline">Title</v-card-title>

        <v-card-text>
          <div class="container">
          <div class="row">
            <component :item="selectedField" @itemReturn="item = $event" :is="componentForFieldSelect"></component>
          </div>
          </div>
        </v-card-text>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions> -->
       </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import MultiFieldSelect from '../components/material/MultiFieldSelect.vue';
export default {
  data: () => ({
    dialog: false,
    componentForFieldSelect:'appMultiFieldSelect',
    selectedField:null,
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
    headers: [
      {
        sortable: false,
        text: "Guardian",
        value: "guardian"
      },
      {
        sortable: false,
        text: "Active",
        value: "activefield"
      },
      {
        sortable: false,
        text: "First",
        value: "firstactive"
      },
      {
        sortable: false,
        text: "Last",
        value: "lastactive"
      },
      {
        sortable: false,
        text: "Exclude",
        value: "exclude"
      },
      {
        sortable: false,
        text: "Include",
        value: "include"
      },
      {
        sortable: false,
        text: "Required",
        value: "required"
      },
      {
        sortable: false,
        text: "Req Exclude",
        value: "requiredExclude"
      }
    ]
  }),
  methods: {
    addNewField() {
      let template = Object.assign({}, this.layoutTemplate);
      this.userAddedFileds.push(template);
    },
    gatherFields(item) {
      this.selectedField = item;
      this.dialog = true;
    },
    
  },
  components: {
      appMultiFieldSelect:MultiFieldSelect
  }
};
</script>

<style>
td {
  padding: 0 5px !important;
}
.stock-block{
    display: inline-block
}
</style>

