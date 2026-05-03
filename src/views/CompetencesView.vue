<template>
  <StandardPageHero
    title-id="skills-hero-title"
    :kicker="$t('competences.hero.kicker')"
    :title-lines="[$t('competences.hero.title')]"
    :tagline="$t('competences.hero.tagline')"
    accent-class="site-hero--skills-accent"
  >
    <template #actions>
      <router-link class="btn btn--primary" to="/contact">{{ $t("common.contactMe") }}</router-link>
      <router-link class="btn btn--ghost" to="/a-propos">{{ $t("common.aboutMe") }}</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="skills-stripe-title"
    :title="$t('competences.stripe.title')"
    stripe-class="page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      {{ $t("competences.stripe.text") }}
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--skills">
      <section class="section section--tint section--skills-board" aria-labelledby="skills-board-title">
        <SectionHeadBlock
          title-id="skills-board-title"
          :eyebrow="$t('competences.head.eyebrow')"
          :title="$t('competences.head.title')"
          :lede="$t('competences.head.lede')"
        />

        <div class="bento">
        <div class="bento__item bento__item--wide">
          <h2 class="bento__label">{{ $t("competences.stackTitle") }}</h2>
          <ul class="stack-widgets" role="list">
            <li v-for="s in stack" :key="s.name" class="stack-widget" role="listitem">
              <img
                class="stack-widget__logo no-grayscale"
                :src="s.img"
                width="48"
                height="48"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span class="stack-widget__name">{{ s.name }}</span>
            </li>
          </ul>
        </div>
        <div class="bento__item">
          <h2 class="bento__label">{{ $t("competences.softTitle") }}</h2>
          <ul class="bento__ul">
            <li>{{ $t("competences.soft.team") }}</li>
            <li>{{ $t("competences.soft.perfectionist") }}</li>
            <li>{{ $t("competences.soft.methodic") }}</li>
            <li>{{ $t("competences.soft.initiative") }}</li>
          </ul>
        </div>
        <div class="bento__item">
          <h2 class="bento__label">{{ $t("competences.langsTitle") }}</h2>
          <ul class="bento__langs">
            <li
              v-for="lang in langs"
              :key="lang.name"
            >
              <span class="bento__langs-label">
                <img
                  class="bento__langs-flag no-grayscale"
                  :src="lang.flag"
                  :width="lang.flagW"
                  :height="lang.flagH"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                {{ lang.name }}
              </span>
              <em>{{ lang.level }}</em>
            </li>
          </ul>
        </div>
      </div>
      </section>

      <PageSubnav
        :aria-label="$t('subnav.linkedPages')"
        prev-to="/formations"
        :prev-label="$t('subnav.formationsPrev')"
        next-to="/contact"
        :next-label="$t('subnav.contactNext')"
      />
    </div>
  </main>
</template>

<script setup>
import IntroBandSection from "@/components/IntroBandSection.vue";
import PageSubnav from "@/components/PageSubnav.vue";
import SectionHeadBlock from "@/components/SectionHeadBlock.vue";
import StandardPageHero from "@/components/StandardPageHero.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const stack = [
  { name: "Java", img: "/images/java.png" },
  { name: "Spring Boot", img: "/images/Spring_Boot.png" },
  { name: "JavaScript", img: "/images/js.png" },
  { name: "Symfony", img: "/images/symfony-icon.png" },
  { name: "PHP", img: "/images/php.png" },
  { name: "Python", img: "/images/python.png" },
  { name: "HTML / CSS", img: "/images/htmlcss.png" },
  { name: "SQL", img: "/images/database-icon.png" },
  { name: "React Native", img: "/images/react.png" },
];

const langs = computed(() => [
  { name: t("competences.langs.french"), level: t("competences.langs.frenchLevel"), flag: "/images/flags/fr.svg", flagW: 30, flagH: 20 },
  { name: t("competences.langs.english"), level: t("competences.langs.englishLevel"), flag: "/images/flags/gb.svg", flagW: 30, flagH: 15 },
  { name: t("competences.langs.spanish"), level: t("competences.langs.spanishLevel"), flag: "/images/flags/es.svg", flagW: 30, flagH: 20 },
]);
</script>
