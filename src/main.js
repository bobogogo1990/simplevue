import Vue from 'vue';
import App from "./components/App";
import router from "./router";
import './base.less';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  }
});
