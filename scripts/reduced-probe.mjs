import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
import { layout } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/probe.mjs";

const browser = await Browser.launch({ width: 390, height: 844 });
const page = await browser.newPage({ width: 390, height: 844, mobile: true, reducedMotion: true });
await page.goto("http://localhost:3100/", { settleMs: 3000 });
const L = await page.eval(layout);
console.log(JSON.stringify({ pageH: L.pageH, gaps: L.gaps, h1s: L.h1s.map((h) => h.text), edge: L.edgeText && L.edgeText.length }, null, 1));
await browser.close();
