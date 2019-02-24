import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Button from '../views/button.vue'
import Input  from '../views/input'
import Form from '../views/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
