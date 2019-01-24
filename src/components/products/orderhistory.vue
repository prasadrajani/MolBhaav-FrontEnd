<template>
  <div>
  <v-container class="mt-5" height="100px">
       <div v-for="order in orders" :key="order.orderId" class="mt-5">
      <v-layout>
        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text" height="200px">
              <v-layout>
                <div>{{ order.orderId }} placed on {{ order.placedOn }} by {{ order.userId }}</div>
                <!-- <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <h1 class="display-3">{{ item.name }}</h1>
                      <v-divider></v-divider>
                      <div>{{ item.usp }}</div>
                      <v-spacer></v-spacer>
                      <p>This product is bought on 10/2/2018</p>
                    </div>
                  </v-card-title>
                </v-flex> -->
                <div v-for="item in order.productList" :key="item.productId">
                  {{ item.merchantId }}
                  {{ item.price }}
                  {{ item.productId }}
                  {{ item.quantity }}
                </div>

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
  </div>
</template>

<script>
 import Axios from 'axios'

 export default {
   name: 'orderhistory',

   data() {
     return {
     orders: []
     }
   }
,
   created: function () {
     console.log('hello')
     Axios.get('http://demo2494511.mockable.io/testing')
     //Axios.get('http://molbhaav-order.herokuapp.com/orders/getOrderHistory/' + sessionStorage.getItem("UserId"))
       .then((response) => {
         this.orders = response.data
         console.log(this.orders)
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
