import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import remConfig from './config/remConfig.js'
import 'mint-ui/lib/style.css'

import '_a/css/reset.css';
import '_a/css/index.scss';
import '_a/font/iconfont.css'

Vue.config.productionTip = false;

remConfig();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
