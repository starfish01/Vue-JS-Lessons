<template>
  <div class="card">
    <div>
      <div class="list is-hoverable">
        <b-field label="Group Title">
          <b-input v-model="groupItem.title"></b-input>
        </b-field>
      </div>
      <template v-if="groupItem">
        <template v-for="(groupData, index) in groupItem.locations">
          <app-item :location="groupData" :key="index"></app-item>
        </template>
      </template>
      <div class="buttons">
        <b-button @click="addItem()" type="is-primary">+</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import appItem from "./Item.vue";
export default {
  components: {
    appItem
  },
  props: {
    groupItem: Object
  },
  data() {
    return {};
  },
  methods: {
    addItem() {
      const newObject = new Object({
        position: [0, 0],
        icon: {}
      });
      this.groupItem.locations.push(newObject);
    }
  }
};
</script>

<style></style>
