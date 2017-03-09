import Vue from 'vue'
import 'babel-polyfill'
// import VueRouter from 'vue-router'
// import ga from 'vue-ga'
// import VueHead from 'vue-head'
import App from './App'
import store from './store'
// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'

// Raven
//     .config('https://---0@sentry.io/---')
//     .addPlugin(RavenVue, Vue)
//     .install()

// Vue.use(VueRouter)

// Vue.use(VueHead)

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/:lang/:slug',
//       name: 'text',
//       component: overview
//     }
//   ],
//    scrollBehavior (to, from, savedPosition) {
//      return { x: 0, y: 0 }
//    }
// })

// ga(router, 'UA-XXXXX')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
