// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import store from './vuex/store'
import { fb, fbUI, db } from './js/firebaseConfig'

Vue.use(VueFire)
Vue.config.productionTip = false

// fb.auth().onAuthStateChanged(
//   function (user) {
//     store.commit('SET_USER', user)
//   })

store.commit('SET_FB', fb)
store.commit('SET_DB', db)
store.commit('SET_FB_UI', fbUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App },
  beforeCreate () {
    fb.auth().onAuthStateChanged((user) => {
      // initially user = null, after auth it will be either <fb_user> or false
      this.$store.commit('SET_USER', user || false)
      // if (user && this.$route.path === '/login') {
      //   this.$router.replace('/')
      // } else if (!user && this.$route.path !== '/login') {
      //   this.$router.replace('/login')
      // }
    })
  }
  // firebase: { soundsRef, aboutRef }
})
