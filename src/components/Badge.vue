<style scoped>
.badge {
    position: relative;
    bottom: 10px;
    right: 33px;
    padding: 4px 8px;
    background: #9bd358;
    border-radius: 150px;
    color: black;
    font-size: 12px
}
</style>

<script>
  export default {
    name: 'Badge',
    props: {
      counter: {
        type: Number,
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
  <span class="badge">{{counter}}</span>
</template>
