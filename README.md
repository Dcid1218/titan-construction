# Titan Construction — Marketing Site

High-converting single-page site for Titan Construction (Kendall County, IL): residential general contracting, remodeling, and electrical.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom craftsmanship tokens (charcoal / timber / iron / brass / bone / slate)
- Vercel Analytics
- Lead API at `POST /api/lead` (Resend email when configured; always persists to `data/leads.jsonl`)

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch (Danni)

1. Set `NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_PHONE_TEL`, SMS equivalents, `LEAD_EMAIL`, `NEXT_PUBLIC_LICENSE_NUMBER`
2. Add `RESEND_API_KEY` + verified `RESEND_FROM_EMAIL` so leads email out
3. Drop real project photos into `public/gallery/{outdoor,interior,electrical}/` (update `src/lib/gallery.ts` alts/titles as needed)
4. Confirm FAQ TODOs: permits, typical start time
5. Optional: Google Reviews URL, referral stat, workmanship warranty term
6. Deploy to Vercel and point the domain

## Gallery drop-in

```
public/gallery/outdoor/*.jpg
public/gallery/interior/*.jpg
public/gallery/electrical/*.jpg
```

Register new files in `src/lib/gallery.ts` (and `serviceImages` if replacing category cards).

## Lead form test

Submit the form on `/#contact`, then confirm a new line in `data/leads.jsonl`. With Resend configured, also confirm the inbox.

## Design tokens

| Token    | Hex     | Use                          |
|----------|---------|------------------------------|
| charcoal | #1C1B19 | Primary dark                 |
| timber   | #5C4430 | Warm structural accent       |
| iron     | #3E4C46 | Secondary trust accent       |
| brass    | #B08D57 | CTA / highlight (sparingly)  |
| bone     | #F5F1EA | Background                   |
| slate    | #7A7670 | Muted body text              |
