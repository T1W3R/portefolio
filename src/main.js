import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";

const app = createApp(App);
app.use(router);

router.afterEach((to) => {
  const title = to.meta.title || "Accueil";
  document.title = `${title} — Timothé Werquin`;
  const desc = to.meta.description;
  if (desc) {
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }
});

app.mount("#app");
