import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import router from "@/routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// import layout
import DefaultLayout from "@/components/template/DefaultLayout.vue";
import PhotoDetailLayout from "@/components/template/PhotoDetailLayout.vue";

Vue.component("default-layout", DefaultLayout);
Vue.component("photo-detail-layout", PhotoDetailLayout);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
