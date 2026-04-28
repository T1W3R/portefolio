<template>
  <PageHero
    eyebrow="Savoir-faire"
    title="Compétences & intérêts"
    lede="Technique, relationnel, langues, et ce qui vous anime en dehors du code."
  />
  <main class="main" id="main">
    <div class="main__inner main__inner--sub">
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
        <div class="bento__item bento__item--wide">
          <h2 class="bento__label">Centres d’intérêt</h2>
          <p class="bento__p">
            Sport (musculation, course à pied), développement web &amp; mobile, Formule
            1, cinéma, jeux vidéo. Bénévolat (secouriste Croix-Blanche). Musique :
            guitare, basse, ukulélé, piano.
          </p>
        </div>
      </div>

      <nav class="subnav" aria-label="Pages liées">
        <router-link to="/formations">← Formations</router-link>
        <router-link to="/contact">Contact →</router-link>
      </nav>
    </div>
  </main>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";

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
