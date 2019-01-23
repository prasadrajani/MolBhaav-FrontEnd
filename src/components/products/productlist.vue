<template>

  <v-container fluid grid-list-sm>
    <v-layout>
      <div v-for="attribute in product.attribute" :key="attribute.name">
      <v-flex xs6 sm4>
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          
        ></v-img>
      </v-flex>

      <v-flex xs6 sm4>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          
        </v-img>
      </v-flex>

      <v-flex xs6 sm4>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          
        </v-img>
      </v-flex>
      
    </v-layout>
  </v-container>
</div>
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
           },
              {
               photo: ('https://picsum.photos/350/165?random'),
               name: 'Product name',
               usp:'Something somethin something'
           },
           
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

