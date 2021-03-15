import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const MINIGAME_URL = 'http://localhost:1103/game/get-top-damge-final'
const MWIN_URL = 'http://localhost:1103/game/get-mwin-users'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ranks: [],
    bxhMiniGame: []
  },
  getters: {
    ranks (state) {
      return state.ranks
    },
    bxhMiniGame (state) {
      return state.bxhMiniGame
    }
  },
  mutations: {
    setMinigame (state, bxhMiniGame) {
      state.bxhMiniGame = bxhMiniGame
    },
    setRanks (state, ranks) {
      state.ranks = ranks
    }
  },
  actions: {
    fetchPosts ({
      commit
    }) {
      Promise.all([
        axios.get(MWIN_URL).then((response) => response.data),
        axios.get(MINIGAME_URL).then((response) => response.data)
      ]).then(([ranks, bxhMiniGame]) => {
        for (let index = 0; index < ranks.length; index++) {
          ranks[index].stt = index + 1
        }
        for (let index = 0; index < bxhMiniGame.length; index++) {
          bxhMiniGame[index].stt = index + 1
        }
        commit('setRanks', ranks)
        commit('setMinigame', bxhMiniGame)
      }).catch((error) => {
        throw error
      })
    }
  },
  modules: {}
})
