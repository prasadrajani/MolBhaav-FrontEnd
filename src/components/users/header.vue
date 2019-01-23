<template>
  <div>
    <v-toolbar dark fixed class="mb-2" row wrap>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Mol-Bhaav</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-flex xs12 sm6 md8>
          <v-text-field
            placeholder="Search"
            v-model="query"
          ></v-text-field>
        </v-flex>
      <!-- <v-btn flat> -->
        <v-btn @click="doSearch" router-link to="/searchResults" target="-blank">
              <v-icon>search</v-icon>
        </v-btn>
      <!-- </v-btn> -->
      <v-btn flat router-link to="/">Home</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="loginMethod">
      <v-btn flat router-link to="/cartchart" target="-blank">cart</v-btn>
      <v-menu transition="slide-x-transition">
      <v-btn slot="activator" dark  >{{loginMethod.name}}</v-btn>
      <v-list>
        <v-list-tile >
        <v-btn flat router-link to="/editprofile">edit profile</v-btn>
        <v-btn flat router-link to="/orderhistory">order history</v-btn>
        <v-btn flat routr-link to="/logout">logout</v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar-items>
    <v-toolbar-items v-else>
      <v-btn flat router-link to="/signin" target="-blank">Sign-in</v-btn>
      <v-btn flat router-link to="/signup" target="-blank">Sign-up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
  export default{
    name:'header',
    data() {
      return{
        query: ''
      }
    },
    methods:{
      ...mapActions(['performSearch']),
      doSearch(){
        this.performSearch(this.query)
      }
    },
    computed:{
      ...mapGetters(['loginMethod', 'queryGetter']),
    }
  }
</script>
