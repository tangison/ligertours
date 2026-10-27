import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
import { layout } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/probe.mjs";

const browser = await Browser.launch({ width: 390, height: 844 });
const page = await browser.newPage({ width: 390, height: 844, mobile: true });
await page.goto("http://localhost:3100/", { settleMs: 3000 });
await page.eval(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 70)); }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 900));
});
const L = await page.eval(layout);
console.log("pageH:", L.pageH, "gaps:", JSON.stringify(L.gaps));
// now inspect what occupies (or not) the gap regions
const fn = (gaps) => {
  const out = [];
  for (const g of gaps) {
    window.scrollTo(0, g.top);
    const rows = [];
    for (let i = 0; i < 5; i++) {
      const yAbs = g.top + (g.height / 5) * (i + 0.5);
      const yView = yAbs - window.scrollY;
      const hits = document.elementsFromPoint(195, yView).slice(0, 3).map((e) => {
        const cs = getComputedStyle(e);
        return e.tagName + "." + String(e.className).slice(0, 40) + " op=" + cs.opacity;
      });
      rows.push(yAbs.toFixed(0) + " -> " + (hits.join(" | ") || "NOTHING"));
    }
    out.push({ gap: g, rows });
  }
  return out;
};
console.log(JSON.stringify(await page.eval(fn, L.gaps), null, 1));
await browser.close();
