# Pseudo Line - Portfolio Website (Vite Edition)

Welcome to the Pseudo Line portfolio website project! This site showcases the work, philosophy, and full-stack web development pricing plans of Pseudo Line, a future-forward, polymathic enterprise.

This project is built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**. It's a Progressive Web App (PWA), allowing for installation on devices and basic offline functionality. It also features an AI-powered Customer Service Chatbot using the Google Gemini API.

## Table of Contents

1.  [Project Overview](#1-project-overview)
2.  [Tech Stack & Architecture](#2-tech-stack--architecture)
3.  [Key Features](#3-key-features)
4.  [AI Customer Service Chatbot](#4-ai-customer-service-chatbot)
5.  [Our Development Philosophy](#5-our-development-philosophy)
6.  [Pricing Plans](#6-pricing-plans)
7.  [Responding to Client Project Inquiries](#7-responding-to-client-project-inquiries)
8.  [Local Development](#8-local-development)
9.  [Building for Production](#9-building-for-production)
10. [Deployment (Free Options)](#10-deployment-free-options)
11. [Search Engine Optimization (SEO) Basics](#11-search-engine-optimization-seo-basics)
12. [Progressive Web App (PWA) Implementation](#12-progressive-web-app-pwa-implementation)
13. [Customization](#13-customization)
14. [Future Enhancements](#14-future-enhancements)

## 1. Project Overview

Pseudo Line is dedicated to building impactful digital solutions. This portfolio website serves as a digital presence to:
- Introduce the Pseudo Line mission and vision.
- Showcase innovative projects.
- Detail our full-stack web development pricing plans.
- Provide a point of contact.
- Offer instant support via an AI chatbot.
- Include standard legal pages (Privacy Policy, Terms of Service).

The site aims for a clean, elegant, futuristic, and minimal aesthetic, emphasizing clarity, depth, and confidence.

## 2. Tech Stack & Architecture

This is a single-page application (SPA) built with modern web technologies, enhanced as a PWA:

*   **Vite:** A fast build tool and dev server.
*   **React 19:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Tailwind CSS:** A utility-first CSS framework, configured with PostCSS.
*   **React Router DOM (v7):** For client-side routing (`HashRouter`).
*   **Google Gemini API (`@google/genai`):** Powers the AI customer service chatbot.
*   **PWA Features:**
    *   **Web App Manifest (`public/manifest.json`):** Describes the app.
    *   **Service Worker (`public/sw.js`):** Enables offline caching.

**File Structure:**

```
/
├── public/                 # Static assets (copied to build root)
│   ├── icons/              # Application PWA icons
│   │   └── pwa/
│   ├── manifest.json       # Web App Manifest
│   └── sw.js               # Service Worker script
├── src/                    # Source code
│   ├── assets/             # (Optional: for assets imported by components)
│   ├── components/         # Reusable UI components
│   │   ├── icons/          # SVG icon components
│   │   ├── ChatBotWidget.tsx 
│   │   ├── ChatWindow.tsx    
│   │   └── ...
│   ├── data/               # Static data files (projects, pricing)
│   ├── pages/              # Page-level components
│   ├── App.tsx             # Main application component with routing
│   ├── constants.ts        # Global constants
│   ├── index.css           # Global styles & Tailwind directives
│   ├── main.tsx            # React application entry point
│   └── types.ts            # TypeScript type definitions
├── .gitignore
├── index.html              # Main HTML entry point (processed by Vite)
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration (for Tailwind)
├── README.md               # This file
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # Main TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node context (Vite config)
└── vite.config.ts          # Vite configuration
```

## 3. Key Features
(Content remains largely the same as before, focusing on application features)
...

## 4. AI Customer Service Chatbot
(Content remains largely the same, API key handling note below)
... The Gemini API Key is expected to be available as `process.env.API_KEY`. Vite is configured to make this available to the client code during build time. Ensure this environment variable is set in your development and deployment environments.

## 5. Our Development Philosophy
(Content as before)
...

## 6. Pricing Plans
(Content as before)
...

## 7. Responding to Client Project Inquiries
(Content as before)
...

## 8. Local Development

1.  **Prerequisites:**
    *   Node.js (which includes npm) or Yarn.
    *   An API key for the Google Gemini API.

2.  **Setup:**
    *   Clone the repository.
    *   Navigate to the project directory: `cd pseudo-line-portfolio`
    *   Install dependencies:
        ```bash
        npm install
        # or
        yarn install
        ```
    *   **API Key:** The Gemini API key is accessed via `process.env.API_KEY`.
        *   You can set this environment variable in your shell before running the dev server.
        *   Alternatively, for local development, you can create a `.env` file in the project root (ensure `.env` is in your `.gitignore`):
            ```env
            # .env (for local Vite dev only if you prefer, but ensure it's gitignored)
            # Vite will pick this up automatically if you use VITE_ prefixed vars.
            # However, we are using process.env.API_KEY directly via Vite's define config.
            # So, ensure API_KEY is in your shell environment or configure vite.config.ts
            # to load it if you use .env for non-VITE_ prefixed variables.
            # The simplest is to have API_KEY in your shell environment:
            # export API_KEY="YOUR_GEMINI_API_KEY"
            ```
        *   The `vite.config.ts` is set up to replace `process.env.API_KEY` with its value at build/dev time.

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Vite development server, typically at `http://localhost:3000`.

## 9. Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

This command will generate static assets in the `dist` folder. These files are ready for deployment.
**Important:** Ensure the `API_KEY` environment variable is set in your build environment for the chatbot to function correctly in production.

## 10. Deployment (Free Options)
(Content as before - Vercel, Netlify, GitHub Pages are still excellent choices for Vite apps)
... For GitHub Pages, you might need to adjust the `base` path in `vite.config.ts` if deploying to a subdirectory.

## 11. Search Engine Optimization (SEO) Basics
(Content as before)
...

## 12. Progressive Web App (PWA) Implementation
(Content as before, but note `sw.js` and `manifest.json` are now in `public/`)
... The `sw.js` caches source files for development consistency. For robust production PWA caching with Vite, consider using a plugin like `vite-plugin-pwa` which handles caching of bundled assets more effectively.

## 13. Customization

This website is designed to be easily customizable:

*   **Branding & Colors:**
    *   Primary color (`PRIMARY_GREEN`) is defined in `src/constants.ts`. Update this to change the main accent color. Tailwind's configuration in `tailwind.config.js` also references this for extended animations or utilities.
    *   The Logo (`src/components/icons/LogoIcon.tsx`) is a placeholder SVG. Replace it with your actual logo.
*   **Content:**
    *   **Hero Section:** Text and tagline in `src/components/Hero.tsx`.
    *   **About Page:** Content in `src/pages/AboutPage.tsx`. Timeline events can be modified in the `timelineEvents` array.
    *   **Projects:** Project details are managed in `src/data/projectsData.ts`.
    *   **Pricing Plans:** Pricing tiers are in `src/data/pricingData.ts`.
    *   **Legal Content:** Update placeholder text in `src/pages/PrivacyPolicyPage.tsx` and `src/pages/TermsOfServicePage.tsx`.
*   **Navigation:** Menu items are defined in `NAV_ITEMS` in `src/constants.ts`.
*   **Social Media Links:** Defined in `SOCIAL_LINKS` in `src/constants.ts`.
*   **Contact Form:** Uses Formspree. Replace `YOUR_FORMSPREE_ID` in `src/constants.ts`.
*   **Chatbot:** Name, initial message, and system instruction components are in `src/constants.ts`. Contextual data is pulled from `src/data/`. The API Key is managed via `process.env.API_KEY` (see Local Development and Building for Production).

## 14. Future Enhancements
(Content as before)
...
*   **Vite PWA Plugin:** Integrate `vite-plugin-pwa` for more robust service worker generation and asset caching strategies.
...
