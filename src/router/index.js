import Vue from "vue";
import VueRouter from "vue-router";
import Goals from "../components/Goals.vue";
import History from "../components/History.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Goals",
    component: Goals
  },
  {
    path: "/goals",
    redirect: "/"
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "*",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
