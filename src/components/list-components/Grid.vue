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
</style>
<script>
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
    return {}
  },
  methods: {
    expandItem() {
    }
  }
}
</script>
<template>
<div class="content-area">
<table class="table is-striped">
  <thead>
    <tr>
      <th v-for="header in tableHeader">
        {{header.title}}
      </th>
    </tr>
  </thead>
  <tfoot>
    <tr v-for="row in tableData">
        <td v-for="header in tableHeader">
            {{row[header.field]}}
        </td>
    </tr>
  </tfoot>
</table>
</div>
</template>
