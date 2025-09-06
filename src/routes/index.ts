import AppMain from "@/components/layout/app/AppMain.vue";
import AuthMain from "@/components/layout/auth/AuthMain.vue";
import Home from "@/pages/app/home/Home.vue";
import Login from "@/pages/auth/Login.vue";
import Register from "@/pages/auth/Register.vue";
import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    component: AuthMain,
    children: [
      { path: "login", component: Login },
      { path: "register", component: Register },
    ],
  },
  {
    path: "/",
    component: AppMain,
    children: [{ path: "", component: Home }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// @ts-ignore (o from não é usado, mas é necessário usar o next)
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  console.log("userStore.user", userStore.user);
  console.log(to.path);
  
  
  if (userStore.user === null && to.path.includes("auth") === false) {
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
