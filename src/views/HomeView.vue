<template>
  <section class="site-hero site-hero--home-accent" role="banner" :aria-label="$t('home.heroAria')">
    <div class="site-hero__inner">
      <div class="site-hero__left">
        <p class="site-hero__kicker">{{ $t("home.kicker") }}</p>
        <p class="site-hero__name">{{ $t("common.portfolio") }}</p>
        <h1 class="site-hero__display" :aria-label="$t('common.portfolio')">
          <span class="site-hero__display-line">{{ $t("common.lastName") }}</span>
          <span class="site-hero__display-line">{{ $t("common.firstName") }}</span>
        </h1>
        <p class="site-hero__tagline"><span id="job">{{ $t("home.taglineDev") }}</span> · <span id="job">Data</span> · <span id="job">IA</span></p>
        <div class="site-hero__actions">
          <router-link class="btn btn--primary" to="/contact"
            >{{ $t("common.contactMe") }}</router-link
          >
          <router-link class="btn btn--ghost" to="/a-propos"
            >{{ $t("common.aboutMe") }}</router-link
          >
        </div>
        <ul class="site-hero__meta" :aria-label="$t('home.metaAria')">
          <li>
            <a href="mailto:werquin.timothe@gmail.com">werquin.timothe@gmail.com</a>
          </li>
          <li>
            <a href="tel:+33783454837">+33 7 83 45 48 37</a>
          </li>
        </ul>
        <div class="site-hero__social">
          <a
            class="site-hero__outlink"
            href="https://www.linkedin.com/in/werquin-timothe"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{{ $t("common.linkedin") }}</span>
            <svg height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 382 382" xml:space="preserve" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z">
                </path> 
              </g>
            </svg>
          </a>
          <a
            class="site-hero__outlink"
            href="https://github.com/T1W3R?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{{ $t("common.github") }}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="site-hero__right">
        <figure class="site-hero__figure">
          <img
            v-if="heroPortraitSrc"
            class="site-hero__photo"
            :src="heroPortraitSrc"
            :alt="$t('common.name')"
            loading="eager"
            decoding="async"
          />
          <div
            v-else
            class="site-hero__photo site-hero__photo--placeholder"
            role="img"
            :aria-label="$t('home.photoPlaceholderAria')"
          >
            <img src="/images/logo.png" :alt="$t('common.name')" height="25" width="25">
          </div>
        </figure>
      </div>
    </div>
    <a
      class="site-hero__scroll"
      href="#explore"
      :aria-label="$t('home.scrollAria')"
    >
      <span class="site-hero__scroll-line" aria-hidden="true" />
    </a>
  </section>

  <section
    class="home-intro-band"
    aria-labelledby="home-intro-title"
  >
    <div class="home-intro-band__inner">
      <h2 id="home-intro-title" class="home-intro-band__head">{{ $t("home.whoTitle") }}</h2>
      <div class="home-intro-band__grid">
        <div class="home-intro-band__inset">
          <p class="home-intro-band__p">
            {{ $t("home.intro") }}
          </p>
          <br><br><br>
          <div class="home-intro-band__actions">
            <a class="btn btn--outline" href="/CV_Werquin_Timothé.pdf" target="_blank">
              {{ $t("common.downloadCv") }}
            </a>
          </div>
        </div>
        <figure class="home-intro-band__figure">
            <img src="/images/me.jpg" :alt="$t('common.name')" height="300" width="300">
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
        <SectionHeadBlock
          title-id="explore-title"
          :title="$t('home.exploreTitle')"
          :lede="$t('home.exploreLede')"
        />
        <ul class="home-bento" role="list">
          <li class="home-bento__cell home-bento__cell--about">
            <router-link to="/a-propos" class="home-bento__card home-bento__card--tall">
              <span class="home-bento__index" aria-hidden="true">01</span>
              <span class="home-bento__eyebrow">{{ $t("home.cards.aboutEyebrow") }}</span>
              <span class="home-bento__title">{{ $t("home.cards.aboutTitle") }}</span>
              <span class="home-bento__hint"
                >{{ $t("home.cards.aboutHint") }}</span
              >
              <span class="home-bento__arrow" aria-hidden="true">→</span>
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--formations">
            <router-link to="/formations" class="home-bento__card">
              <span class="home-bento__index" aria-hidden="true">02</span>
              <span class="home-bento__eyebrow">{{ $t("home.cards.formationsEyebrow") }}</span>
              <span class="home-bento__title">{{ $t("home.cards.formationsTitle") }}</span>
              <span class="home-bento__hint"
                >{{ $t("home.cards.formationsHint") }}</span
              >
              <span class="home-bento__arrow" aria-hidden="true">→</span>
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--exp">
            <router-link to="/experiences" class="home-bento__card home-bento__card">
              <span class="home-bento__index" aria-hidden="true">03</span>
              <span class="home-bento__eyebrow">{{ $t("home.cards.expEyebrow") }}</span>
              <span class="home-bento__title">{{ $t("home.cards.expTitle") }}</span>
              <span class="home-bento__hint"
                >{{ $t("home.cards.expHint") }}</span
              >
              <span class="home-bento__arrow" aria-hidden="true">→</span>
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--skills">
            <router-link to="/competences" class="home-bento__card">
              <span class="home-bento__index" aria-hidden="true">04</span>
              <span class="home-bento__eyebrow">{{ $t("home.cards.skillsEyebrow") }}</span>
              <span class="home-bento__title">{{ $t("home.cards.skillsTitle") }}</span>
              <span class="home-bento__hint"
                >{{ $t("home.cards.skillsHint") }}</span
              >
              <span class="home-bento__arrow" aria-hidden="true">→</span>
            </router-link>
          </li>
          <li class="home-bento__cell home-bento__cell--contact">
            <router-link to="/contact" class="home-bento__card home-bento__card">
              <span class="home-bento__index" aria-hidden="true">05</span>
              <span class="home-bento__eyebrow">{{ $t("home.cards.contactEyebrow") }}</span>
              <span class="home-bento__title">{{ $t("home.cards.contactTitle") }}</span>
              <span class="home-bento__hint"
                >{{ $t("home.cards.contactHint") }}</span
              >
              <span class="home-bento__arrow" aria-hidden="true">→</span>
            </router-link>
          </li>
        </ul>
      </section>

      <section class="section section--homecta">
        <div class="home-cta">
          <p class="home-cta__p">
            {{ $t("home.cta.bodyStart") }}<strong>{{ $t("home.cta.strongTools") }}</strong>{{ $t("home.cta.middle") }}<strong>{{ $t("home.cta.strongImpact") }}</strong>{{ $t("home.cta.bodyEnd") }}
          </p>
          <router-link class="btn btn--primary" to="/contact">{{ $t("home.cta.button") }}</router-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SectionHeadBlock from "@/components/SectionHeadBlock.vue";

/** Remplis automatiquement si vous ajoutez public/images/hero-portrait.jpg */
const heroPortraitSrc = ref("images/front_image.png ");

onMounted(() => {
  const path = `${import.meta.env.BASE_URL}images/front_image.png`;
  fetch(path, { method: "HEAD" })
    .then((res) => {
      if (res.ok) heroPortraitSrc.value = path;
    })
    .catch(() => {});
});
</script>
