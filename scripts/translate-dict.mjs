/* Chunked LLM translation of en.ts into Afrikaans and Portuguese.
   Rules enforced in the prompt; output assembled into af.ts / pt.ts. */

import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

const SRC = "/home/z/my-project/src/lib/content/en.ts";
const OUT = "/home/z/my-project/upload/i18n";

/* Line ranges (1-based, inclusive) at section boundaries. */
const chunks = [
  [1, 130],    // header + meta + a11y + nav + search + langDock + header + footer + hero
  [131, 294],  // home + toursPage + tourDetail + activitiesPage
  [295, 480],  // aboutPage + galleryPage
  [481, 606],  // contactPage + form + notFound + errorPage + brandPage
  [607, 735],  // privacy + terms + testimonials
  [736, 1009], // tours + activities + closing
];

const RULES = `You are a professional tourism website translator for Liger Tours Namibia, a locally owned Windhoek safari company.

Translate the TypeScript chunk below from English into {LANG}. Return ONLY the translated TypeScript code, no fences, no commentary.

HARD RULES:
1. Translate ONLY human-readable string VALUES. Keep every key, path ("/tours", "/imagery/crops/..."), slug, URL, placeholder template ({n}, {name}, {alt}), type assertion ("as Tour[]"), comment, and the code structure EXACTLY as given. File paths inside strings stay untouched.
2. Keep phone (+264 ...), currency (N$), brand names (Liger Tours Namibia, Namibia Tourism Board, NTB, WhatsApp, Vercel, Cloudflare), park names that read better localised when the locale already has a standard exonym, and ALL image src values untouched.
3. Voice: warm, plain, factual. NO exclamation marks. NO em dashes. No hype words like "unforgettable", "breathtaking", "paradise", "hidden gem". Never invent facts, durations or prices.
4. Register: formal address of the guest ({REGISTER}). Sentence case for headings. Keep HTML entities (&middot;) as-is.
5. The variables company.phone / company.email inside template literals stay exactly as \${company.phone} etc. Translate only the surrounding words.
6. Numbers and dates keep their formats.
7. TypeScript backtick template literals: keep backticks. Apostrophes inside single-quoted strings: escape if needed.
8. alt texts: describe exactly what is visible in the photo, in natural {LANG}. Gallery/tour/activity alt text must stay precise and factual.

Translate now, return only code:`;

const langs = [
  { code: "af", label: "Afrikaans", register: "use the formal \"u\" for the guest, natural Namibian tourism Afrikaans" },
  { code: "pt", label: "European Portuguese", register: "use \"voc\u00ea\" sparingly and formal constructions, European Portuguese (pt-PT) conventions" },
];

const lines = fs.readFileSync(SRC, "utf8").split("\n");

(async () => {
  const zai = await ZAI.create();
  for (const lang of langs) {
    fs.mkdirSync(`${OUT}/${lang.code}`, { recursive: true });
    const rules = RULES.replaceAll("{LANG}", lang.label).replaceAll("{REGISTER}", lang.register);
    for (let i = 0; i < chunks.length; i++) {
      const [a, b] = chunks[i];
      const slice = lines.slice(a - 1, b).join("\n");
      const outPath = `${OUT}/${lang.code}/chunk${i}.txt`;
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 100) {
        console.log(lang.code, "chunk", i, "cached");
        continue;
      }
      let done = false;
      for (let attempt = 1; attempt <= 3 && !done; attempt++) {
        try {
          const r = await zai.chat.completions.create({
            messages: [
              { role: "user", content: `${rules}\n\n${slice}` },
            ],
            thinking: { type: "disabled" },
          });
          const text = r.choices[0]?.message?.content ?? "";
          if (!text || text.length < slice.length * 0.5) throw new Error("suspiciously short");
          fs.writeFileSync(outPath, text);
          console.log(lang.code, "chunk", i, "OK", text.length, "chars");
          done = true;
        } catch (e) {
          console.log(lang.code, "chunk", i, "attempt", attempt, "FAIL", e.message);
          await new Promise((r) => setTimeout(r, 4000));
        }
      }
      if (!done) {
        console.error("GAVE UP", lang.code, i);
        process.exit(1);
      }
    }
  }
  console.log("all chunks done");
})();
