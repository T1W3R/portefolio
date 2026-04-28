<template>
  <section class="site-hero" role="banner" aria-label="Présentation">
    <div class="site-hero__inner">
      <div class="site-hero__left">
        <p class="site-hero__kicker">Ingénieur développement logiciel</p>
        <p class="site-hero__name">Portfolio</p>
        <h1 class="site-hero__display" aria-label="Portfolio">
          <span class="site-hero__display-line">Werquin</span>
          <span class="site-hero__display-line">Timothé</span>
        </h1>
        <p class="site-hero__tagline"><span id="job">Développeur Full Stack</span> · <span id="job">Data</span> · <span id="job">IA</span></p>
        <div class="site-hero__actions">
          <a class="btn btn--primary" href="mailto:werquin.timothe@gmail.com"
            >Me contacter</a
          >
          <router-link class="btn btn--ghost" to="/experiences"
            >Voir mes expériences</router-link
          >
        </div>
        <ul class="site-hero__meta" aria-label="Coordonnées">
          <li>
            <a href="mailto:werquin.timothe@gmail.com">werquin.timothe@gmail.com</a>
          </li>
          <li>
            <a href="tel:+33783454837">+33 7 83 45 48 37</a>
          </li>
        </ul>
        <a
          class="site-hero__linkedin"
          href="https://www.linkedin.com/in/werquin-timothe"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Profil LinkedIn</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5 6.5 0 006.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.4-1.93-1 0-1.6.67-1.6 1.93V19h-3v-9h2.9v1.3a3.1 3.1 0 012.7-1.4c1.5 0 2.4 1 2.4 2.8V19z"
            />
          </svg>
        </a>
      </div>
      <div class="site-hero__right">
        <figure class="site-hero__figure">
          <img
            v-if="heroPortraitSrc"
            class="site-hero__photo"
            :src="heroPortraitSrc"
            alt="Timothé Werquin"
            width="640"
            height="800"
            loading="eager"
            decoding="async"
          />
          <div
            v-else
            class="site-hero__photo site-hero__photo--placeholder"
            role="img"
            aria-label="Espace portrait (photo à ajouter)"
          >
            <span class="site-hero__photo-initials" aria-hidden="true">TW</span>
          </div>
        </figure>
      </div>
    </div>
    <a
      class="site-hero__scroll"
      href="#explore"
      aria-label="Faire défiler vers Explorer le portefolio"
    >
      <span class="site-hero__scroll-line" aria-hidden="true" />
    </a>
  </section>

  <section
    class="home-intro-band"
    aria-labelledby="home-intro-title"
  >
    <div class="home-intro-band__inner">
      <h2 id="home-intro-title" class="home-intro-band__head">Qui je suis</h2>
      <div class="home-intro-band__grid">
        <div class="home-intro-band__inset">
          <p class="home-intro-band__p">
            Chaque page détaille un pan de mon parcours : expériences pro, formation,
            compétences, et un fil direct pour m’écrire. J’aime les outils utiles, le
            travail bien cadré, et le lien avec les besoins réels des équipes.
          </p>
        </div>
        <figure class="home-intro-band__figure">
            <img src="/images/me.jpg" alt="Timothé Werquin" height="300" width="300">
        </figure>
      </div>
    </div>
  </section>

  <main class="main" id="main">
    <div class="main__inner__personalized main__inner--home">
      <section
        class="section section--explore"
        id="explore"
        aria-labelledby="explore-title"
      >
        <div class="section__head section__head--explore">
          <h2 class="section__title" id="explore-title">Explorer le portefolio</h2>
          <p class="section__lede">
            Rubriques modulaires — un peu comme un tableau de bord éditorial.
          </p>
        </div>
        <ul class="home-bento" role="list">
          <li class="home-bento__cell home-bento__cell--about">
            <router-link to="/a-propos" class="home-bento__card home-bento__card--tall">
              <span class="home-bento__eyebrow">Profil &amp; valeurs</span>
              <span class="home-bento__title">À propos</span>
              <span class="home-bento__hint"
                >Qui je suis, comment je travaille, ce qui m’anime.</span
              >
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--formations">
            <router-link to="/formations" class="home-bento__card">
              <span class="home-bento__eyebrow">Parcours académique</span>
              <span class="home-bento__title">Formations</span>
              <span class="home-bento__hint"
                >Epitech, EPSI, BTS, bac, spécialisations.</span
              >
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--exp">
            <router-link to="/experiences" class="home-bento__card home-bento__card--accent">
              <span class="home-bento__eyebrow">Missions &amp; contextes</span>
              <span class="home-bento__title">Expériences professionnel</span>
              <span class="home-bento__hint"
                >Elonet, Renault, stacks et responsabilités détaillées.</span
              >
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--skills">
            <router-link to="/competences" class="home-bento__card">
              <span class="home-bento__eyebrow">Stack &amp; humain</span>
              <span class="home-bento__title">Compétences</span>
              <span class="home-bento__hint"
                >Technos, soft skills, langues, centre d’intérêt.</span
              >
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--contact">
            <router-link to="/contact" class="home-bento__card home-bento__card--cta">
              <span class="home-bento__eyebrow">Échange</span>
              <span class="home-bento__title">Contact</span>
              <span class="home-bento__hint"
                >Mail, téléphone, prise de contact rapide.</span
              >
            </router-link>
          </li>
        </ul>
      </section>

      <section class="section section--homecta">
        <div class="home-cta">
          <p class="home-cta__p">
            En recherche d’<strong>outils concrets</strong> et d’<strong
              >impact utilisateur</strong
            >
            — de la data au front, de l’agilité à la qualité. Si vous avez un rôle, un
            projet ou une idée, rendez-vous sur la page Contact.
          </p>
          <router-link class="btn btn--primary" to="/contact">Contacter</router-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";

/** Remplis automatiquement si vous ajoutez public/images/hero-portrait.jpg */
const heroPortraitSrc = ref("images/me.jpg ");

onMounted(() => {
  const path = `${import.meta.env.BASE_URL}images/hero-portrait.jpg`;
  fetch(path, { method: "HEAD" })
    .then((res) => {
      if (res.ok) heroPortraitSrc.value = path;
    })
    .catch(() => {});
});
</script>
