/* Find the two mobile blank gaps: 804px at ~10976 and 1508px at ~12016 (390px viewport).
   Dumps section rects plus what is visible at each gap. */
import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";

const browser = await Browser.launch({ width: 390, height: 844 });
const page = await browser.newPage({ width: 390, height: 844, mobile: true });
await page.goto("http://localhost:3100/", { settleMs: 2500 });

const fn = () => {
  const out = { total: document.body.scrollHeight, sections: [], gaps: [] };
  for (const el of document.querySelectorAll("section, header, footer, [aria-label]")) {
    const r = el.getBoundingClientRect();
    const top = r.top + window.scrollY;
    if (r.height < 40) continue;
    out.sections.push({
      tag: el.tagName,
      aria: (el.getAttribute("aria-label") || "").slice(0, 30),
      cls: String(el.className).slice(0, 60),
      top: Math.round(top),
      h: Math.round(r.height),
    });
  }
  const at = (y) => {
    window.scrollTo(0, y);
    return new Promise((res) => setTimeout(() => {
      const mid = 844 / 2;
      const stack = document.elementsFromPoint(195, mid).slice(0, 5).map((e) => e.tagName + "." + String(e.className).slice(0, 50));
      const filled = [];
      for (let gy = 0; gy < 8; gy++) {
        const yy = (gy + 0.5) * (844 / 8);
        const el = document.elementFromPoint(195, yy);
        filled.push(yy.toFixed(0) + ":" + (el ? el.tagName + "." + String(el.className).slice(0, 30) : "null"));
      }
      res({ at: y, stack, filled });
    }, 250));
  };
  return out;
};

const secs = await page.eval(fn);
console.log(JSON.stringify(secs, null, 1));
await browser.close();
