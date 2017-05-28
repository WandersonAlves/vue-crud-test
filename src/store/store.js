import Vue from 'vue';
import Vuex from 'vuex';
import { addMovimentacao } from './actions';

Vue.use(Vuex);

const state = {
  movimentacoes: [],
  forms: {
    tipoFormularioModel: {
      tipoFormulario: null,
      dataMovimentacao: null
    },
    contratacaoFormularioModel: {
      dataAdmissao: null,
      nome: null,
      unidade: null,
      salario: null,
      setor: null,
      cargo: null,
      coordenacao: null,
      gerencia: null
    },
    contratacaoTwoModel: {
      aumentoQuadro: null,
      motivoSubstituicao: null,
      regimeTrabalho: null,
      cargaHoraria: null,
      requisitos: null
    },
    justificativaModel: {
      justificativa: null
    },
    movimentacaoModel: {
      pessoa: null
    }
  }
};

const mutations = {
  ADD_MOVIMENTACOES (state, movimentacao) {
    state.movimentacoes.push(movimentacao);
  }
};

const getters = {
  getTipoFormularioModel: state => {
    return state.forms.tipoFormularioModel;
  },
  getContratacaoFormularioModel: state => {
    return state.forms.contratacaoFormularioModel;
  },
  getContratacaoTwoModel: state => {
    return state.forms.contratacaoTwoModel;
  },
  getJustificativaModel: state => {
    return state.forms.justificativaModel;
  },
  getMovimentacaoModel: state => {
    return state.forms.movimentacaoModel;
  }
}

const actions = {
  addMovimentacao
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
