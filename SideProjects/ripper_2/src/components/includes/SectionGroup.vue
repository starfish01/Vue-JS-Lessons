<template>
  <div>
    <template v-if="group">
      <template v-for="(item, index) in group">
        <group-item :groupItem="item" :key="index"></group-item>
      </template>
    </template>
    <div class="buttons">
      <b-button @click="addGroup()" v-model="outputData" type="is-primary">Add Group</b-button>
    </div>
  </div>
</template>

<script>
import GroupItem from "./GroupItem";
export default {
  components: {
    GroupItem
  },
  props: {
    group: Array
  },
  data() {
    return {
      outputData: []
    };
  },
  methods: {
    addGroup() {
      const newObject = new Object({
        title: "",
        message: "",
        type: "",
        display: false,
        group: false,
        locations: []
      });
      this.group.push(newObject);
    }
  }
};
</script>

<style></style>
