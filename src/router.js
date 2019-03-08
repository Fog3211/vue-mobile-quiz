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
    },
    {
      path: '/404',
      name: '404',
      component: () => import('_v/home/404.vue')
    },
    {
      path: '/',
      redirect: '/home/recommend'
    },
    {
      path: '/index',
      redirect: '/home/recommend'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('_v/home/Home.vue'),
      redirect: '/home/recommend',
      children: [{
          path: "recommend",
          name: "recommend",
          component: () => import('_v/home/recommend/Recommend.vue'),
        },
        {
          path: "hottest",
          name: "hottest",
          component: () => import('_v/home/recommend/Hottest.vue'),
        }, {
          path: "latest",
          name: "latest",
          component: () => import('_v/home/recommend/Latest.vue'),
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('_v/home/Search.vue')
    },
    {
      path: '/subject/:subject_id',
      name: 'subject',
      component: () => import('_v/home/Subject.vue')
    },
    {
      path: '/quiz/:quiz_list_id',
      name: 'quiz',
      component: () => import('_v/quiz/Quiz.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/quiz/Collection.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        requiresAuth: true
      },
      component: () => import('_v/mine/Mine.vue'),
    },
    {
      path: '/mine/avatar',
      name: 'avatar',
      meta: {
        requiresAuth: true
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
      Toast({
        message: "请先登录",
        position: "bottom"
      });
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