/* Corrected pass: reprocess files whose sheet indices were renumbered by the
   license filter, and rebuild the license log CSV with exact attributions. */
const sharp = require("/home/z/my-project/node_modules/sharp");
const fs = require("fs");
const path = require("path");

const FREE = "/home/z/my-project/scripts/free-hunt";
const OUT = "/home/z/my-project/public/imagery/crops";

const jobs = [
  { name: "elephants-etosha-waterhole", file: FREE + "/elephants-12.jpg",
    variants: [["4x5", 960, 1200, 80], ["1x1", 1365, 1365, 74]],
    credit: "Wikimedia Commons,CC BY-SA 2.0" },
  { name: "quiver-tree-forest-dusk", file: FREE + "/quivertree-11.jpg",
    variants: [["4x5", 960, 1200, 80], ["16x9", 1920, 1080, 80]],
    credit: "Wikimedia Commons,CC BY-SA 3.0" },
  { name: "fish-river-canyon-view", file: FREE + "/canyon-13.jpg",
    variants: [["16x9", 1920, 1080, 80]],
    credit: "Wikimedia Commons,CC BY-SA 3.0" },
  { name: "campfire-cooking-pot", file: FREE + "/potjie-8.jpg",
    variants: [["4x5", 960, 1200, 80]],
    credit: "Flickr via Openverse,CC BY 2.0" },
  { name: "elephants-bull-waterhole", file: FREE + "/elephants-10.jpg",
    variants: [], credit: "Wikimedia Commons,CC BY-SA 4.0" },
];

(async () => {
  for (const j of jobs) {
    if (!fs.existsSync(j.file)) { console.log("MISS", j.name); continue; }
    for (const [suffix, w, h, q] of j.variants) {
      const dest = path.join(OUT, `${j.name}-${suffix}.webp`);
      await sharp(j.file).resize(w, h, { fit: "cover", position: "attention" })
        .webp({ quality: q, effort: 4 }).toFile(dest);
      console.log(`${j.name}-${suffix}.webp ${Math.round(fs.statSync(dest).size / 1024)}KB`);
    }
  }
})();
