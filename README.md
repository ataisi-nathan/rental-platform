# PrimeLift Equipment Rentals

**PrimeLift** is a modern, responsive web application for heavy machinery, power tools, and industrial equipment rentals. Built with Next.js (App Router), TypeScript, and Tailwind CSS, PrimeLift provides contractors, commercial businesses, and individuals with a seamless equipment browsing, reservation, and management platform.

---

## 🚀 Tech Stack & Features

### **Technologies**
- **Framework:** [Next.js 14/15](https://nextjs.org) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist / Inter)

### **Key Features**
- **Responsive Navigation & Header:** Sticky header with collapsible search, mobile drawer navigation, and cart/account quick links.
- **Dynamic Equipment Catalog:** Filter machinery by category, search in real-time, and sort by rental pricing.
- **Brand Identity & Modern UI:** High-contrast, industrial palette featuring `#1E3A8A` (Deep Navy) and `#F97316` (Brand Orange).
- **Authentication Pages:** Refactored, accessible Sign In & Account Management forms with interactive visibility toggles.
- **Structured Footer:** Multi-column navigation grid with support badges, quick-contact callouts, and legal links.

---

## 🛠️ Getting Started

First, install project dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install

```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with primary fonts & metadata
│   ├── page.tsx           # Homepage (Hero, Why Choose Us, Catalog, Banners)
│   ├── login/
│   │   └── page.tsx       # Refactored Login / Authentication page
│   └── globals.css        # Tailwind CSS imports & custom styles
├── components/
│   ├── Header.tsx         # Responsive sticky header with mobile search
│   ├── Navbar.tsx         # Desktop navigation bar & mobile drawer menu
│   ├── Hero.tsx           # Adaptive CTA Hero section
│   ├── EquipmentCatalog.tsx # Interactive catalog with search, filter & sorting
│   ├── AccountBanner.tsx  # Callout banner for user registration
│   ├── SupportBanner.tsx  # Direct support & phone dispatch banner
│   ├── Footer.tsx         # Industrial structured footer
│   └── ui/
│       └── logo.tsx       # Modern SVG & typography PrimeLift brand mark
├── data/
│   └── equipment.json     # Mock equipment inventory & pricing dataset
└── public/
    └── images/            # Local equipment photos & asset storage

```

---

## 📦 Scripts

* `npm run dev` — Starts the local development server at `localhost:3000`.
* `npm run build` — Builds the application for production deployment.
* `npm run start` — Starts the built application in production mode.
* `npm run lint` — Runs ESLint checks across project files.

---

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

```
    Built by Ataisi Nathan
```