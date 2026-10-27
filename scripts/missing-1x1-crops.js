/* Cut the three missing 1x1 activity tiles from their existing 4x5 crops.
   Centre crop, natural resolution (no upscaling), WebP q78 to match the set. */
const sharp = require("sharp");
const path = require("path");

const jobs = [
  "windhoek-christuskirche-4x5",
  "sundowner-drinks-sunset-4x5",
  "campfire-cooking-pot-4x5",
];

(async () => {
  for (const name of jobs) {
    const src = path.join(__dirname, "..", "public", "imagery", "crops", `${name}.webp`);
    const out = path.join(__dirname, "..", "public", "imagery", "crops", `${name.replace("-4x5", "-1x1")}.webp`);
    const meta = await sharp(src).metadata();
    const side = Math.min(meta.width, meta.height);
    const left = Math.round((meta.width - side) / 2);
    const top = Math.round((meta.height - side) / 2);
    await sharp(src)
      .extract({ left, top, width: side, height: side })
      .webp({ quality: 78 })
      .toFile(out);
    const o = await sharp(out).metadata();
    console.log(`${path.basename(out)}: ${o.width}x${o.height} ok`);
  }
})();
