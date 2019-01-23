<template>
  <div>
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
    <div >
      <v-card-title class="teal">
        <strong class=" heading">Contact us</strong>
        <!-- <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn> -->
        <v-card-text>
          <v-icon >phone </v-icon>
          +91-XXXXXXXXXX</v-card-text>
      </v-card-title>
    </div>
      <v-card-actions class="grey darken-3 justify-center">
         <h2><strong>Molbhaav</strong></h2>

      </v-card-actions>
    </v-card>
  </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus'
      ]
  })
}
</script>
