import Vue from 'vue'
import Router from 'vue-router'
// import firebase from 'firebase'

import Home from '../pages/Home.vue'

import NotFound from '../pages/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    meta: { title: 'Trang chủ || Truy tìm kho báu' }
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
  ]
})

export default router
