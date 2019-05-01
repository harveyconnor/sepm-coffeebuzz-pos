import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'jquery';
import 'popper.js';
import 'bootstrap/scss/bootstrap.scss';
import 'startbootstrap-sb-admin/scss/sb-admin.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@/scss/app.scss';

import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
