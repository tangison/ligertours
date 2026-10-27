import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto("http://localhost:3100/faq", { settleMs: 2500 });
const fn = () => {
  const rows = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 4) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || +cs.opacity < 0.3) continue;
    const w = r.right - r.left;
    if (w >= innerWidth * 0.97 || r.left < -1 || r.right > innerWidth + 1) continue;
    // leaf-ish boxes only: no children inside viewport
    const hasKid = [...el.children].some((k) => { const kr = k.getBoundingClientRect(); return kr.width > 4 && kr.height > 4; });
    if (hasKid) continue;
    rows.push({ l: Math.round(r.left), r: Math.round(r.right), tag: el.tagName, cls: String(el.className).slice(0, 46), txt: (el.textContent || "").trim().slice(0, 24) });
  }
  const rights = rows.map((b) => b.r).sort((a, b) => a - b);
  const pct98 = rights.length ? rights[Math.floor(rights.length * 0.98)] : null;
  const near = rows.filter((b) => b.r >= (pct98 ?? 0) - 4 && b.r <= (pct98 ?? 0) + 4).slice(0, 8);
  return { count: rows.length, pct98, lefts2: rows.map((b) => b.l).sort((a, b) => a - b).slice(0, 3), near };
};
console.log(JSON.stringify(await page.eval(fn), null, 1));
await browser.close();
