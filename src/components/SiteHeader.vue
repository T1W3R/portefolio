<template>
  <header class="site-top">
    <nav class="nav" id="nav" aria-label="Navigation principale">
      <div class="nav__bar">
        <router-link class="nav__brand" to="/" aria-label="Retour à l'accueil">
          <img
            class="nav__brand-logo"
            src="/images/logo.png"
            alt="Logo TW"
            width="34"
            height="34"
          />
        </router-link>
        <button
          type="button"
          class="nav__toggle"
          id="navToggle"
          aria-expanded="false"
          aria-controls="navPanel"
          aria-label="Ouvrir le menu"
        >
          <span class="nav__toggle-line" aria-hidden="true" />
          <span class="nav__toggle-line" aria-hidden="true" />
          <span class="nav__toggle-line" aria-hidden="true" />
        </button>
        <div class="nav__panel" id="navPanel">
          <div ref="navLinksWrapRef" class="nav__links-wrap">
            <ul class="nav__links">
              <li>
                <router-link
                  to="/"
                  class="nav__link"
                  :class="{ 'nav__link--active': isActive('home') }"
                  data-nav
                  >Accueil</router-link
                >
              </li>
              <li>
                <router-link
                  to="/a-propos"
                  class="nav__link"
                  :class="{ 'nav__link--active': isActive('about') }"
                  data-nav
                  >À propos</router-link
                >
              </li>
              <li>
                <router-link
                  to="/experiences"
                  class="nav__link"
                  :class="{ 'nav__link--active': isActive('experiences') }"
                  data-nav
                  >Expériences</router-link
                >
              </li>
              <li>
                <router-link
                  to="/formations"
                  class="nav__link"
                  :class="{ 'nav__link--active': isActive('formations') }"
                  data-nav
                  >Formations</router-link
                >
              </li>
              <li>
                <router-link
                  to="/competences"
                  class="nav__link"
                  :class="{ 'nav__link--active': isActive('competences') }"
                  data-nav
                  >Compétences</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="nav__link nav__link--cta"
                  :class="{ 'nav__link--active': isActive('contact') }"
                  data-nav
                  >Contact</router-link
                >
              </li>
            </ul>
            <span
              class="nav__indicator"
              :class="{ 'nav__indicator--cta': isActive('contact') }"
              :style="indicatorStyle"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const navLinksWrapRef = ref(null);

function isActive(name) {
  return route.name === name;
}

const indicatorStyle = reactive({
  opacity: "0",
  left: "0px",
  top: "0px",
  width: "0px",
});

function updateIndicatorPosition() {
  const wrap = navLinksWrapRef.value;
  if (!wrap) return;

  const active = wrap.querySelector("a.nav__link--active");
  if (!active) {
    indicatorStyle.opacity = "0";
    return;
  }

  const wrapRect = wrap.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();

  indicatorStyle.opacity = "1";
  indicatorStyle.left = `${activeRect.left - wrapRect.left + wrap.scrollLeft}px`;
  indicatorStyle.top = `${activeRect.bottom - wrapRect.top + wrap.scrollTop - 2}px`;
  indicatorStyle.width = `${activeRect.width}px`;
}

function scheduleIndicatorUpdate() {
  nextTick(() => {
    updateIndicatorPosition();
    requestAnimationFrame(updateIndicatorPosition);
  });
}

function onResize() {
  updateIndicatorPosition();
}

let resizeObserver = null;

watch(() => route.fullPath, scheduleIndicatorUpdate);

onMounted(() => {
  scheduleIndicatorUpdate();
  window.addEventListener("resize", onResize, { passive: true });
  nextTick(() => {
    const wrap = navLinksWrapRef.value;
    updateIndicatorPosition();
    if (wrap && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(wrap);
    }
  });
  document.fonts?.ready?.then?.(() => updateIndicatorPosition());
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  resizeObserver?.disconnect();
});
</script>
