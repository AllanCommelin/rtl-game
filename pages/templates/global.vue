<template>
  <v-container>
    <v-row justify-content="center">
      <v-col cols="12">
        <h1>{{ title }}</h1>
      </v-col>
      <v-col cols="12">
        <slot name="content"></slot>
      </v-col>
      <v-col cols="12" class="col-navigation">
        <!--<v-bottom-navigation
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
            <span>Paramètre</span>
            <v-icon>mdi-settings</v-icon>
          </v-btn>
        </v-bottom-navigation>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "global",
    data: () => {
      return {
        title: 'R.T.L Game',
        navPage: 'home'
      }
    },
  }
</script>

<style>
  @import '../../node_modules/deck-of-cards/example/example.css';
</style>

<style scoped lang="scss">
  .col-navigation {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
