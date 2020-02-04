<template>
    <div class="el-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"HmCheckboxGroup",
    props:{
        value:{
            type:Array,
            default:[]
        }
    },
    provide(){
        return {
            CheckboxGroup: this
        }
    }
}
</script>

<style lang="scss">
    
</style>