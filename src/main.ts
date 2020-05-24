import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value: string) {
  if (value) {
    return moment(value).format("D MMM, YYYY");
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
