<template>
  <v-container class="rtl-container">
    <v-row justify-content="center">
      <v-col cols="12" class="col-header" v-if="header">
        <NuxtLink to="/"><div class="logo"></div></NuxtLink>
        <slot name="info-header"></slot>
      </v-col>
      <v-col cols="12" class="col-content">
        <slot name="content"></slot>
      </v-col>
      <v-col cols="12" class="col-navigation" v-if="footer">
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
    props: {
      header: {
        type: Boolean,
        default: false
      },
      footer: {
        type: Boolean,
        default: false
      },
    },
    data: () => {
      return {
        title: 'R.T.L Game',
        navPage: 'home'
      }
    },
  }
</script>

<style>
  @import '../node_modules/deck-of-cards/example/example.css';
</style>

<style scoped lang="scss">
  .col-content, .col-header, .rtl-container {
    background-color: $blue-primary !important;
  }
  .col-header {
    display: flex;
    justify-content: space-between;
    .logo {
      position: relative;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: $blue-primary;
      filter: $w-shadow-sm;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        box-shadow: $b-shadow-sm;
      }
    }
  }
  .col-navigation {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
