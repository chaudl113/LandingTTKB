import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: 'AIzaSyBij24LrOW-8evlY1VnOhi1neEaFDNeOko',
  authDomain: 'comics-fd437.firebaseapp.com',
  projectId: 'comics-fd437',
  storageBucket: 'comics-fd437.appspot.com',
  messagingSenderId: '566011925392',
  appId: '1:566011925392:web:c0d7252770d13e6e85d915',
  measurementId: 'G-Q5X8HFNX9C'
})

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
