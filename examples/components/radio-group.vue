<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HmRadioGroup",
  props:{
      value:null
  },
  provide(){
      return {
          RadioGroup: this
      }
  }
}
</script>
<style lang="scss">
.el-radio-group {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  font-size: 0;
}
</style>