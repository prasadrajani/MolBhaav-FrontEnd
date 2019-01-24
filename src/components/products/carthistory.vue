<template>
  <div>
  <v-container class="mt-5" height="100px">
    <div v-for="product in products" :key="product.productId" class="mt-5">
        <cart-item v-bind="product" v-on:message="addToTotal"></cart-item>
    </div>
  </v-container>
  <button @click="saveToCart">SAVE TO CART</button>
  <v-btn block color="secondary" dark  @click="placeorder" >place order</v-btn>
  </div>
</template>

<script>
 import Axios from 'axios'
 import CartItem from '@/components/products/CartItem'
 export default {
   name: 'productsList',
   data() {
     return {
       msg:"",
       finalPrice:0,
        products: []
     }
   },
  components:{
    CartItem
  },
  computed: {
    num() {
      return this.finalPrice
    }
  },
  methods: {
    addToTotal(x){
      console.log(x)
    },
    placeorder(){
      const config = { headers: {'Content-Type': 'application/json'} }
   Axios.post('http://molbhaav-order.herokuapp.com/orders/placeOrder?userId,'+sessionStorage.getItem('UserId'))
   .then((response) => {
     console.log(response)
    })
    .catch((error) => {
     console.log(error)
    })
    },
    saveToCart(){
      var productsList= []
      for(var i=0; i<this.products.length; i++){
        productsList.push({
          "merchantId": this.products[i].merchantId,
          "price": this.products[i].price,
          "productId": this.products[i].productId,
          "quantity": this.products[i].quantity
        });
      }
      var data = {
        "productsList": productsList,
        "userId": sessionStorage.getItem("UserId")
      }
      console.log(data)
      //Axios.post('http://demo9723651.mockable.io/test2', data)
      Axios.post('http://molbhaav-order.herokuapp.com/carts/saveCart', data)
      .then((response) => {
         this.products = response.data
         console.log(this.products)
       })
       .catch((error) => {
         console.log(error)
       })
    }
  },
   created: function() {
     console.log('hello')
     //Axios.get('http://demo2494511.mockable.io/testing')
     Axios.get('http://molbhaav-order.herokuapp.com/carts/viewCart/'+sessionStorage.getItem('UserId'))
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