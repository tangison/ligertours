/* Process the client's 14 filebin photos into the site pipeline.
   Natural resolution only (no upscaling), WebP q82, crops named per
   the existing /imagery/crops convention: <subject>-<aspect>.webp */

const sharp = require("/home/z/my-project/node_modules/sharp");
const fs = require("fs");
const path = require("path");

const SRC = "/home/z/my-project/upload/filebin";
const OUT = "/home/z/my-project/public/imagery/crops";

/* [sourceFile, baseName, [[aspectTag, wRatio, hRatio, position]]] */
const jobs = [
  ["5842b330-28f8-45d3-81e7-36d6ea075279.jpeg", "rhino-etosha-grass",
    [["4x5", 4, 5, "attention"], ["16x9", 16, 9, "centre"]]],
  ["eaa17821-8c71-4a3b-99fd-8fd8df58306d.jpeg", "antelope-herd-savanna",
    [["4x5", 4, 5, "attention"], ["16x9", 16, 9, "centre"]]],
  ["1dddb82d-d8bc-476b-8296-bd0b54b98087.jpeg", "quiver-tree-sun-silhouette",
    [["4x5", 4, 5, "centre"], ["16x9", 16, 9, "centre"]]],
  ["37cd321e-f9cb-4877-96d4-eef465573fc0.jpeg", "deadvlei-lone-tree",
    [["4x5", 4, 5, "centre"], ["16x9", 16, 9, "centre"]]],
  ["f776f501-a013-4622-989a-5c0bb8e1ddb3.jpeg", "rock-gorge-closeup",
    [["4x5", 4, 5, "centre"], ["16x9", 16, 9, "centre"]]],
  ["0e3c1465-5efc-4657-8987-f30e671e5b80.jpeg", "walvis-bay-jetty",
    [["1x1", 1, 1, "centre"], ["16x9", 16, 9, "centre"]]],
  ["43d4150e-dfa3-4ec5-b406-3c2b9a449f9a.jpeg", "spitzkoppe-massif",
    [["1x1", 1, 1, "centre"], ["16x9", 16, 9, "centre"]]],
  ["618538e1-eeb3-4f5e-8cff-bfeb641b4fe5.jpeg", "dunes-sunburst-pan",
    [["1x1", 1, 1, "centre"], ["16x9", 16, 9, "centre"]]],
  ["08394e32-82d9-4fe1-b153-a3820f6629a4.jpeg", "tropic-capricorn-group",
    [["4x5", 4, 5, "attention"], ["16x9", 16, 9, "attention"]]],
  ["989c2568-1c3e-4ac0-8878-466919f6268c.jpeg", "coast-beach-group",
    [["4x5", 4, 5, "attention"], ["16x9", 16, 9, "attention"]]],
  ["b3bb4c8b-c25e-4f54-a0d8-7f4948a2c7df.jpeg", "sand-buried-ruins",
    [["16x9", 16, 9, "centre"], ["4x5", 4, 5, "centre"]]],
  ["c97cf958-373b-4c35-a4d0-9799e54ece17.jpeg", "overland-road-stop",
    [["16x9", 16, 9, "centre"], ["4x5", 4, 5, "centre"]]],
  ["e480f7e1-fdef-4f06-854d-4c4a3a81caa1.jpeg", "deadvlei-tree-pan",
    [["4x5", 4, 5, "centre"]]],
  ["ee327e03-874b-4f35-ae1d-0786f23c1449.jpeg", "deadvlei-grove",
    [["16x9", 16, 9, "centre"], ["4x5", 4, 5, "centre"]]],
];

(async () => {
  const written = [];
  for (const [file, base, variants] of jobs) {
    const src = path.join(SRC, file);
    const meta = await sharp(src).metadata();
    for (const [tag, rw, rh, pos] of variants) {
      /* Largest 4:5 the pipeline uses is 960x1200; cap at source, never upscale */
      const caps = { "4x5": [960, 1200], "1x1": [1365, 1365], "16x9": [1920, 1080] };
      const [capW, capH] = caps[tag];
      /* crop box inside the source at this aspect */
      let cw, ch;
      if (meta.width / meta.height >= rw / rh) {
        ch = meta.height;
        cw = Math.round(meta.height * (rw / rh));
      } else {
        cw = meta.width;
        ch = Math.round(meta.width * (rh / rw));
      }
      /* scale down to pipeline cap if the crop exceeds it */
      const scale = Math.min(1, capW / cw, capH / ch);
      const outW = Math.round(cw * scale);
      const outH = Math.round(ch * scale);
      const out = path.join(OUT, `${base}-${tag}.webp`);
      await sharp(src)
        .resize(outW, outH, { fit: "cover", position: pos })
        .webp({ quality: 82 })
        .toFile(out);
      const kb = (fs.statSync(out).size / 1024).toFixed(0);
      written.push(`${base}-${tag}.webp  ${outW}x${outH}  ${kb}KB`);
    }
  }
  console.log(written.join("\n"));
})();
