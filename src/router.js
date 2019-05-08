import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Help from './views/Help.vue';
import Coffee from './views/Coffee.vue';
import Sandwiches from './views/Sandwiches.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: Coffee,
    },
    {
      path: '/sandwiches',
      name: 'sandwiches',
      component: Sandwiches,
    },
  ],
});
