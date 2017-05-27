<style scoped>
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
                                          <select v-model="dataModels.tipoFormularioModel.tipoFormulario">
                                              <option v-for="option in formOptions.tipoFormularioOptions" v-bind:value="option.value">
                                                  {{ option.text }}
                                              </option>
                                          </select>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label">Data de movimentação:</label>
                                    <p class="control has-icons-right">
                                        <datepicker v-model="dataModels.tipoFormularioModel.dataMovimentacao"
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
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../components/FormInfo.vue';

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
        Datepicker,
        FormInfo
    },
    data() {
        return {
            user: 'Wanderson Alves',
            notifications: 4,
            dataModels: dataModels,
            formOptions: formOptions
        }
    }
}
</script>
