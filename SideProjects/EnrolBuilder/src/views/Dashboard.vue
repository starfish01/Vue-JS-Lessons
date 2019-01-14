<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
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
                
                  <td><v-btn @click="eventClick(item.id)" :color="item.clicked ? 'info' : 'primary'" v-clipboard="item.status" small >{{ item.status }}</v-btn></td>
                  <td class="text-left">{{ item.colour }}</td>
                
                </template>
              
              </v-data-table>
            
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
        </v-card-text>
      </material-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>



export default {
  data () {
    return {
      snackbar: false,
       headers: [
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
      },
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
        },
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
  width: 50%;  
}
</style>

