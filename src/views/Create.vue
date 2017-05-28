<style scoped>
.content-area {
    margin: 70px 120px 0px 120px;
}
</style>

<template>
<div id="create">
    <navigation-bar :user="user" :notifications="notifications"></navigation-bar>
    <div class="content-area">
        <div class="columns">
            <div class="column">
                <h1 class="title is-4">Nova movimentação pessoal</h1>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <basic-info :tipoFormularioModel="dataModels.tipoFormularioModel" :tipoFormularioOptions="formOptions.tipoFormularioOptions"></basic-info>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import BasicInfo from '../components/create-components/BasicInfo.vue';
import { addMovimentacao } from '../store/actions';

const formOptions = {
    tipoFormularioOptions: [
        {
            text: 'Opção 1',
            value: 1
        },
        {
            text: 'Opção 2',
            value: 2
        }
    ]
};

let dataModels = {
    tipoFormularioModel: {
        tipoFormulario: null,
        dataMovimentacao: null
    }
};

export default {
    name: 'Create',
    props: [],
    components: {
        NavigationBar,
        BasicInfo
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
