// curious-acct4: one text, written to $MAKEFUN_OUTPUT_DIR/entry.txt
import * as fs from "node:fs";
import * as path from "node:path";

// One line per breath; the mystery stays open at the end.
const lines = [
  "The kitchen radio is static past midnight.",
  "Last Tuesday it found one.",
  "A woman read the weather for a town unknown to me.",
  "She said my street.",
  "Rain at three, she said.",
  "At three it rained.",
  "Tonight the static cleared.",
  "She reads tomorrow's weather now.",
  "She has not said my street yet.",
];

const text = lines.join("\n");

const size = [...text].length;
if (size < 1 || size > 280 || text.trim() === "") {
  throw new Error("entry must be 1-280 chars, got " + size);
}

const folder = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(path.join(folder, "entry.txt"), text, "utf8");
console.log(
  "entry written: " + size + " chars, " + Buffer.byteLength(text, "utf8") + " bytes",
);
