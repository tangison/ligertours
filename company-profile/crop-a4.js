/* Company profile: A4-ratio (210:297) image crops from the site build's photography.
   Natural resolution where it serves the placement; gentle lanczos upscale + unsharp
   only for full-bleed pages, matching the tour-band pipeline. */
const sharp = require("sharp");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(__dirname, "assets");

const A4 = 0.7071; // w/h

async function a4Crop(src, out, { focusX = 0.5, focusY = 0.5, target = null } = {}) {
  const meta = await sharp(src).metadata();
  let w = meta.width, h = meta.height;
  let cw = Math.round(h * A4), ch = h;
  if (cw > w) { cw = w; ch = Math.round(w / A4); }
  const left = Math.min(w - cw, Math.max(0, Math.round(w * focusX - cw / 2)));
  const top = Math.min(h - ch, Math.max(0, Math.round(h * focusY - ch / 2)));
  let pipe = sharp(src).extract({ left, top, width: cw, height: ch });
  if (target && (cw < target.w || ch < target.h)) {
    pipe = pipe.resize(target.w, target.h, { kernel: "lanczos3" }).sharpen({ sigma: 0.6 });
  }
  await pipe.webp({ quality: 82 }).toFile(path.join(OUT, out));
  const m = await sharp(path.join(OUT, out)).metadata();
  console.log(out, m.width + "x" + m.height);
}

(async () => {
  // Cover: vehicle on red sand, attention on the vehicle (right of centre)
  await a4Crop(path.join(ROOT, "public/imagery/web/safari-vehicle-red-sand.webp"), "a4-cover-vehicle.webp", { focusX: 0.54, focusY: 0.55, target: { w: 1700, h: 2403 } });
  // Guests at the Tropic of Capricorn (client photo) — page 2 portrait
  await a4Crop(path.join(ROOT, "public/imagery/crops/tropic-capricorn-group-4x5.webp"), "a4-guests-tropic.webp", { focusY: 0.45 });
  // Deadvlei warm light — full-bleed closing page
  await a4Crop(path.join(ROOT, "public/imagery/web/deadvlei-warm-light.webp"), "a4-deadvlei-warm.webp", { focusY: 0.42, target: { w: 1700, h: 2403 } });
  // Quiver tree silhouette — capabilities page
  await a4Crop(path.join(ROOT, "public/imagery/crops/quiver-tree-sun-silhouette-4x5.webp"), "a4-quiver-tree.webp", { focusY: 0.5 });
  // Rhino in Etosha grass — governance page
  await a4Crop(path.join(ROOT, "public/imagery/crops/rhino-etosha-grass-4x5.webp"), "a4-rhino-etosha.webp", { focusY: 0.45 });
  // Guests on the beach (client photo) — track record page
  await a4Crop(path.join(ROOT, "public/imagery/crops/coast-beach-group-4x5.webp"), "a4-guests-coast.webp", { focusY: 0.5 });
  // Giraffes — differentiators page
  await a4Crop(path.join(ROOT, "public/imagery/crops/giraffes-walking-savanna-4x5.webp"), "a4-giraffes.webp", { focusX: 0.55 });
  // 16x9 bands straight from the site crops
  const bands = [
    ["public/imagery/crops/sandwich-harbour-ocean-dunes-16x9.webp", "band-sandwich.webp"],
    ["public/imagery/crops/safari-vehicle-red-sand-16x9.webp", "band-vehicle.webp"],
    ["public/imagery/crops/dunes-sunburst-pan-16x9.webp", "band-sunburst.webp"],
  ];
  for (const [src, out] of bands) {
    await sharp(path.join(ROOT, src)).webp({ quality: 82 }).toFile(path.join(OUT, out));
    const m = await sharp(path.join(OUT, out)).metadata();
    console.log(out, m.width + "x" + m.height);
  }
  // Fonts + logos copied by the build step; verify logo svg exists
  console.log("done");
})();
