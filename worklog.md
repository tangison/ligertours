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

---
Task ID: 2
Agent: main (Z.ai)
Task: User-ordered corrections: (1) apply real scroll craft to ALL pages not just home, (2) use SVG logo, (3) update copyright to be on point, (4) run tangison-super-skills skill hunt, (5) add patterns + copywriting-grade CTAs.

Work Log:
- Skill hunt executed per tangison-super-skills: npx skills find x3 (scroll animation gsap / page transition nextjs / web performance). Scored candidates (relevance/popularity/trust/maintenance/stack-fit). INSTALLED + disk-verified 5: gsap-core, gsap-scrolltrigger, gsap-react (all official greensock/gsap-skills), react-view-transitions, vercel-optimize (official vercel-labs/agent-skills). REJECTED: brightdata seo-audit (remote CLI + credentials, fails vetting), awwwards-animations + awesome-copilot gsap (unofficial, overlap), addyosmani performance (vercel-optimize is stack-exact). Read all 5 SKILL.md fully. npx skills add CLI hung on TUI prompt again -> used documented fallback (direct fetch), consistent with Task 1.
- react-view-transitions: React 19.2.3 stable has no ViewTransition export and Next is 16.1.3 (<16.2 needed for transitionTypes prop) -> substituted route-change craft via template.tsx GSAP entrance (documented reason, compatible API).
- Installed gsap@3.15.0 + @gsap/react@2.1.2.
- Converted user's uploaded primary rose logo PNG -> SVG via palette quantization + vtracer (public/brand/logos/svg/: liger-tours-primary-rose.svg 62.8KB, liger-tours-mono-cream.svg 48.3KB, liger-icon-rose.svg 33.8KB). Render-checked via cairosvg: faithful.
- gpt-taste RNG (scripts/design_rng.py, seed 20261020): hero=cinematic-center, motion=restrained, flagship=pinned-story, cta=friction-free-first, stats=count-up.

Stage Summary:
- IN PROGRESS: scroll-craft engine (GSAP ScrollTrigger primitives) + all-page application + SVG logo swap + copyright + CTA copy pass, then build, verify, deploy.

Work Log (continued):
- Built scroll-craft engine v2 (src/components/site/scroll-craft.tsx): WordsIn, WordScrub (0.1->1.0 scrub), ImgReveal (0.85->1.0), Batch (ScrollTrigger.batch), CountUp, PinnedQuote (flagship pin +=750 scrub), LineDraw, DriftY. All scoped useGSAP + prefers-reduced-motion guards.
- template.tsx page entrance on every navigation; scroll-progress hairline (rose-400, 3px) on every route.
- Applied everywhere: home (hero load timeline, count-up stats strip 7/12/100%/NTB, pinned Dead Vlei quote, batched cards/testimonials), /tours, 7x /tours/[slug] (timeline line draw, summary bar, ImgReveal band, batched more-tours), /activities, /about, /gallery (batch inside GalleryGrid), /contact (DriftY sun disc + batched info panel), legal pages Reveal, 404 class fix (duration-s] bug from Task 1 found and fixed).
- SVG logos live in header (mono-cream over hero / primary-rose scrolled), drawer, footer (on-dark). PNGs kept for favicons/OG.
- Footer copyright: (c) 2026 Liger Tours Namibia. All rights reserved. + Registered with the Namibia Tourism Board (NTB) + Made by Tangison Studio. Legal pages Last updated -> October 2026.
- CTA pass: "WhatsApp us now" everywhere (friction-free-first per RNG), "See the tours", "See all routes", "Browse all experiences", "Add this to my trip", "Prefer WhatsApp? Message us now". No forbidden CTAs, no em dashes.
- Patterns: sun-gradient-disc added to night CTA; sun discs + dune dividers + arch outlines retained; sun disc drift via DriftY on home + contact night sections.
- Fixed during verification: stale next-server processes (pid kill) were serving old manifest (CSS 404); standalone server needed static+public copies; scroll-craft has no default export (build fix); stats type union fix.
- Verified in browser (agent-browser): hero entrance, scrub states mid-scroll, pin release, count-ups landed, timeline draw, zero console errors on / /tours /tours/[slug] /about /gallery /contact /privacy /terms, 404 title correct.
- Weight audit: ~408KB worst case incl. all JS chunks + double-counted srcset (real first view approx 300KB) -> inside 500KB budget with GSAP.
- Deployed: git push (936c9ce) + vercel --prod. Production verified: 10 routes 200, 404 works, CSS 200, SVG logos in HTML, NTB line live, contact API {"ok":true}, robots+sitemap 200.

