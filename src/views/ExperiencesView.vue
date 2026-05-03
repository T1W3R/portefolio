<template>
  <StandardPageHero
    title-id="exp-hero-title"
    :kicker="$t('experiences.hero.kicker')"
    :title-lines="[$t('experiences.hero.line1'), $t('experiences.hero.line2')]"
    :title-line-styles="[null, { whiteSpace: 'wrap' }]"
    :tagline="$t('experiences.hero.tagline')"
    accent-class="site-hero--exp-accent"
  >
    <template #actions>
      <router-link class="btn btn--primary" to="/contact">{{ $t("common.contactMe") }}</router-link>
      <router-link class="btn btn--ghost" to="/formations">{{ $t("common.formations") }}</router-link>
    </template>
  </StandardPageHero>

  <IntroBandSection
    title-id="exp-stripe-heading"
    :title="$t('experiences.stripe.title')"
    stripe-class="page__stripe"
    body-class="page__stripe-body"
  >
    <p class="home-intro-band__p">
      {{ $t("experiences.stripe.text") }}
    </p>
  </IntroBandSection>

  <main class="main" id="main">
    <div class="main__inner main__inner__personalized main__inner--exp">
      <section
        class="section section--tint section--exp-switch-wrap"
        aria-labelledby="exp-tabs-title"
      >
        <SectionHeadBlock
          title-id="exp-tabs-title"
          :eyebrow="$t('experiences.head.eyebrow')"
          :title="$t('experiences.head.title')"
          :lede="$t('experiences.head.lede')"
        />

        <div class="exp-switch" data-exp-switch>
          <div class="exp-switch__tabs" role="tablist" :aria-label="$t('experiences.tabsAria')">
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
                    <p class="exp-elonet__eyebrow">{{ $t("experiences.elonet.eyebrow") }}</p>
                    <h3 id="elonet-title" class="exp-elonet__title">
                      {{ $t("experiences.elonet.title") }}
                    </h3>
                    <p class="exp-elonet__dates">
                      {{ $t("experiences.elonet.dates") }} · <span class="exp-elonet__company">Elonet</span>
                    </p>
                  </div>
                </header>

                <div class="exp-elonet__body">
                  <div class="exp-elonet__intro">
                    <p class="exp-elonet__lead">
                      <strong class="exp-elonet__strong">{{ $t("experiences.elonet.evolutionTitle") }}</strong>
                      {{ $t("experiences.elonet.evolutionText") }}
                    </p>
                    <p class="exp-elonet__lead">
                      <strong class="exp-elonet__strong">{{ $t("experiences.elonet.internalTitle") }}</strong>
                      {{ $t("experiences.elonet.internalText") }}
                    </p>
                    <p class="exp-elonet__lead">
                      <strong class="exp-elonet__strong">{{ $t("experiences.elonet.clientTitle") }}</strong>
                      {{ $t("experiences.elonet.clientText") }}
                    </p>
                  </div>

                  <section class="exp-elonet__projects" aria-labelledby="elonet-projects-h">
                    <h4 id="elonet-projects-h" class="exp-elonet__projects-heading">
                      {{ $t("experiences.elonet.projectsTitle") }}
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
                          {{ $t("experiences.elonet.project1Desc") }}
                        </p>
                        <span class="exp-elonet__tile-cta">
                          {{ $t("common.seeSite") }}
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
                          {{ $t("experiences.elonet.project2Desc") }}
                        </p>
                        <span class="exp-elonet__tile-cta">
                          {{ $t("common.seeSite") }}
                          <span aria-hidden="true">↗</span>
                        </span>
                      </a>
                    </div>
                  </section>

                  <p class="exp-elonet__footnote" role="note">
                    <strong>{{ $t("experiences.elonet.noteTitle") }}</strong>
                    {{ $t("experiences.elonet.noteText") }}
                  </p>

                  <footer class="exp-elonet__footer">
                    <p class="exp-elonet__stack-head">{{ $t("experiences.elonet.stackHead") }}</p>
                    <p class="exp-elonet__stack-line">
                      {{ $t("experiences.elonet.stackLine") }}
                    </p>
                    <ul class="pills pills--elonet" :aria-label="$t('experiences.elonet.techAria')">
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
                    <p class="exp-renault__eyebrow">
                      {{ $t("experiences.renault.eyebrow") }}
                    </p>
                    <h3 id="renault-title" class="exp-renault__title">
                      {{ $t("experiences.renault.title") }}
                    </h3>
                    <p class="exp-renault__dates">
                      {{ $t("experiences.renault.dates") }} ·
                      <span class="exp-renault__company">Renault ElectriCity — Maubeuge</span>
                    </p>
                  </div>
                </header>

                <figure class="exp-renault__media">
                  <img
                    class="exp-renault__media-img no-grayscale"
                    src="https://assets.renaultgroup.com/uploads/2024/11/maubeuge-1024x619.png"
                    :alt="$t('experiences.renault.mediaAlt')"
                    width="1024"
                    height="619"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption class="exp-renault__media-cap">
                    {{ $t("experiences.renault.mediaCaptionPrefix") }}&nbsp;
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
                      <strong class="exp-renault__strong">{{ $t("experiences.renault.missionTitle") }}</strong>
                      {{ $t("experiences.renault.missionText") }}
                    </p>
                    <p class="exp-renault__lead">
                      <strong class="exp-renault__strong">{{ $t("experiences.renault.backTitle") }}</strong>
                      {{ $t("experiences.renault.backText") }}
                    </p>
                  </div>

                  <ul class="exp-renault__highlights" :aria-label="$t('experiences.renault.highlightsAria')">
                    <li>
                      {{ $t("experiences.renault.highlight1") }}
                    </li>
                    <li>
                      {{ $t("experiences.renault.highlight2") }}
                    </li>
                  </ul>

                  <footer class="exp-renault__footer">
                    <p class="exp-renault__stack-head">{{ $t("experiences.renault.stackHead") }}</p>
                    <ul class="pills pills--renault" :aria-label="$t('experiences.renault.techAria')">
                      <li>Symfony 5</li>
                      <li>OEE / TRS</li>
                      <li>{{ $t("experiences.renault.contextLabel") }}</li>
                    </ul>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--homecta" :aria-label="$t('subnav.linkedPages')">
        <PageSubnav
          :aria-label="$t('subnav.linkedPages')"
          prev-to="/a-propos"
          :prev-label="$t('subnav.aboutPrev')"
          next-to="/formations"
          :next-label="$t('subnav.formationsNext')"
        />
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import IntroBandSection from "@/components/IntroBandSection.vue";
import PageSubnav from "@/components/PageSubnav.vue";
import SectionHeadBlock from "@/components/SectionHeadBlock.vue";
import StandardPageHero from "@/components/StandardPageHero.vue";

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
