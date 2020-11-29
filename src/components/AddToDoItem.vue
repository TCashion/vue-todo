<template>
  <div class="AddToDoItem">
    <input
      class="AddToDoItem__input"
      type="text"
      placeholder="Add a new item"
      ref="addItem"
    />
    <Button buttonType="add" @clicked="handleClick" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Button from "./Button.vue";

@Component({
  components: {
    Button
  }
})
class AddToDoItem extends Vue {
  get toDoItems() {
    return this.$store.getters.toDoItems;
  }

  handleClick() {
    const newItem = this.$refs.addItem.value;
    this.toDoItems.push(newItem);
  }
}

export default AddToDoItem;
</script>

<style lang="scss">
.AddToDoItem {
  width: 50vw;
  margin: 0 auto;

  &__input {
    width: 75%;
  }
}
</style>
