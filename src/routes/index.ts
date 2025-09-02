import AppMain from "@/components/layout/app/AppMain.vue";
import Home from "@/pages/home/Home.vue";
import Login from "@/pages/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    component: AppMain,
    children: [{ path: "login", component: Login }],
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

export default router;
