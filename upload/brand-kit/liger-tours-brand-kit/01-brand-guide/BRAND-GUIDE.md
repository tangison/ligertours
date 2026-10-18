# Liger Tours Namibia: Brand Guide

Tokens live in `03-tokens/`. This file explains how to use them. If something is not here, do not invent it.

## 1. Logo

Files are in `02-logos/`. Always use the supplied PNG files. Never redraw, retype, trace or recolour the logo.

| Situation | File |
|---|---|
| Light or blush background (default) | `light-bg/liger-tours-primary-rose.png` |
| Dark background (night, rose-700, rose-800, photo with overlay) | `dark-bg/liger-tours-on-dark.png` |
| Original orange version, white or very light surface, print only | `light-bg/liger-tours-original-orange.png` |
| One-colour use (stamps, embroidery, watermark) | `mono/*` |
| Small spaces, avatars, social profile | `icons/liger-icon-*` |
| Wordmark only (header when tree icon would be too small) | `icons/liger-wordmark-*` |
| Favicon / app icon | `favicons/*` |

Use the `-800w` file on the web (2x on retina is still fine). Use the full-size file for print.

**Clear space:** keep empty space around the logo equal to the height of the tree canopy divided by 3. Nothing enters this zone.
**Minimum size:** full logo 140px wide on screen (35mm in print). Icon alone 32px. Below 140px switch to the icon or wordmark.

### Logo rules (never break)
1. NEVER place the logo in a white box, chip, pill, card, circle or any container to "make it readable". Pick the correct variant for the background instead.
2. NEVER put the logo on a busy photo. Use a dark overlay (`--overlay-dusk`) and the on-dark variant, or move it to a flat area.
3. NEVER stretch, squash, rotate, skew, outline, add shadow, glow, bevel or gradient.
4. NEVER recolour outside the supplied variants. NEVER use the dark logo on dark backgrounds or the cream logo on light backgrounds.
5. NEVER separate "Liger Tours" from "Namibia" or rebuild the lockup. Use the supplied wordmark file.
6. NEVER crop the tree canopy or the ground line.
7. NEVER use the logo as a repeated pattern or animate it (a fade-in at 480ms is the only allowed motion).
8. NEVER use the original orange logo on rose or photographic backgrounds.
9. NEVER typeset the brand name in a different font in place of the logo. Text mentions of the name use Archivo.

## 2. Colour

Rose is the brand. Use the semantic tokens (`--brand`, `--bg`, `--ink`) in components, not raw hex.

| Token | Hex | Use |
|---|---|---|
| bg / rose-50 | #FBF4F2 | Default page background |
| surface-alt / rose-100 | #F6E8E4 | Alternate sections |
| surface-tint / rose-200 | #F0DAD5 | Feature panels, arch backgrounds, large tint areas |
| rose-300 | #E3C3BE | Borders, dividers |
| rose-400 Petal Grove | #CDA9A4 | Sun discs, arch outline, decorative |
| rose-500 Deep Blush | #B58B88 | Decorative only |
| rose-600 Sunset Rose | #996660 | Large display text only (4.4:1) |
| rose-700 Uluru Sunset / brand | #744642 | Buttons, links, headings accent |
| rose-800 / brand-hover | #523431 | Hover, strong panels |
| rose-900 / ink | #2F1E1C | Body text |
| ink-muted | #6B5450 | Secondary text |
| night | #1F1613 | Dark sections, footer |
| acacia | #483E22 | Logo tree colour. Focus ring on light. Minimal use elsewhere |
| sunrise | #F58A3A | Tiny accents on dark only (focus ring, small highlight). Never text on light |
| sun | #F8C808 | Logo only. Do not use in UI |

Landscape colours (`--land-*`) are sampled from the photos. Use for charts, map pins and illustrations only.

Contrast (checked): ink on bg 14.6:1, brand on bg 7.2:1, white on brand 7.8:1, rose-200 on night 13.3:1. Body text must be 4.5:1 or better, large text 3:1.

Proportion per screen: about 60% bg/rose-50 and rose-100, 25% photography, 10% brand rose-700/night, 5% accents.

