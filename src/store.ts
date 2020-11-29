import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// initiate the store
export const store = new Vuex.Store({
  state: {
    toDo: [
      "Go to the grocery store",
      "Vacuum the floor",
      "Work out",
      "Feed the dogs"
    ],
    done: ["Mow the lawn"]
  },
  getters: {
    toDoItems(state) {
      return state.toDo;
    },
    doneItems(state) {
      return state.done;
    }
  }
});
