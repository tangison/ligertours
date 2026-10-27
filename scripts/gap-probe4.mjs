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
const map = [];
for (const g of L.gaps) {
  const owners = L.sections.filter((s) => s.top < g.top + g.height && s.top + s.height > g.top)
    .map((s) => `${s.tag} '${(s.heading && s.heading.text) || s.sel}'.slice0-30 top=${s.top} h=${s.height} words=${s.words} media=${s.media}`);
  map.push({ gap: g, owners });
}
console.log(JSON.stringify({ pageH: L.pageH, map }, null, 1));
await browser.close();
