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
    <navigation-bar :user="user" :notifications="notifications"></navigation-bar>
    <basic-info :tipoFormularioModel="dataModels.tipoFormularioModel"
                :tipoFormularioOptions="formOptions.tipoFormularioOptions"
                :SectionInfo="'Informações Basicas'">
    </basic-info>
    <hiring-info :contratacaoFormularioModel="dataModels.contratacaoFormularioModel"
                 :SectionInfo="'Contratação'"
                 :unidadeOptions="formOptions.unidadeOptions"
                 :setorOptions="formOptions.setorOptions"
                 :coordenacaoOptions="formOptions.coordenacaoOptions"
                 :cargoOptions="formOptions.cargoOptions"
                 :gerenciaOptions="formOptions.gerenciaOptions">
    </hiring-info>
    <hiring-info-two :contratacaoTwoModel="dataModels.contratacaoTwoModel"
                     :SectionInfo="'Contratação'"
                     :motivoSubstituicaoOptions="formOptions.motivoSubstituicaoOptions"
                     :regimeTrabalhoOptions="formOptions.regimeTrabalhoOptions"
                     :cargaHorariaOptions="formOptions.cargaHorariaOptions">
    </hiring-info-two>
    <justificativa-info :justificativaModel="dataModels.justificativaModel"
                        :SectionInfo="'Justificativa'">
    </justificativa-info>
    <movimentacao-info :movimentacaoModel="dataModels.movimentacaoModel"
                       :SectionInfo="'Movimentação de pessoal relacionadas'">
    </movimentacao-info>
    <div class="content-area">
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
import NavigationBar from '../components/NavigationBar.vue';
import BasicInfo from '../components/create-components/BasicInfo.vue';
import HiringInfo from '../components/create-components/HiringInfo.vue';
import HiringInfoTwo from '../components/create-components/HiringInfoTwo.vue';
import JustificativaInfo from '../components/create-components/JustificativaInfo.vue';
import MovimentacaoInfo from '../components/create-components/MovimentacaoInfo.vue';
import Store from '../store/store';
import { formOptions } from '../store/constants';
import { dataModels } from '../store/constants';
import Vue from 'vue';

const bus = new Vue();

export default {
    name: 'Create',
    props: [],
    components: {
        NavigationBar,
        BasicInfo,
        HiringInfo,
        HiringInfoTwo,
        JustificativaInfo,
        MovimentacaoInfo
    },
    data() {
        return {
            user: 'Wanderson Alves',
            notifications: 4,
            dataModels,
            formOptions
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
            let commitObject = {
                contratacaoFormularioModel: dataModels.contratacaoFormularioModel,
                tipoFormularioModel: dataModels.tipoFormularioModel,
                contratacaoTwoModel: dataModels.contratacaoTwoModel,
                justificativaModel: dataModels.justificativaModel,
                movimentacaoModel: dataModels.movimentacaoModel,
            }
            Store.commit("ADD_MOVIMENTACOES", commitObject);
        }
    }
}
</script>
