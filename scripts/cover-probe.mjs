/* Probe: why does the inspector report "GUIDED BY LOCALS" 100% covered at screen 1?
   Mirrors probe.frame()'s hit-test for the .hero-kicker element across scroll steps. */
import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";

const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto("http://localhost:3100/", { settleMs: 2500 });

const pageProbe = (step) => {
  window.scrollTo(0, step * 450);
  return new Promise((res) => setTimeout(() => {
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { pointer-events: auto !important; }";
    document.head.appendChild(style);
    const el = document.querySelector(".hero-kicker");
    if (!el) { style.remove(); return res({ step, scrollY: window.scrollY, gone: "no .hero-kicker in DOM" }); }
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (+cs.opacity < 0.3 || cs.visibility === "hidden" || r.bottom < 0 || r.top > innerHeight) {
      style.remove();
      return res({ step, scrollY: window.scrollY, skip: "opacity=" + cs.opacity + " top=" + Math.round(r.top) + " bottom=" + Math.round(r.bottom) });
    }
    const range = document.createRange();
    range.selectNodeContents(el);
    const hits = [];
    let total = 0, hidden = 0;
    for (const rect of range.getClientRects()) {
      for (const dy of [-0.2, 0.2]) for (const fx of [0.12, 0.37, 0.63, 0.88]) {
        const x = rect.left + rect.width * fx, y = rect.top + rect.height * 0.55 + rect.height * dy;
        if (x < 0 || x >= innerWidth || y < 0 || y >= innerHeight) continue;
        total++;
        const hit = document.elementFromPoint(x, y);
        if (hit && hit !== el && !el.contains(hit) && !hit.contains(el)) {
          hidden++;
          if (hits.length < 4) {
            const h = hit.getBoundingClientRect();
            const p = getComputedStyle(hit);
            hits.push({
              tag: hit.tagName,
              cls: String(hit.className && hit.className.baseVal !== undefined ? hit.className.baseVal : hit.className).slice(0, 90),
              paint: p.backgroundImage !== "none" ? p.backgroundImage.slice(0, 70) : p.backgroundColor,
              rect: "t" + Math.round(h.top) + " b" + Math.round(h.bottom) + " l" + Math.round(h.left) + " r" + Math.round(h.right),
            });
          }
        }
      }
    }
    style.remove();
    res({ step, scrollY: window.scrollY, kickerTop: Math.round(r.top), total, hidden, hits });
  }, 350));
};

const out = [];
for (let s = 0; s <= 14; s++) {
  out.push(await page.eval(pageProbe, s));
}
console.log(JSON.stringify(out, null, 1));
await browser.close();
