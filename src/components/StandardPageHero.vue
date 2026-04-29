<template>
  <section
    :class="heroClasses"
    :aria-labelledby="titleId"
    role="banner"
  >
    <div :class="innerClasses">
      <div class="site-hero__left">
        <p class="site-hero__kicker">{{ kicker }}</p>
        <p class="site-hero__name">{{ name }}</p>
        <h1 :id="titleId" class="site-hero__display">
          <span
            v-for="(line, idx) in titleLines"
            :key="`${line}-${idx}`"
            class="site-hero__display-line"
            :style="titleLineStyles[idx] || null"
          >
            {{ line }}
          </span>
        </h1>
        <p class="site-hero__tagline">{{ tagline }}</p>
        <div v-if="$slots.actions" class="site-hero__actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  titleId: { type: String, required: true },
  kicker: { type: String, required: true },
  name: { type: String, default: "Portfolio" },
  titleLines: { type: Array, required: true },
  titleLineStyles: { type: Array, default: () => [] },
  tagline: { type: String, required: true },
  accentClass: { type: String, required: true },
  compact: { type: Boolean, default: true },
  solo: { type: Boolean, default: true },
});

const heroClasses = computed(() => [
  "site-hero",
  props.compact ? "site-hero--compact" : "",
  props.accentClass,
]);

const innerClasses = computed(() => [
  "site-hero__inner",
  props.solo ? "site-hero__inner--solo" : "",
]);
</script>
