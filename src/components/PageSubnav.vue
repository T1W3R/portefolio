<template>
  <nav class="subnav" :aria-label="ariaLabel">
    <router-link :to="prevTo">{{ prevLabel }}</router-link>
    <router-link :to="nextTo">{{ nextLabel }}</router-link>
  </nav>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: "" },
  prevTo: { type: String, required: true },
  prevLabel: { type: String, required: true },
  nextTo: { type: String, required: true },
  nextLabel: { type: String, required: true },
});
</script>
