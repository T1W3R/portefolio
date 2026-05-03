import { createApp, watch } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./assets/style.css";

const app = createApp(App);
app.use(router);
app.use(i18n);

function updateRouteMeta(to) {
  const title = to.meta.titleKey
    ? i18n.global.t(to.meta.titleKey)
    : i18n.global.t("routes.defaultTitle");
  document.title = `${title} — ${i18n.global.t("meta.titleSuffix")}`;

  const desc = to.meta.descriptionKey ? i18n.global.t(to.meta.descriptionKey) : "";
  if (desc) {
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }
}

router.afterEach((to) => {
  updateRouteMeta(to);
});

watch(i18n.global.locale, () => {
  updateRouteMeta(router.currentRoute.value);
});

app.mount("#app");
