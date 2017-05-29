import Vue from 'vue';
import Vuex from 'vuex';
import Moment from 'moment';
import { addMovimentacao } from './actions';
import { formOptions } from './constants';

Vue.use(Vuex);

Moment.locale('pt-br');

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
    let textArray = ['Finalizada', 'Reprovada', 'Pendente Aprovação'];
    let randomIndex = Math.floor(Math.random()*textArray.length);

    movimentacao.id = `MP ${state.index}/2017`;
    movimentacao.status = textArray[randomIndex];
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
      let date = Moment(value.contratacaoFormularioModel.dataAdmissao).format('D MMM');
      let stringDate = `${date} (${Moment(value.contratacaoFormularioModel.dataAdmissao).fromNow()})`;
      movimentacoes.push({
        numero: value.id,
        tipo: tipoFormulario,
        status: value.status,
        colaborador: value.contratacaoFormularioModel.nome,
        dataCriacao: stringDate,
        solicitante: solicitante,
        showProgress: false
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
