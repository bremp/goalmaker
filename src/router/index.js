import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import History from "../components/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/history",
    name: "History",
    component: History
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
