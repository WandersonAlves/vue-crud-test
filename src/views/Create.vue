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
                       :SectionInfo="'Movimentação de pessoal relacionadas'"
    ></movimentacao-info>
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import BasicInfo from '../components/create-components/BasicInfo.vue';
import HiringInfo from '../components/create-components/HiringInfo.vue';
import HiringInfoTwo from '../components/create-components/HiringInfoTwo.vue';
import JustificativaInfo from '../components/create-components/JustificativaInfo.vue';
import MovimentacaoInfo from '../components/create-components/MovimentacaoInfo.vue';
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
    vuex: {
      actions: {
        addMovimentacao
      }
    }
}
</script>
