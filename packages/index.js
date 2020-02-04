import HmButton from './button'
import HmDialog from './dialog'
import HmInput from './input'
import HmSwitch from './switch'
import HmRadio from './radio'
import HmRadioGroup from './radio-group'
import HmCheckbox from './checkbox'
import HmCheckboxGroup from './checkbox-group.vue'
import HmForm from './form.vue'
import HmFormItem from './form-item.vue'
import './index.css'
const component= [HmButton,
    HmDialog,
    HmInput,
    HmSwitch,
    HmRadio,
    HmRadioGroup,
    HmCheckbox,
    HmCheckboxGroup,
    HmForm,
    HmFormItem
]
const install = function(Vue){
// 全局注册所有的组件
component.forEach(item=>{
    Vue.component(item.name, item)
})
}

// 判断是否是直接引入文件，如果是，就不用调用vue.use()
if(typeof window !== 'undefined' && window.Vue){
	install(window.Vue)
}
export default {
    install
}