import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/activities",
    name: "activities",
    component: () => import(/* webpackChunkName: "activities" */ "../views/activities.vue"),
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import(/* webpackChunkName: "catalog" */ "../views/catalog.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import(/* webpackChunkName: "contacts" */ "../views/contacts.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import(/* webpackChunkName: "news" */ "../views/news.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
