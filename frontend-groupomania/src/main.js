import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import PostComponent from "./components/PostComponent.vue";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
// nouvelle instance vue avec la propriété routeur
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.component("PostComponent", PostComponent);
