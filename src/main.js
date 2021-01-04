import Vue from "vue";

import App from "./App.vue";
import { DateFormatFilters } from "./plugins";

Vue.config.productionTip = false;
Vue.use(DateFormatFilters);

new Vue({
  render: h => h(App)
}).$mount("#app");
