<style scoped>
.green-before:before {
    width: 7px;
    height: 20px;
    background: #9bd358;
    content: "";
    display: inline-flex;
    margin-right: 10px;
}
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
      <h6 class="title smaller" v-if="textA">{{textA}}</h6>
      <h6 class="title green-before small" v-if="textB">{{textB}}</h6>
      <h6 class="title smaller">{{textC}}</h6>
  </div>
</template>
