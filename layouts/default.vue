<template>
  <v-app class="rtl-app">
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  @import "../assets/rtl.scss";
  @import "../assets/variables.scss";
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
  .rtl-app {
    background-color: $blue-primary !important;
  }
</style>
