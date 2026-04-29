<template>
  <div class="section__head section__head--explore">
    <span v-if="eyebrow" class="section__eyebrow">{{ eyebrow }}</span>
    <h2 class="section__title" :id="titleId">{{ title }}</h2>
    <p class="section__lede">{{ lede }}</p>
  </div>
</template>

<script setup>
defineProps({
  titleId: { type: String, required: true },
  title: { type: String, required: true },
  lede: { type: String, required: true },
  eyebrow: { type: String, default: "" },
});
</script>
