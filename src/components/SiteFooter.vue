<template>
  <footer class="site-footer">
    <p class="site-footer__p">
      {{ $t("common.name") }} &middot; {{ $t("footer.city") }} &middot; {{ $t("common.portfolio") }}
      {{ year }}
    </p>
    <p class="site-footer__sitemap">
      <router-link to="/a-propos">{{ $t("nav.about") }}</router-link> ·
      <router-link to="/experiences">{{ $t("nav.experiences") }}</router-link> ·
      <router-link to="/formations">{{ $t("nav.formations") }}</router-link> ·
      <router-link to="/competences">{{ $t("nav.competences") }}</router-link> ·
      <router-link to="/contact">{{ $t("nav.contact") }}</router-link> ·
      <a
        href="https://github.com/T1W3R?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
        >{{ $t("common.github") }}</a
      >
    </p>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const year = computed(() => new Date().getFullYear());
</script>
