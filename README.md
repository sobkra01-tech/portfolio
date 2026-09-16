# Kouakou Kra Modeste — Portfolio

Portfolio professionnel de **Kouakou Kra Modeste**, Data Scientist & Big Data Engineer.
Bilingue FR/EN, construit avec Next.js (App Router), TypeScript, Tailwind CSS et Framer Motion.

## Stack

- **Next.js 15** (App Router, Server Components)
- **React 19** + **TypeScript**
- **Tailwind CSS** pour le design system
- **Framer Motion** pour les micro-animations (respecte `prefers-reduced-motion`)
- **lucide-react** pour les icônes
- i18n maison (FR/EN) basé sur des dictionnaires typés, sans dépendance externe

## Structure

```
app/[lang]/        Pages (Home, /projects, /projects/[slug], /experience, /about, /smartdata, /contact)
components/        UI, navigation, sections, cards, forms — réutilisables et découplés du contenu
data/               Contenu (projets, expériences, formation, compétences, liens) séparé de l'UI
lib/                i18n, fonts, utils
styles/             CSS global (Tailwind + resets)
public/images/      Assets statiques
```

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run lint     # ESLint
```

## Contenu à compléter

- **Photo de profil** : déposer une photo dans `public/images/portrait.jpg` et l'utiliser dans
  `app/[lang]/about/page.tsx` (actuellement un placeholder visuel, aucune photo n'a été fournie).
- **Email de contact** et **liens réseaux sociaux réels** (`data/links.ts`) : actuellement des
  placeholders (`aboutPage.emailPending`, URLs génériques).
- **Liens "Live Demo" / "GitHub"** des études de cas : désactivés tant qu'aucune URL réelle
  n'est fournie par projet (voir `data/projects.ts`).

## Déploiement

Optimisé pour Vercel : `vercel --prod` depuis la racine, ou connecter le repo GitHub directement
sur [vercel.com/new](https://vercel.com/new). Aucune variable d'environnement requise.
