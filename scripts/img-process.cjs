/* Task 3: process the 11 free-licensed winners into site crops.
   Matches existing pipeline sizes: 4x5=960x1200, 1x1=1365x1365, 16x9=1920x1080.
   Emits license-log CSV rows with real attribution metadata. */
const sharp = require("/home/z/my-project/node_modules/sharp");
const fs = require("fs");
const path = require("path");

const FREE = "/home/z/my-project/scripts/free-hunt";
const FREE2 = "/home/z/free-hunt-tmp"; // unused placeholder
const FREE2REAL = "/home/z/my-project/scripts/free-hunt2";
const IMG = "/home/z/my-project/scripts/img-hunt";
const OUT = "/home/z/my-project/public/imagery/crops";

const Q = 80;

/* key -> { file, variants: [[suffix, w, h]], credit } */
const picks = [
  {
    name: "elephants-etosha-waterhole",
    file: path.join(FREE, "elephants-11.jpg"),
    variants: [["4x5", 960, 1200], ["1x1", 1365, 1365]],
    credit: ["Wikimedia Commons", "CC BY-SA 2.0"],
  },
  {
    name: "quiver-tree-forest-dusk",
    file: path.join(FREE, "quivertree-4.jpg"),
    variants: [["4x5", 960, 1200], ["16x9", 1920, 1080]],
    credit: ["Wikimedia Commons", "CC BY-SA 3.0"],
  },
  {
    name: "fish-river-canyon-view",
    file: path.join(FREE, "canyon-5.jpg"),
    variants: [["16x9", 1920, 1080]],
    credit: ["Wikimedia Commons", "CC BY-SA 3.0"],
  },
  {
    name: "spitzkoppe-granite-peaks",
    file: path.join(FREE2REAL, "spitzkoppe2-1.jpg"),
    variants: [["4x5", 960, 1200], ["1x1", 1365, 1365]],
    credit: ["Wikimedia Commons", "CC BY-SA 3.0"],
  },
  {
    name: "swakopmund-atlantic-coast",
    file: path.join(FREE2REAL, "coast2-4.jpg"),
    variants: [["4x5", 960, 1200]],
    credit: ["Wikimedia Commons", "CC BY-SA 4.0"],
  },
  {
    name: "namib-night-sky",
    file: path.join(FREE2REAL, "nightsky2-5.jpg"),
    variants: [["4x5", 960, 1200]],
    credit: ["Wikimedia Commons", "CC0 1.0"],
  },
  {
    name: "windhoek-christuskirche",
    file: path.join(FREE, "windhoek-0.jpg"),
    variants: [["4x5", 960, 1200]],
    credit: ["Wikimedia Commons", "CC BY-SA 2.5"],
  },
  {
    name: "sundowner-drinks-sunset",
    file: path.join(FREE2REAL, "coast2-12.jpg"),
    variants: [["4x5", 960, 1200]],
    credit: ["Wikimedia Commons", "CC BY-SA 4.0"],
  },
  {
    name: "campfire-cooking-pot",
    file: path.join(FREE, "potjie-2.jpg"),
    variants: [["4x5", 960, 1200]],
    credit: ["Flickr (via Openverse)", "CC BY 2.0"],
  },
  {
    name: "flamingos-walvis-bay",
    file: path.join(IMG, "flamingos-1.jpg"),
    variants: [["1x1", 1365, 1365]],
    credit: ["Pexels", "Pexels License (no attribution required)"],
  },
  {
    name: "kalahari-red-sands",
    file: path.join(IMG, "kalahari-5.jpg"),
    variants: [["4x5", 960, 1200]],
    credit: ["Unsplash", "Unsplash License (no attribution required)"],
  },
];

async function run() {
  const logRows = [];
  for (const p of picks) {
    if (!fs.existsSync(p.file)) { console.log("MISSING SOURCE:", p.name, p.file); continue; }
    const meta = await sharp(p.file).metadata();
    for (const [suffix, w, h] of p.variants) {
      const dest = path.join(OUT, `${p.name}-${suffix}.webp`);
      await sharp(p.file)
        .resize(w, h, { fit: "cover", position: "attention" })
        .webp({ quality: Q, effort: 4 })
        .toFile(dest);
      const kb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`${p.name}-${suffix}.webp ${kb}KB`);
    }
    logRows.push(
      `${p.name},${p.credit[0]},${p.credit[1]},see worklog manifest,2026-10-24,task3 contextual imagery`
    );
  }
  fs.appendFileSync(
    "/home/z/my-project/upload/brand-kit/liger-tours-brand-kit/05-imagery/image-license-log.csv",
    "\n" + logRows.join("\n") + "\n"
  );
  console.log("license log appended:", logRows.length, "rows");
}

run().catch((e) => { console.error(e); process.exit(1); });
