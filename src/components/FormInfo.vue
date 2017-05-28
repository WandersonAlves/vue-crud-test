<style scoped>
.green-before:before {
    width: 7px;
    height: 20px;
    background: #9bd358;
    content: "";
    display: inline-flex;
    margin-right: 10px;
}
</style>

<script>
export default {
    name: 'FormInfo',
    props: {
        textA: {
            type: String
        },
        textB: {
            type: String
        },
        textC: {
            required: true
        }
    },
    data() {
        return {
            info: ''
        }
    }
};
</script>

<template>
  <div>
      <h6 class="title smaller uppercase" v-if="textA">{{textA}}</h6>
      <h6 class="title green-before small" v-if="textB">{{textB}}</h6>
      <h6 class="title smaller">{{textC}}</h6>
  </div>
</template>
