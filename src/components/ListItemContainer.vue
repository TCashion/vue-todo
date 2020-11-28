<template>
  <div class="ListItemContainer">
    <ul class="ListItemContainer__list">
      <li>1.</li>
      <li>1.</li>
      <li>1.</li>
      <li>1.</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
class ListItemContainer extends Vue {
  @Prop({ required: true, type: String }) readonly type!: string;
}
export default ListItemContainer;
</script>

<style lang="scss" scoped>
.ListItemContainer {
  height: 10rem;
  width: 15rem;
  margin: 3rem;
  border: 2px solid #f2f2f2;
  display: flex;

  &__list {
    margin: auto 0;
  }
}
</style>