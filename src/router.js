import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [{
  path: '/friend',
  component: () => import(/* webpackChunkname: "friend" */'components/Friend')
}, {
  path: '/message',
  component: () => import(/* webpackChunkname: 'message' */'components/Message')
}];

export default new VueRouter({
  mode: 'history',
  routes
});