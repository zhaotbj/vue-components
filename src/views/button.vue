<template>
  <div>
    <i-button size="large"
    @on-click="handleClick">按钮1
      <!-- <i-icon slot="icon" type="checkmark"></i-icon> -->
    </i-button>
  <i-button disabled><strong>按钮 2</strong></i-button>
  <i-button @click.native="handleClick1">button原生事件</i-button>
  </div>
</template>

<script>
import IButton from '@/components/button/button'
export default {
  components: {
    IButton
  },
  methods: {
    handleClick() {
      console.log('我是i-button')
    },
    handleClick1() {
      console.log('原生事件')
    }
  }
}
</script>
