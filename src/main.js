import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Divider from "@/components/Divider";
import Modal from "@/components/Modal";

Vue.config.productionTip = false;

Vue.component('Divider', Divider);
Vue.component('Modal', Modal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
