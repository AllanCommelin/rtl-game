<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <global header>
    <template v-slot:content>
      <div class="main" v-on:click="actionCard">
      </div>
      <div class="infos">
        Au tour de : {{ currentPlayer ? currentPlayer.name : "'En attente...'" }}
      </div>
      <div id="container"></div>
      <v-dialog v-model="showRules" content-class="dial-rule" width="500" transition="dialog-bottom-transition" persistent>
        <h2>La règle</h2>
        <p>
          {{ rules }}
        </p>
        <v-btn v-on:click="next">
          C'est fait, suivant
        </v-btn>
      </v-dialog>
      <v-dialog v-model="showEnd"
                fullscreen
                hide-overlay
                content-class="dial-end"
                transition="dialog-bottom-transition">
        <h2>C'est fini</h2>
        <p>
          Vous pouvez allez gerber :*
        </p>
      </v-dialog>
    </template>
  </global>
</template>

<script>
  import global from '../layouts/global.vue';
  import Deck from 'deck-of-cards'
  import { mapGetters } from 'vuex'

  export default {
    head() {
      return {
        link: [
          {rel: 'stylesheet', href: 'node_modules/deck-of-cards/example/example.css'}
        ]
      }
    },
    components: {
      global,
    },
    data: () => {
      return {
        indexCard: null,
        foregroundCard: null,
        currentSuit: null,
        currentRank: null,
        showRules: false,
        rules: null,
        deck: null,
        showEnd: false,
        nbrPlayers: 0,
        indexCurrentPlayer: 0,
        currentPlayer: null
      }
    },
    mounted() {
      this.initDecks();
      this.initPlayers();
    },
    computed: mapGetters({
      players: 'players/get'
    }),
    methods: {
      initDecks: function () {
        let $container = document.getElementById('container');
        let deck = Deck();
        deck.mount($container);
        deck.shuffle();
/*        deck.cards.forEach( card => {
          console.log('ok')
          card.$el.style.transform = "translate3d(0px, 0px, 0px)";
        });*/
        this.indexCard = deck.cards.length - 1
        this.deck = deck
        this.foregroundCard = this.deck.cards[this.indexCard]
      },
      initPlayers: function () {
        this.nbrPlayers = this.players.length;
        this.currentPlayer = this.players[this.indexCurrentPlayer];
      },
      suitName: function (suit) {
        return suit === 0 ? 'spades' : suit === 1 ? 'hearts' : suit === 2 ? 'clubs' : suit === 3 ? 'diamonds' : 'joker'
      },
      actionCard: async function () {
        if (this.foregroundCard.side === 'back') {
          await this.foregroundCard.setSide('front')
          this.currentSuit = this.suitName(this.foregroundCard.suit)
          this.currentRank = this.foregroundCard.rank
          await this.getRules()
          document.getElementById('container').classList.add('container-up')
          this.showRules = true
        }
      },
      next: async function () {
        if (this.indexCard > 0) {
          document.getElementById('container').classList.remove('container-up');
          await this.getCurrentPlayer();
          this.showRules = false;
          this.rules = null;
          await this.deck.cards[this.indexCard].unmount();
          this.indexCard--;
          this.foregroundCard = this.deck.cards[this.indexCard];
        } else {
          this.showRules = false;
          this.showEnd = true;
        }

      },
      getRules: function () {
        switch (this.foregroundCard.rank) {
          case (1):
            this.rules = 'Tournée général, miskine !'
            break
          case (2):
            this.rules = `Tu distribue ${this.foregroundCard.rank}`
            break
          case (3):
            this.rules = `Tu distribue ${this.foregroundCard.rank}`
            break
          case (4):
            this.rules = `Tu distribue ${this.foregroundCard.rank}`
            break
          case (5):
            this.rules = `Tu distribue ${this.foregroundCard.rank}`
            break
          case (6):
            this.rules = 'Invente une règle'
            break
          case (7):
            this.rules = 'Les Rimes'
            break
          case (8):
            this.rules = 'Thèmes'
            break
          case (9):
            this.rules = 'Lettres'
            break
          case (10):
            this.rules = 'La règle de la 10'
            break
          case (11):
            this.rules = 'Roi des pouces'
            break
          case (12):
            this.rules = 'Toutes les femmes boivent'
            break
          case (13):
            this.rules = 'Tous les hommes boivent'
            break
        }
      },
      getCurrentPlayer: function () {
        if(this.players.length > this.indexCurrentPlayer + 1) {
          this.indexCurrentPlayer++;
        } else {
          this.indexCurrentPlayer = 0;
        }
        this.currentPlayer = this.players[this.indexCurrentPlayer];
      }
    }
  }
</script>

<style lang="scss" scoped>
  #container {
    transition: ease-out;
    transition-duration: .6s;
    &.container-up {
      top: calc(30% + 1.5rem)
    }
  }

  .v-dialog__content {
    align-items: flex-end;
    ::v-deep .v-dialog.dial-rule {
      margin: 0;
      height: 50%;
    }
    ::v-deep .v-dialog.dial-end {
      margin: 0;
      height: 100%;
      background-color: red;
    }
  }

  .main {
    position: fixed;
    z-index: 100;
    top: 120px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
