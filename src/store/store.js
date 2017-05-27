// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  movimentacoes: []
};

const mutations = {
  ADD_MOVIMENTACOES (state, movimentacao) {
    states.movimentacoes.push(movimentacao);
  }
};

export default new Vuex.Store({
  state,
  mutations
});
