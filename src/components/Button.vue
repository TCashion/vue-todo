<template>
  <button type="button" @click="$emit('clicked')">{{ buttonCopy }}</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

enum ButtonCopy {
  done = "Undo",
  toDo = "Mark Done",
  add = "Add"
}

interface ButtonCopyMap {
  done: string;
  toDo: string;
  add: string;
}

const buttonCopyMap: ButtonCopyMap = {
  done: ButtonCopy.done,
  toDo: ButtonCopy.toDo,
  add: ButtonCopy.add
};

@Component
class Button extends Vue {
  @Prop({ type: String, required: true })
  readonly buttonType!: keyof ButtonCopyMap;
  @Prop({ type: Number, required: false }) index?: number;

  get buttonCopy(): string {
    return buttonCopyMap[this.buttonType];
  }
}

export default Button;
</script>
