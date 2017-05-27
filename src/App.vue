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
<style>
</style>
