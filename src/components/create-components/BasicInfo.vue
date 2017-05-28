<style scoped>
.form-content {
    padding: 40px;
    background-color: #eff3f6;
}

.form-header {
    color: gray;
}

.header-border {
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}

.margin-zero {
    margin: 0px;
}
.padding-top-25 {
    padding-top: 25px;
}
</style>

<script>
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../FormInfo.vue';

export default {
    name: 'BasicInfo',
    props: ['tipoFormularioModel', 'tipoFormularioOptions'],
    components: {
        Datepicker,
        FormInfo
    },
    data() {
        return {}
    }
}

</script>

<template>
<div class="form-content">
    <div class="columns">
        <div class="column">
            <h1 class="title is-6 form-header margin-zero">Informação básica</h1>
            <span class="header-border"></span>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <h1 class="header-border"></h1>
            <form id="basic-form" class="padding-top-25">
                <div class="field">
                    <label class="label">Tipo do Formulário:</label>
                    <p class="control">
                        <span class="select">
                          <select v-model="tipoFormularioModel.tipoFormulario">
                              <option v-for="option in tipoFormularioOptions" v-bind:value="option.value">
                                  {{ option.text }}
                              </option>
                          </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Data de movimentação:</label>
                    <p class="control has-icons-right">
                        <datepicker v-model="tipoFormularioModel.dataMovimentacao"
                                    :format="'dd/MM/yyyy'"
                                    :required="true"
                                    :input-class="'input'">
                        </datepicker>
                        <span class="icon is-small is-right">
                          <i class="fa fa-calendar"></i>
                        </span>
                    </p>
                </div>
            </form>
        </div>
        <div class="column">
            <form-info :textA="'Informação Básica'"
                       :textB="'Como prencher essa seção'"
                       :textC="'Selecione o tipo de movimentação pessoal'">
            </form-info>
        </div>
    </div>
</div>
</template>
