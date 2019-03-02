import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store.js";
import {
  Toast
} from "mint-ui";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/404'
    }, {
      path: '/404',
      name: '404',
      component: () => import('_v/Home/404.vue')
    }, {
      path: '/home',
      name: 'home',
      component: () => import('_v/Home/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('_v/Home/Search.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/Collection/Collection.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/Mine/Mine.vue'),
    },
    {
      path: '/mine/theme',
      name: 'theme',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/Mine/other/Theme.vue')
    },
    {
      path: '/mine/detail',
      name: "detail",
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/Mine/other/Detail.vue')
    },
    {
      path: '/mine/message',
      name: "message",
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/Mine/other/Message.vue')
    },
    {
      path: '/mine/about',
      name: "about",
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/Mine/other/About.vue')
    },
    {
      path: '/login',
      name: "login",
      component: () => import('_v/Mine/login/Login.vue')
    },
    {
      path: '/register',
      name: "register",
      component: () => import('_v/Mine/login/Register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.is_login) {
      Toast("请先登录");
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;