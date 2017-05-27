<template>
  <div id="create">
    <navigation-bar :user="user" :notifications="notifications"></navigation-bar>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';

export default {
  name: 'Create',
  props: [],
  components: {
    NavigationBar: NavigationBar
  },
  data () {
    return {
      user: 'Wanderson Alves',
      notifications: '4'
    }
  }
}
</script>

<style>

</style>
