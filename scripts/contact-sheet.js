const sharp = require('/home/z/my-project/node_modules/sharp');
const fs = require('fs');
const path = require('path');
const dir = process.argv[2] || '/home/z/my-project/upload/filebin';
const outDir = process.argv[3] || '/home/z/my-project/upload/filebin';

(async () => {
  const files = fs.readdirSync(dir).filter(x => x.endsWith('.jpeg')).sort();
  const TH_W = 300, TH_H = 420, COLS = 5;
  for (let i = 0; i < files.length; i += COLS) {
    const batch = files.slice(i, i + COLS);
    const bufs = [];
    for (const f of batch) {
      const buf = await sharp(path.join(dir, f)).resize(TH_W, TH_H, { fit: 'inside' }).jpeg({ quality: 72 }).toBuffer();
      bufs.push(buf);
    }
    const w = COLS * TH_W, h = TH_H;
    await sharp({ create: { width: w, height: h, channels: 3, background: '#1a1a1a' } })
      .composite(bufs.map((b, j) => ({ input: b, left: j * TH_W, top: 0 })))
      .jpeg({ quality: 78 }).toFile(path.join(outDir, 'sheet' + i + '.jpg'));
  }
  // also write a numbered map: filename -> sheet/col
  files.forEach((f, idx) => console.log('img', idx, f, 'sheet', Math.floor(idx / COLS) * COLS, 'col', idx % COLS));
  console.log('sheets done');
})();
