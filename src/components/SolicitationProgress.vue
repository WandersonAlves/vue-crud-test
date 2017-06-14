<style>
.step-complete {
  color: #9bd358;
  font-size: 2.5em;
}
.details p {
  color: #003551;
  font-size: 0.7em;
  line-height: 13px;
  white-space: nowrap;
}
.bold {
  font-weight: bold;
}
.pending-step {
  color: grey;
}
.connector {
  border-bottom: 6px solid #9bd358;
  height: 40px;
  width: 100px;
}
.no-padding {
  padding: 0px;
}
#progress {
  margin-top: 50px;
}
</style>
<script>


export default {
  name: 'SolicitationProgress',
  props: {
    step: {
      required: true,
      type: Number
    }
  },
  data() {
    return {}
  }
}
</script>
<template>
<div id="progress">
  <link rel="stylesheet" href="vue-form-wizard.min.css">
  <form-wizard :start-index="2" :title="''" :hide-buttons="true" :subtitle="''" color="#9bd358">
     <tab-content title="Encaminhada" icon="fa fa-check"></tab-content>
     <tab-content title="Aprovado GGP"icon="fa fa-check"></tab-content>
     <tab-content title="Aprovado Gerente"icon="fa fa-check"></tab-content>
     <tab-content title="Aprovado Diretor"icon="fa fa-check"></tab-content>
     <tab-content title="Aprovado Superintendente"icon="fa fa-check"></tab-content>
     <tab-content title="Aprovado Provedor"icon="fa fa-check"></tab-content>
 </form-wizard>
</div>
</template>
