import Vue from 'vue'
import Router from 'vue-router'
import temp from '@/components/temp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:language',
      name: 'home',
      component: temp
    }
  ]
})
