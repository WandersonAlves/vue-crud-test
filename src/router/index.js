import Vue from 'vue';
import Router from 'vue-router';
import Create from '../views/Create.vue';
import List from '../views/List.vue';

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
      path: '/list',
      component: List,
      name: 'list'
    },
    {
      path: '*', redirect: '/create'
    }
  ]
});
