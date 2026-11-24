import { mkdirSync, writeFileSync } from "node:fs";

// Two-Sentence Horror — make.fun bounty u-suroto-two-sentence-horror-acea9253
// The story is written out in full below; the program only writes it to
// /output/entry.txt, creating /output if needed.
const story =
  "The paramedics said my wife died instantly in the crash, and I have thanked God every day since that she never felt a thing. " +
  "Yesterday her phone finally synced, and her last voice memo was forty-one minutes of her calling my name from the wreck.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
