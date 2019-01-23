import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import productsList from '@/components/users/productsList'
import productDescription from '@/components/products/productDescription'
import signup from '@/components/users/signup'
import home from '@/components/users/home'
import signIn from '@/components/users/signIn'
import orderhistory from '@/components/products/orderhistory'
//mport navigation from '@/components/products/navigation'
//import profileedit from '@/components/users/profileedit'
import cart from '@/components/users/cart'
import ratings from '@/components/users/ratings'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/productsList',
      name: 'productsList',
      component: productsList
    },
    {
      path: '/orderhistory',
      name: 'orderhistory',
      component: orderhistory
    },
    {
      path: '/productDescription/:productId',
      name: 'productDescription',
      component: productDescription
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
