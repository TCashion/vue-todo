<template>
  <button type="button" @click="handleClick">{{ buttonCopy }}</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

enum ButtonCopy {
  done = "Undo",
  toDo = "Mark Done"
}

interface ButtonCopyMap {
  done: string;
  toDo: string;
}

const buttonCopyMap: ButtonCopyMap = {
  done: ButtonCopy.done,
  toDo: ButtonCopy.toDo
};

@Component
class Button extends Vue {
  @Prop({ type: String, required: true })
  readonly buttonType!: keyof ButtonCopyMap;
  @Prop({ type: String, required: false }) item?: string;
  @Prop({ type: Number, required: true }) index!: number;

  get buttonCopy(): string {
    return buttonCopyMap[this.buttonType];
  }

  get toDoItems() {
    return this.$store.getters.toDoItems;
  }

  get doneItems() {
    return this.$store.getters.doneItems;
  }

  handleClick() {
    switch (this.buttonType) {
      case "toDo":
        this.doneItems.push(this.toDoItems.splice(this.index, 1)[0]);
        break;
      case "done":
        this.toDoItems.push(this.doneItems.splice(this.index, 1)[0]);
        break;
    }
  }
}

export default Button;
</script>
