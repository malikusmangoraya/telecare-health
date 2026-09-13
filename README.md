# Project

HealthTech Telemedicine Platform - a comprehensive telehealth platform connecting patients with healthcare providers through video consultations, AI triage, and digital health records.
Website type: healthcare
Industry: healthtech
Features: Video consultations with HD quality and recording, AI-powered symptom checker and triage, Electronic health records (EHR) with FHIR compliance, E-prescription with pharmacy integration, Appointment scheduling with calendar sync, Patient portal with health records access, Remote patient monitoring with IoT device integration, AI-powered diagnostic assistance, Secure messaging with HIPAA compliance, Insurance verification and billing, Multi-language support, Dark mode, Provider dashboard with analytics, Appointment reminders via SMS/Email/WhatsApp.
Target: Patients, healthcare providers, and clinics. Modern clean design with bento grid layouts, professional branding, international ready, HIPAA/GDPR compliant, WCAG AA accessible.

**Type:** Healthcare  |  **Audience:** agencies, founders, and digital-product buyers  |  **Quality bar:** marketplace / ThemeForest grade

## Features

- Secure Messaging
- Ai Chat
- Multi Language
- Live Chat
- Video Consultations
- Ai Diagnostic
- Ehr Fhir
- Ai Triage
- I18n Multilingual
- E Prescription
- Patient Portal
- Pwa Support
- Appointment Reminders
- Provider Dashboard
- Appointment Scheduling
- Remote Monitoring
- Insurance Billing
- Dark Mode
- Whatsapp Float
- Testimonial Carousel
- Social Proof

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (TypeScript), Tailwind CSS, Shadcn UI, WebRTC API, Framer Motion, Radix UI (WCAG AA), I18next |
| Backend | Python FastAPI (AI/ML Services), Node.js (Microservices), HAPI FHIR Server, WebSockets, Twilio API |
| Database | PostgreSQL (Encrypted, HIPAA Compliant), Redis (Session & Queue), Pgvector (AI Retrieval) |

## Prerequisites

- Node.js 18+ (20 LTS recommended)
- npm 9+

## Getting Started

```bash
cd frontend
cp ../.env.example .env   # or copy frontend/.env.example
npm install
npm run dev               # http://localhost:5173
```

Production build:

```bash
cd frontend
npm run build
npm run preview
```

Deploy: import the repo on **Vercel** or **Netlify** (root directory `frontend`). See copy-paste deploy steps below if this README includes Vercel/Netlify sections.

## Environment Variables

Copy `.env.example` to `.env`. Never commit `.env`.

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form URL | `https://formspree.io/f/xxxx` |
| `VITE_CONTACT_WEBHOOK_URL` | Optional webhook for contact forms | `` |

## Project Structure

```
├── README.md                 # This file — details and start guide
├── LICENSE.md                # End-user license
├── .env.example              # Safe env template
├── frontend/                 # React 19 + Vite + Tailwind
├── screenshots/              # Marketplace preview images
└── vercel.json / netlify.toml
```

## Scripts

| Command | Where | Action |
|---------|-------|--------|
| `npm run dev` | frontend / backend | Local development |
| `npm run build` | frontend | Production bundle |
| `npm run lint` | frontend | ESLint |
| `npm test` | where present | Unit tests |

## International

- UI copy in English; extra locales under `frontend/src/i18n` when generated
- RTL-ready layout tokens
- Currency display via Intl (USD, EUR, GBP, PKR, INR, AED, SAR)
- Privacy / Terms pages and cookie consent for EU buyers

## Troubleshooting

- **Blank page / 5173 refused:** run `npm install` inside `frontend`, then `npm run dev`.
- **API CORS / 401:** confirm `CORS_ORIGIN` and `VITE_API_URL` match the running backend.
- **Database errors:** create the database, apply `database/schema.sql`, restart the API.
- **Env not applied:** Vite inlines `VITE_*` at build time — rebuild after changing `.env`.

## Screenshots

Place desktop and mobile previews in `screenshots/` before listing on Gumroad, Lemon Squeezy, or ThemeForest.

## License

Paid end-user license. You may deploy and customize for client work. You may not resell this source as a competing template without a reseller license. See `LICENSE.md` and `LICENSE-SEAL.md`.

# Generated Project

Client-only static showcase (Mode 1) — `Healthcare` landing experience with zero server hosting maintenance. The bundle is an API-less single-page app ready for direct drop into **Vercel** or **Netlify**.

## What is included

- Frontend client layer only — all navigation, state and form interactions run in the browser.
- Static API mock handlers: `frontend/src/services/mockApi.js`
- Cloud-edge contact forms via client actions: `frontend/src/services/staticForms.js` (Formspree → Resend/generic webhook → dev mock).
- Edge deploy configs: `vercel.json`, `netlify.toml`, `frontend/public/_redirects`, `frontend/public/_headers`.

## Quick start (local)

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

## Deploy to Vercel (copy-paste)

```bash
npm install -g vercel
vercel            # root of this bundle; rootDirectory: frontend is pre-set in vercel.json
vercel --prod
```

Or import the repo at https://vercel.com/new — Vercel auto-detects `vercel.json` (Vite, rootDirectory `frontend`).

## Deploy to Netlify (copy-paste)

```bash
npm install -g netlify-cli
netlify deploy    # base "frontend", publish "dist" pre-set in netlify.toml
netlify deploy --prod
```

Or drag-and-drop the `frontend/dist` folder after `npm run build`.

## Contact forms — pick a provider

Create `.env` from `.env.example` and set one of:

1. **Formspree (zero server):** create a form at https://formspree.io and set
   `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id`. Optional second form
   id for the newsletter: `VITE_FORMSPREE_NEWSLETTER_ID=your-newsletter-id`.
2. **Resend / webhook (client action):** set
   `VITE_CONTACT_WEBHOOK_URL=https://your-edge-function.example/resend` pointing
   at a Vercel/Netlify edge function (or Resend serverless hook).
3. **Mock (default):** with no vars set, forms resolve to a 450ms mock success for demos.

Remember to re-run `npm run build` after changing env vars (Vite inlines them).

## Custom domain

- Vercel: Settings → Domains → add your domain + DNS A/CNAME records.
- Netlify: Domain settings → assign domain + update the registrar nameservers to Netlify DNS (or add a CNAME to yoursite.netlify.app).
