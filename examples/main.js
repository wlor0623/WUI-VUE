import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vinput from './../packages/index.js';
Vue.use(Vinput)

require('@/init.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
