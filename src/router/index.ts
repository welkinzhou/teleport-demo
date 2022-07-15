import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "HomePage",
        component: () => import("@/views/home/Home.vue"),
      },
      {
        path: "/element",
        name: "ElementPage",
        component: () => import("@/views/element/Element.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
