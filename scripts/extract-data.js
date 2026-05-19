#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const OUT = path.resolve(__dirname, "../src/data");

function extract(file, varName, outFile) {
  const html = fs.readFileSync(path.join(ROOT, file), "utf8");
  const re = new RegExp(`const ${varName} = (\\[[\\s\\S]*?\\n    \\]);`);
  const m = html.match(re);
  if (!m) throw new Error(`Cannot extract ${varName} from ${file}`);
  fs.writeFileSync(path.join(OUT, outFile), `export default ${m[1]};\n`);
  console.log("✓", outFile);
}

fs.mkdirSync(OUT, { recursive: true });
extract("interview-prep.html", "DATA", "prepData.js");
extract("interview-quiz.html", "MCQ", "quizMcq.js");
extract("interview-quiz.html", "WRITTEN", "quizWritten.js");
extract("interview-vocab.html", "VOCAB", "vocabData.js");
console.log("Done.");
