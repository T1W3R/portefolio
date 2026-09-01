# Portfolio — Timothé Werquin

Site personnel de présentation professionnelle : un portfolio modulaire, bilingue et orienté produit, conçu pour mettre en valeur un parcours de développeur full stack avec une ouverture vers la data et l’intelligence artificielle.

**Site en ligne :** [timothe.werquin.eu](https://timothe.werquin.eu)

---

## Contexte

Ce projet est le portfolio en ligne de **Timothé Werquin**, ingénieur développement logiciel basé à Lille. Il remplace une présentation statique ou dispersée (CV PDF, profils LinkedIn/GitHub) par une expérience web structurée, navigable et cohérente.

Le site s’adresse principalement à :

- **Recruteurs et responsables techniques** — parcours, stack, expériences concrètes (Elonet, Renault)
- **Collaborateurs potentiels** — manière de travailler, valeurs, centres d’intérêt
- **Visiteurs curieux** — formations, certifications, compétences et canaux de contact

Chaque rubrique (à propos, expériences, formations, compétences, contact) est une page à part entière, reliée par une navigation éditoriale pensée comme un tableau de bord : claire, progressive, sans surcharge.

---

## Vision du projet

L’ambition n’est pas de livrer un simple CV web, mais un **outil de présentation durable** qui reflète une manière de travailler :

| Principe | Intention |
|----------|-----------|
| **Clarté** | Contenu découpé par thème, hiérarchie visuelle lisible, parcours guidé depuis l’accueil |
| **Impact produit** | Mise en avant des missions réelles, des stacks utilisées et des livrables — pas seulement une liste de technologies |
| **Accessibilité** | Navigation au clavier, libellés ARIA, respect de `prefers-reduced-motion`, lien d’évitement vers le contenu |
| **Internationalisation** | Interface disponible en français et en anglais, avec détection de la langue du navigateur |
| **Performance & simplicité** | SPA légère, sans dépendances lourdes ; build statique prêt pour un hébergement simple |
| **Évolutivité** | Architecture par vues et composants réutilisables ; contenus centralisés dans les fichiers i18n |

Le ton général — visible dans les textes du site — privilégie l’**utilité concrète**, le **cadrage agile** et le **lien avec les besoins réels des équipes**, de la prise de besoin au déploiement.

---

## Stack technique

| Couche | Choix |
|--------|-------|
| **Framework** | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`) |
| **Routing** | [Vue Router 4](https://router.vuejs.org/) — historique HTML5, lazy-loading des vues |
| **i18n** | [Vue I18n 11](https://vue-i18n.intlify.dev/) — FR / EN, persistance `localStorage` |
| **Build** | [Vite 6](https://vitejs.dev/) — dev server rapide, bundle optimisé |
| **Styles** | CSS custom (variables, grilles, composants) — polices Google Fonts (Archivo Black, Inter, Montserrat) |
| **Hébergement cible** | Site statique (`dist/`) — compatible nginx, GitHub Pages, Netlify, etc. |

**Pas de backend** pour l’instant : le contact passe par mail, téléphone et réseaux sociaux. Un formulaire côté serveur pourra être ajouté ultérieurement si besoin.

---

## Architecture

```
portefolio/
├── public/              # Assets statiques (images, CV PDF, favicon)
├── src/
│   ├── assets/          # Feuille de styles globale
│   ├── components/      # Blocs réutilisables (header, footer, hero, sous-nav…)
│   ├── composables/     # Logique partagée (navigation, animations au scroll)
│   ├── i18n/            # Traductions FR / EN
│   ├── layouts/         # Gabarit principal (header + footer + slot)
│   ├── router/          # Définition des routes et métadonnées SEO
│   └── views/           # Pages : Accueil, À propos, Expériences, Formations, Compétences, Contact
├── index.html           # Point d’entrée, balises Open Graph
└── vite.config.js       # Alias `@/`, configuration build
```

### Points notables

- **Métadonnées dynamiques** — titre et description `<meta>` mis à jour à chaque changement de route et de langue (`src/main.js`)
- **Composants de page** — `PageHero`, `SectionHeadBlock`, `IntroBandSection` pour homogénéiser le rendu éditorial
- **Animations progressives** — révélation au scroll via `IntersectionObserver` (`useSiteChrome`), désactivée si l’utilisateur préfère moins de mouvement
- **Contenu externalisé** — tout le texte affiché passe par les fichiers `src/i18n/locales/*.json`, ce qui facilite la maintenance et la traduction

---

## Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) 18+ (recommandé : LTS)
- npm (fourni avec Node)

### Installation

```bash
git clone <url-du-repo>
cd portefolio
npm install
```

### Développement

```bash
npm run dev
```

Le serveur de développement démarre sur [http://localhost:5173](http://localhost:5173) (écoute sur `0.0.0.0` pour les tests en réseau local).

### Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/`.

### Prévisualisation du build

```bash
npm run preview
```

Serveur de prévisualisation sur [http://localhost:4173](http://localhost:4173).

---

## Routes

| Chemin | Page |
|--------|------|
| `/` | Accueil — hero, présentation, grille de navigation |
| `/a-propos` | Profil, valeurs, méthode de travail, centres d’intérêt |
| `/experiences` | Parcours Elonet & Renault |
| `/formations` | Cursus académique et certifications |
| `/competences` | Stack technique, soft skills, langues |
| `/contact` | Coordonnées et canaux directs |

---

## Personnalisation du contenu

1. **Textes** — modifier `src/i18n/locales/fr.json` et `src/i18n/locales/en.json`
2. **Images** — placer les fichiers dans `public/images/` (portrait, couverture OG, logos formations…)
3. **CV** — remplacer `public/CV_Werquin_Timothé.pdf`
4. **SEO** — ajuster les balises dans `index.html` et les clés `routes.*.description` dans les locales

---

## Déploiement

Le projet produit un dossier `dist/` déployable tel quel. La configuration Vite autorise l’hôte `timothe.werquin.eu` en développement ; en production, pointer le serveur web (ou le CDN) vers le contenu de `dist/`.

Exemple minimal avec un serveur statique :

```bash
npm run build
# Copier le contenu de dist/ vers la racine web du serveur
```

---

## Licence & contact

Projet personnel — **Timothé Werquin**

- **E-mail :** werquin.timothe@gmail.com
- **LinkedIn :** [linkedin.com/in/werquin-timothe](https://www.linkedin.com/in/werquin-timothe)
- **GitHub :** [github.com/T1W3R](https://github.com/T1W3R)
