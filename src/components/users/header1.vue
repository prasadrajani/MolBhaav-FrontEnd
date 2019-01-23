<<template>
  <div>
    <v-toolbar dark fixed class="mb-2">
    <v-toolbar-side-icon></v-toolbar-side-icon>
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
      <div >
      <v-btn flat router-link to="/" target="-blank">Sign-up</v-btn>
      </div>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>
