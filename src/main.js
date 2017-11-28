import Vue from 'vue'
import 'babel-polyfill'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
// --- GOOGLE ANALYTICS
// import ga from 'vue-ga'
// --- ERROR TRACKING
// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'
import App from './App'
import store from './store'
import temp from './components/temp'

Vue.use(VueRouter)
Vue.use(VueHead)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:language',
      name: 'home',
      component: temp
    }
  ]
})

// Raven
//     .config('https://---0@sentry.io/---')
//     .addPlugin(RavenVue, Vue)
//     .install()

// ga(router, 'UA-XXXXX')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
