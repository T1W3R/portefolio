import { onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

const REVEAL_SELECTOR = [
  ".section",
  ".exp-switch",
  ".card",
  ".edu-item",
  ".bento__item",
  ".about__text",
  ".home-bento__card",
  ".page-hero",
  ".how-list__item",
  ".home-cta",
  ".contact-cta--page",
  ".page-lede",
  ".edu-board",
  ".formation-card",
  ".subnav",
].join(", ");

let io;
let stopNav;
let unwatchRoute = () => {};

function closeMenu() {
  const toggle = document.getElementById("navToggle");
  const panel = document.getElementById("navPanel");
  if (!toggle || !panel) return;
  toggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const panel = document.getElementById("navPanel");
  if (!nav || !toggle || !panel) {
    return () => {};
  }

  function onToggle() {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    document.body.classList.toggle("nav-open", !open);
  }
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add("nav--scrolled");
    else nav.classList.remove("nav--scrolled");
  }

  toggle.addEventListener("click", onToggle);
  document.querySelectorAll("[data-nav]").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return function teardownNav() {
    toggle.removeEventListener("click", onToggle);
    document.querySelectorAll("[data-nav]").forEach((a) => {
      a.removeEventListener("click", closeMenu);
    });
    window.removeEventListener("scroll", onScroll, { passive: true });
  };
}

function disconnectReveal() {
  if (io) {
    io.disconnect();
  }
  io = null;
}

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  if (!("IntersectionObserver" in window)) {
    return;
  }
  disconnectReveal();
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
        }
      });
    },
    { rootMargin: "-0px 0px -8% 0px", threshold: 0.08 }
  );

  document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    if (el.classList.contains("card") && el.closest("[data-exp-switch]")) {
      return;
    }
    el.classList.add("reveal");
    io.observe(el);
  });
}

export function useSiteChrome() {
  const route = useRoute();

  onMounted(() => {
    stopNav = initNav() || (() => {});
    nextTick(() => initReveal());
  });

  onUnmounted(() => {
    if (stopNav) stopNav();
    disconnectReveal();
    if (unwatchRoute) unwatchRoute();
  });

  unwatchRoute = watch(
    () => route.path,
    () => {
      closeMenu();
      nextTick(() => {
        disconnectReveal();
        initReveal();
      });
    }
  );
}
