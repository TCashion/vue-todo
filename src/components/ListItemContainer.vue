<template>
  <div class="ListItemContainer">
    <ul class="ListItemContainer__list">
      <li v-for="item in items" :key="item">{{ item }} - BUTTON</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
class ListItemContainer extends Vue {
    @Prop({type: Array, required: false}) items?: string[];
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