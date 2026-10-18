# Prompt for the website agent (copy everything below into the agent)

You are rebuilding the front end of the Liger Tours Namibia website to a new brand identity. The identity kit is in the folder `liger-tours-brand-kit` (unzip it into the project, e.g. `/brand-kit`). The kit is the single source of truth. Read these files completely BEFORE writing any code, in this order:

1. `01-brand-guide/BRAND-GUIDE.md`
2. `03-tokens/tokens.css` (and `tokens.json`)
3. `04-typography/fonts.css` and the font files in `04-typography/fonts/`
4. `06-site-implementation/PAGE-SPECS.md`
5. `06-site-implementation/components-reference.css`
6. `05-imagery/IMAGE-MANIFEST.md`
7. `07-graphic-elements/README.md`
8. `06-site-implementation/QA-CHECKLIST.md`

What to do:
- Replace the current design system entirely. The previous palette (olive #473E21 and orange #FC8D40), the sun-gradient top bar, Figtree and the logo-in-a-chip are retired. Delete them, do not keep them as fallback.
- Install the tokens from `tokens.css` as the only colour, type, spacing, radius, shadow and motion values. Self-host the three fonts (Kaushan Script, Archivo, Schibsted Grotesk) from the supplied woff2 files.
- Copy `02-logos`, `05-imagery` and `07-graphic-elements` into the project's public assets and use ONLY those logo files. Choose the logo variant by background as the guide says. NEVER put the logo in a white box, chip, pill or circle. Never recolour, redraw or restyle it.
- Rebuild every page in PAGE-SPECS.md in the section order given. Keep all existing real content (tours, activities, about story, testimonials, contacts) and routes. Do not invent anything. Follow the voice rules.
- Images: use the supplied images from `05-imagery` and the crops provided. You pull images, you never generate them. Do not create, edit or AI-generate any image. If you need more photos, pull properly licensed ones (client photos first, then Unsplash, Pexels, Pixabay, Wikimedia Commons), put them in `05-imagery/web/`, and record every one in `image-license-log.csv`. Never take images from other operators' websites, Google Images or Pinterest.
- Build the signature devices (arch frames, sun discs, dune dividers, headline lockup) exactly as specified. Use scroll reveals, hero parallax and card hover as the motion guide allows, nothing else.
- Mobile first. Check 375, 768, 1024 and 1440 widths in a real browser and fix what breaks.
- Do not change hosting, repo, domain, SEO shield settings or anything outside the front-end look and content structure unless asked.
- When finished, run every line of QA-CHECKLIST.md, fix failures, then report: what changed, the checklist results, and the preview URL. Do not report done with unchecked lines.

If any instruction conflicts with something already in the project, the kit wins. If something is missing from the kit, ask instead of inventing it.
