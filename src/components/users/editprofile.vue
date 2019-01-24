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
            <v-text-field prepend-icon="lock" label="Email" name="email" v-model="details.emailId"></v-text-field>
            <v-text-field prepend-icon="lock" label="Name" name="Name" v-model="details.name"></v-text-field>
            <v-text-field prepend-icon="lock" label="Address" name="Address" v-model="details.address"></v-text-field>
            <v-card-actions>
              <v-btn dark primary large block @click="saveDetails">Save</v-btn>
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
import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      details: {}
    }),
    methods: {
        getDetails() {
          axios.get('http://allstore.herokuapp.com/users/profile/'+sessionStorage.getItem('UserId'))
          .then( (response) =>
            this.details = response.data
          )
          .catch( (response) =>
            console.log(response)
          )
        },
        saveDetails() {
          axios.post('http://allstore.herokuapp.com/users/editProfile',
           this.details)
          .then( (response) =>
            console.log(response)
          )
          .catch( (response) =>
            console.log(response)
          )
        }
      },
    mounted() {
        this.getDetails()
      }
  }
</script>
