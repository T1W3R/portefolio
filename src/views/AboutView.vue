<template>
  <section
    class="site-hero site-hero--compact site-hero--about-accent"
    aria-labelledby="about-hero-title"
    role="banner"
  >
    <div class="site-hero__inner">
      <div class="site-hero__left">
        <p class="site-hero__kicker">Profil &amp; valeurs</p>
        <p class="site-hero__name">Portfolio</p>
        <h1 id="about-hero-title" class="site-hero__display">
          <span class="site-hero__display-line">À</span>
          <span class="site-hero__display-line">propos</span>
        </h1>
        <p class="site-hero__tagline">
          Agilité, produit, sport &amp; performance — le fil qui guide mon travail.
        </p>
        <div class="site-hero__actions">
          <router-link class="btn btn--primary" to="/contact">Me contacter</router-link>
          <router-link class="btn btn--ghost" to="/experiences">Voir mes expériences</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="home-intro-band about-page__stripe" aria-labelledby="about-stripe-title">
    <div class="home-intro-band__inner">
      <h2 id="about-stripe-title" class="home-intro-band__head">Du terrain aux backlog</h2>
      <div class="about-page__stripe-body">
        <div class="home-intro-band__inset">
          <p class="home-intro-band__p">
            La même exigence que sur un WOD ou une revue de sprint : progression mesurable,
            régularité, communication claire. J’aime qu’on sache où on va — et pourquoi.
          </p>
        </div>
      </div>
    </div>
  </section>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--about">
      <section
        class="section section--tint section--about-feature"
        aria-labelledby="t-about"
      >
        <div class="section__head section__head--explore">
          <span class="section__eyebrow">Bio</span>
          <h2 class="section__title" id="t-about">Ma présentation</h2>
          <p class="section__lede">
            Développeur orienté impact et collaboration — du besoin utilisateur au déploiement.
          </p>
        </div>
        <div class="about-page__split">
          <p class="about__text">
            Ingénieur développement logiciel, passionné de
            <em>sport &amp; performance</em>. Full stack (Python, PHP, React), j’ai grandi en
            méthodologie agile chez
            <strong>Elonet</strong> : même exigence que le crossfit — rigueur, autonomie, esprit
            d’équipe. J’aime bâtir des <strong>outils utiles</strong>, de la prise de besoin au
            déploiement, et contribuer à rendre le sport
            <strong>accessible à tous</strong> lorsque le contexte s’y prête.
          </p>
          <ul class="about-values" aria-label="Valeurs clés">
            <li class="about-values__item">
              <span class="about-values__label">Pratique</span>
              <span class="about-values__text">Méthodes agiles — Scrum, itérations courtes</span>
            </li>
            <li class="about-values__item">
              <span class="about-values__label">Qualité</span>
              <span class="about-values__text">Produit, code, tests</span>
            </li>
            <li class="about-values__item">
              <span class="about-values__label">Horizon</span>
              <span class="about-values__text">Data, IA, industrialisation</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="section section--about-how" aria-labelledby="t-how">
        <div class="section__head section__head--explore">
          <span class="section__eyebrow">Méthode</span>
          <h2 class="section__title" id="t-how">Comment je travaille</h2>
          <p class="section__lede">Transparence, proactivité, feedback — en trois temps.</p>
        </div>
        <ol class="about-how-cards" aria-label="Principes de travail">
          <li class="about-how-cards__item">
            <span class="about-how-cards__step">01</span>
            <h3 class="about-how-cards__title">Clarifier le besoin</h3>
            <p class="about-how-cards__p">
              Ateliers, questions, priorisation : avant d’écrire du code, j’aligne la valeur
              attendue avec les parties prenantes.
            </p>
          </li>
          <li class="about-how-cards__item">
            <span class="about-how-cards__step">02</span>
            <h3 class="about-how-cards__title">Livrer en confiance</h3>
            <p class="about-how-cards__p">
              Déploiements progressifs, revues, documentation légère : l’équipe et les
              utilisateurs s’y retrouvent.
            </p>
          </li>
          <li class="about-how-cards__item">
            <span class="about-how-cards__step">03</span>
            <h3 class="about-how-cards__title">Mesurer l’effet</h3>
            <p class="about-how-cards__p">
              Indicateurs, retours terrain, ajustements : l’amélioration continue fait partie du
              métier.
            </p>
          </li>
        </ol>
      </section>
    </div>
  </main>

  <section class="home-intro-band about-page__stripe" aria-labelledby="about-stripe-title">
        <div class="home-intro-band__inner">
          <span class="section__eyebrow">Perso</span>
          <h2 id="about-stripe-title" class="home-intro-band__head">Centres d’intérêt</h2>
          <div class="about-page__stripe-body">
            <div class="home-intro-band__inset">
              <p class="home-intro-band__p">
                Une section visuelle dédiée : je peux y intégrer des photos personnelles pour
                raconter mes passions en complément du parcours pro.
              </p>
            </div>
          </div>
        </div>

        <div class="passions-carousel" aria-label="Carrousel centres d’intérêt">
          <div class="passions-carousel__viewport">
            <ul class="passions-carousel__track" :style="carouselTrackStyle">
              <li
                v-for="(interest, idx) in interests"
                :key="interest.title"
                class="passions-carousel__slide"
                :aria-hidden="currentSlide !== idx"
              >
                <article class="interests-card">
                  <figure class="interests-card__media">
                    <img
                      v-if="interest.img"
                      class="interests-card__img no-grayscale"
                      :src="interest.img"
                      :alt="interest.alt"
                      width="960"
                      height="640"
                      loading="lazy"
                      decoding="async"
                    />
                    <div v-else class="interests-card__placeholder">
                      <span>Photo à ajouter</span>
                    </div>
                  </figure>
                  <div class="interests-card__body">
                    <h3 class="interests-card__title">{{ interest.title }}</h3>
                    <p class="interests-card__text">{{ interest.text }}</p>
                  </div>
                </article>
              </li>
            </ul>
          </div>

          <div class="passions-carousel__controls">
            <button
              type="button"
              class="passions-carousel__btn"
              aria-label="Slide précédent"
              @click="prevSlide"
            >
              ←
            </button>
            <div class="passions-carousel__dots" role="tablist" aria-label="Aller à une slide">
              <button
                v-for="(interest, idx) in interests"
                :key="`dot-${interest.title}`"
                type="button"
                class="passions-carousel__dot"
                :class="{ 'passions-carousel__dot--active': idx === currentSlide }"
                role="tab"
                :aria-selected="idx === currentSlide"
                :aria-label="`Voir ${interest.title}`"
                @click="goToSlide(idx)"
              />
            </div>
            <button
              type="button"
              class="passions-carousel__btn"
              aria-label="Slide suivant"
              @click="nextSlide"
            >
              →
            </button>
          </div>
        </div>
  </section>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--about">
      <section class="section section--homecta" aria-label="Pages liées">
        <div class="home-cta home-cta--about-footer">
          <p class="home-cta__p">
            Pour la suite du récit — missions concrètes et diplômes — enchaînez avec les rubriques
            dédiées.
          </p>
          <div class="home-cta__links">
            <router-link class="btn btn--outline" to="/experiences">Expériences professionnelles</router-link>
            <router-link class="btn btn--outline" to="/formations">Formations</router-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";

const interests = [
  {
    title: "Sport",
    text: "Musculation, course à pied, randonnée, régularité et progression.",
    img: "/images/interests/rando.jpeg",
    alt: "Photo sport",
  },
  {
    title: "Tech & créa",
    text: "Développement web/mobile, veille produit et design d’interface.",
    img: "/images/me.jpg",
    alt: "Photo développement",
  },
  {
    title: "Culture & loisirs",
    text: "Formule 1, cinéma et jeux vidéo.",
    img: "/images/interests/f1.jpeg",
    alt: "Photo loisirs",
  },
  {
    title: "Engagement",
    text: "Benevole Secouriste Croix-Blanche",
    img: "/images/interests/secourisme.jpeg",
    alt: "Photo engagement et musique",
  },
  {
    title: "Musique",
    text: "Autodidacte chant, guitare, basse, ukulélé, piano.",
    img: "/images/interests/guitare.jpg",
    alt: "Photo engagement et musique",
  },
];

const currentSlide = ref(0);
const totalSlides = computed(() => interests.length || 1);
const carouselTrackStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}));

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
}

function goToSlide(idx) {
  currentSlide.value = idx;
}
</script>
