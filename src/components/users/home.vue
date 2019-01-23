<template>
<div>

  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>

  <v-container fluid grid-list-sm>
    <v-layout>
      
      <div v-for="category in products" :key="category.categoryId">
      <v-flex xs50 sm7>
        <v-img
            :src=category.categoryImageUrl 
            height="350"
            width="350"
        ></v-img>
       <center>
        <h3 class="headline mb-0">{{ category.categoryName }}</h3>
        <router-link :to ="{name:'/category/',params:{cid:category.categoryId}}">
        <v-btn dark>view all</v-btn></router-link>
       </center>
      </v-flex>
      </div>
      
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
      
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          },
        ],

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
        created:function () {
     console.log('hello')
     Axios.get('http://molbhaav-product.herokuapp.com/category/')
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