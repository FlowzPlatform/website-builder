// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

import ElementUI from 'element-ui';
import locale from 'element-ui/src/locale/lang/en';
import 'element-ui/lib/theme-default/index.css';

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)

import { store } from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale });


/* eslint-disable no-new */
new Vue({
  store,	
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
