import Vue from 'vue'
import Router from 'vue-router'
// import firebase from 'firebase'

import Home from '../pages/Home.vue'
import Bonus from '../pages/Bonus.vue'
import Guideline from '../pages/Guideline.vue'
import Minigame from '../pages/Minigame.vue'
import Regulation from '../pages/Regulation.vue'
import Reward from '../pages/Reward.vue'

import NotFound from '../pages/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    meta: {
      title: 'Truy tìm kho báu'
    }
  }, {
    path: '/bonus-list',
    component: Bonus,
    meta: {
      title: 'Truy tìm kho báu'
    }
  },
  {
    path: '/guideline',
    component: Guideline,
    meta: {
      title: 'Truy tìm kho báu'
    }
  },
  {
    path: '/wap/minigame',
    component: Minigame,
    meta: {
      title: 'Truy tìm kho báu'
    }
  },

  {
    path: '/wap/regulation',
    component: Regulation,
    meta: {
      title: 'Truy tìm kho báu'
    }
  }, {
    path: '/wap/reward',
    component: Reward,
    meta: {
      title: 'Truy tìm kho báu'
    }
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
  ]
})

export default router
