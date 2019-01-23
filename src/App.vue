<template>
<div>
  <router-view></router-view>
  <v-container>
    <Header></Header>
  </v-container>
  <Footer></Footer>
</div>
</template>

<script>
import Home from '@/components/Home'
import Header from '@/components/users/header'
import Footer from '@/components/users/footer'
  export default{
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>>
