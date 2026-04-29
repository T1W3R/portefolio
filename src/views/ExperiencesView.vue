<template>
  <section
    class="site-hero site-hero--compact site-hero--exp-accent"
    aria-labelledby="exp-hero-title"
    role="banner"
  >
    <div class="site-hero__inner site-hero__inner--solo">
      <div class="site-hero__left">
        <p class="site-hero__kicker">Parcours professionnel</p>
        <p class="site-hero__name">Portfolio</p>
        <h1 id="exp-hero-title" class="site-hero__display">
          <span class="site-hero__display-line">Expériences</span>
          <span class="site-hero__display-line" style="white-space: wrap;">professionnelles</span>
        </h1>
        <p class="site-hero__tagline">
          Alternance, stage industriel — Elonet &amp; Renault. Missions agiles, modules
          métiers, et production temps réel.
        </p>
        <div class="site-hero__actions">
          <router-link class="btn btn--primary" to="/contact">Me contacter</router-link>
          <router-link class="btn btn--ghost" to="/formations">Mes formations</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="home-intro-band exp-page__stripe" aria-labelledby="exp-stripe-heading">
    <div class="home-intro-band__inner">
      <h2 id="exp-stripe-heading" class="home-intro-band__head">Deux contextes</h2>
      <div class="exp-page__stripe-body">
        <div class="home-intro-band__inset">
          <p class="home-intro-band__p">
            Chez <strong>Elonet</strong> : cycles courts, clients B2B, produit autour de
            Dolibarr et d’interfaces sur mesure.<br> Chez <strong>Renault</strong> :
            contraintes d’usine, données de prod, Symfony et exigence de fiabilité.
          </p>
        </div>
      </div>
    </div>
  </section>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--exp">
      <section
        class="section section--tint section--exp-switch-wrap"
        aria-labelledby="exp-tabs-title"
      >
        <div class="section__head section__head--explore">
          <span class="section__eyebrow">Détails</span>
          <h2 class="section__title" id="exp-tabs-title">Choisir une mission</h2>
          <p class="section__lede">
            Basculer entre l’alternance longue (Elonet) et le stage en milieu industriel
            (Renault).
          </p>
        </div>

        <div class="exp-switch" data-exp-switch>
          <div class="exp-switch__tabs" role="tablist" aria-label="Choisir une expérience">
            <button
              v-for="(t, i) in tabs"
              :key="t.id"
              :id="`tab-${t.id}`"
              type="button"
              class="exp-switch__tab"
              role="tab"
              :aria-selected="active === t.id"
              :aria-controls="`panel-${t.id}`"
              :tabindex="active === t.id ? 0 : -1"
              :data-exp-panel="t.id"
              @click="setActive(t.id)"
              @keydown="onKey($event, i)"
            >
              <img
                class="exp-switch__brand no-grayscale"
                :src="t.logo"
                alt=""
                width="24"
                height="24"
                loading="lazy"
                style="aspect-ratio: 1 / 1;"
              />
              {{ t.label }}
            </button>
          </div>
          <div class="exp-switch__panels">
            <div
              id="panel-elonet"
              class="exp-switch__panel"
              role="tabpanel"
              aria-labelledby="tab-elonet"
              :hidden="active !== 'elonet'"
            >
              <article class="exp-elonet reveal" id="elonet" aria-labelledby="elonet-title">
                <header class="exp-elonet__hero">
                  <img
                    class="exp-elonet__logo no-grayscale"
                    src="/images/elonet.png"
                    alt="Logo Elonet"
                    width="120"
                    height="120"
                    loading="lazy"
                    decoding="async"
                  />
                  <div class="exp-elonet__hero-text">
                    <p class="exp-elonet__eyebrow">Alternance · Agile · Produits métiers</p>
                    <h3 id="elonet-title" class="exp-elonet__title">
                      Développeur full stack — alternant
                    </h3>
                    <p class="exp-elonet__dates">
                      jan. 2023 — fév. 2026 · <span class="exp-elonet__company">Elonet</span>
                    </p>
                  </div>
                </header>

                <div class="exp-elonet__body">
                  <div class="exp-elonet__intro">
                    <p class="exp-elonet__lead">
                      <strong class="exp-elonet__strong">Projets internes.</strong>
                      Outils métiers en équipe agile ; interfaces Vue.js &amp; React ; backends
                      Python &amp; PHP ; modules pour CRM Dolibarr — même exigence produit du
                      backlog au déploiement.
                    </p>
                    <p class="exp-elonet__lead">
                      <strong class="exp-elonet__strong">Projets clients.</strong>
                      Solutions sur mesure du cadrage au déploiement ; binôme ou autonomie,
                      avec une vision claire des délais et de la qualité livrée.
                    </p>
                  </div>

                  <section class="exp-elonet__projects" aria-labelledby="elonet-projects-h">
                    <h4 id="elonet-projects-h" class="exp-elonet__projects-heading">
                      Réalisations visibles en ligne
                    </h4>
                    <div class="exp-elonet__tiles">
                      <a
                        class="exp-elonet__tile"
                        href="https://my.doli.bar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div class="exp-elonet__tile-top">
                          <span class="exp-elonet__tile-icon" aria-hidden="true">
                            <img
                              class="no-grayscale"
                              src="https://www.google.com/s2/favicons?domain=my.doli.bar&sz=128"
                              alt=""
                              width="40"
                              height="40"
                              loading="lazy"
                            />
                          </span>
                          <span class="exp-elonet__tile-head">
                            <span class="exp-elonet__tile-name">my.doli.bar</span>
                            <span class="exp-elonet__tile-url">https://my.doli.bar</span>
                          </span>
                        </div>
                        <p class="exp-elonet__tile-desc">
                          Modules PHP pour Dolibarr pour les clients externes de la plateforme —
                          besoins métier, intégrations et livraisons maintenables.
                        </p>
                        <span class="exp-elonet__tile-cta">
                          Voir le site
                          <span aria-hidden="true">↗</span>
                        </span>
                      </a>

                      <a
                        class="exp-elonet__tile"
                        href="https://www.aftcom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div class="exp-elonet__tile-top">
                          <span class="exp-elonet__tile-icon" aria-hidden="true">
                            <img
                              class="no-grayscale"
                              src="https://www.google.com/s2/favicons?domain=www.aftcom.com&sz=128"
                              alt=""
                              width="40"
                              height="40"
                              loading="lazy"
                            />
                          </span>
                          <span class="exp-elonet__tile-head">
                            <span class="exp-elonet__tile-name">AFTCom</span>
                            <span class="exp-elonet__tile-url">https://www.aftcom.com</span>
                          </span>
                        </div>
                        <p class="exp-elonet__tile-desc">
                          Mission en autonomie : échanges directs avec le client, cadrage et
                          livraison — premier contexte où j’ai piloté la relation client de bout
                          en bout.
                        </p>
                        <span class="exp-elonet__tile-cta">
                          Voir le site
                          <span aria-hidden="true">↗</span>
                        </span>
                      </a>
                    </div>
                  </section>

                  <p class="exp-elonet__footnote" role="note">
                    <strong>Note.</strong>
                    Deux autres livraisons ne sont plus illustrables en ligne : liquidation
                    judiciaire du client et résiliation des hébergements — anciennes URLs
                    indisponibles.
                  </p>

                  <footer class="exp-elonet__footer">
                    <p class="exp-elonet__stack-head">Stack principale</p>
                    <p class="exp-elonet__stack-line">
                      Python (Django, Flask), PHP (Laravel, Symfony), React, Vue.js, SQL
                    </p>
                    <ul class="pills pills--elonet" aria-label="Technos">
                      <li>Python</li>
                      <li>PHP</li>
                      <li>React</li>
                      <li>Vue.js</li>
                      <li>SQL</li>
                    </ul>
                  </footer>
                </div>
              </article>
            </div>

            <div
              id="panel-renault"
              class="exp-switch__panel"
              role="tabpanel"
              aria-labelledby="tab-renault"
              :hidden="active !== 'renault'"
            >
              <article class="exp-renault reveal" id="renault" aria-labelledby="renault-title">
                <header class="exp-renault__hero">
                  <img
                    class="exp-renault__logo no-grayscale"
                    src="/images/renault.png"
                    alt="Renault"
                    width="120"
                    height="120"
                    loading="lazy"
                    decoding="async"
                  />
                  <div class="exp-renault__hero-text">
                    <p class="exp-renault__eyebrow">Stage · Usine · Temps réel</p>
                    <h3 id="renault-title" class="exp-renault__title">
                      Développeur full stack — stagiaire
                    </h3>
                    <p class="exp-renault__dates">
                      mai — juil. 2022 ·
                      <span class="exp-renault__company">Renault — Ampère Maubeuge</span>
                    </p>
                  </div>
                </header>

                <figure class="exp-renault__media">
                  <img
                    class="exp-renault__media-img no-grayscale"
                    src="https://assets.renaultgroup.com/uploads/2024/11/maubeuge-1024x619.png"
                    alt="Vue aérienne du site Renault ElectriCity à Maubeuge"
                    width="1024"
                    height="619"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption class="exp-renault__media-cap">
                    Site Renault ElectriCity — Maubeuge · source&nbsp;
                    <a
                      href="https://www.renaultgroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Renault Group</a
                    >
                  </figcaption>
                </figure>

                <div class="exp-renault__body">
                  <div class="exp-renault__intro">
                    <p class="exp-renault__lead">
                      <strong class="exp-renault__strong">Monitoring de production.</strong>
                      Interface de visualisation en temps réel des indicateurs de rendement (OEE /
                      TRS) sur les lignes.
                    </p>
                    <p class="exp-renault__lead">
                      <strong class="exp-renault__strong">Back &amp; intégration.</strong>
                      Logique métier avec Symfony 5, connexion aux logiciels internes de l’usine,
                      données fiables pour le pilotage.
                    </p>
                  </div>

                  <ul class="exp-renault__highlights" aria-label="Points marquants">
                    <li>
                      Tableaux de bord opérateurs mis à jour sans perturber la cadence des lignes.
                    </li>
                    <li>
                      Données brutes progressivement transformées en indicateurs exploitables par la
                      hiérarchie d’atelier.
                    </li>
                  </ul>

                  <footer class="exp-renault__footer">
                    <p class="exp-renault__stack-head">Technologies &amp; contexte</p>
                    <ul class="pills pills--renault" aria-label="Technos">
                      <li>Symfony 5</li>
                      <li>OEE / TRS</li>
                      <li>Contexte usine</li>
                    </ul>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--homecta" aria-label="Navigation">
        <div class="home-cta home-cta--about-footer">
          <p class="home-cta__p">
            La suite du parcours : formations, compétences, ou un message direct sur la page
            Contact.
          </p>
          <div class="home-cta__links">
            <router-link class="btn btn--outline" to="/a-propos">À propos</router-link>
            <router-link class="btn btn--outline" to="/formations">Formations</router-link>
            <router-link class="btn btn--primary" to="/contact">Contact</router-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";

