<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="!isLoading && isError">Error: {{ isError }}</div>
    <div v-if="!isLoading && !isError">
      <div class="columns  is-multiline">
        <div class="column is-full">
          <b-field label="Select A Pokemon Type">
            <b-select v-model="selectedType" placeholder="Default" expanded>
              <option v-for="type in pokemonTypes" :key="type.name">
                {{ type.name }}
              </option>
            </b-select>
          </b-field>
        </div>
        <div v-if="selectedType" class="column is-full">
          <ListOfStats :selectedType="selectedType" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ListOfStats from "./ListOfStats";

export default {
  name: "pokestats",
  components: {
    ListOfStats
  },
  data() {
    return {
      componentLoaded: "",
      isLoading: true,
      isError: false,
      errorMessage: "",
      data: "something",
      pokemonTypes: [],
      selectedType: ""
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(res => {
        this.isLoading = false;

        this.pokemonTypes = res.data.results;
        console.log(this.pokemonTypes);
      })
      .catch(e => {
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = e;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
