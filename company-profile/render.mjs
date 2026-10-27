/* Render the company profile HTML to a pixel-precise A4 PDF via headless Chrome.
   scale: 1.0 per the company-profile standard; printBackground on; no headers/footers. */
import puppeteer from "puppeteer-core";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] || path.join(__dirname, "..", "download", "Liger-Tours-Namibia-Company-Profile.pdf");

const browser = await puppeteer.launch({
  executablePath: "/home/z/.cache/puppeteer/chrome/linux-155.0.8059.39/chrome-linux64/chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
});
const page = await browser.newPage();
await page.goto("file://" + path.join(__dirname, "index.html"), { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await new Promise((r) => setTimeout(r, 600));

const pages = await page.$$eval(".page", (els) => els.length);
console.log("pages found:", pages);

await page.pdf({
  path: out,
  width: "210mm",
  height: "297mm",
  printBackground: true,
  scale: 1.0,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
console.log("PDF written:", out);
await browser.close();
