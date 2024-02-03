import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index.js'
import VueRouter from 'vue-router';
import "../mock/index";

require('../mock/page2');
require('../mock/page3');
require('../mock/page4');
require('../mock/page5');
require('../mock/page6');
require('../mock/page7');
require('../mock/page702');
require('../mock/page8');
require('../mock/page1');
require('../mock/apiMock');
Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  el: '#app',
  render: h => h(App),
  router
});

// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })