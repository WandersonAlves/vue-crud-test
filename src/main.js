import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'font-awesome/css/font-awesome.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
});