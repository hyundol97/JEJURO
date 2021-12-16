import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fireUser: null,
    isClick: false,
  },
  getters: {},
  mutations: {
    setFireUser(state, fu) {
      state.fireUser = fu;
    },
    setIsClick(state, fu) {
      state.isClick = fu;
    },
  },
  actions: {},
  modules: {},
});
