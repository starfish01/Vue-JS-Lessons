<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="!isLoading && isError">Error: {{ errorMessage }}</div>
    <div v-if="!isLoading && !isError">

      <template v-for="(damage, key, index) in damageStats">
        <List v-if="damage.length > 0" :damage="damage" :title="key" :key="index" />
      </template>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import List from "./includes/List";

export default {
  name: "ListOfStats",
  components: {
    List
  },
  extends: {},
  mixins: {},
  props: {
    selectedType: String
  },
  data() {
    return {
      damageStats: null,
      componentLoaded: "",
      isLoading: true,
      isError: false,
      errorMessage: "",
      data: "something",
      statData: []
    };
  },
  computed: {},
  watch: {
    selectedType(newType) {
      this.isLoading = true;
      this.isError = false;
      this.errorMessage = "";
      this.requestStatData(newType);
    }
  },
  methods: {
    requestStatData(newType) {
      axios
        .get("https://pokeapi.co/api/v2/type/" + newType)
        .then(res => {
          this.isLoading = false;
          const data = res.data;

          this.damageStats = data.damage_relations;
        })
        .catch(e => {
          this.isLoading = false;
          this.isError = true;
          this.errorMessage = e;
        });
    }
  },
  mounted() {
    this.requestStatData(this.selectedType);
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
