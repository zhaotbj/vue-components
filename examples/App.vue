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

    <hm-input placeholder="请输入" type="text" v-model="username" clearable></hm-input>
    <br />
    <hm-input placeholder="请输入" :disabled="true"></hm-input>
    <br />
    <hm-input placeholder="请输入" type="password" showPassword v-model="username"></hm-input>

    <hm-switch v-model="value"></hm-switch>
    <!-- 自定义颜色 -->
    <hm-switch v-model="value" active-color="green" in-active-color="red" name="username"></hm-switch>
    <hm-radio v-model="radio" label="0"></hm-radio>
    <hm-radio v-model="radio" label="1"></hm-radio>
    <hm-radio v-model="radio" label="0">男</hm-radio>
    <hm-radio v-model="radio" label="1">女</hm-radio>
    <hm-radio-group v-model="radio">
      <hm-radio label="0">男</hm-radio>
      <hm-radio label="1">女</hm-radio>
    </hm-radio-group>

    <hm-checkbox v-model="active">checkbox</hm-checkbox>
    <br>
    <hm-checkbox-group v-model="hobby">
      <hm-checkbox label="吃饭">吃饭</hm-checkbox>
      <hm-checkbox label="睡觉">睡觉</hm-checkbox>
      <hm-checkbox label="写代码">写代码</hm-checkbox>
    </hm-checkbox-group>
    <br>
    <hm-form :model="model" label-width="80px">
      <hm-form-item label="用户名">
        <hm-input placeholder="请输入用户名" v-model="model.username"></hm-input>
      </hm-form-item>
       <hm-form-item label="用户名">
        <hm-switch v-model="model.active"></hm-switch>
      </hm-form-item>
    </hm-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visable: false,
      username: 'zs',
      value: false,
      radio: 0,
      active: true,
      hobby:['吃饭'],
      model:{

      }
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
.el-input {
  width: 180px !important;
}
</style>

