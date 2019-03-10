import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


import 'mint-ui/lib/style.css'

import mock from './mock/index.js'
import remConfig from './config/remConfig.js'
import '_a/css/reset.css';
import '_a/css/index.scss';
import '_a/font/iconfont.css';


Vue.config.productionTip = false;

import {  Badge, Swipe, SwipeItem ,Search, Field } from "mint-ui";

Vue.component(Field.name, Field);
Vue.component(Badge.name, Badge);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

remConfig();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')