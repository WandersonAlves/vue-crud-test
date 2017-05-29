import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueFormWizard from 'vue-form-wizard';
import 'font-awesome/css/font-awesome.css';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

Vue.use(VueFormWizard)

// Inicio da aplicação
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
