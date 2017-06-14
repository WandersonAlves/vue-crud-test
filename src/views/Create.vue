<style>
.small {
    font-size: 0.8em;
}

.smaller {
    font-size: 0.7em;
}
.title {
    color: #003551;
    font-weight: bold;
}
</style>

<template>
<div id="create">
    <div class="content-area">
        <div class="columns">
            <div class="column">
                <h1 class="title is-4">Nova movimentação pessoal</h1>
            </div>
        </div>
        <basic-info title="Informações Basicas">
            <div slot="textA">Informação Básica</div>
            <div slot="textB">Como prencher essa seção</div>
            <div slot="textC">Selecione o tipo de movimentação pessoal</div>
            <div slot="form-fields">
                <div class="field">
                    <label class="label required">Tipo do Formulário:</label>
                    <p class="control">
                        <span class="select half-area" v-bind:class="{'is-danger': !validInputs.tipoFormulario}">
                          <select v-model="dataModels.tipoFormularioModel.tipoFormulario">
                              <option v-for="option in formOptions.tipoFormularioOptions" v-bind:value="option.value">
                                  {{ option.text }}
                              </option>
                          </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label required">Data de movimentação:</label>
                    <p class="control has-icons-right half-area">
                        <datepicker v-model="dataModels.tipoFormularioModel.dataMovimentacao"
                                    :format="'dd/MM/yyyy'"
                                    :required="true"
                                    :input-class="isDateValid('dataMovimentacao')">
                        </datepicker>
                        <span class="icon is-small is-right">
                          <i class="fa fa-calendar"></i>
                        </span>
                    </p>
                </div>
            </div>
        </basic-info>
        <basic-info title="Contratação">
            <div slot="textA">Informações do candidato</div>
            <div slot="textB">Observações adicionais sobre os campos</div>
            <div slot="textC">Informe os dados do candidato para contratação. Data da admissão, nome do candidato, cargo, salário, unidade, setor, coordernação e gerência</div>
            <div slot="form-fields">
                <div class="field">
                    <label class="label required">Data de Admissão:</label>
                    <p class="control has-icons-right half-area">
                        <datepicker v-model="dataModels.contratacaoFormularioModel.dataAdmissao"
                                :format="'dd/MM/yyyy'"
                                :required="true"
                                :input-class="isDateValid('dataAdmissao')">
                        </datepicker>
                        <span class="icon is-small is-right">
                            <i class="fa fa-calendar"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Nome:</label>
                    <input class="input" v-model="dataModels.contratacaoFormularioModel.nome" />
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label required">Unidade:</label>
                            <p class="control">
                                <span class="select full-area " v-bind:class="{'is-danger': !validInputs.unidade}">
                                  <select v-model="dataModels.contratacaoFormularioModel.unidade" required>
                                      <option v-for="option in formOptions.unidadeOptions" v-bind:value="option.value">
                                          {{ option.text }}
                                      </option>
                                  </select>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <label class="label required">Setor:</label>
                            <p class="control">
                                <span class="select full-area " v-bind:class="{'is-danger': !validInputs.setor}">
                                  <select v-model="dataModels.contratacaoFormularioModel.setor" required>
                                      <option v-for="option in formOptions.setorOptions" v-bind:value="option.value">
                                          {{ option.text }}
                                      </option>
                                  </select>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <label class="label required">Coordenação:</label>
                            <p class="control">
                                <span class="select full-area " v-bind:class="{'is-danger': !validInputs.coordenacao}">
                                  <select v-model="dataModels.contratacaoFormularioModel.coordenacao" required>
                                      <option v-for="option in formOptions.coordenacaoOptions" v-bind:value="option.value">
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
                            <vue-numeric v-bind:class="{'is-danger': !validInputs.salario}"
                                         required class="input" currency="R$" separator="."
                                         v-model="dataModels.contratacaoFormularioModel.salario">
                             </vue-numeric>
                        </div>
                        <div class="field">
                            <label class="label required">Cargo:</label>
                            <p class="control">
                                <span class="select full-area " v-bind:class="{'is-danger': !validInputs.cargo}">
                                  <select v-model="dataModels.contratacaoFormularioModel.cargo" required>
                                      <option v-for="option in formOptions.cargoOptions" v-bind:value="option.value">
                                          {{ option.text }}
                                      </option>
                                  </select>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <label class="label required">Gerência:</label>
                            <p class="control">
                                <span class="select full-area " v-bind:class="{'is-danger': !validInputs.gerencia}">
                                  <select v-model="dataModels.contratacaoFormularioModel.gerencia" required>
                                      <option v-for="option in formOptions.gerenciaOptions" v-bind:value="option.value">
                                          {{ option.text }}
                                      </option>
                                  </select>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </basic-info>
        <basic-info title="Contratação">
            <div slot="textA">Informações da contratação</div>
            <div slot="textB">Detalhes da contratação</div>
            <div slot="textC">Informe os dados relacionados a contratação, aumento de quadro, motivo da substituição, regime de trabalho, carga horária e requisitos/perfil.</div>
            <div slot="form-fields">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <p class="control">
                                <label class="label">Aumento de quadro</label>
                                <input type="checkbox" v-model="dataModels.contratacaoTwoModel.aumentoQuadro">
                            </p>
                        </div>
                        <div class="field">
                            <label class="label required">Motivo da substituição:</label>
                            <p class="control">
                                <span class="select half-area" v-bind:class="{'is-danger': !validInputs.motivoSubstituicao}">
                                    <select v-model="dataModels.contratacaoTwoModel.motivoSubstituicao">
                                        <option v-for="option in formOptions.motivoSubstituicaoOptions" v-bind:value="option.value">
                                          {{ option.text }}
                                        </option>
                                    </select>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label required">Regime de Trabalho:</label>
                            <p class="control">
                            <span class="select full-area" v-bind:class="{'is-danger': !validInputs.regimeTrabalho}">
                              <select v-model="dataModels.contratacaoTwoModel.regimeTrabalho">
                                  <option v-for="option in formOptions.regimeTrabalhoOptions" v-bind:value="option.value">
                                      {{ option.text }}
                                  </option>
                              </select>
                            </span>
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label required">Carga Horária:</label>
                            <p class="control">
                            <span class="select full-area" v-bind:class="{'is-danger': !validInputs.cargaHoraria}">
                              <select v-model="dataModels.contratacaoTwoModel.cargaHoraria">
                                  <option v-for="option in formOptions.cargaHorariaOptions" v-bind:value="option.value">
                                      {{ option.text }}
                                  </option>
                              </select>
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label required">Requisitos/Perfil</label>
                    <textarea v-bind:class="{'is-danger': !validInputs.requisitos}" class="textarea" v-model="dataModels.contratacaoTwoModel.requisitos"></textarea>
                </div>
            </div>
        </basic-info>
        <basic-info title="Justificativa">
            <div slot="form-fields">
                <div class="field">
                    <label class="label required">Justificativa</label>
                    <textarea v-bind:class="{'is-danger': !validInputs.justificativa}" class="textarea" v-model="dataModels.justificativaModel.justificativa"></textarea>
                </div>
            </div>
            <div slot="textC">Descreva de forma sucinta uma justificativa para a movimentação do colaborador</div>
        </basic-info>
        <basic-info title="Movimentação de pessoal relacionadas">
            <div slot="textC">Descreva de forma sucinta uma justificativa para a movimentação do colaborador</div>
            <div slot="form-fields">
                <div class="field half-area">
                <label class="label">Inserir número ou nome do funcionário da MP</label>
                    <div class="columns">
                        <div class="column">
                            <input class="input" v-model="dataModels.movimentacaoModel.pessoa"></input>
                        </div>
                        <div class="column">
                            <a class="button is-success ">
                                <span class="icon">
                                  <i class="fa fa-plus"></i>
                                </span>
                                <span>Adicionar</span>
                            </a>
                        </div>
                    </div>
                </div>
                <br />
                <div class="overflow">
                    <table class="table is-striped">
                        <thead>
                            <tr>
                                <th class="is-3 small" v-for="header in tableHeader">{{header.title}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="small" v-for="row in tableData">
                              <td v-for="header in tableHeader">{{row[header.field]}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </basic-info>
        <div class="columns">
            <div class="column">
                <a class="button is-info is-outlined is-pulled-left" v-on:click="clearFields()">CANCELAR E DESCARTAR</a>
                <a class="button is-info is-outlined is-pulled-right" v-on:click="addMovimentacao()">SALVAR E ENVIAR</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import BasicInfo from '../components/BasicInfo.vue';
import VueNumeric from 'vue-numeric';
import { Factory } from '../utils/factory'
import { formOptions, dataModels, validInputs, tableHeader, tableData } from '../store/constants';

export default {
    name: 'Create',
    props: [],
    components: {
        BasicInfo,
        VueNumeric,
        Datepicker
    },
    data() {
        return {
            dataModels,
            formOptions,
            validInputs,
            tableHeader,
            tableData
        }
    },
    methods: {
        clearFields() {
            dataModels.contratacaoFormularioModel = {};
            dataModels.tipoFormularioModel = {};
            dataModels.contratacaoTwoModel = {};
            dataModels.justificativaModel = {};
            dataModels.movimentacaoModel = {};
        },
        addMovimentacao() {
            let abort;
            let commitObject = {
                tipoFormularioModel: dataModels.tipoFormularioModel,
                contratacaoFormularioModel: dataModels.contratacaoFormularioModel,
                contratacaoTwoModel: dataModels.contratacaoTwoModel,
                justificativaModel: dataModels.justificativaModel,
                movimentacaoModel: dataModels.movimentacaoModel,
            };
            // NOTE: Associação por desconstrução do ES6
            [this.validInputs, abort] = Factory.checkIfValid(commitObject, this.validInputs);

            if (abort) {
                alert('Faltando preencher campos');
                return;
            }
            // NOTE: Adiciona a movimentação
            this.$store.commit("ADD_MOVIMENTACOES", commitObject);
            // NOTE: Atualiza o indice
            this.$store.commit("INCREMENT");
            // NOTE: Vai para a tela de listagem
            this.$router.push({name: 'list'});
        }
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
