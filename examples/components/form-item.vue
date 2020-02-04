<template>
    <div class="el-form-item">
       <label class="el-form-item__label" :style="{width:Form.labelWidth}">{{label}}</label>
       <div class="el-form__content">
           <slot></slot>
       </div>
    </div>
</template>
<script>
export default {
    name:"HmFormItem",
    props:{
        label: String
    },
    inject:['Form'],
    created(){
        console.log(this.Form)
    }
}
</script>

<style lang="scss">
    
</style>