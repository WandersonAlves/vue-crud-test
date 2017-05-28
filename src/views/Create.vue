<style>
.content-area {
    margin: 70px 120px 0px 120px;
}
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
.title {
    color: #003551;
    font-weight: bold;
}
.half-area {
    width: 50%;
    min-width: 50%;
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
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import BasicInfo from '../components/create-components/BasicInfo.vue';
import HiringInfo from '../components/create-components/HiringInfo.vue';
import HiringInfoTwo from '../components/create-components/HiringInfoTwo.vue';
import JustificativaInfo from '../components/create-components/JustificativaInfo.vue';
import { addMovimentacao } from '../store/actions';
import { formOptions } from '../store/constants';
import { dataModels } from '../store/constants';

export default {
    name: 'Create',
    props: [],
    components: {
        NavigationBar,
        BasicInfo,
        HiringInfo,
        HiringInfoTwo,
        JustificativaInfo
    },
    data() {
        return {
            user: 'Wanderson Alves',
            notifications: 4,
            dataModels,
            formOptions
        }
    },
    vuex: {
      actions: {
        addMovimentacao
      }
    }
}
</script>
