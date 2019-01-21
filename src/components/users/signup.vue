<<template>
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
                  <v-text-field prepend-icon="person" name="name" label="Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="home" name="address" label="Address" type="text"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="E-mail" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark >Sign-up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<<script>
  export default{
    data() {
      return {

      }
    }

  }
</script>
