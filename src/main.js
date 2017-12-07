// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import config from './config'

import $ from 'jquery'

import ElementUI from 'element-ui';
import locale from 'element-ui/src/locale/lang/en';
import 'element-ui/lib/theme-default/index.css';

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Include and set up feathers client 
// const Feathers = require('feathers/client')
// const hooks = require('feathers-hooks')
// const authentication = require('feathers-authentication/client')
// const socketio = require('feathers-socketio/client')
// const io = require('socket.io-client')
 
// const socket = io('http://localhost:3032/')
// const feathers = Feathers()
// .configure(socketio(socket))
// .configure(hooks())
// .configure(authentication({storage: window.localStorage}))
 
// // Include it as a CommonJS module 
// const vueFeathers = require('vue-feathers')
 
// // And plug it in 
// Vue.use(vueFeathers)

// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
// const authentication = require('feathers-authentication/client')
const socketio = require('feathers-socketio/client')
const io = require('socket.io-client')

const socket = io('http://localhost:3032')
const feathers = Feathers()
  .configure(socketio(socket))
  .configure(hooks())
  // .configure(authentication({storage: window.localStorage}))
  // Include it as a CommonJS module
const vueFeathers = require('vue-feathers')
  // And plug it in
Vue.use(vueFeathers, feathers)



import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)

import { store } from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale });

var VueCookie = require('vue-cookie')
Vue.use(VueCookie);

// Routing logic
Vue.use(VueRouter)

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
    // window.console.log('Transition', transition)
    // router.app.$store.state.token
  const token = router.app.$cookie.get('auth_token')
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === 'null')) {
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      store.dispatch('authenticate', token).then(response => {
        next()
      }).catch(error => {
        console.log(error)
        // window.console.log('Not authenticated')
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      })
    } else {
      next()
    }
      // if (store.state.user == null) {
      //   // store.dispatch('')
      // }
      // router.app.$store.commit('SET_TOKEN', token)
      // const authUser = JSON.parse(window.localStorage.getItem('authUser'))
      // router.app.$store.commit('SET_USER', authUser)
      // window.console.log('authenticated')
      // next()
  }
})

sync(store, router)


/* eslint-disable no-new */
new Vue({
  store,	
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
