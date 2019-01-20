import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
