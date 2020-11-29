<template>
  <div id="base">
    <list-item-container :items="toDoItems" listType="toDo" />
    <list-item-container :items="doneItems" listType="done" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListItemContainer from "./ListItemContainer.vue";

@Component({
  components: {
    ListItemContainer
  }
})
export default class App extends Vue {
  get toDoItems() {
    return this.$store.getters.toDoItems;
  }

  get doneItems() {
    return this.$store.getters.doneItems;
  }
}
</script>

<style>
#base {
  display: flex;
  justify-content: center;
}
</style>
