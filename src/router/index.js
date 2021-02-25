import Vue from 'vue'
import Router from 'vue-router'
// import firebase from 'firebase'

import Comics from '../components/Comics.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/comics'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/comics',
    name: 'Comics',
    component: Comics

  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
  ]
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) {
//     next('login')
//   } else if (!requiresAuth && currentUser) {
//     next('comics')
//   } else {
//     next()
//   }
// })

export default router
