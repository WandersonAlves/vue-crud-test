<style>

</style>

<script>
import Datepicker from 'vuejs-datepicker';
import FormInfo from '../FormInfo.vue';

export default {
    name: 'JustificativaInfo',
    props: {
        justificativaModel: {
            required: true,
            type: Object
        },
        SectionInfo: {
            required: true,
            type: String
        },
        validInputs: {
          type: Object
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
                    <div class="column is-three-quarters">
                        <h1 class="header-border"></h1>
                        <form id="justificativa-form" class="padding-top-25">
                            <div class="field">
                                <label class="label required">Justificativa</label>
                                <textarea v-bind:class="{'is-danger': !validInputs.justificativa}" class="textarea" v-model="justificativaModel.justificativa"></textarea>
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
