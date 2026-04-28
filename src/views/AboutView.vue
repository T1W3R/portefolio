<template>
  <section
    class="site-hero site-hero--compact"
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
      <div class="site-hero__right">
        <figure class="site-hero__figure">
          <img
            class="site-hero__photo no-grayscale"
            src="/images/me.jpg"
            alt="Timothé Werquin"
            width="640"
            height="800"
            loading="eager"
            decoding="async"
          />
        </figure>
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
