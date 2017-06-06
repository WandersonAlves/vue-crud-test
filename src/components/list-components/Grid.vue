<style>
.table thead td, .table thead th{
  font-weight: bold;
  color: #003551;
}
thead {
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.10);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.10);
  box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.10);
}
td {
  color: #003551 !important;
}
td:first-child {
  font-weight: bold !important;
}
.tag.is-info {
  background-color: #779bcc;
}
.table>thead>tr>th {
    white-space: nowrap;
}
.table td{
    white-space: nowrap;
}
.overflow {
  overflow: auto;
}
</style>
<script>
import SolicitationProgress from './SolicitationProgress.vue';

export default {
  name: 'Grid',
  props: {
    tableHeader: {
      required: true,
      type: Array
    },
    tableData: {
      required: true,
      type: [Array]
    }
  },
  data() {
    return {
      showProgress: true
    }
  },
  methods: {
    expandItem() {
    }
  },
  components: {
    SolicitationProgress
  },
  computed: {
    gridLenght() {
      return this.tableData.length;
    }
  }
}
</script>
<template>
  <div class="content-area">
    <div class="overflow">
      <table class="table is-striped">
        <thead>
          <tr>
            <th class="is-3" v-for="header in tableHeader">
              {{header.title}}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableData">
              <td v-for="header in tableHeader">
                  <span v-bind:class="{'tag': header.tag, 'is-success': row.status === 'Finalizada',
                                      'is-warning': row.status === 'Reprovada', 'is-info': row.status === 'Pendente Aprovação'}">
                      {{row[header.field]}}
                  </span>
              </td>
              <td>
                <span class="icon">
                  <i class="fa" aria-hidden="true"
                     @click="row.showProgress = !row.showProgress; showProgress = !showProgress"
                     v-bind:class="{'fa-arrow-circle-up': row.showProgress, 'fa-arrow-circle-down': !row.showProgress}"></i>
                </span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="small padding-top-25">
      {{gridLenght}} registros
    </p>
    <transition name="fade">
      <solicitation-progress :step="1" v-show="showProgress"></solicitation-progress>
    </transition>
</div>
</template>
