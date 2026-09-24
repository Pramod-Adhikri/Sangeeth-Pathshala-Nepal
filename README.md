# Sangeet Pathshala — website

Rebuilt with **TypeScript + Next.js** (React) on the frontend, and a
**Next.js API route (Node.js)** on the backend that sends the enquiry
form's email — replacing the earlier plain-HTML + PHP version.

## Project structure

```
src/
  app/
    layout.tsx        — fonts, page <head>, wraps every page
    page.tsx           — the whole site's content (server component)
    globals.css        — all styling, ported from the original design
    api/contact/route.ts — the backend endpoint the form submits to
  components/
    Nav.tsx             — floating glass nav + mobile menu (client component)
    PlayStrip.tsx        — the "pick a colour, hear a note" instrument keys
    ContactForm.tsx      — the "Visit the school" enquiry form
```

Only the three files under `components/` run any client-side JavaScript
(they need `useState`/audio/`fetch`); everything else in `page.tsx` is
rendered on the server, which is faster and sends less JS to the visitor.

## 1. Install

You need [Node.js](https://nodejs.org) 18.18 or newer installed on your
computer first. Then, inside this folder:

```bash
npm install
```

## 2. Set up email sending

Copy the example environment file and fill in real values:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set:

- `GMAIL_USER` — the Gmail address that will send the emails
- `GMAIL_APP_PASSWORD` — an **App Password** for that account (not your
  normal Gmail password). Generate one at
  https://myaccount.google.com/apppasswords — this requires
  2-Step Verification to be turned on for the account first.
- `TO_EMAIL` — the inbox that should receive enquiries (defaults to
  `sangeetpathshalanepal@gmail.com`)

`.env.local` is already in `.gitignore` — it will never be committed or
uploaded by accident if you push this to GitHub.

## 3. Run it locally

```bash
npm run dev
```

Then open **http://localhost:3000**. Try submitting the enquiry form —
if your `.env.local` is filled in correctly, a real email will arrive
in `TO_EMAIL`.

## 4. Build for production

```bash
npm run build
npm run start
```

`npm run start` serves the optimized production build, also on
http://localhost:3000 by default.

## Hosting this live

This is now a **Node.js application**, not a static site — it needs a
host that can run `node` continuously (or via serverless functions),
not just serve plain files. Plain cPanel/shared hosting built for PHP
usually can't run this directly unless your host specifically offers a
"Setup Node.js App" feature in cPanel (some do).

Good options, easiest first:

- **Vercel** (made by the creators of Next.js) — connect your GitHub
  repo, it builds and hosts it for you, free tier is generous. Add the
  three environment variables from `.env.local` in the Vercel project
  settings.
- **Netlify** — similar to Vercel, also has first-class Next.js support.
- **A VPS** (DigitalOcean, Hetzner, etc.) — run `npm run build && npm run start`
  behind a process manager like `pm2`, with Nginx in front.
- **cPanel with "Setup Node.js App"** — if your host's cPanel has this
  feature, point it at this folder, set the same environment variables
  there, and it runs `npm run build` / `npm run start` for you.

If you'd rather stay on plain shared hosting with no Node.js support at
all, that's exactly what the previous plain-HTML + PHP version was
built for — let me know if you want to go back to that instead.
