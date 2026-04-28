<template>
  <section
    class="site-hero site-hero--compact"
    aria-labelledby="form-hero-title"
    role="banner"
  >
    <div class="site-hero__inner site-hero__inner--solo">
      <div class="site-hero__left">
        <p class="site-hero__kicker">Cursus</p>
        <p class="site-hero__name">Portfolio</p>
        <h1 id="form-hero-title" class="site-hero__display">
          <span class="site-hero__display-line">Formations</span>
        </h1>
        <p class="site-hero__tagline">
          Du bac au MSc — sciences, développement, puis data &amp; IA. Les détails du programme sont sur les sites des établissements ; les liens ci-dessous renvoient vers les bons angles.
        </p>
        <div class="site-hero__actions">
          <router-link class="btn btn--primary" to="/contact">Me contacter</router-link>
          <router-link class="btn btn--ghost" to="/experiences">Expériences pro</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="home-intro-band formations-page__stripe" aria-labelledby="form-stripe-title">
    <div class="home-intro-band__inner">
      <h2 id="form-stripe-title" class="home-intro-band__head">Un fil continu</h2>
      <div class="formations-page__stripe-body">
        <div class="home-intro-band__inset">
          <p class="home-intro-band__p">
            Chaque carte associe un lieu (photo du secteur ou du cadre), les infos qui restent sur votre CV,
            et deux sorties&nbsp;: la <strong>fiche formation</strong> pour le contenu pédagogique, le
            <strong>site de l’école</strong> pour le campus et les admissions.
          </p>
        </div>
      </div>
    </div>
  </section>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--formations">
      <section class="section section--tint section--formations-list" aria-labelledby="form-list-title">
        <div class="section__head section__head--explore">
          <span class="section__eyebrow">Parcours</span>
          <h2 class="section__title" id="form-list-title">Diplômes &amp; lieux</h2>
          <p class="section__lede">
            Cliquez les libellés pour ouvrir les sources officielles — pas besoin de tout recopier ici.
          </p>
        </div>

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
                    class="btn btn--outline"
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

      <nav class="subnav subnav--formations" aria-label="Pages liées">
        <router-link to="/experiences">← Expériences pro</router-link>
        <router-link to="/competences">Compétences →</router-link>
      </nav>
    </div>
  </main>
</template>

<script setup>
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
    logo: "https://www.anephot.org/wp-content/uploads/2023/11/4f7e20a6f5bf23975d6c096d0f8d6e86.jpeg",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwkb6ATONePhdzCqv1Ps72AcUJmBOv2iezg&s",
    note: "",
    programmeUrl:
      "https://www.service-public.gouv.fr/particuliers/vosdroits/F10029",
    schoolUrl: "https://notredamedelasambre.org/lycee-notre-dame-de-grace/",
  },
];
</script>
