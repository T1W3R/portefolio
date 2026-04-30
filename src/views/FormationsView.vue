<template>
  <StandardPageHero
    title-id="form-hero-title"
    kicker="Cursus"
    :title-lines="['Formations']"
    tagline="Du bac au MSc — sciences, développement, puis data &amp; IA. Les détails du programme sont sur les sites des établissements ; les liens ci-dessous renvoient vers les bons angles."
    accent-class="site-hero--formations-accent"
  >
    <template #actions>
      <router-link class="btn btn--primary" to="/contact">Me contacter</router-link>
      <router-link class="btn btn--ghost" to="/competences">Mes compétences</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="form-stripe-title"
    title="Un fil continu"
    stripe-class="page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      Chaque carte associe un lieu (photo du secteur ou du cadre), les infos qui restent sur votre CV,
      et deux sorties&nbsp;: la <strong>fiche formation</strong> pour le contenu pédagogique, le
      <strong>site de l’école</strong> pour le campus et les admissions.
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--formations">
      <section class="section section--tint section--formations-list" aria-labelledby="form-list-title">
        <SectionHeadBlock
          title-id="form-list-title"
          eyebrow="Parcours"
          title="Diplômes &amp; lieux"
          lede="Cliquez les libellés pour ouvrir les sources officielles — pas besoin de tout recopier ici."
        />

        <ul class="formations-grid" aria-label="Liste des formations">
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
                    <span class="formation-card__link-text">Formation (source officielle)</span>
                    <span class="formation-card__ext" aria-hidden="true">↗</span>
                  </a>
                  <a
                    class="btn btn--ghost"
                    :href="f.schoolUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="formation-card__link-text">Établissement</span>
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
          eyebrow="Compléments"
          title="Autres certifications"
          lede="Certifications en cybersécurité, aéronautique et secourisme."
        />

        <ul class="formations-certs" aria-label="Liste des autres certifications">
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

      <section class="section section--homecta" aria-label="Navigation">
        <PageSubnav
          aria-label="Pages liées"
          prev-to="/experiences"
          prev-label="← Expériences"
          next-to="/competences"
          next-label="Compétences →"
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

const formations = [
  {
    id: "msc",
    years: "2024 — 2026",
    title: "MSC pro — Big Data & IA",
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
    title: "Titre pro concepteur développeur d’applications — niv. II (NSF 326t)",
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
    title: "BTS SIO — spécialité SLAM",
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
    title: "Baccalauréat — spécialités Mathématiques, SI",
    school: "Lycée Notre-Dame de Grâce",
    campus: "Maubeuge",
    photo: "/images/formations/maubeuge.jpg",
    logo: "/images/formations/maubeuge_logo.png",
    note: "",
    programmeUrl:
      "https://www.service-public.gouv.fr/particuliers/vosdroits/F10029",
    schoolUrl: "https://notredamedelasambre.org/lycee-notre-dame-de-grace/",
  },
];

const certifications = [
  {
    acronym: "SECNUM",
    label: "Attestation en Cybersécurité",
  },
  {
    acronym: "BIA",
    label: "Brevet d’Initiation Aéronautique",
  },
  {
    acronym: "PSE2",
    label: "Brevet d’Équipier Secouriste 2nd niveau",
  },
  {
    acronym: "PSE1",
    label: "Brevet d’Équipier Secouriste 1er niveau",
  },
  {
    acronym: "PSC1",
    label: "Prévention et Secours Civiques de niveau 1",
  },
];
</script>
