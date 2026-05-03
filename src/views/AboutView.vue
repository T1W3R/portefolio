<template>
  <StandardPageHero
    title-id="about-hero-title"
    :kicker="$t('about.hero.kicker')"
    :title-lines="[$t('about.hero.titleLine1'), $t('about.hero.titleLine2')]"
    :tagline="$t('about.hero.tagline')"
    accent-class="site-hero--about-accent"
    :solo="false"
  >
    <template #actions>
      <router-link class="btn btn--primary" to="/contact">{{ $t("common.contactMe") }}</router-link>
      <router-link class="btn btn--ghost" to="/experiences">{{ $t("about.actions.experiences") }}</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="about-stripe-title"
    :title="$t('about.stripe.title')"
    stripe-class="about-page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      {{ $t("about.stripe.text") }}
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--about">
      <section
        class="section section--tint section--about-feature"
        aria-labelledby="t-about"
      >
        <SectionHeadBlock
          title-id="t-about"
          :eyebrow="$t('about.bio.eyebrow')"
          :title="$t('about.bio.title')"
          :lede="$t('about.bio.lede')"
        />
        <div class="about-page__split">
          <p class="about__text">
            {{ $t("about.bio.text") }}
          </p>
          <ul class="about-values" :aria-label="$t('about.values.aria')">
            <li class="about-values__item">
              <span class="about-values__label">{{ $t("about.values.practiceLabel") }}</span>
              <span class="about-values__text">{{ $t("about.values.practiceText") }}</span>
            </li>
            <li class="about-values__item">
              <span class="about-values__label">{{ $t("about.values.qualityLabel") }}</span>
              <span class="about-values__text">{{ $t("about.values.qualityText") }}</span>
            </li>
            <li class="about-values__item">
              <span class="about-values__label">{{ $t("about.values.horizonLabel") }}</span>
              <span class="about-values__text">{{ $t("about.values.horizonText") }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="section section--about-how" aria-labelledby="t-how">
        <SectionHeadBlock
          title-id="t-how"
          :eyebrow="$t('about.method.eyebrow')"
          :title="$t('about.method.title')"
          :lede="$t('about.method.lede')"
        />
        <ol class="about-how-cards" :aria-label="$t('about.method.aria')">
          <li class="about-how-cards__item">
            <span class="about-how-cards__step">01</span>
            <h3 class="about-how-cards__title">{{ $t("about.method.step1Title") }}</h3>
            <p class="about-how-cards__p">
              {{ $t("about.method.step1Text") }}
            </p>
          </li>
          <li class="about-how-cards__item">
            <span class="about-how-cards__step">02</span>
            <h3 class="about-how-cards__title">{{ $t("about.method.step2Title") }}</h3>
            <p class="about-how-cards__p">
              {{ $t("about.method.step2Text") }}
            </p>
          </li>
          <li class="about-how-cards__item">
            <span class="about-how-cards__step">03</span>
            <h3 class="about-how-cards__title">{{ $t("about.method.step3Title") }}</h3>
            <p class="about-how-cards__p">
              {{ $t("about.method.step3Text") }}
            </p>
          </li>
        </ol>
      </section>
    </div>
  </main>

  <IntroBandSection
    title-id="about-passions-title"
    :title="$t('about.passions.title')"
    :eyebrow="$t('about.passions.eyebrow')"
    stripe-class="about-page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      {{ $t("about.passions.text") }}
    </p>
    <template #after>
      <div class="passions-carousel" :aria-label="$t('about.passions.carouselAria')">
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
                    <span>{{ $t("about.passions.placeholder") }}</span>
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
            :aria-label="$t('about.passions.prevAria')"
            @click="prevSlide"
          >
            ←
          </button>
          <div class="passions-carousel__dots" role="tablist" :aria-label="$t('about.passions.dotsAria')">
            <button
              v-for="(interest, idx) in interests"
              :key="`dot-${interest.title}`"
              type="button"
              class="passions-carousel__dot"
              :class="{ 'passions-carousel__dot--active': idx === currentSlide }"
              role="tab"
              :aria-selected="idx === currentSlide"
              :aria-label="$t('about.passions.seeSlide', { title: interest.title })"
              @click="goToSlide(idx)"
            />
          </div>
          <button
            type="button"
            class="passions-carousel__btn"
            :aria-label="$t('about.passions.nextAria')"
            @click="nextSlide"
          >
            →
          </button>
        </div>
      </div>
    </template>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--about">
      <section class="section section--homecta" :aria-label="$t('subnav.linkedPages')">
        <PageSubnav
          :aria-label="$t('subnav.linkedPages')"
          prev-to="/"
          :prev-label="$t('subnav.homePrev')"
          next-to="/experiences"
          :next-label="$t('subnav.experiencesNext')"
        />
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import IntroBandSection from "@/components/IntroBandSection.vue";
import PageSubnav from "@/components/PageSubnav.vue";
import SectionHeadBlock from "@/components/SectionHeadBlock.vue";
import StandardPageHero from "@/components/StandardPageHero.vue";

const { t } = useI18n();
const interests = computed(() => [
  {
    title: t("about.interests.sportTitle"),
    text: t("about.interests.sportText"),
    img: "/images/interests/rando.jpeg",
    alt: t("about.interests.sportAlt"),
  },
  {
    title: t("about.interests.techTitle"),
    text: t("about.interests.techText"),
    img: "/images/me.jpg",
    alt: t("about.interests.techAlt"),
  },
  {
    title: t("about.interests.cultureTitle"),
    text: t("about.interests.cultureText"),
    img: "/images/interests/f1.jpeg",
    alt: t("about.interests.cultureAlt"),
  },
  {
    title: t("about.interests.engagementTitle"),
    text: t("about.interests.engagementText"),
    img: "/images/interests/secourisme.jpeg",
    alt: t("about.interests.engagementAlt"),
  },
  {
    title: t("about.interests.musicTitle"),
    text: t("about.interests.musicText"),
    img: "/images/interests/guitare.jpg",
    alt: t("about.interests.musicAlt"),
  },
]);

const currentSlide = ref(0);
const totalSlides = computed(() => interests.value.length || 1);
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
