<template>
  <div>
  <v-container>
    <v-layout row align-center justify-center class="mt-5">

      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h2>Login</h2>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name ="Username" label="Username" v-model="emailId"></v-text-field>
            <v-text-field prepend-icon="lock" label="Password" name="password" type="password" v-model="password"></v-text-field>
            <v-card-actions>
              <v-card>
              {{ displayLoginError }}
              </v-card>
              &nbsp;
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

<script>
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: "Signin",
  data () {
    return {
        emailId: "",
        password: "",
    }
  },
  methods: {
    Login () {
      // this.postAuthData(this.authDetails)
      // axios.post('http://allstore.herokuapp.com/users/login',
      //   this.authDetails
      this.$store.dispatch('loginMethod',{
        emailId:this.emailId,
        password:this.password
      })
    }
  },
  computed :{
    ...mapGetters(['loginMethod', 'displayLoginError']),
  }
 }
</script>
