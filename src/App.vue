<style>
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
.half-area {
    width: 50%;
}
.full-area {
  width: 100%;
}
.uppercase {
  text-transform: uppercase;
}
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import styles from './assets/scss/main.sass';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
