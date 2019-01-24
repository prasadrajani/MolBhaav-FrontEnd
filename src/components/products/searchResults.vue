<template>
   <div class="text-xs-center padding_products" >
       {{ results }}
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
import { mapGetters } from 'vuex';
 export default {
   name: 'productsList',

   data() {
     return {
      products: null,
      query: this.queryGetter,
      results: 'Results'
     }
   },
   computed:{
       ...mapGetters(['queryGetter']),
       fetchQuery(){
           return this.queryGetter
       }
   },
   created: function(){
     console.log('hello'),
     Axios.get('http://localhost:8080/product/query?queryText='+this.fetchQuery)
       .then((response) => {
         this.products = response.data
         console.log(this.products)
       })
       .catch((error) => {
           this.results = 'NO RESULTS FOUND'
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
