<template>
  <v-container fill-height fluid grid-list-xl>
          <v-layout wrap>

      <v-flex xs12>
        <material-card color="warning" title="Guardian Details" text>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.first_name" label="Firstname"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.last_name" label="Lastname"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.salutation_id" label="Salutations"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.gender" label="Gender"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.relationship" label="Relationship"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.email" label="Email"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.mobile" label="Mobile"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.home" label="Home"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.address" label="Address"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.suburb" label="Suburb"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.state" label="State"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.postcode" label="Postcode"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.country" label="Country"></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field  v-model="guardianFields.postalAddress" label="Postal Address"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field  v-model="guardianFields.postalSuburb" label="Postal Suburb"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.postalState" label="Postal State"></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field v-model="guardianFields.postalPostcode" label="Postal Postcode"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="guardianFields.postalCountry" label="Postal Country"></v-text-field>
              </v-flex>
              
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>


      --guardian details
        -- firstname
        -- last name
        -- Saluataions
        -- Gender
        -- relationship
        -- email
        -- Mobile
        -- Home
        -- Address
        -- suburb
        -- state
        -- post code
        -- country
        -- Postal Address
        -- Postal suburb
        -- Postal state
        -- Postal post code
        -- Postal country

      --lead details
        -- firstname
        -- middle
        -- last
        -- Gender
            -- auto set
        -- entry year
        -- year level
        -- religion
        -- date of birth

        -- School connection
        -- enquiry source

            </v-layout>

    </v-container>

</template>

<script>
export default {
  data: () => ({
guardianFields:{}
  })

};
</script>

<style>
</style>
