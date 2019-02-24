<template>
  <section>
    <button @click="handleButton('button')">button组件</button>
    <button @click="handleButton('input')">input组件</button>
    <button @click="handleButton('form')">from组件</button>
    <router-view/>
    
  </section>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      app: this
    }
  },
  methods: {
    handleButton(value) {
      this.$router.push(`/${value}`)
    }
  }
}
</script>

<style>

</style>
