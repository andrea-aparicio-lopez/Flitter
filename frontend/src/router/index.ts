import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import haveAuthGuard from "./auth-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: "/users",
    name: "searchUser",
    component: () =>
      import("../views/SearchUserView.vue"),
  },
  {
    path: "/profile/:username",
    name: "userProfile",
    // beforeEnter: [haveAuthGuard],      Implementamos authGuard cuando tengamos el login
    component: () => import("../views/ProfileView.vue"),
    props: (route) => {
      return { username: route.params.username };
    },
  },
  {
    path: "/profile/me",
    name: "myProfile",
    beforeEnter: [haveAuthGuard],    //  Implementamos authGuard cuando tengamos el login
    component: () => import("../views/MyProfileView.vue"),
  },
  {
    path: "/password",
    name: "password",
    component: () =>
      import( "../views/PasswordRecoveryView.vue"),
  },
  {
    path: "/profile/me/settings",
    name: "profileSettings",
    beforeEnter: [haveAuthGuard],
    component: () =>
      import("../views/SettingsView.vue"),
  },
  
  // Si no se encuentra el path:
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
