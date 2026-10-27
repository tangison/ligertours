import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto("http://localhost:3100/", { settleMs: 2500 });
const fn = () => {
  const el = document.querySelector(".hero-kicker");
  const h1 = document.querySelector("h1");
  const range = document.createRange(); range.selectNodeContents(el);
  const krects = [...range.getClientRects()].map(r => ({ t: +r.top.toFixed(1), b: +r.bottom.toFixed(1), l: +r.left.toFixed(1), rr: +r.right.toFixed(1) }));
  const ke = el.getBoundingClientRect();
  const spans = [...h1.querySelectorAll(".w")].map(s => { const r = s.getBoundingClientRect(); const cs = getComputedStyle(s); return { txt: s.textContent, t: +r.top.toFixed(1), b: +r.bottom.toFixed(1), l: +r.left.toFixed(1), rr: +r.right.toFixed(1), lh: cs.lineHeight, fs: cs.fontSize, tr: cs.transform }; });
  const h1r = h1.getBoundingClientRect(); const h1cs = getComputedStyle(h1);
  return { kicker: { t: +ke.top.toFixed(1), b: +ke.bottom.toFixed(1), lh: getComputedStyle(el).lineHeight, fs: getComputedStyle(el).fontSize }, krects, h1: { t: +h1r.top.toFixed(1), b: +h1r.bottom.toFixed(1), lh: h1cs.lineHeight, fs: h1cs.fontSize }, spans: spans.slice(0, 3) };
};
console.log(JSON.stringify(await page.eval(fn), null, 1));
await browser.close();
