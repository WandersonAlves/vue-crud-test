<style>

</style>
<script>
import Route from '../router';
import Store from '../store/store';
import SearchFields from '../components/list-components/SearchFields.vue';
import Grid from '../components/list-components/Grid.vue';
import { searchOptions } from '../store/constants';

export default {
  name: 'List',
  data() {
    return {
      searchQuery: {
        numero: null,
        tipo: null,
        status: null,
        dataInicio: null,
        dataFim: null,
        mpShow: false,
        mpAprovacao: false
      },
      searchOptions,
      tableHeader: [
        {
          title: 'Número',
          field: 'numero'
        },
        {
          title: 'Tipo de Movimentação',
          field: 'tipo'
        },
        {
          title: 'Status',
          field: 'status',
          tag: true
        },
        {
          title: 'Colaborador',
          field: 'colaborador'
        },
        {
          title: 'Data de Criação',
          field: 'dataCriacao'
        },
        {
          title: 'Solicitante',
          field: 'solicitante'
        }
      ],
      tableData: []
    }
  },
  components: {
    SearchFields,
    Grid
  },
  methods: {
    createNewMovimentacao() {
      Route.push({
        name: 'create'
      });
    }
  },
  mounted() {
    this.tableData = Store.getters.getMovimetacaoes;
  }
}
</script>
<template>
<div id="list">
  <div class="content-area">
    <div class="columns">
      <div class="column">
        <h1 class="title is-4 is-pulled-left">Movimentações de pessoal</h1>
        <div class="is-pulled-right">
          <a class="button is-success" @click="createNewMovimentacao()">
            <span class="icon">
              <i class="fa fa-plus-circle"></i>
            </span>
            <span>NOVA</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <search-fields :searchQuery="searchQuery" :statusOptions="searchOptions.statusOptions"
                 :tipoOptions="searchOptions.tipoOptions"></search-fields>
  <grid :tableHeader="tableHeader" :tableData="tableData"></grid>
</div>
</template>
