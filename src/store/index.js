import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ranks: [{
      stt: 1,
      sdt: '0999998888',
      phanthuong: 'Range Rover 2021'
    },
    {
      stt: 2,
      sdt: '0999999999',
      phanthuong: 'Iphone 12 Pro Max'
    },
    {
      stt: 3,
      sdt: '0123456789',
      phanthuong: 'Iphone X'
    },
    {
      stt: 4,
      sdt: '0696969696',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 5,
      sdt: '0976895733',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 6,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    }, {
      stt: 7,
      sdt: '0696969696',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 8,
      sdt: '0976895733',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 9,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 10,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    }
    ],
    BXH: [{
      stt: 1,
      sdt: '0169578469',
      phanthuong: '1.000.000.000 VND'
    },
    {
      stt: 2,
      sdt: '0215654484',
      phanthuong: 'Iphone Xsm'
    },
    {
      stt: 3,
      sdt: '0999998888',
      phanthuong: 'Iphone X'
    },
    {
      stt: 4,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 5,
      sdt: '0976895733',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 6,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 7,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 8,
      sdt: '0976895733',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 9,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
    },
    {
      stt: 10,
      sdt: '0999998888',
      phanthuong: '1.000.000đ'
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
