<template>
  <div id="app">
    <div class="row">
      <hm-button @click="fn">默认按钮</hm-button>
      <hm-button type="primary">主要按钮</hm-button>
      <hm-button type="success">成功按钮</hm-button>
      <hm-button type="info">信息按钮</hm-button>
      <hm-button type="warning">警告按钮</hm-button>
      <hm-button type="danger">危险按钮</hm-button>
    </div>
    <div class="row">
      <hm-button plain icon="el-icon-edit">朴素按钮</hm-button>
      <hm-button plain type="primary" icon="el-icon-edit">主要按钮</hm-button>
      <hm-button plain type="success">成功按钮</hm-button>
      <hm-button plain type="info">信息按钮</hm-button>
      <hm-button plain type="warning">警告按钮</hm-button>
      <hm-button plain type="danger">危险按钮</hm-button>
    </div>
    <div class="row">
      <hm-button plain round disabled>禁用按钮</hm-button>
      <hm-button plain round type="primary" disabled>禁用按钮</hm-button>
      <hm-button plain round type="success">成功按钮</hm-button>
      <hm-button plain round type="info">信息按钮</hm-button>
      <hm-button plain round type="warning">警告按钮</hm-button>
      <hm-button plain round type="danger">危险按钮</hm-button>
    </div>
    <div class="row">
      <hm-button circle icon="el-icon-edit"></hm-button>
      <hm-button circle icon="el-icon-share" type="primary"></hm-button>
      <hm-button circle icon="el-icon-check" type="success"></hm-button>
      <hm-button circle icon="el-icon-message" type="info"></hm-button>
      <hm-button circle icon="el-icon-message" type="warning"></hm-button>
      <hm-button circle icon="el-icon-message" type="danger"></hm-button>
    </div>

        <hm-button type="primary" @click="visable=true">dialog</hm-button>
    <!-- <hm-dialog title="我是标题"></hm-dialog> -->
    <!-- 标题插槽模式 -->
    <hm-dialog width="30%" top="30px" :visable.sync="visable">
      <template v-slot:title>
        <h3>标题插槽模式</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <hm-button type="primary" @click="visable=false">确定</hm-button>
        <hm-button @click="visable=false">取消</hm-button>
      </template>
    </hm-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visable: false
    }
  },
  methods: {
    fn() {
      console.log(123)
    }
  }
}
</script>
<style>
</style>
<style lang="scss">
.row {
  margin-bottom: 20px;
}
</style>

