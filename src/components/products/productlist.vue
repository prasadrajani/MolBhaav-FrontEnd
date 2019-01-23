<template>
   <div class="text-xs-center padding_products" >

       <div v-for="item in products" :key="item.productId">
           <v-layout>
                <v-flex xs5>
                   <v-card>
                       <v-img :src="item.productImageUrl" aspect-ratio="2.75" contain></v-img>
                           <v-card-title primary-title class="justify-center">
                               <div>
                                   <h3 class="headline mb-0">{{ item.productName }}</h3>
                                   <div>{{ item.productUsp }}</div>
                               </div>
                           </v-card-title>
                           <v-card-actions>
                           <router-link :to ="{name:'productDescription',params: {pid:item.productId}}">
                              <v-btn> details</v-btn>
                           </router-link>
                           </v-card-actions>
                   </v-card>
               </v-flex>
           </v-layout>
       </div>
   </div>
</template>
<script>
import Axios from 'axios'
 export default {
   name: 'productsList',

   data() {
     return {
      products: null
     }
   },
   created: function(){
     console.log('hello'),
     Axios.get('http://molbhaav-product.herokuapp.com/products/findByCategory/'+this.$route.params.cid)
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
