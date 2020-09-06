import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMask: false,
  },
  mutations: {
    toggleMask(state, payload) {
      state.showMask = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
