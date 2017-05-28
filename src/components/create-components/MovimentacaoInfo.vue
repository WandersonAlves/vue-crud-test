<style>

</style>

<script>
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../FormInfo.vue';

export default {
    name: 'MovimentacaoInfo',
    props: {
        movimentacaoModel: {
            required: true,
            type: Object
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
                        <h1 class="title is-6 form-header margin-zero uppercase">{{SectionInfo}}</h1>
                        <span class="header-border"></span>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-three-quarters">
                        <h1 class="header-border"></h1>
                        <form id="basic-form" class="padding-top-25">
                            <div class="field half-area">
                                <label class="label">Inserir número ou nome do funcionário da MP</label>
                                <div class="columns">
                                    <div class="column">
                                        <input class="input" v-model="movimentacaoModel.pessoa"></input>
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
                        </form>
                    </div>
                    <div class="column">
                        <form-info :textC="'Descreva de forma sucinta uma justificativa para a movimentação do colaborador'">
                        </form-info>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
