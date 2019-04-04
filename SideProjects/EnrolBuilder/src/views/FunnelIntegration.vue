<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <material-card color="warning" title="Guardian Details" text>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.first_name"
                  label="Firstname"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.last_name"
                  label="Lastname"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.salutation_id"
                  label="Salutations"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.gender" label="Gender"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.relationship"
                  label="Relationship"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.email" label="Email"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.mobile" label="Mobile"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.home" label="Home"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.address" label="Address"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.suburb" label="Suburb"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.state" label="State"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.postcode"
                  label="Postcode"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="guardianFields.country" label="Country"></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.postalAddress"
                  label="Postal Address"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.postalSuburb"
                  label="Postal Suburb"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.postalState"
                  label="Postal State"
                ></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.postalPostcode"
                  label="Postal Postcode"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="guardianFields.postalCountry"
                  label="Postal Country"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex xs12>
        <material-card color="warning" title="Lead Details" text>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="leadFields.first_name"
                  label="Firstname"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="leadFields.middle_name"
                  label="Lastname"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="leadFields.gender" label="Gender"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="leadFields.entry_year"
                  label="Entry Year"
                ></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="leadFields.entry_level"
                  label="Year Level"
                ></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field type="number" v-model.number="leadFields.religion" label="Religion"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field type="number" v-model.number="leadFields.dob" label="Date of Birth"></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="leadFields.school_connection"
                  label="School Connection"
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field
                  type="number"
                  v-model.number="leadFields.enquiry_source"
                  label="Enquiry Source"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex xs12>
        <material-card color="warning" title="Output" text>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs2>
                <v-btn small :color="'primary'">Output</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    guardianFields: {},
    leadFields: {}
  })
};
</script>

<style>
</style>
