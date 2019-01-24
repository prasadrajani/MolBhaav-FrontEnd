<template>
<div>

  <v-container class="mt-5" height="500px">
    <v-layout>
      <v-flex xs12>
        <v-card color="cyan darken-2" class="white--text" height="300px">
          <v-layout v-if="products">
            <v-flex xs5>
              <v-img :src="products.productImageUrl" height="300px" contain></v-img>
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
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
   <template v-if="products">
     <div>{{ products.productDescription }}</div>
  <div v-for="attribute in products.staticAttributeList" :key="attribute.attribute">
    <v-container class="mt-5" height="500px">
      <v-layout>
        <v-flex xs7>
          <v-card-title primary-title>

            <div>

              <h2>{{ attribute.attribute }}</h2>
              <!-- <v-spacer></v-spacer> -->
            </div>
          </v-card-title>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>

            <h2>{{ attribute.description }}</h2>
          </v-card-title>
        </v-flex>
        <v-flex>
          <!-- <v-divider light></v-divider> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <h1>Merchants List</h1>
  <div v-for="merchant in sortedArray" :key="merchant.merchantId">
    <v-container class="mt-5" height="500px">
      <v-layout>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <h3>{{ merchant.name }}</h3>
              <!-- <v-spacer></v-spacer> -->
            </div>
          </v-card-title>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>

            <h3>{{ merchant.price }}</h3>
          </v-card-title>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>

            <h3>{{ merchant.rating }}</h3>
          </v-card-title>
        </v-flex>
        <v-flex>
          <!-- <v-divider light></v-divider> -->
          <v-card-actions class="pa-3">

              <v-btn @click="() => {saveDetails(merchant.merchantId)}"> Add to Cart</v-btn>
          </v-card-actions>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
   </template>

</div>
</template>

<script>
import Axios from 'axios'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'productDescription',
  data() {
    return {
      products: {},
      merchantDTOS: []
    }
  },
  created: function(){
   Axios.get('https://molbhaav-merchant.herokuapp.com/productMerchants/getByProductId/' + this.$route.params.pid)
        .then((response) => {
          var res = response.data
          this.products = response.data
          this.merchantDTOS = res.merchantDTOList
          console.log(this.products)
        })
        .catch((response) => {
          console.log(error)
        })
  },
  computed: {
    ...mapGetters(['userDetails']),
    sortedArray: function() {
    function compare(a, b) {
      if (a.rating < b.rating)
        return -1;
      if (a.rating > b.rating)
        return 1;
      return 0;
    }
    return this.merchantDTOS.sort(compare);
  }
  },
  methods: {
    ...mapActions(['getDetails']),
    saveDetails(mId) {
      Axios.post("http://molbhaav-order.herokuapp.com/carts/add", {
          "userId": sessionStorage.getItem("UserId"),
          "merchantId": mId,
          "productId": this.products.productId,
          "quantity": 1
        })
        .then((response) => {
          this.$store.commit('USER_DETAILS', response)
        })
        .catch((response) => {
          console.log('f')
        })
    }
  }
}
</script>

<style>
.padding_products {
  margin-top: 180px
}
</style>