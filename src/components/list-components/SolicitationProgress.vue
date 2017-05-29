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
  <div class="columns">
    <div class="column">
      <div class="step-complete has-text-centered">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div class="details">
        <p class="has-text-centered bold">Encaminhada</p>
        <p class="has-text-centered">Wanderson Alves</p>
        <p class="has-text-centered">10/10/1991 ás 21:30</p>
      </div>
    </div>
    <div class="column">
      <div class="step-complete has-text-centered">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div class="details">
        <p class="has-text-centered bold">Aprovado GGP</p>
        <p class="has-text-centered">Wanderson Alves</p>
        <p class="has-text-centered">10/10/1991 ás 21:30</p>
      </div>
    </div>
    <div class="column">
      <div class="step-complete pending-step has-text-centered">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div class="details">
        <p class="has-text-centered bold">Aprovado Gerente</p>
      </div>
    </div>
    <div class="column">
      <div class="step-complete pending-step has-text-centered">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div class="details">
        <p class="has-text-centered bold">Aprovado Diretor</p>
      </div>
    </div>
    <div class="column">
      <div class="step-complete pending-step has-text-centered">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div class="details">
        <p class="has-text-centered bold">Aprovado Superintendente</p>
      </div>
    </div>
    <div class="column">
      <div class="step-complete pending-step has-text-centered">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div class="details">
        <p class="has-text-centered bold">Aprovado Provedor</p>
      </div>
    </div>
  </div>
</div>
</template>
