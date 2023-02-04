import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveAuthGuard from './auth-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // beforeEnter: [haveAuthGuard],      Implementamos authGuard cuando tengamos el login
    component: () => import('../views/ProfileView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
