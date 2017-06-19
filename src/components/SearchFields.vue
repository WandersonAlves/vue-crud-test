<style scoped>
.checkbox {
  font-size: 0.7em;
  font-weight: bold;
  color: #003551;
}
#search-fields {
  border-bottom:1px solid grey;
  padding-bottom: 60px;
}
@media screen and (max-width: 768px) {
  a {width: 100%;}
}
</style>
<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'SearchFields',
  props: ['searchQuery', 'tipoOptions', 'statusOptions'],
  data() {
    return {}
  },
  components: {
    Datepicker
  }
}
</script>
<template>
<div class="content-area" id="search-fields">
  <div class="columns">
    <div class="column">
      <div class="field">
          <label class="label">Numero:</label>
          <input class="input" v-model="searchQuery.numero" />
      </div>
    </div>
    <div class="column">
      <div class="field">
          <label class="label">Tipo:</label>
          <p class="control">
              <span class="select full-area ">
                <select v-model="searchQuery.tipo">
                    <option v-for="option in tipoOptions" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
              </span>
          </p>
      </div>
    </div>
    <div class="column">
      <div class="field">
          <label class="label">Status:</label>
          <p class="control">
              <span class="select full-area ">
                <select v-model="searchQuery.status">
                    <option v-for="option in statusOptions" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
              </span>
          </p>
      </div>
    </div>
    <div class="column">
      <div class="field">
          <label class="label">De:</label>
          <p class="control has-icons-right">
              <datepicker v-model="searchQuery.dataInicio"
                          :format="'dd/MM/yyyy'"
                          :required="true"
                          :input-class="'input'">
              </datepicker>
              <span class="icon is-small is-right">
                <i class="fa fa-calendar"></i>
              </span>
          </p>
      </div>
    </div>
    <div class="column">
      <div class="field">
          <label class="label">Até:</label>
          <p class="control has-icons-right">
              <datepicker v-model="searchQuery.dataFim"
                          :format="'dd/MM/yyyy'"
                          :required="true"
                          :input-class="'input'">
              </datepicker>
              <span class="icon is-small is-right">
                <i class="fa fa-calendar"></i>
              </span>
          </p>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column is-2">
      <div class="field">
          <p class="control checkbox">
              <input type="checkbox" v-model="searchQuery.mpShow"><span> Exibir apenas MP's criadas por mim</span>
          </p>
      </div>
    </div>
    <div class="column">
      <div class="field">
          <p class="control checkbox">
              <input type="checkbox" disabled v-model="searchQuery.mpAprovacao"><span class=""> MP's aguardando minha aprovação <i class="fa fa-info-circle" aria-hidden="true"></i></span>
          </p>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column is-2">
      <div class="field">
          <p class="control">
              <a class="button is-info">Pesquisar</a>
          </p>
      </div>
    </div>
    <div class="column is-2">
      <div class="field">
          <p class="control">
              <a class="button is-info is-outlined">limpar</a>
          </p>
      </div>
    </div>
  </div>
</div>
</template>
