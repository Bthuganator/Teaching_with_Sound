import Vue from 'vue'
import Vuex from 'vuex'

const getters = {
  user: state => state.user,
  fb: state => state.fb,
  fbUI: state => state.fbUI,
  db: state => state.db
}

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: null,
    fb: null,
    fbUI: null,
    db: null
  },
  getters,
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_FB (state, fb) {
      state.fb = fb
    },
    SET_FB_UI (state, fbUI) {
      state.fbUI = fbUI
    },
    SET_DB (state, db) {
      state.db = db
    }
  }
})

export default store
