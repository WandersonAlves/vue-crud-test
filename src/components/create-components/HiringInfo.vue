<style>

</style>

<script>
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../FormInfo.vue';
import VueNumeric from 'vue-numeric'

export default {
    name: 'HiringInfo',
    props: {
        contratacaoFormularioModel: {
            required: true,
            type: Object
        },
        SectionInfo: {
            required: true,
            type: String
        },
        unidadeOptions: {
            required: true,
            type: Array
        },
        setorOptions: {
            required: true,
            type: Array
        },
        coordenacaoOptions: {
            required: true,
            type: Array
        },
        cargoOptions: {
            required: true,
            type: Array
        },
        gerenciaOptions: {
            required: true,
            type: Array
        }
    },
    components: {
        Datepicker,
        FormInfo,
        VueNumeric
    },
    data() {
        return {}
    }
}

</script>

<template>
<div class="content-area">
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
                        <form id="hiring-form" class="padding-top-25">
                            <div class="field">
                                <label class="label required">Data de Admissão:</label>
                                <p class="control has-icons-right half-area">
                                    <datepicker v-model="contratacaoFormularioModel.dataAdmissao"
                                                :format="'dd/MM/yyyy'"
                                                :required="true"
                                                :input-class="'input'">
                                    </datepicker>
                                    <span class="icon is-small is-right">
                                      <i class="fa fa-calendar"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <label class="label">Nome:</label>
                                <input class="input" v-model="contratacaoFormularioModel.nome" />
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <label class="label required">Unidade:</label>
                                        <p class="control">
                                            <span class="select full-area ">
                                              <select v-model="contratacaoFormularioModel.unidade" required>
                                                  <option v-for="option in unidadeOptions" v-bind:value="option.value">
                                                      {{ option.text }}
                                                  </option>
                                              </select>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="field">
                                        <label class="label required">Setor:</label>
                                        <p class="control">
                                            <span class="select full-area ">
                                              <select v-model="contratacaoFormularioModel.setor" required>
                                                  <option v-for="option in setorOptions" v-bind:value="option.value">
                                                      {{ option.text }}
                                                  </option>
                                              </select>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="field">
                                        <label class="label required">Coordenação:</label>
                                        <p class="control">
                                            <span class="select full-area ">
                                              <select v-model="contratacaoFormularioModel.coordenacao" required>
                                                  <option v-for="option in coordenacaoOptions" v-bind:value="option.value">
                                                      {{ option.text }}
                                                  </option>
                                              </select>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <label class="label required">Salário (R$):</label>
                                        <vue-numeric required class="input" currency="R$" v-model="contratacaoFormularioModel.salario"></vue-numeric>
                                    </div>
                                    <div class="field">
                                        <label class="label required">Cargo:</label>
                                        <p class="control">
                                            <span class="select full-area ">
                                              <select v-model="contratacaoFormularioModel.cargo" required>
                                                  <option v-for="option in cargoOptions" v-bind:value="option.value">
                                                      {{ option.text }}
                                                  </option>
                                              </select>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="field">
                                        <label class="label required">Gerência:</label>
                                        <p class="control">
                                            <span class="select full-area ">
                                              <select v-model="contratacaoFormularioModel.gerencia" required>
                                                  <option v-for="option in gerenciaOptions" v-bind:value="option.value">
                                                      {{ option.text }}
                                                  </option>
                                              </select>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="column">
                        <form-info :textA="'Informações do candidato'"
                                   :textB="'Observações adicionais sobre os campos'"
                                   :textC="'Informe os dados do candidato para contratação. Data da admissão, nome do candidato, cargo, salário, unidade, setor, coordernação e gerência'">
                        </form-info>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
