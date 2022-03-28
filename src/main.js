import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import * as echarts from "echarts";

import "ant-design-vue/dist/antd.css";
import "./assets/common.less";
// 组件
import globalComponent from "./components/index.js";
// 方法
import * as utils from "./utils/index";
// 请求
import * as http from "./http";
// Vue配置
Vue.config.productionTip = false;

Vue.use(Antd);

// 全局组件
Object.keys(globalComponent).forEach((key) => {
  Vue.component(key, globalComponent[key]);
});
// 方法
Vue.prototype.$echarts = echarts;
Vue.prototype.$utils = utils;
Vue.prototype.$api = http;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
