<template>
    <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex  xs12>
        <v-card dark color="primary">
            <v-flex  xs3>
          <v-card-text class="px-3">

<v-select
           
            :items="items"
            item-text="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
          ></v-select>
        

          </v-card-text>
            </v-flex>
          
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            items:{
                something:"something",
                everthing:"everthing"
            }
        }
    }

}
</script>

<style>

</style>
