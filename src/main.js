import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import './assets/index.css'
import HmButton from '@/components/button'
import HmDialog from '@/components/dialog'
Vue.config.productionTip = false

Vue.component(HmButton.name, HmButton)
Vue.component(HmDialog.name, HmDialog)
new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
