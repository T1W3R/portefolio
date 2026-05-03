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
          title: "Accueil",
          description:
            "Développeur full stack, Data, IA — portfolio de Timothé Werquin.",
          bodyClass: "site--home",
        },
      },
      {
        path: "a-propos",
        name: "about",
        component: () => import("@/views/AboutView.vue"),
        meta: {
          title: "À propos",
          description:
            "Présentation, valeurs et manière de travailler — Timothé Werquin.",
        },
      },
      {
        path: "experiences",
        name: "experiences",
        component: () => import("@/views/ExperiencesView.vue"),
        meta: {
          title: "Expériences pro",
          description:
            "Parcours professionnel Elonet, Renault — développeur full stack, Timothé Werquin.",
        },
      },
      {
        path: "formations",
        name: "formations",
        component: () => import("@/views/FormationsView.vue"),
        meta: {
          title: "Formations",
          description:
            "Epitech, EPSI, BTS SIO, baccalauréat — parcours de Timothé Werquin.",
        },
      },
      {
        path: "competences",
        name: "competences",
        component: () => import("@/views/CompetencesView.vue"),
        meta: {
          title: "Compétences",
          description:
            "Stack technique, soft skills, langues — compétences de Timothé Werquin.",
        },
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("@/views/ContactView.vue"),
        meta: {
          title: "Contact",
          description:
            "Contacter Timothé Werquin — e-mail, téléphone, LinkedIn, GitHub, Lille.",
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
