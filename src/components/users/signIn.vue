<template>
 <div>
 <v-container>
  <v-layout row align-center justify-center class="mt-5">
​
   <v-flex xs4 class="grey lighten-4">
    <v-container style="position: relative;top: 13%;" class="text-xs-center">
     <v-card flat>
      <v-card-title primary-title>
       <h2>Login</h2>
      </v-card-title>
      <v-form>
      <v-text-field prepend-icon="person" name ="Username" label="Username" v-model="authDetails.emailId"></v-text-field>
      <v-text-field prepend-icon="lock" label="Password" name="password" type="password" v-model="authDetails.password"></v-text-field>
      <v-card-actions>
       <v-btn dark primary large block @click="Login">Login</v-btn>
      </v-card-actions>
      </v-form>
      </v-card>
    </v-container>
   </v-flex>
  </v-layout>
 </v-container>
</div>
</template>
​
<script>
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'
export default {
 name: "Signin",
 data () {
  return {
   authDetails: {
    emailId: "",
    password: "",
   }
  }
 },
 methods: {
  ...mapActions(['postAuthData']),
  Login () {
   // this.postAuthData(this.authDetails)
   axios.post('http://allstore.herokuapp.com/users/login',
    this.authDetails
   )
   .then((response) =>
    // console.log(response.data)
    sessionStorage.setItem("UserId", response.data.userId),
    
   )
   .catch((error) =>
    console.log(error)
   )
  }
 }
 }
</script>