const tabs = [
  {
    id: "elonet",
    label: "Elonet",
    logo: "images/elonet-logo.png",
  },
  {
    id: "renault",
    label: "Renault",
    logo: "https://lezebre.lu/images/detailed/85/49283-Sticker-Renault-Nouveau-Logo-2021.png"
  },
];

const active = ref("elonet");
const route = useRoute();

function setActive(id) {
  active.value = id;
}

function onKey(e, i) {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    const n = (i + 1) % tabs.length;
    active.value = tabs[n].id;
    nextTick(() => document.getElementById(`tab-${tabs[n].id}`)?.focus());
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    const n = (i - 1 + tabs.length) % tabs.length;
    active.value = tabs[n].id;
    nextTick(() => document.getElementById(`tab-${tabs[n].id}`)?.focus());
  } else if (e.key === "Home") {
    e.preventDefault();
    active.value = tabs[0].id;
    nextTick(() => document.getElementById(`tab-${tabs[0].id}`)?.focus());
  } else if (e.key === "End") {
    e.preventDefault();
    const last = tabs.length - 1;
    active.value = tabs[last].id;
    nextTick(() => document.getElementById(`tab-${tabs[last].id}`)?.focus());
  }
}

function syncHashFromActive() {
  if (typeof window === "undefined") return;
  try {
    const path =
      route.path +
      (route.query && Object.keys(route.query).length
        ? "?" + new URLSearchParams(route.query).toString()
        : "");
    const url = path + "#" + active.value;
    window.history.replaceState(null, "", url);
  } catch {
    /* */
  }
}

watch(active, (v) => {
  syncHashFromActive();
  nextTick(() => {
    document
      .querySelector(`#panel-${v} article`)
      ?.classList.add("reveal--visible");
  });
});

onMounted(() => {
  const h = (window.location.hash || "").replace(/^#/, "");
  if (h === "renault" || h === "elonet") {
    active.value = h;
  }
  nextTick(() => {
    document
      .querySelector(`#panel-${active.value} article`)
      ?.classList.add("reveal--visible");
  });
});
</script>
