import Vue from "vue";
import VueRouter from "vue-router";
import signup from "../views/signup.vue";
import signin from "../views/signin.vue";
import user from "../views/user.vue";
import home from "../views/home.vue";
// importer les components
Vue.use(VueRouter);
// cree les differentes routes
const routes = [
  {
    path: "/signin",
    name: "signin",
    component: signin,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