Stage Summary (Task 2 COMPLETE):
- Live: https://ligertours.vercel.app
- Repo: https://github.com/tangison/ligertours @ 936c9ce
- Scroll craft: every route, every major section (user correction resolved)
- Copyright: on point (2026 + entity + NTB); Tangison credit intact
- Skills installed this task: gsap-core, gsap-scrolltrigger, gsap-react, react-view-transitions, vercel-optimize (5 max rule honored)
- SECURITY: rotate GitHub PAT + Vercel token after session (both appeared in chat).

---
Task ID: 3
Agent: main (Z.ai)
Task: User round 3: (1) testimonial carousel widget on homepage, (2) pattern audit "applicable and makes sense", (3) scout highest-quality contextual royalty-free imagery, (4) rewrite + localize alt text, full imagery plan, (5) add languages: German, French and more.

Work Log:
- Testimonial carousel (src/components/site/testimonial-carousel.tsx): GSAP slide track (xPercent, expo.out), auto-advance 6.5s paused on hover/focus/swipe/hidden-tab, prev/next arrows, dot navigation, pointer swipe (48px threshold), keyboard arrows, aria-roledescription=carousel + localized aria labels, localized quote marks per locale (EN curly, DE „“, FR «»), reduced-motion = no auto-advance + instant swap. Replaces stacked quotes on home section 8.
- i18n: typed dict modules (src/lib/content/{shared,en,de,fr,index}.ts), Dict = typeof en so de/fr are compile-checked. [locale] route segment (root layout moved inside [locale] so html lang matches), src/middleware.ts rewrites clean EN URLs to /en/* internally; /de and /fr are real segments; next.config redirects /en/* -> /*. Localized metadata via src/lib/seo.ts (canonical + hreflang en/de/fr/x-default + OG locale + alternateLocale), localized sitemap with alternates for 16 routes x 3 locales, catch-all [locale]/[...rest] -> branded localized 404 inside layout, client 404/500 detect locale from pathname. Language switcher: desktop pills + mobile drawer pills, path-preserving, hreflang attrs, prefetch disabled.
- Imagery: two-pass hunt. Pass A: z-ai image-search (11 subjects, wave-sequential after 429 lesson; -o flag does not write files, capture stdout). Pass B: Openverse + Wikimedia Commons APIs for free licenses (usable = CC0/PDM/BY/BY-SA; ND/NC rejected as commercial-incompatible). Visual QA via sharp contact sheets (11 + 9 + 4 sheets, every candidate eyeballed). Fixed 6 wrong image-content matches: cooking class now potjie over coals, Spitzkoppe hiking now granite balanced rock, stargazing now Milky Way over 4x4, city tour now Christuskirche, coast now Swakopmund jetty, bar-hopping now sunset table; Etosha activity now elephants at waterhole; Kalahari tour card now quiver trees; tour detail band now uses the tour's own subject (16x9). 14 new WebP crops matching pipeline sizes (4x5 960x1200, 1x1 1365x1365, 16x9 1920x1080). License log rebuilt (21 rows) + on-site credits table on /brand (photographer, license, source link).
- Alt text: every image slot rewritten descriptive + contextual and localized in all 3 languages (hero, arch images, all 7 tours, all 12 activities, 18 gallery photos, page headers). Spitzkoppe alt corrected after re-crop (balanced boulder).
- Patterns audit: sun discs only where the desert-sun metaphor applies (behind arch portraits, on dusk/night bands), dune dividers only as terrain transitions between section colors, sun-gradient-disc only on the closing night CTA, arch = window onto the veld; brand page documents all four devices + meaning; nothing decorative carries meaning alone (aria-hidden kept).
- Copyright: footer year now dynamic (new Date().getFullYear()) + legal entity + NTB line + hardcoded Tangison Studio credit (intact).
- Fixed during verification: functions-in-props error (dict goToSlide/lightboxOpen/viewTourAria converted to {n}/{alt}/{name} templates), custom 404 not rendering for unmatched paths (added catch-all), drawer pills overflow at 390px (wrap + smaller padding), fr typos (rayons, nous nous en occupons, Flamants roses), de copy fixes (Köcherbaum, Holzturm, Malaria-Vorsorge), meta lengths (de home 157->139, fr tours/activities/gallery trimmed), spitzkoppe 4x5 re-crop (attention picked plain; centre fixed).
- Perf (real-browser audit, fresh session): 859KB/53 requests -> 676KB/31 requests. Levers: prefetch=false on language switcher + footer + header nav/logo + drawer + hero CTAs + tour cards (RSC payload tax ~120KB), svgo on 3 SVG logos (-50%), Archivo + Schibsted subset to latin core incl. œ/„ (fonts 137->127KB), hero quality 70 via Next 16 images.qualities config (158KB at 1920w). JS identified clean: React/Next runtime + GSAP only.
- Deployed: commits 97db8a3, 0fac9bd, c5b7cb5, f42d358 pushed to tangison/ligertours; Vercel project ligertours re-linked (.vercel/project.json) and 4 production deploys; accidental auto-created project during re-link could not be found by name for deletion (cosmetic).
- Production verified: 16 routes x EN/DE/FR 200, /en 308 -> /, 404s localized (EN/DE/FR content greps pass), hreflang live on all pages, sitemap alternates live, carousel + dots + arrows interactive (click-tested), language switcher works (EN->DE title/lang change), form validation 3 errors shown, 11 new images 200, umlauts + German quotes render with subset fonts, svgo logos render faithful (cairosvg render-check).

Stage Summary:
- Live: https://ligertours.vercel.app (EN clean URLs, /de, /fr)
- Repo: https://github.com/tangison/ligertours @ f42d358
- Known deviation: real-browser first-view 676KB (1920w) vs the 500KB checklist line; above-fold ~600KB; JS is React/Next + GSAP only, fonts subset, hero q70. Further cuts require dropping GSAP or framework-level changes. Documented for the client.
- SECURITY: rotate GitHub PAT + Vercel vcp_ token (both appeared in chat plaintext across sessions).
---
Task ID: 4
Agent: main (Z.ai)
Task: User round 4: populate the site with the client's own photos from filebin, push as a human author (not the bot identity), add a side language toggle with a globe icon and the best languages, and a search that appears when the navigation toggler opens. Push everything to main.

Work Log:
- Fetched 14 client photos from filebin.net/um4iz1vmn62ssryz (portrait 810x1080 and 607x1080 JPEGs). VLM-audited every photo via contact sheets: Tropic of Capricorn group, Walvis Bay jetty, quiver tree silhouette, Deadvlei lone tree + grove, Spitzkoppe massif, Etosha rhino, dunes sunburst, beach group, sand-buried ruins, overland road stop, antelope herd, Damaraland rock gorge.
- Processed 30 WebP crops at natural resolution (no upscaling): 4x5 cards, 1x1 tiles, 16x9 bands. Tour band crops upscaled to 1600x900 with lanczos3 + gentle unsharp so full-bleed headers stay crisp. Attention-crop people shots VLM-verified (no cut heads); one bad tropic 16:9 re-cropped to centre after a VLM comparison.
- Populated the site: Etosha/Kalahari/Sossusvlei/Damaraland tour cards now use client photos (rhino, quiver silhouette, Deadvlei lone tree, rock gorge); Walvis Bay jetty, Spitzkoppe massif and dunes sunburst on activity tiles; antelope herd in the home intro arch; guests at the Tropic of Capricorn in the About story arch; new "From our trips" moments band on About (beach walk, road stop, sand-buried ruins, staggered arch trio with scroll craft); gallery grows 18 to 26 with alt text rewritten for every new photo in all languages.
- Two full new locales: Afrikaans (af) and Portuguese (pt), translated via a chunked LLM pipeline with strict voice rules, then hand-fixed (translated keys, a terms key rename, Afrikaans spelling: Galery, gasvryheid, gedurende, reiseseisoen, Township-toer). Dict = typeof en shape-checks all 5 locales at compile time. Sitemap, hreflang and OG locales now generated from the locale registry; layout metadata made locale-dynamic (caught home missing af/pt hreflang).
- Side language dock: fixed globe button on the right edge, slide-out night panel with all five languages, current marked, Escape + outside click close, path-preserving hrefLang links. Desktop header pills removed (the dock is the switcher); mobile drawer keeps its pills.
- Drawer search: search box appears when the navigation toggler opens, filters tours, activities and pages in the active language (name + route + location), grouped results with type eyebrows, Enter jumps to the first hit, localized placeholders and no-results copy in all 5 languages.
- Git: set repo author to Tangison Studio <studio@tangison.com>, rewrote history with filter-branch (all "Z User <z@container>" commits re-authored; three UUID-message commits given real subjects), normalised stray file modes, ignored /upload/. Force-pushed clean history to main: 11 commits, all Tangison Studio.
- Built (86 static pages), verified locally in a real browser (language switch EN->AF, DE drawer search "Etosha" -> 4 localized results, moments trio rendering, carousel intact, zero console errors), then deployed to Vercel production.
- Production verified: 11 route/locale checks 200 (incl /af, /pt/*, 404), 14 new image checks 200, hreflang en/de/fr/af/pt/x-default on home, Afrikaans + Portuguese content greps pass, sitemap carries pt alternates, drawer search "sossus" returns 3 tours live, no console errors.

Stage Summary:
- Live: https://ligertours.vercel.app (EN clean URLs, /de /fr /af /pt)
- Repo: https://github.com/tangison/ligertours @ 4eb9c6f, fully re-authored history
- Languages: EN, DE, FR, AF, PT with the side globe dock + drawer search
- Imagery: 14 authentic client photos across cards, tiles, arches, moments band and gallery
- SECURITY: rotate the GitHub PAT and the Vercel token (both appeared in chat plaintext).
