<template>
<div>
  <v-container>
  <router-view/>
  <v-toolbar dark fixed class="mb-2">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Covimart</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-flex xs12 sm6 md8>
          <v-text-field
            placeholder="Search"
            v-model="query"
          ></v-text-field>
        </v-flex>
      <!-- <v-btn flat> -->
       
           
     
      <!-- </v-btn> -->
      <v-btn flat router-link to="/">Home</v-btn>
      <v-btn flat router-link to="/signin" target="-blank">Sign-in</v-btn>
      <v-btn flat router-link to="/signup" target="-blank">Sign-up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </v-container>
  <div>

  </div>
  </div>
</template>>

<script>
import Home from '@/components/Home'
import Axios from 'axios';
  export default{
    name: 'App',
    data() {
      return{
        query: ''
      }
    },
   // methods: {
     // search() {
       // Axios.get('http://10.177.7.255:8080/product/query?queryText='+this.query)
       // .then((response) => )
     // }
    //}
  }
</script>>
