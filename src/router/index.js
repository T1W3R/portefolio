import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          titleKey: "routes.home.title",
          descriptionKey: "routes.home.description",
          bodyClass: "site--home",
        },
      },
      {
        path: "a-propos",
        name: "about",
        component: () => import("@/views/AboutView.vue"),
        meta: {
          titleKey: "routes.about.title",
          descriptionKey: "routes.about.description",
        },
      },
      {
        path: "experiences",
        name: "experiences",
        component: () => import("@/views/ExperiencesView.vue"),
        meta: {
          titleKey: "routes.experiences.title",
          descriptionKey: "routes.experiences.description",
        },
      },
      {
        path: "formations",
        name: "formations",
        component: () => import("@/views/FormationsView.vue"),
        meta: {
          titleKey: "routes.formations.title",
          descriptionKey: "routes.formations.description",
        },
      },
      {
        path: "competences",
        name: "competences",
        component: () => import("@/views/CompetencesView.vue"),
        meta: {
          titleKey: "routes.competences.title",
          descriptionKey: "routes.competences.description",
        },
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("@/views/ContactView.vue"),
        meta: {
          titleKey: "routes.contact.title",
          descriptionKey: "routes.contact.description",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
