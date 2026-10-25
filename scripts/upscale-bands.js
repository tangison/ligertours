/* Upscale the four tour-band 16:9 crops to 1600x900 (lanczos3 + unsharp)
   so full-bleed headers and 60vw bands stay crisp. Source quality is
   preserved with a gentle sharpen, not a hard one. */
const sharp = require("/home/z/my-project/node_modules/sharp");

const jobs = [
  ["rhino-etosha-grass", "5842b330-28f8-45d3-81e7-36d6ea075279.jpeg"],
  ["quiver-tree-sun-silhouette", "1dddb82d-d8bc-476b-8296-bd0b54b98087.jpeg"],
  ["deadvlei-lone-tree", "37cd321e-f9cb-4877-96d4-eef465573fc0.jpeg"],
  ["rock-gorge-closeup", "f776f501-a013-4622-989a-5c0bb8e1ddb3.jpeg"],
];

(async () => {
  for (const [base, file] of jobs) {
    await sharp(`/home/z/my-project/upload/filebin/${file}`)
      .resize(1600, 900, { fit: "cover", position: "centre", kernel: "lanczos3" })
      .sharpen({ sigma: 0.8, m1: 0.5, m2: 0.5 })
      .webp({ quality: 80 })
      .toFile(`/home/z/my-project/public/imagery/crops/${base}-16x9.webp`);
    console.log(base + "-16x9.webp 1600x900");
  }
})();
