import Vue from 'vue';
import App from "./components/App";
import router from "./router";
import store from "./store";
import './base.less';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  }
});
