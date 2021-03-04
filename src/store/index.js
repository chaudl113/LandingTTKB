import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ranks: [{
      stt: 1,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 2,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 3,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 4,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 5,
      sdt: '0976895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 6,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    }
    ],
    BXH: [{
      stt: 1,
      sdt: '0169578469',
      phanthuong: 'Iphone 12'
    },
    {
      stt: 2,
      sdt: '0215654484',
      phanthuong: 'Iphone X'
    },
    {
      stt: 3,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 4,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 5,
      sdt: '0976895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 6,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 7,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 8,
      sdt: '0976895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 9,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 10,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 11,
      sdt: '0976895733',
      phanthuong: 'Iphone X'
    },
    {
      stt: 12,
      sdt: '0396895733',
      phanthuong: 'Iphone X'
    }
    ]
  },
  getters: {
    ranks (state) {
      return state.ranks
    },
    BXH (state) {
      return state.BXH
    }
  },
  mutations: {},
  actions: {
    fetchPosts ({
      commit
    }) {
      Promise.all([
        axios.get('/posts').then((response) => response.data),
        axios.get('/categories').then((response) => response.data)
      ]).then(([posts, categories]) => {
        commit('setPosts', posts)
        commit('setCategories', categories)
        commit('setLoadStatus', 'success')
      }).catch((error) => { throw error })
    }
  },
  modules: {}
})
