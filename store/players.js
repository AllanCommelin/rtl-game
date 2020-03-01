export const state = () => ({
  players: []
})

export const mutations = {
  add (state, players) {
    players.forEach( player => {
      state.players.push(player)
    })
  },
}

export const getters = {
  get (state) {
    return state.players
  }
}
