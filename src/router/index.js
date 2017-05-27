import Vue from 'vue';
import Router from 'vue-router';
import Create from '../views/Create.vue';

Vue.use(Router);

export default new Router({
  base: '',
  routes: [
    {
      path: '/create',
      component: Create,
      name: 'create'
    },
    {
      path: '*', redirect: '/create'
    }
  ]
});
