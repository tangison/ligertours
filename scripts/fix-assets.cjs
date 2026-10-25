/* Fix corrupt 1x1 crop and compose OG image from supplied brand assets */
const sharp = require('sharp');

(async () => {
  // 1. Regenerate the corrupt rhino 1x1 crop from the supplied web original
  await sharp('public/imagery/web/rhino-and-ostrich-grassland.webp')
    .resize(1200, 1200, { fit: 'cover', position: 'attention' })
    .webp({ quality: 80 })
    .toFile('public/imagery/crops/rhino-and-ostrich-grassland-1x1.webp');
  console.log('rhino 1x1 fixed');

  // 2. OG image: primary rose logo centred on rose-200 (#F0DAD5), 1200x630
  const W = 1200, H = 630;
  const logo = sharp('public/brand/logos/light-bg/liger-tours-primary-rose-800w.png');
  const meta = await logo.metadata();
  const targetW = 760;
  const targetH = Math.round(meta.height * (targetW / meta.width));
  const logoBuf = await logo.resize(targetW, targetH).toBuffer();
  await sharp({
    create: { width: W, height: H, channels: 4, background: '#F0DAD5' },
  })
    .composite([{ input: logoBuf, left: Math.round((W - targetW) / 2), top: Math.round((H - targetH) / 2) }])
    .png()
    .toFile('public/brand/og-image.png');
  console.log('og image composed');
})();
