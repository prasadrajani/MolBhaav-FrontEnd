import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Signin from '@/components/users/SignIn'
import Signup from '@/components/users/signup'
import Myprofile from '@/components/users/profile'
import ProductList from '@/components/products/productlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Myprofile
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductList
    },
    { path: '*', redirect: '/' }
  ]
})
