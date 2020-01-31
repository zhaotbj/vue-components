import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import './assets/index.css'
import HmButton from '@/components/button'
import HmDialog from '@/components/dialog'
import HmInput from '@/components/input'
import HmSwitch from '@/components/switch'
import HmRadio from '@/components/radio'
Vue.config.productionTip = false

Vue.component(HmButton.name, HmButton)
Vue.component(HmDialog.name, HmDialog)
Vue.component(HmInput.name, HmInput)
Vue.component(HmSwitch.name, HmSwitch)
Vue.component(HmSwitch.name, HmSwitch)
Vue.component(HmRadio.name, HmRadio)
new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
