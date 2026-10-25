/* Re-translate chunk 5 as two halves (tours / activities) for af + pt. */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

const SRC = "/home/z/my-project/src/lib/content/en.ts";
const OUT = "/home/z/my-project/upload/i18n";

const RULES = `You are a professional tourism website translator for Liger Tours Namibia, a locally owned Windhoek safari company.

Translate the TypeScript chunk below from English into {LANG}. Return ONLY the translated TypeScript code, no fences, no commentary.

HARD RULES:
1. Translate ONLY human-readable string VALUES. Keep every key, path ("/tours", "/imagery/crops/..."), slug, URL, placeholder template ({n}, {name}, {alt}), type assertion ("as Tour[]"), comment, and the code structure EXACTLY as given. File paths inside strings stay untouched.
2. Keep phone (+264 ...), currency (N$), brand names (Liger Tours Namibia, Namibia Tourism Board, NTB, WhatsApp, Vercel, Cloudflare), and ALL image src values untouched.
3. Voice: warm, plain, factual. NO exclamation marks. NO em dashes. No hype words like "unforgettable", "breathtaking", "paradise", "hidden gem". Never invent facts, durations or prices.
4. Register: formal address of the guest ({REGISTER}). Sentence case for headings. Keep HTML entities (&middot;) as-is.
5. The variables company.phone / company.email inside template literals stay exactly as \${company.phone} etc. Translate only the surrounding words.
6. Numbers and dates keep their formats.
7. TypeScript backtick template literals: keep backticks. Apostrophes inside single-quoted strings: escape if needed.
8. alt texts: describe exactly what is visible in the photo, in natural {LANG}. Tour/activity alt text must stay precise and factual.

Translate now, return only code:`;

const langs = [
  { code: "af", label: "Afrikaans", register: "use the formal \"u\" for the guest, natural Namibian tourism Afrikaans" },
  { code: "pt", label: "European Portuguese", register: "use \"voc\u00ea\" sparingly and formal constructions, European Portuguese (pt-PT) conventions" },
];

/* tours: lines 736-886, activities: lines 887-1009 */
const parts = [
  ["5a", 736, 886],
  ["5b", 887, 1009],
];

const lines = fs.readFileSync(SRC, "utf8").split("\n");

(async () => {
  const zai = await ZAI.create();
  for (const lang of langs) {
    for (const [tag, a, b] of parts) {
      const outPath = `${OUT}/${lang.code}/chunk${tag}.txt`;
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 200) {
        console.log(lang.code, tag, "cached");
        continue;
      }
      const slice = lines.slice(a - 1, b).join("\n");
      const rules = RULES.replaceAll("{LANG}", lang.label).replaceAll("{REGISTER}", lang.register);
      let done = false;
      for (let attempt = 1; attempt <= 4 && !done; attempt++) {
        try {
          const r = await zai.chat.completions.create({
            messages: [{ role: "user", content: `${rules}\n\n${slice}` }],
            thinking: { type: "disabled" },
            max_tokens: 16000,
          });
          const text = r.choices[0]?.message?.content ?? "";
          if (!text || text.length < slice.length * 0.45) throw new Error("short output");
          fs.writeFileSync(outPath, text);
          console.log(lang.code, tag, "OK", text.length);
          done = true;
        } catch (e) {
          console.log(lang.code, tag, "attempt", attempt, "FAIL", e.message);
          await new Promise((r) => setTimeout(r, 4000));
        }
      }
      if (!done) process.exit(1);
    }
  }
  console.log("done");
})();
