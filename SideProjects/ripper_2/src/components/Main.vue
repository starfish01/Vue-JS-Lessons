<template>
  <div>
    RD2 Corrdinates converter
    <div class="container">
      <div class="columns is-multiline">
        <div class="column">
          <template v-if="sectionDatas">
            <template v-for="(sectionData, index) in sectionDatas">
              <span :key="index">
                <b-field label="Section Title">
                  <b-input v-model="sectionData.title"></b-input>
                </b-field>

                <section-group :group="sectionData.groups"></section-group>
              </span>
            </template>
          </template>
          <div class="list is-hoverable">
            <b-field label="Title">
              <b-input v-model="sectionTitle"></b-input>
            </b-field>
            <div class="buttons">
              <b-button @click="addSection()" type="is-primary">add Section</b-button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="buttons">
            <b-button @click="output()" type="is-primary">Output</b-button>
          </div>
          <b-field label="Output">
            <b-input v-model="outputTheData" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionGroup from "./includes/SectionGroup.vue";

export default {
  name: "HelloWorld",
  components: {
    SectionGroup
  },
  data() {
    return {
      outputData: [],
      sectionDatas: [],
      sectionTitle: "",
      outputTheData: ""
    };
  },
  methods: {
    addSection() {
      // if (!this.sectionTitle) {
      //   return;
      // }

      this.sectionDatas.push({
        title: this.sectionTitle,
        groups: []
      });
    },
    output() {
      this.outputTheData = JSON.stringify(this.sectionDatas);
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.card {
  margin-bottom: 20px;
}
</style>
