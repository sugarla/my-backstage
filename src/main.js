import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
// import { Row, Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./network/mock";

// Vue.use(Row);
// Vue.use(Button);
Vue.use(ElementUI);
Vue.config.productionTip = false;
// event Bus 用于无关系组件间的通信。
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
