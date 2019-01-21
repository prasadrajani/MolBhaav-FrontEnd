<template>
  <div>
    <v-container >
      <v-layout row wrap class="mt-5">
        <v-flex>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src">
          </v-carousel-item>
        </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="mt-3">
      <h1>Mobiles</h1>
      <v-layout row wrap >
        <v-flex>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(mobile,i) in mobiles"
            :key="i"
            :src="mobile.src">
          </v-carousel-item>
        </v-carousel>
        <v-btn route to='/productlist' target="-blank">View all</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="mt-3">
      <h1>Electronics</h1>
      <v-layout row wrap >
        <v-flex>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(Electronic,i) in Electronics"
            :key="i"
            :src="Electronic.src">
          </v-carousel-item>
        </v-carousel>
        <v-btn >View all</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
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
          }
        ],
        mobiles:[
          {
            src: "static/Huaei.png"
          },
          {
            src: "static/iphone6s.jpg"
          },
          {
            src: "static/samsung.jpeg"
          },
          {
            src: "static/Xiaomi.jpeg"
          }
        ],
        Electronics:[
          {
             src : "static/Huaei.png"
          }
        ]
      }
    }
  }
</script>
