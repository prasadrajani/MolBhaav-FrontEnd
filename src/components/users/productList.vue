
    <template>
    <div class="container">
   <v-carousel>
         <center>
      <div>
   <v-btn color="success">VIEW MORE</v-btn>
   </div>
      </center>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <v-container fluid>
    <v-layout justify-space-around>
      <v-flex xs5>
        <div class="title mb-1">MOBILES</div>
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <center>
      <div>
   <v-btn color="success">SHOP NOW</v-btn>
   </div>
      </center>
    
          <div class="subheading pt-3">GADGETS</div>
       
         <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <center>
      <div>
   <v-btn color="success">SHOP NOW</v-btn>
   </div>
      </center>
    
          <div class="subheading pt-3">HOME APPLIANCES</div>
       
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <center>
      <div>
   <v-btn color="success" icon href="/productDescription">SHOP NOW</v-btn>
   </div>
      </center>
    
        </v-layout>
      </v-flex>

      <v-flex xs5>
        <div class="title mb-1">ELECTRONICS</div>
        
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <center>
      <div>
   <v-btn color="success">SHOP NOW</v-btn>
   </div>
      </center>
    
          <div class="subheading pt-3">CLOTHES</div>
         <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <center>
      <div>
   <v-btn color="success">SHOP NOW</v-btn>
   </div>
      </center>
    
          <div class="subheading pt-3">SHOES</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          <center>
      <div>
   <v-btn color="success">SHOP NOW</v-btn>
   </div>
      </center>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>


    </div>
</template>
<script>
export default {
    name: 'productList',
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
        ]
      }
    }
}
</script>