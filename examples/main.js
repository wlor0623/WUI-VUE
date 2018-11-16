import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// lottie动画
import lottie from 'vue-lottie';
Vue.component('lottie', lottie)

import Vinput from '~/index.js'
Vue.use(Vinput)


require('@/init.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
