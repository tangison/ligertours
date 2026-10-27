/* Pin down the two mobile blank gaps the inspector reports (804px@10976, 1508px@12016).
   Loads the page fully, then examines viewports at the gap positions. */
import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";

const browser = await Browser.launch({ width: 390, height: 844 });
const page = await browser.newPage({ width: 390, height: 844, mobile: true });
await page.goto("http://localhost:3100/", { settleMs: 3000 });
// force lazy content by walking the page once
await page.eval(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 700) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 800));
});

const fn = (positions) => {
  const describe = () => {
    const rows = [];
    for (let gy = 0; gy < 7; gy++) {
      const yy = Math.round((gy + 0.5) * (innerHeight / 7));
      const hits = document.elementsFromPoint(195, yy).slice(0, 4).map((e) => {
        const cs = getComputedStyle(e);
        return e.tagName + "." + String(e.className).slice(0, 44) + " bg=" + (cs.backgroundColor === "rgba(0, 0, 0, 0)" ? "-" : cs.backgroundColor);
      });
      rows.push(yy + " -> " + hits.join(" | "));
    }
    return rows;
  };
  const seq = async () => {
    const out = [];
    for (const y of positions) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 700));
      out.push({ y, rows: describe() });
    }
    return out;
  };
  return seq();
};

const res = await page.eval(fn, [10976, 12016]);
console.log(JSON.stringify(res, null, 1));
await browser.close();
