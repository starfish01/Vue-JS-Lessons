import Vue from 'vue'
import Router from 'vue-router'
import Build from './views/Build.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Build',
      component: Build
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
