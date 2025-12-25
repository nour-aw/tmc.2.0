
# Next.js + Vercel Starter

A minimal website you can deploy to **Vercel** in minutes.

## Quick Start

1. **Download** this project and unzip it.
2. **Create a new GitHub repo** and push the files.
3. Go to **vercel.com → New Project → Import GitHub Repo** and select your repo.
4. Accept defaults. Vercel detects Next.js automatically. Click **Deploy**.

## Local Development (optional)

```bash
# requires Node.js 18+
npm install
npm run dev
# open http://localhost:3000
```

## Customizing

- Edit `app/page.tsx` for the homepage text.
- Edit `app/about/page.tsx` and `app/contact/page.tsx` for other pages.
- The contact form posts to `/api/contact` — currently it just logs to the server. Connect it to a service like SendGrid/Resend/Slack when you're ready.

## Environment Variables (optional)

Create a `.env.local` for any secrets (email keys, etc.). Vercel will read these from your project settings.

---

Happy shipping!
```



## Branding (colors & logo)

- Edit `app/globals.css` and change these variables:
  ```css
  :root {
    --brand-primary: #0ea5e9;
    --brand-accent:  #f59e0b;
    --brand-bg:      #ffffff;
    --brand-text:    #0f172a;
  }
  ```
- Replace `/public/logo.svg` (and `logo.png` if needed) with your own logo file using the same names.
- Change the brand name text in `app/layout.tsx` (search for **My Brand**).



## This build is tailored for **The Margins Club**

- Brand colors:
  - Primary: #0F766E
  - Accent:  #F59E0B
  - Background: #FFFFFF
  - Text: #0F172A
- Replace `/public/wordmark.svg` and `/public/logo.svg` anytime with your own artwork (keep file names).
- Update copy in `app/page.tsx`, `app/about/page.tsx`, etc.


## Current color variables

Add/adjust in `app/globals.css`:

```css
:root {
  --bg: #fff8ef;
  --ink: #111111;
  --ink-soft: #63605d;
  --accent-1: #653e23;
  --accent-2: #9b976e;
  --accent-3: #e06650;
}
```
The UI uses:
- Page background: `--bg`
- Text: `--ink`
- Subtle borders: `--ink-soft`
- Primary buttons/links: `--accent-3`
- Subtle accents/badges: `--accent-2` and `--accent-1`


## Using your own logo (PNG/JPG/SVG)
- The header uses `/public/brand-logo.png`.
- The homepage hero uses `/public/wordmark.png`.
Replace those files with your artwork (same names) and redeploy.
