import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('_v/Home/Search.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('_v/Collection/Collection.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('_v/Mine/Mine.vue'),
    },
    {
      path: '/mine/theme',
      name: 'theme',
      component: () => import('_v/Mine/other/Theme.vue')
    }, 
    {
      path: '/mine/detail',
      component: () => import('_v/Mine/other/Detail.vue')
    }, 
    {
      path: '/mine/message',
      component: () => import('_v/Mine/other/Message.vue')
    }, 
    {
      path: '/mine/about',
      component: () => import('_v/Mine/other/About.vue')
    },
    {
      path: '/login',
      component: () => import('_v/Mine/login/Login.vue')
    },
    {
      path: '/register',
      component: () => import('_v/Mine/login/Register.vue')
    }
  ]
})