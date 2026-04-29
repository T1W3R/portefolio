<template>
  <PageHero
    eyebrow="Échange"
    title="Me contacter"
    lede="Disponible pour en discuter : opportunité, question, collaboration."
    variant="contact"
  />
  <main class="main" id="main">
    <div class="main__inner main__inner--sub">
      <div class="contact-cta contact-cta--page">
        <div class="contact-cta__text">
          <h2 class="contact-cta__title">Contactez-moi</h2>
          <p class="contact-cta__p">
            Un message suffit. Je reviens vers vous dès que possible, en général sous
            quelques jours ouvrés.
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
        que le client mail ? Il peut être ajouté côté serveur (mail, validation, antispam)
        lorsque vous le souhaitez.
      </p>

      <nav class="subnav" aria-label="Pages liées">
        <router-link to="/competences">← Compétences</router-link>
        <router-link to="/">Accueil →</router-link>
      </nav>
    </div>
  </main>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
</script>
