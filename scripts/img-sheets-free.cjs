/* Contact sheets for FREE-license candidates (cc0/pdm/by/by-sa only). */
const sharp = require("/home/z/my-project/node_modules/sharp");
const fs = require("fs");
const path = require("path");

const BASE = "/home/z/my-project/scripts/free-hunt";
const OUT = path.join(BASE, "sheets");
fs.mkdirSync(OUT, { recursive: true });

const subjects = [
  "elephants", "quivertree", "canyon", "spitzkoppe", "coast",
  "nightsky", "windhoek", "potjie", "sundowner",
];

const usable = (lic) => {
  const l = (lic || "").toLowerCase();
  return l.startsWith("cc0") || l.startsWith("pdm") ||
    /\bby[- ][0-9]/.test(l) || /by-sa/.test(l) || l === "cc by 2.0" || l === "cc by-sa 2.0";
};

const CW = 360, CH = 270, LABEL_H = 40, COLS = 3;

async function sheet(subject) {
  const manifest = JSON.parse(fs.readFileSync(path.join(BASE, "manifest.json")));
  const items = (manifest[subject] || []).filter(
    (it) => it.file && usable(it.license)
  );
  if (!items.length) { console.log(subject, "NO USABLE"); return; }
  const rows = Math.ceil(items.length / COLS);
  const composites = [];
  for (let idx = 0; idx < items.length; idx++) {
    const it = items[idx];
    const col = idx % COLS, row = Math.floor(idx / COLS);
    try {
      const buf = await sharp(it.file).resize(CW, CH, { fit: "cover" }).jpeg({ quality: 78 }).toBuffer();
      composites.push({ input: buf, left: col * CW, top: row * (CH + LABEL_H) });
    } catch (e) { continue; }
    const label = Buffer.from(
      `<svg width="${CW}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#111"/><text x="12" y="28" font-size="24" fill="#fff" font-family="sans-serif">#${idx} ${String(it.license).slice(0, 10)} ${String(it.provider).replace("openverse/", "").slice(0, 14)} ${it.w}px</text></svg>`
    );
    composites.push({ input: label, left: col * CW, top: row * (CH + LABEL_H) + CH });
  }
  const canvas = sharp({
    create: { width: CW * COLS, height: (CH + LABEL_H) * rows, channels: 3, background: { r: 24, g: 24, b: 24 } },
  });
  await canvas.composite(composites).jpeg({ quality: 80 }).toFile(path.join(OUT, `${subject}-free.jpg`));
  console.log(subject, "sheet:", items.length, "usable");
}

(async () => {
  for (const s of subjects) await sheet(s);
})();
