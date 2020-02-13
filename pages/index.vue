<template>
  <v-container>
    <v-row justify-content="center">
      <v-col cols="12">
        <h1>{{ title }}</h1>
      </v-col>
      <v-col cols="12">
        <v-bottom-navigation
          v-model="navPage"
        >
          <v-btn value="home">
            <span>Accueil</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>

          <v-btn value="favorites">
            <span>Favorites</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn value="nearby">
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {},
  data: () => {
    return {
      title: 'R.T.L Game',
      navPage: 'home'
    }
  },
  methods: {
    createDeckCard: function () {

    }
  }
}
</script>
