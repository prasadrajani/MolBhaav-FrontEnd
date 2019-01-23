<template>

   <div class="text-xs-center padding_products" >

    
     
  <v-container fluid grid-list-sm>
    <v-layout>
      <div v-for="category in products" :key="category.productId">
      <v-flex xs6 sm4>
        <v-img
          src="category.productImageUrl"
          
        ></v-img>
        <h3 class="headline mb-0">{{ category.productName }}</h3>
      </v-flex>
      </div>
      
    </v-layout>
    
  </v-container>
  </div>

</template>

<script>
 import Axios from 'axios'
 import StarRating from 'vue-star-rating'

 export default {
   name: 'productsList',

   data() {
     return {

      products: []
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
   },
 
 components: {
   StarRating
 }
 }
</script>

<style>
   .padding_products{
       margin-top: 180px
   }
</style>
