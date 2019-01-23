<template>
  <div>
    <v-toolbar dark fixed class="mb-2">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Covimart</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-flex xs12 sm6 md8>
          <v-text-field
            placeholder="Search"
          ></v-text-field>
        </v-flex>
      <!-- <v-btn flat> -->
        <v-btn >
              <v-icon>search</v-icon>
        </v-btn>
      <!-- </v-btn> -->
      <v-btn flat router-link to="/">Home</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="loginMethod">
      <v-btn flat router-link to="/cartchart" target="-blank">cart</v-btn>
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
    name:'navigation',
    computed:{
      ...mapGetters(['loginMethod'])
    },
    methods: {
      searchString(){
        fetch(BASE_URL_SEARCH+'keywords>searchTerm='+document.getElementById('search').value)
        .then(response=>{
          return response.json();
        }).then(data=>{
          console.log(data);
          this.strings=data;
        }).catch(err=>{console.log('err')
        });
        },
        search(){
          window.location.replace("/searchresult/"+document.getElementById('search').value)
        }
      }
    }
  }
</script>