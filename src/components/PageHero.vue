<template>
  <header class="page-hero">
    <div class="page-hero__inner">
      <span class="page-hero__eyebrow">{{ eyebrow }}</span>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p class="page-hero__lede">{{ lede }}</p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  lede: { type: String, required: true },
});
</script>
