import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto("http://localhost:3100/", { settleMs: 2500 });
const fn = () => {
  const pts = [[200,235],[200,240],[200,245],[200,248],[200,250],[200,255],[200,260],[200,264],[200,266],[200,270]];
  const style = document.createElement("style");
  style.textContent = "*, *::before, *::after { pointer-events: auto !important; }";
  document.head.appendChild(style);
  const out = pts.map(([x,y]) => {
    const hit = document.elementFromPoint(x, y);
    if (!hit) return { x, y, hit: "null" };
    return { x, y, tag: hit.tagName, cls: String(hit.className).slice(0, 50), txt: (hit.textContent || "").slice(0, 20) };
  });
  // also elementsFromPoint stack at the worst point
  const stack = document.elementsFromPoint(200, 248).map(e => e.tagName + "." + String(e.className).slice(0, 40)).slice(0, 6);
  style.remove();
  return { out, stack };
};
console.log(JSON.stringify(await page.eval(fn), null, 1));
await browser.close();
