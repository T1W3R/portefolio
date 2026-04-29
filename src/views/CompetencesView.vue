<template>
  <StandardPageHero
    title-id="skills-hero-title"
    kicker="Savoir-faire"
    :title-lines="['Compétences']"
    tagline="Technique, relationnel et langues : une vision rapide des outils que j’utilise et de ma manière de travailler."
    accent-class="site-hero--skills-accent"
  >
    <template #actions>
      <router-link class="btn btn--primary" to="/contact">Me contacter</router-link>
      <router-link class="btn btn--ghost" to="/a-propos">A propos de moi</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="skills-stripe-title"
    title="Ce que j’apporte"
    stripe-class="skills-page__stripe"
    body-class="skills-page__stripe-body"
  >
    <p class="home-intro-band__p">
      Stack orientée produit, collaboration d’équipe et socle en data/IA : la section
      ci-dessous va du concret (outils) au contexte (langues, soft skills).
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--skills">
      <section class="section section--tint section--skills-board" aria-labelledby="skills-board-title">
        <SectionHeadBlock
          title-id="skills-board-title"
          eyebrow="Détails"
          title="Stack &amp; profil"
          lede="Une lecture rapide des outils techniques, des qualités de collaboration et des langues utilisées dans mes projets."
        />

        <div class="bento">
        <div class="bento__item bento__item--wide">
          <h2 class="bento__label">Stack &amp; outils</h2>
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
          <h2 class="bento__label">Soft skills</h2>
          <ul class="bento__ul">
            <li>Esprit d’équipe</li>
            <li>Perfectionniste</li>
            <li>Méthodique, autonome, minutieux</li>
            <li>Esprit d’initiative, volontaire, persévérant, curieux</li>
          </ul>
        </div>
        <div class="bento__item">
          <h2 class="bento__label">Langues</h2>
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
        aria-label="Pages liées"
        prev-to="/formations"
        prev-label="← Formations"
        next-to="/contact"
        next-label="Contact →"
      />
    </div>
  </main>
</template>

<script setup>
import IntroBandSection from "@/components/IntroBandSection.vue";
import PageSubnav from "@/components/PageSubnav.vue";
import SectionHeadBlock from "@/components/SectionHeadBlock.vue";
import StandardPageHero from "@/components/StandardPageHero.vue";

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

const langs = [
  { name: "Français", level: "parlé (natif)", flag: "/images/flags/fr.svg", flagW: 30, flagH: 20 },
  { name: "Anglais", level: "parlé", flag: "/images/flags/gb.svg", flagW: 30, flagH: 15 },
  { name: "Espagnol", level: "compris", flag: "/images/flags/es.svg", flagW: 30, flagH: 20 },
];
</script>
