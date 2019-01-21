
<template>
  <div>
    <v-container fluid >
        <v-layout align-center justify-center class="mt-5">
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign-up</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="name" label="Name" type="text" v-model="details.name"></v-text-field>
                  <v-text-field prepend-icon="home" name="address" label="Address" type="text" v-model="details.address"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="E-mail" type="text" v-model="details.emailId"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="details.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark @click="signup" >Sign-up</v-btn>
                
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>


<script>
  import {mapGetters,mapActions} from 'vuex'
  import axios from 'axios'
  export default {
  name: 'SingUpPage',
  data () {
    return {
        details:{
      name : '',
      emailId : '',
      password : '',
      address:'',
        }
    }
  },
   methods: {
    ...mapActions(['signup']),
    signup() {
        axios.post("http://allstore.herokuapp.com/users/signIn",
            this.details
        )
        .then((response)=>
            console.log(response)
        )
        .catch((response)=>
            console.log(response)
        )
     
    },
  },
  
  }

</script>
