import Vue from 'vue';
import Vuex from 'vuex';
import { addMovimentacao } from './actions';
import { formOptions } from './constants';

Vue.use(Vuex);

const state = {
  index: 0,
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
    movimentacao.id = `MP ${state.index}/2017`;
    movimentacao.status = 'Novo';
    state.movimentacoes.push(movimentacao);
  },
  INCREMENT (state) {
    state.index++;
  }
};

const getters = {
  getMovimetacaoes: state => {
    let movimentacoes = [];
    state.movimentacoes.map((value, key) => {
      let tipoFormulario;
      formOptions.tipoFormularioOptions.map((valueForm) => {
        if (valueForm.value === value.tipoFormularioModel.tipoFormulario) {
          tipoFormulario = valueForm.text;
        }
      });
      let solicitante;
      formOptions.coordenacaoOptions.map((valueForm) => {
        if (valueForm.value === value.contratacaoFormularioModel.coordenacao) {
          solicitante = valueForm.text;
        }
      });
      movimentacoes.push({
        numero: value.id,
        tipo: tipoFormulario,
        status: value.status,
        colaborador: value.contratacaoFormularioModel.nome,
        dataCriacao: value.contratacaoFormularioModel.dataAdmissao,
        solicitante: solicitante
      });
    });
    return movimentacoes;
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
