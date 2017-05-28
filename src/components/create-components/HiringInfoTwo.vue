<style>

</style>

<script>
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../FormInfo.vue';

export default {
    name: 'HiringInfoTwo',
    props: {
        contratacaoTwoModel: {
            required: true,
            type: Object
        },
        motivoSubstituicaoOptions: {
            required: true,
            type: Array
        },
        regimeTrabalhoOptions: {
            required: true,
            type: Array
        },
        cargaHorariaOptions: {
            required: true,
            type: Array
        },
        SectionInfo: {
            required: true,
            type: String
        }
    },
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
                    <div class="column">
                        <h1 class="header-border"></h1>
                        <form id="basic-form" class="padding-top-25">
                            <div class="field">
                                <p class="control">
                                    <label class="label">Aumento de quadro</label>
                                    <input type="checkbox" v-model="contratacaoTwoModel.aumentoQuadro">
                                </p>
                            </div>
                            <div class="field">
                                <label class="label">Motivo da substituição:</label>
                                <p class="control">
                                <span class="select">
                                  <select v-model="contratacaoTwoModel.motivoSubstituicao">
                                      <option v-for="option in motivoSubstituicaoOptions" v-bind:value="option.value">
                                          {{ option.text }}
                                      </option>
                                  </select>
                                </span>
                                </p>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Regime de Trabalho:</label>
                                        <p class="control">
                                        <span class="select">
                                          <select v-model="contratacaoTwoModel.regimeTrabalho">
                                              <option v-for="option in regimeTrabalhoOptions" v-bind:value="option.value">
                                                  {{ option.text }}
                                              </option>
                                          </select>
                                        </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Carga Horária:</label>
                                        <p class="control">
                                        <span class="select">
                                          <select v-model="contratacaoTwoModel.cargaHoraria">
                                              <option v-for="option in cargaHorariaOptions" v-bind:value="option.value">
                                                  {{ option.text }}
                                              </option>
                                          </select>
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Requisitos/Perfil</label>
                                <textarea class="textarea" v-model="contratacaoTwoModel.requisitos"></textarea>
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
