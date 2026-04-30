<template>
  <StandardPageHero
    title-id="contact-hero-title"
    kicker="Échange"
    :title-lines="['Me contacter']"
    tagline="Disponible pour en discuter : opportunité, question, collaboration."
    accent-class="site-hero--contact-accent"
  >
    <template #actions>
      <a class="btn btn--primary" href="mailto:werquin.timothe@gmail.com">M’écrire</a>
      <router-link class="btn btn--ghost" to="/competences">Mes compétences</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="contact-stripe-title"
    title="Parlons concret"
    stripe-class="page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      Vous pouvez me joindre par mail, téléphone, LinkedIn ou GitHub. Je réponds
      rapidement, en général sous quelques jours ouvrés.
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--contact">
      <section class="section section--tint section--contact-board" aria-labelledby="contact-board-title">
        <SectionHeadBlock
          title-id="contact-board-title"
          eyebrow="Coordonnées"
          title="Contactez-moi"
          lede="Un message suffit. Je reviens vers vous dès que possible."
        />

        <div class="contact-cta contact-cta--page">
          <div class="contact-cta__text">
            <h3 class="contact-cta__title">Canaux directs</h3>
            <p class="contact-cta__p">
              Mail prioritaire, puis téléphone et réseaux pros selon votre préférence.
            </p>
          </div>
          <div class="contact-cta__actions contact-cta__actions--stack">
            <a class="btn btn--light" href="mailto:werquin.timothe@gmail.com"
              >werquin.timothe@gmail.com</a
            >
            <a class="btn btn--outline" href="tel:+33783454837">+33 7 83 45 48 37</a>
            <a
              class="btn btn--outline"
              href="https://www.linkedin.com/in/werquin-timothe"
              rel="noopener noreferrer"
              target="_blank"
              >LinkedIn</a
            >
            <a
              class="btn btn--outline"
              href="https://github.com/T1W3R?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
              >GitHub</a
            >
          </div>
        </div>

        <p class="page-lede">
          Vous préférez un <strong>formulaire intégré</strong> (envoi côté serveur) plutôt
          que le mail client ? Il peut être ajouté côté serveur (mail, validation, antispam)
          lorsque vous le souhaitez.
        </p>

        
      </section>
      <section class="section section--homecta" aria-label="Pages liées">
        <PageSubnav
          aria-label="Pages liées"
          prev-to="/competences"
          prev-label="← Compétences"
          next-to="/"
          next-label="Accueil →"
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
</script>
