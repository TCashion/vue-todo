import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";

Vue.config.productionTip = false;

new Vue({
  // load the store onto the Vue instance
  store,
  render: h => h(App)
}).$mount("#app");
