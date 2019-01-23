import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Signin from '@/components/users/SignIn'
import Signup from '@/components/users/signup'
import Myprofile from '@/components/users/editprofile'
import productlist from '@/components/products/productlist'
import ProductDescription from '@/components/products/productDescription'
import Cartchart from '@/components/products/cartchart'
import carthistory from '@/components/products/carthistory'
import orderhistory from '@/components/products/orderhistory'
import Homeview from '@/pages/home'
import Logout from '@/components/users/logout'
// import Myprofile from '@/components/users/profile'
import profileedit from '@/components/users/profileedit'

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
      path: '/home',
      name: 'Homeview',
      component: Homeview
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
      path: '/editprofile/:id',
      name: 'editprofile',
      component: Myprofile
    },
    {
      path: '/productlist/:cid',
      name: 'productlist',
      component: productlist
    },
    {
      path: '/productDescription/:pid',
      name: 'productDescription',
      component: ProductDescription
    },
    {
      path: '/cartchart/:id',
      name: 'cartchart',
      component: Cartchart
    },
    {
      path: '/carthistory/:id',
      name: 'carthisstory',
      component: carthistory
    },
    {
      path: '/orderhistory/:id',
      name: 'orderhistory',
      component: orderhistory
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/profileedit',
      name: 'profiledit',
      component: profileedit
    },

    { path: '*', redirect: '/' }
  ]
})
