<style>

</style>

<script>
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../FormInfo.vue';

export default {
    name: 'BasicInfo',
    props: {
        tipoFormularioModel: {
            required: true,
            type: Object
        },
        tipoFormularioOptions: {
            required: true,
            type: Array
        },
        SectionInfo: {
            required: true,
            type: String
        },
        validInputs: {
          type: Object
        }
    },
    components: {
        Datepicker,
        FormInfo
    },
    data() {
        return {}
    },
    computed: {
        isDateValid(value) {
            return (value) => {
                if (this.validInputs[value]) {
                    return 'input'
                }
                else {
                    return 'input is-danger'
                }
            }
        }
    }
}

</script>

<template>
<div class="content-area">
    <div class="columns">
        <div class="column">
            <h1 class="title is-4">Nova movimentação pessoal</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="form-content">
                <div class="columns">
                    <div class="column">
                        <h1 class="title is-6 form-header margin-zero">{{SectionInfo}}</h1>
                        <span class="header-border"></span>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-three-quarters">
                        <h1 class="header-border"></h1>
                        <form id="basic-form" class="form padding-top-25">
                            <div class="field">
                                <label class="label required">Tipo do Formulário:</label>
                                <p class="control">
                                    <span class="select half-area" v-bind:class="{'is-danger': !validInputs.tipoFormulario}">
                                      <select v-model="tipoFormularioModel.tipoFormulario">
                                          <option v-for="option in tipoFormularioOptions" v-bind:value="option.value">
                                              {{ option.text }}
                                          </option>
                                      </select>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <label class="label required">Data de movimentação:</label>
                                <p class="control has-icons-right half-area">
                                    <datepicker v-model="tipoFormularioModel.dataMovimentacao"
                                                :format="'dd/MM/yyyy'"
                                                :required="true"
                                                :input-class="isDateValid('dataMovimentacao')">
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
        </div>
    </div>
</div>
</template>
