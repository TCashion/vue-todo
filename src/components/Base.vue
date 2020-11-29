<template>
  <div class="Base" id="base">
    <div class="Base__container">
      <add-to-do-item />
    </div>
    <div class="Base__container">
      <list-item-container :items="toDoItems" listType="toDo" />
      <list-item-container :items="doneItems" listType="done" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListItemContainer from "./ListItemContainer.vue";
import AddToDoItem from "./AddToDoItem.vue";

@Component({
  components: {
    ListItemContainer,
    AddToDoItem
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

<style lang="scss">
.Base {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__container {
    display: flex;
    flex-direction: row;
  }
}
</style>
