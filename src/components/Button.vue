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
  @Prop({ type: Function, required: true }) handleClick!: Function;

  get buttonCopy(): string {
    return buttonCopyMap[this.buttonType];
  }
}

export default Button;
</script>
