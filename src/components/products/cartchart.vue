<template>
  <v-container class="mt-5" height="500px">
      <v-layout>
        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text" height="300px">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="static/iphone6s.jpg"
                    height="300px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <h1 class="display-3">item.productName</h1>
                      <!-- <v-divider></v-divider> -->
                      <div>item.productDescription</div>

                      <v-spacer></v-spacer>
                      <p>item.productUsp</p>
                      <div>
        <v-btn flat small class="grey" @click="myButton" >-</v-btn>
      </div>
      <p id="demo">{{ a }}</p>
      <div>
        <v-btn flat small class="grey" @click="myButton1">+</v-btn>
      </div>
                    </div>
                  </v-card-title>
                </v-flex>

              <!-- <v-divider light></v-divider> -->
              <v-card-actions class="pa-3">
                <v-btn>remove from cart</v-btn>
              </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
