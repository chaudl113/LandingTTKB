import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const MINIGAME_URL = 'http://localhost:1103/game/get-top-damge-final'
const MWIN_URL = 'http://localhost:1103/game/get-mwin-users'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ranks: [],
    BXH: []
  },
  getters: {
    ranks (state) {
      return state.ranks
    },
    BXH (state) {
      return state.BXH
    }
  },
  mutations: {
    setMinigame (state, BXH) {
      state.BXH = BXH
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
      ]).then(([ranks, bxh]) => {
        for (let index = 0; index < ranks.length; index++) {
          ranks[index].stt = index + 1
        }
        for (let index = 0; index < bxh.length; index++) {
          bxh[index].stt = index + 1
        }
        commit('setMinigame', bxh)
        commit('setRanks', ranks)
      }).catch((error) => {
        throw error
      })
    }
  },
  modules: {}
})
