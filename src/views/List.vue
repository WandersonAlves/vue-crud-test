<style>

</style>
<script>
import Route from '../router';
import Store from '../store/store';
import SearchFields from '../components/list-components/SearchFields.vue';
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
      searchOptions
    }
  },
  components: {
    SearchFields
  },
  methods: {
    createNewMovimentacao() {
      Route.push({
        name: 'create'
      });
    }
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
  <search-fields :searchQuery="searchQuery" :statusOptions="searchOptions.statusOptions" :tipoOptions="searchOptions.tipoOptions"></search-fields>
</div>
</template>
