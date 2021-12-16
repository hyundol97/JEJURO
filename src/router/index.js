import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MyPage",
    name: "MyPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyPage.vue"),
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/SignUpPage",
    name: "SignUpPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUpPage.vue"),
  },
  {
    path: "/MakeListPage",
    name: "MakeListPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MakeListPage.vue"),
  },
  {
    path: "/PlayListPage",
    name: "PlayListPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlayListPage.vue"),
  },
  {
    path: "/CategoryPage",
    name: "CategoryPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CategoryPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
