<template>
  <div>

    <v-container class="mt-5" height="500px">
      <v-layout>
        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text" height="300px">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="products.productImageUrl"
                    height="300px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <h1 class="display-3">{{ products.productName }}</h1>
                      <div>{{ products.productUsp }} </div>
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

     <div>{{ products.productDescription }}</div>
    <h1>Merchants List</h1>
    <div v-for="attribute in products.staticAttributeList" :key="attribute.attribute">
         <v-container class="mt-5" height="500px">
      <v-layout >
                <v-flex xs7>
                  <v-card-title primary-title>

                    <div>

                      <h2>Name: {{ attribute.attribute }}</h2>
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
       <div v-for="merchant in products.merchantDTOList" :key="merchant.name">
    <v-container class="mt-5" height="500px">
      <v-layout >
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <h3>Name: {{ merchant.name }}</h3>
                      <!-- <v-spacer></v-spacer> -->
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>

                  <h3>Price: Rs {{ merchant.price }}</h3>
                  </v-card-title>
                </v-flex>
              <v-flex xs7>
                  <v-card-title primary-title>

                  <h3>Rating: {{ merchant.rating }}</h3>
                  </v-card-title>
                </v-flex>
              <v-flex>
              <!-- <v-divider light></v-divider> -->
              <v-card-actions class="pa-3">
<router-link>
                <v-btn >Add to Cart</v-btn>
</router-link>
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
      products: null
     }
   },
   mounted(){
     console.log('hello')
     Axios.get('https://molbhaav-merchant.herokuapp.com/productMerchants/getByProductId/'+this.$route.params.pid)
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
