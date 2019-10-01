<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea v-model="iconData" filled auto-grow label="Icons" rows="4" row-height="30"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea v-model="dataInput" filled auto-grow label="Data" rows="4" row-height="30"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="text-center">
            <v-btn @click="proccessData()">Button</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    proccessData() {
      this.proccessedIconData = this.getIconData();

      console.log(this.proccessedIconData);
    },
    getIconData() {
      let oldData = this.iconData;
      let newIconData = [];
      let endOfString = oldData.length;

      let indexOfVar = oldData.indexOf("var ");

      if (indexOfVar != -1) {
        do {
          oldData = oldData.substring(indexOfVar + 4, endOfString);
          endOfString = oldData.length;

          // get key
          let iconTitle = oldData.substring(0, oldData.indexOf("=")).trim();

          oldData = oldData.substring(oldData.indexOf("="), endOfString);
          endOfString = oldData.length;

          // get url
          let iconUrl = oldData.substring(
            oldData.indexOf("iconUrl: ") + 10,
            oldData.indexOf(",") - 1
          );

          oldData = oldData.substring(
            oldData.indexOf("});") + 3,
            oldData.length
          );
          endOfString = oldData.length;

          // out put data
          newIconData.push({
            iconTitle,
            iconUrl
          });

          indexOfVar = oldData.indexOf("var ");
        } while (indexOfVar != -1);

        return newIconData;
      }
    }
  },
  data() {
    return {
      dataInput: "",
      proccessedIconData: [],
      iconData: []
    };
  }
};
</script>

<style scoped>
</style>
