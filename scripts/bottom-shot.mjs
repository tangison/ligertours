import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
const browser = await Browser.launch({ width: 390, height: 844 });
const page = await browser.newPage({ width: 390, height: 844, mobile: true });
await page.goto("http://localhost:3100/", { settleMs: 2500 });
await page.eval(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); }
  await new Promise((r) => setTimeout(r, 600));
});
await page.screenshot({ path: ".taste-skill/after/bottom-full.jpg", format: "jpeg", quality: 70, fullPage: true });
console.log("shot saved");
await browser.close();
