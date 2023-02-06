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
    path: "/profile/:username",
    name: "user",
    // beforeEnter: [haveAuthGuard],      Implementamos authGuard cuando tengamos el login
    component: () => import("../views/ProfileView.vue"),
    props: (route) => {
      return { username: route.params.username };
    },
  },
  {
    path: "/profile",
    name: "myprofile",
    // beforeEnter: [haveAuthGuard],      Implementamos authGuard cuando tengamos el login
    component: () => import("../views/MyProfileView.vue"),
  },
  {
    path: "/password",
    name: "password",
    component: () =>
      import(
        /* webpackChunkName: "signup" */ "../views/PasswordRecoveryView.vue"
      ),
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/SettingsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
