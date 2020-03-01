<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <global header>
    <template v-slot:content>
      <v-col cols="12" class="rtl-content">
        <h1>
          <span>Ajouter</span><br>
          <span>les joueurs</span>
        </h1>
        <div class="players">
          <div class="player" v-for="player in players">
            <input class="player-input" v-model="player.name" type="text">
            <div class="gender">
              <button :class="player.gender ? 'male-active' : ''" v-on:click="selectGender(player, true)"><v-icon>mdi-gender-male</v-icon></button>
              <button :class="player.gender ? '' : 'female-active'" v-on:click="selectGender(player, false)"><v-icon>mdi-gender-female</v-icon></button>
            </div>
          </div>
          <span v-on:click="addPlayer">Ajouter un joueur <v-icon>mdi-plus-circle-outline</v-icon></span>
        </div>
        <div role="contentinfo" class="rtl-actions">
            <button class="rtl-btn" v-on:click="goToPlay">Jouer</button>
        </div>
      </v-col>
    </template>
  </global>
</template>

<script>
  import global from '~/layouts/global.vue'

  export default {
    name: "players",
    components: {
      global
    },
    data:() => {
      return {
        players: [
          {id: 1, name: '', drink_pts: 0, gender: true},
          {id: 2, name: '', drink_pts: 0, gender: true},
        ]
      }
    },
    methods: {
      selectGender: function (player, gender) {
        if(player.gender !== gender) player.gender = gender;
      },
      addPlayer: function () {
        let id = this.players.length + 1;
        this.players.push({
          id: id,
          name: '',
          drink_pts: 0,
          gender: true
        });
      },
      goToPlay: function () {
        //Check si y a des joueurs avant de redirect
        this.$store.commit('players/add', this.players);
        this.$router.push({name:'game'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rtl-content {
    overflow-y: paged-y;
    margin-top: 8vh;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      span:first-of-type {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 93px;
        line-height: 50px;
      }
      span:last-of-type {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 63px;
        line-height: 50px;
      }
    }

    .players {
      text-align: right;

      .player {
        margin: 2rem 0;
        position: relative;
        display: flex;
        width: 285px;
        border-radius: 10px;
        height: 42px;
        background: $blue-primary;
        filter: $w-shadow-sm;

        &:before {
          position: absolute;
          content: "";
          z-index: 4;
          border-radius: 10px;
          top: 0; right: 0; left: 0; bottom: 0;
          box-shadow: $b-shadow-sm;
        }
        .player-input {
          position: relative;
          z-index: 5;
          border-radius: 10px;
          height: 100%;
          width: 70%;
          padding: 0 16px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
        }
        .gender {
          display: inline-flex;
          position: relative;
          z-index: 5;
          height: 100%;
          width: 30%;

          button {
            //male
            width: 50%;
            height: 100%;
            text-align: center;
            border-left: 1px solid $blue-secondary;
            &:first-of-type {
              color: $blue-secondary;
            }
            &:last-of-type {
              color: $red-secondary;
              border-radius: 0 10px 10px 0;
            }

            &.male-active {
              background-color: $blue-secondary-op-20;
            }
            &.female-active {
              background-color: $red-secondary-op-20;
            }
          }
        }
      }

      span {
        padding-right: 1rem;
        font-family: 'Bebas Neue', sans-serif;
        color: $blue-secondary;
        i {
          color: $blue-secondary;
        }
      }
    }
    .rtl-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4rem;
    }
  }
</style>
