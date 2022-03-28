import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "../utils/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Admin/LoginIndex.vue"),
  },
  {
    path: "/",
    alias: "/index",
    name: "Home",
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        name: "homeIndex",
        path: "index",
        meta: { menu: "homeIndex" },
        component: () => import("@/views/Home/HomeIndex.vue"),
      },
    ],
  },
  {
    path: "/material",
    name: "Material",
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        name: "materialIndex",
        path: "index",
        meta: { menu: "materialIndex" },
        component: () => import("@/views/Material/MaterialIndex.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = getToken();
  if (!token && to.name !== "Login") {
    next({
      name: "Login",
    });
  } else {
    next();
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
