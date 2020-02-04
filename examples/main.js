import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import  '../examples/assets/index.css'
// import HmButton from './components/button'
// import HmDialog from './components/dialog'
// import HmInput from './components/input'
// import HmSwitch from './components/switch'
// import HmRadio from './components/radio'
// import HmRadioGroup from './components/radio-group'
// import HmCheckbox from './components/checkbox'
// import HmCheckboxGroup from './components/checkbox-group.vue'
// import HmForm from './components/form.vue'
// import HmFormItem from './components/form-item.vue'
// Vue.config.productionTip = false
// 
// Vue.component(HmButton.name, HmButton)
// Vue.component(HmDialog.name, HmDialog)
// Vue.component(HmInput.name, HmInput)
// Vue.component(HmSwitch.name, HmSwitch)
// Vue.component(HmSwitch.name, HmSwitch)
// Vue.component(HmRadio.name, HmRadio)
// Vue.component(HmRadioGroup.name, HmRadioGroup)
// Vue.component(HmCheckbox.name, HmCheckbox)
// Vue.component(HmCheckboxGroup.name, HmCheckboxGroup)
// Vue.component(HmForm.name, HmForm)
// Vue.component(HmFormItem.name, HmFormItem)

import atgUi from '../packages/index.js'
Vue.use(atgUi)
new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
