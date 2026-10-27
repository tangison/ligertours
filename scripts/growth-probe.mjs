import { Browser } from "/tmp/skills-use-CiGyU9/design-taste-frontend/scripts/lib/cdp.mjs";
const browser = await Browser.launch({ width: 390, height: 844 });
const page = await browser.newPage({ width: 390, height: 844, mobile: true });
await page.goto("http://localhost:3100/", { settleMs: 2500 });
const h0 = await page.eval(() => ({ h: document.body.scrollHeight, sections: [...document.querySelectorAll("main > *, footer, section")].map((s) => ({ tag: s.tagName, cls: String(s.className).slice(0, 40), top: Math.round(s.getBoundingClientRect().top + scrollY), h: Math.round(s.getBoundingClientRect().height) })) }));
await page.eval(async () => { for (let y = 0; y <= document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } await new Promise((r) => setTimeout(r, 800)); window.scrollTo(0, 0); await new Promise((r) => setTimeout(r, 500)); });
const h1 = await page.eval(() => ({ h: document.body.scrollHeight, sections: [...document.querySelectorAll("main > *, footer, section")].map((s) => ({ tag: s.tagName, cls: String(s.className).slice(0, 40), top: Math.round(s.getBoundingClientRect().top + scrollY), h: Math.round(s.getBoundingClientRect().height) })) }));
console.log("H0", h0.h, "-> H1", h1.h, "growth", h1.h - h0.h);
const a = new Map(h0.sections.map((s) => [s.cls + s.tag, s]));
for (const s of h1.sections) {
  const b = a.get(s.cls + s.tag);
  if (!b) { console.log("NEW", s.tag, s.cls, "top", s.top, "h", s.h); continue; }
  if (Math.abs(b.h - s.h) > 40 || Math.abs(b.top - s.top) > 60) console.log("GREW", s.tag, s.cls.slice(0, 38), "top", b.top, "->", s.top, "h", b.h, "->", s.h, "delta", s.h - b.h);
}
await browser.close();
