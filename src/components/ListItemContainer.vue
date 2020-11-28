<template>
  <div class="ListItemContainer">
    <ul class="ListItemContainer__list">
      <li
        class="ListItemContainer__list__item"
        v-for="item in items"
        :key="item"
      >
        <div
          :class="[
            { ListItemContainer__list__item__done: listType === 'done' }
          ]"
        >
          {{ item }}
          <Button :buttonType="listType" :handleClick="handleClick" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Button from "./Button.vue";

@Component({
  components: {
    Button
  }
})
class ListItemContainer extends Vue {
  @Prop({ type: String, required: true }) listType!: string;
  @Prop({ type: Array, required: true }) items!: string[];

  handleClick() {
    console.log("click");
  }
}
export default ListItemContainer;
</script>

<style lang="scss" scoped>
.ListItemContainer {
  height: 10rem;
  width: 20rem;
  margin: 3rem;
  padding: 2rem;
  border: 2px solid #f2f2f2;
  display: flex;

  &__list {
    margin: auto 0;
    width: 100%;

    &__item {
      div {
        text-align: left;
        button {
          float: right;
        }
      }
      &__done {
        text-decoration: line-through;
      }
    }
  }
}
</style>
