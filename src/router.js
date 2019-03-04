import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store.js";
import {
  Toast
} from "mint-ui";

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/404'
    }, {
      path: '/404',
      name: '404',
      component: () => import('_v/home/404.vue')
    }, {
      path: '/',
      redirect: '/home'
    }, {
      path: '/index',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: () => import('_v/home/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('_v/home/Search.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/collection/Collection.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        // requiresAuth: true
      },
      component: () => import('_v/mine/Mine.vue'),
    },
    {
      path: '/mine/avatar',
      name: 'avatar',
      meta: {
        // requiresAuth: true
      },
      component: () => import('_v/mine/Avatar.vue'),
    },
    {
      path: '/mine/theme',
      name: 'theme',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/mine/other/Theme.vue')
    },
    {
      path: '/mine/profile',
      name: "profile",
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/mine/other/Profile.vue')
    },
    {
      path: '/mine/message',
      name: "message",
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/mine/other/Message.vue')
    },
    {
      path: '/mine/about',
      name: "about",
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/mine/other/About.vue')
    },
    {
      path: '/login',
      name: "login",
      component: () => import('_v/login/Login.vue')
    },
    {
      path: '/register',
      name: "register",
      component: () => import('_v/login/Register.vue')
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