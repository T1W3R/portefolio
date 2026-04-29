<template>
  <footer class="site-footer">
    <p class="site-footer__p">
      Timothé Werquin &middot; Lille, France &middot; Portefolio
      {{ year }}
    </p>
    <p class="site-footer__stack">Propulsé par Vue &amp; Vite</p>
    <p class="site-footer__sitemap">
      <router-link to="/a-propos">À propos</router-link> ·
      <router-link to="/experiences">Expériences</router-link> ·
      <router-link to="/formations">Formations</router-link> ·
      <router-link to="/competences">Compétences</router-link> ·
      <router-link to="/contact">Contact</router-link> ·
      <a
        href="https://github.com/T1W3R?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
        >GitHub</a
      >
    </p>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const year = computed(() => new Date().getFullYear());
</script>
