import Vue from 'vue';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/reset.less';

Vue.use(VueFullPage);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
