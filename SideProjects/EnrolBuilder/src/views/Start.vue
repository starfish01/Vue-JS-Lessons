<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout row>
      <v-flex xs6>
        <material-card
          color="warning"
          title="Set Statuses"
          text="">

          <v-card-text>
            <v-container
              class="pa-0"
              grid-list-xl
              fluid
            >
              <v-data-table
                :headers="headers"
                :items="statusesArray"
                hide-actions
              >
                <template
                  slot="items"
                  slot-scope="{ item }"
                >
                  <td class="text-left">{{ item.id }}</td>
                  <td><v-btn @click="eventClick(item.id)" :color="item.clicked ? 'info' : 'primary'" v-clipboard="item.status" small >{{ item.status }}</v-btn></td>
                  <td class="text-left">{{ item.colour }}</td>
                </template>
              </v-data-table>
          </v-container>
        </v-card-text>
      </material-card>
    </v-flex>
    <v-flex xs6>
      <material-card
        color="warning"
        title="Quick Copy"
        text="">
        <v-card-text>
          <p><v-btn color="primary" @click="snackbar=true" v-clipboard="addressObject" small>Address</v-btn></p>
        </v-card-text>
      </material-card>
    </v-flex>

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
  </v-layout>
</v-container>
</template>

<script>



export default {
  data () {
    return {
      snackbar: false,
      addressObject: `{'country_restriction': 'AU',
'street_address': 26321,
'state': 26323,
'suburb': 26322,
'postcode': 26326,
'country': 26325}`,
       headers: [
         {
        sortable: false,
        text: 'Order',
        value: 'order'
      },
         {
        sortable: false,
        text: 'Status',
        value: 'status',
        clicked:false
      },
      {
        sortable: false,
        text: 'Colour',
        value: 'colour'
      }
       ],
      statusesArray:[
        {
          id:"1",
          status:"New",
          colour:"Primary"
        },
        {
          id:"2",
          status:"Approved",
          colour:"Success"
        },
        {
          id:"3",
          status:"Rejected",
          colour:"Danger"
        },
        {
          id:"4",
          status:"Waiting list",
          colour:"Warning"
        },
        {
          id:"5",
          status:"Information required",
          colour:"Info"
        },{
          id:"6",
          status:"Imported into TASS",
          colour:"Success"
        }
      ]
      
    }
  },
  methods: {
    eventClick(id) {
      this.snackbar = true;
      this.statusesArray[id-1].clicked = true;

    },
  }
}
</script>

<style scoped>
td {
  width: 33;  
}
</style>

