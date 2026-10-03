# Shawon Barua

**Full-Stack Web Developer — Chattogram, Bangladesh**

Personal portfolio and engineering case studies.

[**shawonbarua.me**](https://shawonbarua.me) · [LinkedIn](https://www.linkedin.com/in/dev-shawon/) · [GitHub](https://github.com/codershawon)

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## About

A portfolio that treats project write-ups as real case studies — problem, approach, outcome — rather than a grid of screenshots. Three projects are covered in depth:

- **ComplyGuard AI** — compliance tooling
- **Hospital Management Application** — healthcare systems
- **Digital Tools & E-Commerce Platform** — Shopify and SaaS work

Every piece of copy lives in typed objects under `src/data/`, so updating content never means touching a component.

---

## Highlights

**Performance and SEO**
Static generation for every route, per-page metadata with canonical URLs, a generated `sitemap.xml` and `robots.txt`, Person schema in JSON-LD, and an Open Graph image rendered at the edge.

**Accessibility**
Skip-to-content link, visible focus rings, semantic landmarks, and full `prefers-reduced-motion` support.

**Dark mode**
Theme persists across visits with no flash of the wrong colours on first paint.

**Contact form**
A React server action handles submission: Zod validates the payload, a honeypot field and a timing check filter bots, and Resend delivers the message. Failures return a readable message instead of a stack trace, and the visitor never loses what they typed.

**Design system**
Colours, spacing and typography are defined once as CSS custom properties in `globals.css` and consumed through Tailwind 4 theme tokens.

---

## Tech stack

| Layer | Choice |
| :--- | :--- |
| Framework | Next.js 16 — App Router, Turbopack |
| Language | TypeScript 5, strict mode |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Validation | Zod 4 |
| Email | Resend |
| Theming | next-themes |
| Icons | react-icons |
| Hosting | Vercel |

---

## Project structure

```
src/
├── app/                  Routes, root layout, metadata, global CSS
│   ├── about/
│   ├── contact/          Page + server action
│   ├── projects/         Index + [slug] case studies
│   ├── icon.svg          Favicon
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/           Reusable, content-agnostic
│   ├── ui/               Container, buttons, links, badges
│   ├── layout/           Header, Footer, ThemeToggle
│   ├── form/             Field primitives
│   ├── projects/         Project cards and links
│   └── seo/              JSON-LD
│
├── sections/             Page-specific blocks, one folder per page
├── data/                 All site content as typed objects
├── lib/                  cn, metadata helpers, site URL, Zod schemas
└── hooks/                useMounted
```

The split is deliberate: `components/` holds anything reused across pages, `sections/` holds blocks that belong to exactly one page, and `data/` holds everything a non-developer would want to edit.

---

## Running locally

**Requirements:** Node.js 20 or newer.

```bash
git clone https://github.com/codershawon/shawon_new_portfolio.git
cd shawon_new_portfolio
npm install
cp .env.example .env.local    # fill in the values
npm run dev
```

Open [localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Purpose |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Yes | Authenticates with Resend |
| `CONTACT_TO_EMAIL` | Yes | Destination for contact form messages |
| `SITE_URL` | Production only | Canonical URLs, sitemap, OG image |

`SITE_URL` resolves in three steps: the variable itself, then Vercel's deployment URL, then `http://localhost:3000`. Set it explicitly in production so canonical links point at the custom domain.

Without the Resend variables the site still builds and runs — the contact form returns a friendly error instead of crashing.

### Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Serve the production build
npm run lint       # ESLint
npx tsc --noEmit   # Type check
```

---

## Deployment

Deployed on Vercel. Every push to `main` triggers a production build; pull requests get preview deployments.

Environment variables are set in **Project Settings → Environment Variables** and apply from the next build onward — existing deployments are not affected, so a redeploy is needed after changing them.

---

## License

Source code is available under the [MIT License](LICENSE).

Written content, images, project descriptions and the résumé are **not** covered by it. Feel free to learn from the code or borrow patterns, but please don't republish the content as your own.

---
