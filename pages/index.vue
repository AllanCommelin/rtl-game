<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <global>
      <template v-slot:content>
        <v-row justify="center" align-content="center" align="center" class="rtl-row">
          <v-col cols="12" class="rtl-intro">
            <div class="logo"></div>
            <h1>R.T.L</h1><br>
            <h2>GAME</h2>
          </v-col>
          <div role="contentinfo" class="rtl-actions">
              <NuxtLink class="nuxt-link" to="/players">
                <button class="rtl-btn">
                  Commencer
                </button>
              </NuxtLink>
          </div>
        </v-row>
      </template>
    </global>
</template>

<script>
    import global from '~/layouts/global.vue'
    export default {
        name: "start",
      components: {
          global
      }
    }
</script>

<style lang="scss" scoped>
  .rtl-row {
    .rtl-intro {
      text-align: center;

      .logo {
        margin: 0 auto;
        position: relative;
        width: 25vh;
        height: 25vh;
        border-radius: 50%;
        background: $blue-primary;
        filter: $w-shadow-lg;
        &:after {
          position: absolute;
          top: 0;
          background: $blue-primary;
          left: 0;
          width: 25vh;
          height: 25vh;
          border-radius: 50%;
          opacity: 0.71;
          content: "";
          filter: $b-shadow-lg;
        }
      }
      h1 {
        position: relative;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 16vh;
        line-height: 2vh;
      }
      h2 {
        position: relative;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 13vh;
        line-height: 14vh;
      }
    }

    .rtl-actions {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 4rem;
    }
  }
</style>
