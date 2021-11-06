import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firestorePlugin } from "vuefire";
//import unique id generator
import UniqueId from "vue-unique-id";

Vue.use(firestorePlugin);

Vue.use(UniqueId);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
