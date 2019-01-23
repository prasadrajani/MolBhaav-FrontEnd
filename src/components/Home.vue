<template>
  <v-container fluid grid-list-sm>
    <v-layout>
      <div v-for="merchant in product.merchants" :key="merchant.name">
      <v-flex xs6 sm4>
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </v-flex>

      <v-flex xs6 sm4>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-flex>

      <v-flex xs6 sm4>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-flex>
      </div>
    </v-layout>
    
  </v-container>
</template>
      



<script>
 import Axios from 'axios'

 export default {
   name: 'productsList',

   data() {
     return {

      products: [
           {
               photo: ('https://picsum.photos/350/165?random'),
               name: 'Product name',
               usp:'Something somethin something'
           }
      ]
     }
   }
,
   created: function () {
     console.log('hello')
     Axios.get('http://molbhaav-product.herokuapp.com/products/findByCategory/1')
       .then((response) => {
         this.products = response.data
         console.log(this.products)
       })
       .catch((error) => {
         console.log(error)
       })
   }
 }
</script>

<style>
   .padding_products{
       margin-top: 180px
   }
</style>