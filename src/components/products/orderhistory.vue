<template>
  <v-container class="mt-5" height="100px">
       <div v-for="item in products" :key="item.name" class="mt-5">
      <v-layout>
        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text" height="200px">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="item.photo"
                    height="200px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <h1 class="display-3">{{ item.name }}</h1>
                      <!-- <v-divider></v-divider> -->
                      <div>{{ item.usp }}</div>

                      <v-spacer></v-spacer>
                      <p>This product is bought on 10/2/2018</p>
                    </div>
                  </v-card-title>
                </v-flex>

              <!-- <v-divider light></v-divider> -->
              <v-card-actions class="pa-3">
                <!-- <v-btn >Add to Cart</v-btn> -->
              </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout>
       </div>
    </v-container>

</template>

<script>
 import Axios from 'axios'

 export default {
   name: 'orderhistory',

   data() {
     return {
     products: []
     }
   }
,
   created: function () {
     console.log('hello')
     Axios.get('http://allstore.herokuapp.com/'+this.$route.params.pid)
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
