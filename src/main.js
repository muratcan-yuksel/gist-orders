import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firestorePlugin } from "vuefire";
//import unique id generator
import UniqueId from "vue-unique-id";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//vue form
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(firestorePlugin);

Vue.use(UniqueId);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
