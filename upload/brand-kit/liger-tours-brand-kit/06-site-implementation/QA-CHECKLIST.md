# QA checklist (agent must pass every line before reporting done)

## Brand
- [ ] Logo is never inside a white box, chip, pill, circle or card. Correct variant used for every background.
- [ ] Only files from `02-logos/` used, none redrawn or recoloured.
- [ ] Fonts are Kaushan Script, Archivo, Schibsted Grotesk only. No Inter, Figtree, Poppins, Roboto, system fonts as design fonts.
- [ ] Colours come from `tokens.css`. No olive/orange legacy palette, no sun-gradient bar, no raw hex in components.
- [ ] H1 is Kaushan Script. H2-H4 are Archivo. Body is Schibsted Grotesk.
- [ ] Text on photos always has the dusk overlay.
- [ ] Arch, sun discs, dune divider, headline lockup are used as specified.
- [ ] No AI-generated images. Every image listed in the licence log.
## Content
- [ ] No invented facts, prices, awards, reviews. Real content preserved.
- [ ] No em dashes. Banned words absent. Currency N$. Phone +264 81 472 2552.
- [ ] Every image has alt text from the manifest.
## Technical
- [ ] Mobile first. Tested at 375, 768, 1024, 1440. No horizontal scroll.
- [ ] Contrast 4.5:1 body, 3:1 large text. Focus rings visible. Keyboard navigable.
- [ ] `prefers-reduced-motion` respected.
- [ ] Images use webp, width and height set, hero eager, others lazy. Hero under 250KB.
- [ ] Lighthouse mobile: Performance 90+, Accessibility 95+, SEO 95+.
- [ ] Unique title and meta description per page. Open Graph image uses the primary logo on rose-200.
- [ ] Favicons from `02-logos/favicons/` wired in.
- [ ] Forms validate, show errors and a success state.
