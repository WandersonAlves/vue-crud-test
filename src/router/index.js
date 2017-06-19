import Vue from 'vue';
import Router from 'vue-router';

const Create = r => require.ensure([], () => r(require('../views/Create.vue')));
const List = r => require.ensure([], () => r(require('../views/List.vue')));

Vue.use(Router);
// NOTE: Arquivo de rotas da aplicação. Bem mais simples se comparado com o Angular
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
