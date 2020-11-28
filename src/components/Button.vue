<template>
  <button type="button">{{ buttonCopy }}</button>
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

console.log("buttonCopyMap: ", buttonCopyMap);

@Component
class Button extends Vue {
  @Prop({ type: String, required: true }) buttonType!: keyof ButtonCopyMap;

  get buttonCopy(): string {
    return buttonCopyMap[this.buttonType];
  }
}

export default Button;
</script>
