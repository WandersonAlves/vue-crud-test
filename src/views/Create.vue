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
    <basic-info :tipoFormularioModel="dataModels.tipoFormularioModel"
                :tipoFormularioOptions="formOptions.tipoFormularioOptions"
                :SectionInfo="'Informações Basicas'"
                :validInputs="validInputs">
    </basic-info>
    <hiring-info :contratacaoFormularioModel="dataModels.contratacaoFormularioModel"
                 :SectionInfo="'Contratação'"
                 :unidadeOptions="formOptions.unidadeOptions"
                 :setorOptions="formOptions.setorOptions"
                 :coordenacaoOptions="formOptions.coordenacaoOptions"
                 :cargoOptions="formOptions.cargoOptions"
                 :gerenciaOptions="formOptions.gerenciaOptions"
                 :validInputs="validInputs">
    </hiring-info>
    <hiring-info-two :contratacaoTwoModel="dataModels.contratacaoTwoModel"
                     :SectionInfo="'Contratação'"
                     :motivoSubstituicaoOptions="formOptions.motivoSubstituicaoOptions"
                     :regimeTrabalhoOptions="formOptions.regimeTrabalhoOptions"
                     :cargaHorariaOptions="formOptions.cargaHorariaOptions"
                     :validInputs="validInputs">
    </hiring-info-two>
    <justificativa-info :justificativaModel="dataModels.justificativaModel"
                        :SectionInfo="'Justificativa'"
                        :validInputs="validInputs">
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
import BasicInfo from '../components/create-components/BasicInfo.vue';
import HiringInfo from '../components/create-components/HiringInfo.vue';
import HiringInfoTwo from '../components/create-components/HiringInfoTwo.vue';
import JustificativaInfo from '../components/create-components/JustificativaInfo.vue';
import MovimentacaoInfo from '../components/create-components/MovimentacaoInfo.vue';
import { Factory } from '../utils/factory'
import { formOptions, dataModels } from '../store/constants';

export default {
    name: 'Create',
    props: [],
    components: {
        BasicInfo,
        HiringInfo,
        HiringInfoTwo,
        JustificativaInfo,
        MovimentacaoInfo
    },
    data() {
        return {
            dataModels,
            formOptions,
            validInputs: {
                tipoFormulario: true,
                dataMovimentacao: true,
                dataAdmissao: true,
                unidade: true,
                salario: true,
                setor: true,
                cargo: true,
                coordenacao: true,
                gerencia: true,
                motivoSubstituicao: true,
                regimeTrabalho: true,
                cargaHoraria: true,
                requisitos: true,
                justificativa: true
            }
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
            // FIXME: push isn't a method
            debugger
            this.$router.push({name: 'list'});
        }
    }
}
</script>
