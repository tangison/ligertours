# Worklog

---
Task ID: 1
Agent: main (Z.ai)
Task: Rebuild Liger Tours Namibia from the official brand kit; apply scroll craft to ALL pages; use supplied logos/patterns/CTAs; fix copyright; deploy to fresh GitHub repo + clean Vercel URL.

Work Log:
- Extracted and read the full brand kit zip (01-brand-guide, 02-logos, 03-tokens, 04-typography, 05-imagery, 06-site-implementation, 07-graphic-elements). Kit is the single source of truth.
- Fetched real content from ligertoursnamibia.com: 7 tours, 12 activities with durations, 3 real testimonials, founder story, NTB registration, contact details. Voice-cleaned per brand guide (removed banned words, no em dashes, N$ / +264 formats).
- Skill hunt per tangison-super-skills: found + vetted + installed scroll-animations (dylantarre/animation-principles) and accessibility-a11y (mindrally/skills). REJECTED brightdata seo-audit (requires curl-piped remote CLI + credentials, fails vetting). npx skills CLI stuck in TUI, so SKILL.md files were fetched from GitHub directly per the fallback rule.
- Initialized Next.js 16 project via fullstack-dev skill.
- Installed brand assets: tokens.css verbatim into globals.css, 3 self-hosted fonts (dropped the italic face to protect the 500KB budget), logo variants under /public/brand/logos, SVG patterns under /public/brand/patterns, photos under /public/imagery (web + crops). Fixed the corrupt 0-byte rhino 1x1 crop with sharp. Composed OG image (primary logo on rose-200) per QA checklist.
- Built components: scroll-craft engine (IntersectionObserver Reveal, 24px/480ms/80ms stagger, reduced-motion safe), hero Parallax capped at 12 percent, header with 80px scroll state + on-dark/primary logo switching + full-screen night drawer, night footer with dune divider, WhatsApp float, arch cards, tour cards, gallery lightbox (Escape/arrows/focus return), contact form (validation + honeypot + success state + Prisma lead store).
- Built ALL routes with scroll craft on every page: / (9 sections per PAGE-SPECS), /tours, /tours/[slug] x7 static, /activities, /about, /gallery, /contact, /brand, /privacy-policy, /terms, not-found 404, error 500, sitemap.xml, robots.txt, manifest.
- Fixes during browser verification: Tailwind v4 does not emit -z-20 (parallax painted over the dusk overlay; switched to z-[-20]); undefined rose-100 dune variant rendered black fill (added palette-exact fill); landscape band object-position to show dunes; double logo in mobile drawer; WhatsApp float overlapped footer credit on mobile (pb-24); hydration mismatch from html.js class (suppressHydrationWarning); favicons path 404 (public/favicons/).
- SEO audit script: all 13 route titles under 60 chars, descriptions under 155, robots + sitemap (16 URLs) live, JSON-LD valid, zero banned words on rendered home.
- Deployed: GitHub repo tangison/ligertours (fresh init, 2 commits), Vercel project "ligertours" (Targis team) via CLI file upload (GitHub App not linked on the team, so Git integration was not possible via API). URL: https://ligertours.vercel.app
- Production fixes: /api/contact 500 because serverless /tmp has no tables; added runtime CREATE TABLE IF NOT EXISTS before first write. Retested: {"ok":true}.
- Production verification: all 18 routes healthy, console clean, hero WebP 172KB, HTML 17KB gzip, fonts 172KB total, first-view weight approx 420KB, inside the 500KB budget.

Stage Summary:
- Live URL: https://ligertours.vercel.app (super clean)
- Repo: https://github.com/tangison/ligertours
- Copyright line: (c) 2026 Liger Tours Namibia + hardcoded "Made by Tangison Studio" -> https://studio.tangison.com
- Handover items: connect Git in Vercel dashboard (vercel git connect) for push-to-deploy; leads live in ephemeral SQLite /tmp per lambda instance, move to Vercel Postgres or Convex for durable storage; wire SMTP + SPF/DKIM/DMARC for enquiry notifications; ligertoursnamibia.com DNS can point to this project when the client is ready.
- SECURITY: rotate both tokens (GitHub PAT + Vercel vcp_ token) after this session, they appeared in chat plaintext.
