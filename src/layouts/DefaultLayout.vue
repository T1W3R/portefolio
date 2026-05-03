<template>
  <div :class="['site', bodyClass].filter(Boolean)">
    <a class="skip-link" href="#main">{{ $t("layout.skipToContent") }}</a>
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import { useSiteChrome } from "@/composables/useSiteChrome.js";

const route = useRoute();
const bodyClass = computed(() => route.meta.bodyClass || "");

useSiteChrome();
</script>
