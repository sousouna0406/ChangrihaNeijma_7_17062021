import Vue from "vue";
import VueRouter from "vue-router";
import signup from "../views/signup.vue";
import signin from "../views/signin.vue";
import user from "../views/user.vue";
import home from "../views/home.vue";

Vue.use(VueRouter);
// création des differents chemins
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
    path: "/",
    name: "home",
    component: home,
  },
];

const router = new VueRouter({
  routes,
});
// avant chaque connexion ou inscription
router.beforeEach((to, from, next) => {
  if (
    to.name !== "signin" &&
    to.name !== "signup" &&
    !localStorage.getItem("token")
  ) {
    next({ name: "signin" });
  } else if (to.name === "signin" || to.name === "signup") {
    localStorage.clear();
    next();
  } else next();
});

export default router;
