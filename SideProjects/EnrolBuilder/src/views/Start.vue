<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex xs6>
        <material-card color="warning" title="Address Quick Copy" text>
          <v-card-text>
            <v-layout row>
              <v-flex xs4>
                <v-text-field
                  v-model.number="copyAddress.street_address"
                  value="0"
                  type="number"
                  label="Address ID"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field type="number" v-model.number="copyAddress.suburb" label="Suburb ID"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field type="number" v-model.number="copyAddress.state" label="State ID"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-text-field
                  type="number"
                  v-model.number="copyAddress.postcode"
                  label="Postcode ID"
                ></v-text-field>
              </v-flex>

              <v-flex xs4>
                <v-text-field type="number" v-model.number="copyAddress.country" label="Country ID"></v-text-field>
              </v-flex>

              <v-flex xs4>
                <v-btn
                  color="primary"
                  @click="snackbar = true"
                  v-clipboard="JSON.stringify(copyAddress)"
                  small
                >Address JSON</v-btn>
              </v-flex>
            </v-layout>

            <p></p>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex xs6>
        <material-card color="warning" title="Occupation Model" text>
          <v-btn color="primary" @click="snackbar = true" v-clipboard="helpText" small>Help Text</v-btn>
          <v-btn color="primary" @click="snackbar = true" v-clipboard="modelText" small>Model Text</v-btn>
        </material-card>
      </v-flex>

      <v-flex xs6>
        <material-card color="warning" title="Set Statuses" text>
          <v-card-text>
            <v-container class="pa-0" grid-list-xl fluid>
              <v-data-table :headers="headers" :items="statusesArray" hide-actions>
                <template slot="items" slot-scope="{ item }">
                  <td class="text-left">{{ item.id }}</td>
                  <td>
                    <v-btn
                      @click="eventClick(item.id)"
                      :color="item.clicked ? 'info' : 'primary'"
                      v-clipboard="item.status"
                      small
                    >{{ item.status }}</v-btn>
                  </td>
                  <td class="text-left">{{ item.colour }}</td>
                </template>
              </v-data-table>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex xs6>
        <material-card color="warning" title="Terms And Conditions" text>
          <v-card-text>
            <p>Add signature to the Terms and condition print out</p>
            <v-btn
              color="primary"
              @click="snackbar = true"
              v-clipboard="termsHTML"
              small
            >Add this to the bottom of the terms page</v-btn>
            <v-btn color="primary" @click="snackbar = true" v-clipboard="termsCSS" small>Add CSS</v-btn>
            <p>Turn terms on by going to the form -> Settings Print Terms and conditions on form</p>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex xs6>
        <material-card color="warning" title="Dashboard side panel" text>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs4>
                <v-text-field
                  v-model.number="sidePanelDashboard.proposedYearEntry"
                  value="0"
                  type="number"
                  label="Year Of Entry ID"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  v-model.number="sidePanelDashboard.propsedYearGroup"
                  value="0"
                  type="number"
                  label="Year Group ID"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-btn color="primary" @click="dashboardFn()" v-clipboard small>Dashboard HTML</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-snackbar v-model="snackbar" :bottom="'bottom'" :right="'right'" :timeout="2000">
        Copied!
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      sidePanelDashboard: {},
      copyAddress: {
        street_address: "",
        state: "",
        suburb: "",
        postcode: "",
        country: "",
        country_restriction: "AU"
      },
      helpText:
        'What is the occupation group of this guardian? <a href="#" class="btn btn-link btn-sm btn-modal-info" modal-title="More Info" modal-header="" modal-btn-class="btn-default" modal-btn-label="OK">More info »</a>',
      modelText:
        "<p>Group 1: Senior management in large business organisation government administration and defence and qualified professionals.</p> <ul> <li>Senior executive/manager/department head in industry, commerce, media or other large organisation.</li> <li>Public service manager (section head or above), regional director, health/education/police/fire services administrator.</li> <li>Other administrator (school principal, faculty head/dean, library/museum/gallery director, research facility director).</li> <li>Defence Forces commissioned officer.</li> <li>Professionals generally have degree or higher qualifications and experience in applying this knowledge to design, develop or operate complex systems; identify, treat and advise on problems; and teach others.</li> <li>Health, education, law, social welfare, engineering, science, computing professional.</li> <li>Business (management consultant, business analyst, accountant, auditor, policy analyst, actuary, valuer).</li> <li>Air/sea transport (aircraft/ship’s captain/officer/pilot, flight officer, flying instructor, air traffic controller).</li> </ul> <p>Group 2: Other business managers, arts/media/sportspersons and associate professionals.</p> <ul> <li>Owner/manager of farm, construction, import/export, wholesale, manufacturing, transport, real estate business.</li> <li>Specialist manager (finance/engineering/production/personnel/industrial relations/sales/marketing).</li> <li>Financial services manager (bank branch manager, finance/investment/insurance broker, credit/loans officer).</li> <li>Retail sales/services manager (shop, petrol station, restaurant, club, hotel/motel, cinema, theatre, and agency).</li> <li>Arts/media/sports (musician, actor, dancer, painter, potter, sculptor, journalist, author, media presenter, photographer, designer, illustrator, proof reader, sportsman/woman/ coach, trainer, sports official).</li> <li>Associate professionals generally have diploma/technical qualifications and support managers and professionals.</li> <li>Health, education, law, social welfare, engineering, science, computing technician/associate professional.</li> <li>Business/administration (recruitment/employment/industrial relations/training officer, marketing/advertising specialist, market research analyst, technical sales representative, retail buyer, office/project manager).</li> <li>Defence Forces senior non-commissioned officer.</li> </ul> <p>Group 3: Tradesmen/women, clerks and skilled office, sales and service staff.</p> <ul> <li>Tradesmen/women generally have completed a four-year trade certificate, usually by apprenticeship. All tradesmen/women are included in this group.</li> <li>Clerks (bookkeeper, bank/PO clerk, statistical/actuarial clerk, accounting/claims/audit clerk, payroll clerk, recording/ registry/filing clerk, betting clerk, stores/inventory clerk, purchasing/order clerk, freight/transport/ shipping clerk, bond clerk, customs agent, customer services clerk, admissions clerk).</li> <li>Skilled office, sales and service staff.</li> <li>Office (secretary, personal assistant, desktop publishing operator, switchboard operator).</li> <li>Sales (company sales representative, auctioneer, insurance agent/assessor/loss adjuster, market researcher).</li> <li>Service (aged/disabled/refuge/child care worker, nanny, meter reader, parking inspector, postal worker, courier, travel agent, tour guide, flight attendant, fitness instructor, casino dealer/supervisor).</li> </ul> <p>Group 4: Machine operators, hospitality staff, assistants, labourers and related workers.</p> <ul> <li>Drivers, mobile plant, production/processing machinery and other machinery operators.</li> <li>Hospitality staff (hotel service supervisor, receptionist, waiter, bar attendant, kitchen hand, porter, and housekeeper).</li> <li>Office assistants, sales assistants and other assistants.</li> <li>Office (typist, word processing/data entry/business machine operator, receptionist, office assistant).</li> <li>Sales (sales assistant, motor vehicle/caravan/parts salesperson, checkout operator, cashier, bus/train conductor, ticket seller, service station attendant, car rental desk staff, street vendor, telemarketer, shelf stacker).</li><li>Assistant/aide (trades’ assistant, school/teacher’s aide, dental assistant, veterinary nurse, nursing assistant, museum/ gallery attendant, usher, home helper, saloon assistant, animal attendant).</li><li>Labourer and related workers.</li><li>Defence forces ranks below senior NCO not included above.</li><li>Agriculture, horticulture, forestry, fishing, mining worker (farm overseer, shearer, wool/hide classer, farm hand, horse trainer, nurseryman, greenkeeper, gardener, tree surgeon, forestry/logging worker, miner, seafarer/fishing hand).</li><li>Other worker (labourer, factory hand, storeman, guard, cleaner, caretaker, laundry worker, trolley collector, car park attendant, crossing supervisor).</li></ul>",
      termsHTML:
        '<span class="parent-signature"> <hr> <h3 style="font-size: 14px !important;">Signature Parent/Guardian 1</h3> <div style="height: 50px; width: 100%; border: 2px solid black"></div> <h3 style="font-size: 14px !important;">Signature Parent/Guardian 2</h3> <div style="height: 50px; width: 100%; border: 2px solid black"></div> </span> <br>',
      termsCSS: ".parent-signature{ display: none; }",
      headers: [
        {
          sortable: false,
          text: "Order",
          value: "order"
        },
        {
          sortable: false,
          text: "Status",
          value: "status",
          clicked: false
        },
        {
          sortable: false,
          text: "Colour",
          value: "colour"
        }
      ],
      statusesArray: [
        {
          id: "1",
          status: "New",
          colour: "Primary"
        },
        {
          id: "2",
          status: "Approved",
          colour: "Success"
        },
        {
          id: "3",
          status: "Rejected",
          colour: "Danger"
        },
        {
          id: "4",
          status: "Waiting list",
          colour: "Warning"
        },
        {
          id: "5",
          status: "Information required",
          colour: "Info"
        },
        {
          id: "6",
          status: "Imported into TASS",
          colour: "Success"
        }
      ]
    };
  },
  methods: {
    eventClick(id) {
      this.snackbar = true;
      this.statusesArray[id - 1].clicked = true;
    },
    dashboardFn() {
      this.snackbar = true;
      let dash =
        "<p><small> <b>Year of Entry:</b> {" +
        this.sidePanelDashboard.proposedYearEntry +
        ":year_of_entry}<br> <b>Entry Level:</b> {" +
        this.sidePanelDashboard.propsedYearGroup +
        ":entry_level} </small></p>";
    }

    
  }
};
</script>

<style scoped>
td {
  width: 33;
}
</style>

