import Vue from "vue";
import App from "./App.vue";
import store from "./store"; // add store manually here
Vue.config.productionTip = false;

new Vue({
  store, // add store using destructuring
  render: (h) => h(App),
}).$mount("#app");
