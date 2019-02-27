import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('./views/Collection/Collection.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/Mine/Mine.vue')
    },
    {
      path: '/Search',
      name: 'search',
      component: () => import('_v/Home/Search.vue')
    }
  ]
})
