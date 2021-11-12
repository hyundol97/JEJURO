import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  getters: {
    drawer (state) {
      return state.drawer
    }
  },
  mutations: {
    setDrawer (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
  },
  modules: {
  }
})
