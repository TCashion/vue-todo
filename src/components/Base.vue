<template>
  <div id="base">
    <list-item-container :items="toDo" listType="toDo" />
    <list-item-container :items="done" listType="done" />
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
  data() {
    return {
      toDo: [
        "Go to the grocery store",
        "Vacuum the floor",
        "Work out",
        "Feed the dogs"
      ],
      done: []
    };
  }
}
</script>

<style>
#base {
  display: flex;
  justify-content: center;
}
</style>
