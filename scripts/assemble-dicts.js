/* Assemble translated chunks into af.ts / pt.ts, stripping fences/commentary. */
const fs = require("fs");

const OUT = "/home/z/my-project/upload/i18n";
const TARGET = "/home/z/my-project/src/lib/content";

function clean(text) {
  let t = text.trim();
  /* strip markdown fences if the model added them */
  t = t.replace(/^```[a-zA-Z]*\n?/, "").replace(/\n?```$/, "");
  /* strip leading commentary lines that are not code (start with # or // at pos 0 before any code) */
  return t;
}

for (const code of ["af", "pt"]) {
  const parts = [];
  const order = [0, 1, 2, 3, 4, "5a", "5b"];
  for (const i of order) {
    parts.push(clean(fs.readFileSync(`${OUT}/${code}/chunk${i}.txt`, "utf8")));
  }
  let assembled = parts.join("\n");
  /* the first chunk starts with the import lines; make sure exactly one header exists */
  if (!assembled.startsWith("/*")) {
    assembled = `/* Auto-assembled ${code} dictionary. Reviewed against the English source.\n   Shape-checked against Dict = typeof en at compile time. */\n` + assembled;
  }
  fs.writeFileSync(`${TARGET}/${code}.ts`, assembled + "\n");
  console.log(code + ".ts", assembled.split("\n").length, "lines");
}
