<template>
  <StandardPageHero
    title-id="form-hero-title"
    :kicker="$t('formations.hero.kicker')"
    :title-lines="[$t('formations.hero.title')]"
    :tagline="$t('formations.hero.tagline')"
    accent-class="site-hero--formations-accent"
  >
    <template #actions>
      <router-link class="btn btn--primary" to="/contact">{{ $t("common.contactMe") }}</router-link>
      <router-link class="btn btn--ghost" to="/competences">{{ $t("common.skills") }}</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="form-stripe-title"
    :title="$t('formations.stripe.title')"
    stripe-class="page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      {{ $t("formations.stripe.text") }}
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--formations">
      <section class="section section--tint section--formations-list" aria-labelledby="form-list-title">
        <SectionHeadBlock
          title-id="form-list-title"
          :eyebrow="$t('formations.head.eyebrow')"
          :title="$t('formations.head.title')"
          :lede="$t('formations.head.lede')"
        />

        <ul class="formations-grid" :aria-label="$t('formations.listAria')">
          <li v-for="f in formations" :key="f.id" class="formations-grid__cell">
            <article
              class="formation-card"
              :aria-labelledby="`ft-${f.id}`"
            >
              <div class="formation-card__visual">
                <img
                  class="formation-card__photo"
                  :src="f.photo"
                  alt=""
                  width="960"
                  height="540"
                  loading="lazy"
                  decoding="async"
                />
                <div class="formation-card__scrim" aria-hidden="true" />
                <img
                  v-if="f.logo"
                  class="formation-card__logo no-grayscale"
                  :src="f.logo"
                  alt=""
                  width="120"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="formation-card__body">
                <p class="formation-card__years">{{ f.years }}</p>
                <h3 :id="`ft-${f.id}`" class="formation-card__title">{{ f.title }}</h3>
                <p class="formation-card__place">{{ f.school }} — {{ f.campus }}</p>
                <p v-if="f.note" class="formation-card__note">{{ f.note }}</p>
                <div class="formation-card__links">
                  <a
                    class="btn btn--primary"
                    :href="f.programmeUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="formation-card__link-text">{{ $t("formations.officialSource") }}</span>
                    <span class="formation-card__ext" aria-hidden="true">↗</span>
                  </a>
                  <a
                    class="btn btn--ghost"
                    :href="f.schoolUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="formation-card__link-text">{{ $t("formations.school") }}</span>
                    <span class="formation-card__ext" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <section class="section section--formations-certs" aria-labelledby="form-certs-title">
        <SectionHeadBlock
          title-id="form-certs-title"
          :eyebrow="$t('formations.certsHead.eyebrow')"
          :title="$t('formations.certsHead.title')"
          :lede="$t('formations.certsHead.lede')"
        />

        <ul class="formations-certs" :aria-label="$t('formations.certsAria')">
          <li
            v-for="certification in certifications"
            :key="certification.acronym"
            class="formations-certs__item"
          >
            <article class="formations-certs__card">
              <p class="formations-certs__acronym">{{ certification.acronym }}</p>
              <p class="formations-certs__label">{{ certification.label }}</p>
            </article>
          </li>
        </ul>
      </section>

      <section class="section section--homecta" :aria-label="$t('subnav.linkedPages')">
        <PageSubnav
          :aria-label="$t('subnav.linkedPages')"
          prev-to="/experiences"
          :prev-label="$t('subnav.expPrev')"
          next-to="/competences"
          :next-label="$t('subnav.skillsNext')"
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
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const formations = computed(() => [
  {
    id: "msc",
    years: "2024 — 2026",
    title: t("formations.items.mscTitle"),
    school: "Epitech",
    campus: "Lille",
    photo: "/images/formations/epitech-lille.jpg",
    logo: "/images/formations/epitech.svg",
    note: "",
    programmeUrl: "https://www.epitech.eu/fr/formations/msc-pro-big-data/",
    schoolUrl: "https://www.epitech.eu/ecole-informatique-lille/",
  },
  {
    id: "epsi",
    years: "2023 — 2024",
    title: t("formations.items.epsiTitle"),
    school: "EPSI",
    campus: "Lille",
    photo: "https://sarcdprodstrapi.blob.core.windows.net/strapi-media/assets/20220226_132039_2048x1536_974446e018.jpg",
    logo:
      "https://sarcdprodstrapi.blob.core.windows.net/strapi-media/assets/logo_epsi_8b6f0271b8.png",
    note: "",
    programmeUrl: "https://www.epsi.fr/programmes/bachelor-dev-ops",
    schoolUrl: "https://www.epsi.fr/campus/lille/",
  },
  {
    id: "bts",
    years: "2021 — 2023",
    title: t("formations.items.btsTitle"),
    school: "Lycée Guy de Dampierre",
    campus: "Valenciennes",
    photo: "/images/formations/dampierre.jpg",
    logo: "/images/formations/dampierre_logo.png",
    note: "",
    programmeUrl: "https://lyceedampierre-valarep.fr/bts/",
    schoolUrl: "https://lyceedampierre-valarep.fr/",
  },
  {
    id: "bac",
    years: "2021",
    title: t("formations.items.bacTitle"),
    school: "Lycée Notre-Dame de Grâce",
    campus: "Maubeuge",
    photo: "/images/formations/maubeuge.jpg",
    logo: "/images/formations/maubeuge_logo.png",
    note: "",
    programmeUrl:
      "https://www.service-public.gouv.fr/particuliers/vosdroits/F10029",
    schoolUrl: "https://notredamedelasambre.org/lycee-notre-dame-de-grace/",
  },
]);

const certifications = computed(() => [
  {
    acronym: "SECNUM",
    label: t("formations.certifications.secnum"),
  },
  {
    acronym: "BIA",
    label: t("formations.certifications.bia"),
  },
  {
    acronym: "PSE2",
    label: t("formations.certifications.pse2"),
  },
  {
    acronym: "PSE1",
    label: t("formations.certifications.pse1"),
  },
  {
    acronym: "PSC1",
    label: t("formations.certifications.psc1"),
  },
]);
</script>
