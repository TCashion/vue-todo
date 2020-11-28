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
  @Prop({ type: Number, required: false }) index?: number;

  get buttonCopy(): string {
    return buttonCopyMap[this.buttonType];
  }

  handleClick() {
    console.log(
      `clicked button type: ${this.buttonType} for item: ${this.item} at index: ${this.index}`
    );
    // splice from the current type list
    // push to other list
  }
}

export default Button;
</script>
