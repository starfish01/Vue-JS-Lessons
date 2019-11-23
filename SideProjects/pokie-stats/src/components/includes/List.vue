<template>
  <div class="list ">
    <div
      :class="{ 'is-warning': checkIfWeakness(listTitle) }"
      class="list-item is-active list-title"
    >
      {{ listTitle }}
    </div>
    <div class="list-item" v-for="type in damage" :key="type.name">
      {{ type.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  components: {},
  extends: {},
  mixins: {},
  props: {
    title: String,
    damage: Array
  },
  data() {
    return {
      something: true
    };
  },
  computed: {
    listTitle() {
      return this.title.split("_").join(" ");
    }
  },
  watch: {},
  methods: {
    checkIfWeakness(listTitle) {
      if (listTitle.includes("from")) {
        return true;
      }
      return false;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.list-title {
  text-transform: capitalize;
  &.is-warning {
    background: red;
  }
}
</style>
