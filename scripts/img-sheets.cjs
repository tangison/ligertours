/* Contact sheets: one 3x2 grid per subject with index labels, for visual QA. */
const sharp = require("/home/z/my-project/node_modules/sharp");
const fs = require("fs");
const path = require("path");

const BASE = "/home/z/my-project/scripts/img-hunt";
const OUT = path.join(BASE, "sheets");
fs.mkdirSync(OUT, { recursive: true });

const subjects = [
  "elephants", "quivertree", "canyon", "flamingos", "spitzkoppe",
  "coast", "nightsky", "windhoek", "potjie", "sundowner", "kalahari",
];

const CW = 360, CH = 270, LABEL_H = 40, COLS = 3;

async function sheet(subject) {
  const manifest = JSON.parse(fs.readFileSync(path.join(BASE, "manifest.json")));
  const items = manifest[subject].filter((it) => it.file);
  const rows = Math.ceil(items.length / COLS);
  const canvas = sharp({
    create: {
      width: CW * COLS,
      height: (CH + LABEL_H) * rows,
      channels: 3,
      background: { r: 24, g: 24, b: 24 },
    },
  });
  const composites = [];
  for (let idx = 0; idx < items.length; idx++) {
    const it = items[idx];
    const col = idx % COLS, row = Math.floor(idx / COLS);
    try {
      const buf = await sharp(it.file)
        .resize(CW, CH, { fit: "cover" })
        .jpeg({ quality: 78 })
        .toBuffer();
      composites.push({ input: buf, left: col * CW, top: row * (CH + LABEL_H) });
    } catch (e) { /* skip unreadable */ continue; }
    const label = Buffer.from(
      `<svg width="${CW}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#111"/><text x="12" y="28" font-size="26" fill="#fff" font-family="sans-serif">#${it.i} ${it.src.slice(0, 22)}</text></svg>`
    );
    composites.push({ input: label, left: col * CW, top: row * (CH + LABEL_H) + CH });
  }
  await canvas.composite(composites).jpeg({ quality: 80 }).toFile(path.join(OUT, `${subject}-sheet.jpg`));
  console.log(subject, "sheet done");
}

(async () => {
  for (const s of subjects) await sheet(s);
})();