## 3. Typography

Three families, all free (SIL OFL), files in `04-typography/fonts/`.

| Role | Font | Notes |
|---|---|---|
| H1 / hero | **Kaushan Script** | Brush script that echoes the logo lettering. Large sizes only (never below 40px). Sentence case. Never bold, never italic, never uppercase, never letter-spaced |
| H2, H3, H4, labels, nav, buttons | **Archivo** (variable width and weight) | Wide (115-125) and heavy (700-800) for impact. Uppercase only for eyebrows, labels, buttons |
| Body, captions, forms | **Schibsted Grotesk** | 400 regular, 600 for emphasis |

Do NOT use Inter, Poppins, Figtree, Roboto, Open Sans, DM Sans, Space Grotesk, Montserrat or system fonts as design fonts.

Roles and sizes are in `04-typography/fonts.css` (`.t-hero`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-h4`, `.t-eyebrow`, `.t-lead`, `.t-body`, `.t-small`, `.t-button`). All sizes are fluid and defined in tokens.

Hero pattern ("headline lockup"): small Archivo uppercase kicker above one script phrase. Example: kicker `GUIDED BY LOCALS`, script `Namibia, unhurried.`

Rules: one script headline per screen. Maximum line length 62 characters for body. Left-align body. Heading to body gap 16-24px. Never centre more than 3 lines of text. No text smaller than 14px except uppercase labels at 12px.

## 4. Spacing and layout

4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192 (`--space-1` to `--space-11`).
Sections: vertical padding `--section-y` (72px mobile to 152px desktop). Container 1280px, narrow 760px. Gutter 16px mobile to 32px desktop. 12-column grid, 24px gap.
Breakpoints: 480, 768, 1024, 1280, 1536. Design mobile first.
Generous space is the luxury signal. When unsure, add space, do not add elements.
Radius: 6, 12, 24, pill 999, arch (top rounded).

## 5. Signature devices

1. **Arch**: photos in arch masks (4:5) with a thin rose-400 offset outline. Use for tours, about, gallery highlights.
2. **Sun discs**: two overlapping rose circles, partly hidden behind a photo. Maximum 2 per viewport.
3. **Dune divider**: curved section transition (`07-graphic-elements/dune-divider-*.svg`), coloured as the next section.
4. **Headline lockup**: Archivo kicker plus script phrase.

Files and CSS: `07-graphic-elements/`, `06-site-implementation/components-reference.css`.

## 6. Photography

Photography is the hero of this brand. Rules:
- Use only the supplied photos in `05-imagery/` or photos pulled from properly licensed sources and logged in `05-imagery/image-license-log.csv`. Never generate or AI-create images.
- Full-bleed heroes 16:9 or wider. Cards 4:5. Gallery 1:1 and 4:5 mixed.
- Text on photos always sits on `--overlay-dusk`.
- No filters, no frames, no stickers, no stock-style people poses.
- Alt text on every image (see `05-imagery/IMAGE-MANIFEST.md`).
- Never use an image under 1200px wide as a hero. Never upscale.

## 7. Voice

Confident, warm, specific, local. Short sentences. Name real places, durations and what the guest actually does. Banned words: unforgettable, breathtaking, unleash, journey of a lifetime, hidden gem, immerse yourself, nestled, bucket list, seamless. No em dashes. Currency N$. Phone format +264 81 472 2552.

## 8. Components

Buttons are pills in Archivo uppercase, 52px tall, primary = brand fill, secondary = outline. One primary button per section. Button copy is a verb: "Plan my trip", "WhatsApp us", "View the tour". Never "Click here" or "Learn more".
Focus ring 3px acacia on light, sunrise on dark. Every interactive element has hover, focus and active states.

## 9. Motion

Ease `cubic-bezier(.22,1,.36,1)`. Durations 120 / 240 / 480 / 800ms. Allowed: fade-up reveal on scroll (24px, 480ms, 80ms stagger), slow image scale on card hover (1.04), hero parallax at max 12%. Respect `prefers-reduced-motion`. Nothing loops, nothing bounces.
