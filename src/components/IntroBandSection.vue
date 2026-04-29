<template>
  <section :class="['home-intro-band', stripeClass]" :aria-labelledby="titleId">
    <div class="home-intro-band__inner">
      <span v-if="eyebrow" class="section__eyebrow">{{ eyebrow }}</span>
      <h2 :id="titleId" class="home-intro-band__head">{{ title }}</h2>
      <div :class="bodyClass">
        <div class="home-intro-band__inset">
          <slot />
        </div>
      </div>
    </div>
    <slot name="after" />
  </section>
</template>

<script setup>
defineProps({
  titleId: { type: String, required: true },
  title: { type: String, required: true },
  stripeClass: { type: String, default: "" },
  bodyClass: { type: String, required: true },
  eyebrow: { type: String, default: "" },
});
</script>
