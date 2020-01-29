import Vue from 'vue'
import App from './App.vue'
// import router from './router'

import HmButton from '@/components/button'
Vue.config.productionTip = false

Vue.component('HmButton', HmButton)
new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
