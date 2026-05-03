<template>
  <StandardPageHero
    title-id="contact-hero-title"
    :kicker="$t('contact.hero.kicker')"
    :title-lines="[$t('contact.hero.title')]"
    :tagline="$t('contact.hero.tagline')"
    accent-class="site-hero--contact-accent"
  >
    <template #actions>
      <a class="btn btn--primary" href="mailto:werquin.timothe@gmail.com">{{ $t("contact.writeMe") }}</a>
      <router-link class="btn btn--ghost" to="/competences">{{ $t("common.skills") }}</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="contact-stripe-title"
    :title="$t('contact.stripe.title')"
    stripe-class="page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      {{ $t("contact.stripe.text") }}
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--contact">
      <section class="section section--tint section--contact-board" aria-labelledby="contact-board-title">
        <SectionHeadBlock
          title-id="contact-board-title"
          :eyebrow="$t('contact.head.eyebrow')"
          :title="$t('contact.head.title')"
          :lede="$t('contact.head.lede')"
        />

        <div class="contact-cta contact-cta--page">
          <div class="contact-cta__text">
            <h3 class="contact-cta__title">{{ $t("contact.directTitle") }}</h3>
            <p class="contact-cta__p">
              {{ $t("contact.directText") }}
            </p>
          </div>
          <div class="contact-cta__actions contact-cta__actions--stack">
            <a class="btn btn--light" href="mailto:werquin.timothe@gmail.com"
              >werquin.timothe@gmail.com</a
            >
            <a class="btn btn--outline" href="tel:+33783454837">+33 7 83 45 48 37</a>
            <a
              class="btn btn--outline"
              href="https://www.linkedin.com/in/werquin-timothe"
              rel="noopener noreferrer"
              target="_blank"
              >{{ $t("common.linkedin") }}</a
            >
            <a
              class="btn btn--outline"
              href="https://github.com/T1W3R?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
              >{{ $t("common.github") }}</a
            >
          </div>
        </div>

        <p class="page-lede">
          {{ $t("contact.formInfo") }}
        </p>

        
      </section>
      <section class="section section--homecta" :aria-label="$t('subnav.linkedPages')">
        <PageSubnav
          :aria-label="$t('subnav.linkedPages')"
          prev-to="/competences"
          :prev-label="$t('subnav.skillsPrev')"
          next-to="/"
          :next-label="$t('subnav.homeNext')"
        />
      </section>
    </div>
  </main>
</template>

<script setup>
import IntroBandSection from "@/components/IntroBandSection.vue";
import PageSubnav from "@/components/PageSubnav.vue";
import SectionHeadBlock from "@/components/SectionHeadBlock.vue";
import StandardPageHero from "@/components/StandardPageHero.vue";
</script>
