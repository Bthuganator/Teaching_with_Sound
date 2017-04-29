import Vue from 'vue'
import Vuex from 'vuex'

const getters = {
  user: state => state.user,
  fb: state => state.fb,
  fbUI: state => state.fbUI,
  db: state => state.db,
  currentSound: state => state.currentSound,
  itemToEdit: state => state.itemToEdit
}

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: null,
    fb: null,
    fbUI: null,
    db: null,
    currentSound: null,
    itemToEdit: null
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
    },
    SET_CURRENT_SOUND (state, currentSound) {
      state.currentSound = currentSound
    },
    SET_ITEM_TO_EDIT (state, itemToEdit) {
      state.itemToEdit = itemToEdit
    }
  }
})

export default store
