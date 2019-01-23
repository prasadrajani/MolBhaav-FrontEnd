<template>
  <div>
  
    <v-container class="mt-5" height="500px">
      <v-layout>
        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text" height="300px">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="product.productImageUrl"
                    height="300px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <h1 class="display-3">{{ product.productName }}</h1>
                   
                      <div>{{ product.productUsp }} </div>
                    

                  
                    
                    </div>
                  </v-card-title>
                </v-flex>

              <!-- <v-divider light></v-divider> -->
              <v-card-actions class="pa-3">
                <v-btn >Add to Cart</v-btn>
              </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
    <h1>Merchants List</h1>
    <div>{{ product.productDescription }}</div>
    <div v-for="attribute in product.attribute" :key="attribute.name">
         <v-container class="mt-5" height="500px">
      <v-layout >
                <v-flex xs7>
                  <v-card-title primary-title>
                      
                    <div>
                        
                      <h2>Name: {{ attribute.name }}</h2>
                      <!-- <v-spacer></v-spacer> -->
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                  
                  <h2>Description {{ attribute.description }}</h2>
                  </v-card-title>
                </v-flex>
              <v-flex>
              <!-- <v-divider light></v-divider> -->
              <v-card-actions class="pa-3">
                <v-btn >Add to Cart</v-btn>
              </v-card-actions>
          </v-flex>
      </v-layout>
    </v-container>
    </div>
       <div v-for="merchant in product.merchants" :key="merchant.name">
    <v-container class="mt-5" height="500px">
      <v-layout >
                <v-flex xs7>
                  <v-card-title primary-title>
                      
                    <div>
                        
                      <h2>Name: {{ merchant.name }}</h2>
                      <!-- <v-spacer></v-spacer> -->
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                  
                  <h2>Price: {{ merchant.price }}</h2>
                  </v-card-title>
                </v-flex>
               
              <v-flex>
                  
              <!-- <v-divider light></v-divider> -->
              <v-card-actions class="pa-3">
                <v-btn >Add to Cart</v-btn>
              </v-card-actions>
          </v-flex>
      </v-layout>
    </v-container>
      </div>
  </div>
  

</template>
<script>
 import Axios from 'axios'

 export default {
   name: 'productDescription',

   data() {
     return {

      product: {},
     
     }
   }
,
   created:function () {
     console.log('hello')
     Axios.get('http://molbhaav-product.herokuapp.com/products/get/1')
       .then((response) => {
         this.product = response.data

         console.log(this.product)
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