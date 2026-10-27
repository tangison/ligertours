import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto("http://localhost:3100/faq", { settleMs: 2500 });
const fn = () => {
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width < 30 || r.height < 8) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || +cs.opacity < 0.3) continue;
    const l = Math.round(r.left), rr = Math.round(innerWidth - r.right);
    if (l <= 85 && rr <= 200 && rr >= 190) {
      out.push({ tag: el.tagName, cls: String(el.className).slice(0, 60), l, r: rr, txt: (el.textContent || "").slice(0, 40) });
    }
  }
  const widest = [];
  for (const el of document.querySelectorAll("p, h1, h2, h3, li, blockquote")) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || +cs.opacity < 0.3) continue;
    widest.push({ tag: el.tagName, cls: String(el.className).slice(0, 40), l: Math.round(r.left), rEnd: Math.round(r.right), w: Math.round(r.width) });
  }
  widest.sort((a, b) => b.rEnd - a.rEnd);
  return { nearMiss: out.slice(0, 6), widest: widest.slice(0, 6) };
};
console.log(JSON.stringify(await page.eval(fn), null, 1));
await browser.close();
