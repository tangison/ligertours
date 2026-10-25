/* Contact sheets for the second free-hunt pass. */
const sharp = require("/home/z/my-project/node_modules/sharp");
const fs = require("fs");
const path = require("path");

const BASE = "/home/z/my-project/scripts/free-hunt2";
const OUT = path.join(BASE, "sheets");
fs.mkdirSync(OUT, { recursive: true });

const subjects = ["spitzkoppe2", "coast2", "nightsky2", "sundowner2"];
const CW = 360, CH = 270, LABEL_H = 40, COLS = 3;

async function sheet(subject) {
  const manifest = JSON.parse(fs.readFileSync(path.join(BASE, "manifest.json")));
  const items = (manifest[subject] || []).filter((it) => it.file);
  if (!items.length) { console.log(subject, "EMPTY"); return; }
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
      `<svg width="${CW}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#111"/><text x="12" y="28" font-size="22" fill="#fff" font-family="sans-serif">#${idx} ${String(it.license).slice(0, 12)} ${it.w}px</text></svg>`
    );
    composites.push({ input: label, left: col * CW, top: row * (CH + LABEL_H) + CH });
  }
  const canvas = sharp({
    create: { width: CW * COLS, height: (CH + LABEL_H) * rows, channels: 3, background: { r: 24, g: 24, b: 24 } },
  });
  await canvas.composite(composites).jpeg({ quality: 80 }).toFile(path.join(OUT, `${subject}-sheet.jpg`));
  console.log(subject, "sheet:", items.length);
}

(async () => {
  for (const s of subjects) await sheet(s);
})();
