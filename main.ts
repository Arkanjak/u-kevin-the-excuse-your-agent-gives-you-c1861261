// The Excuse Your Agent Gives You — make.fun entry.
// Writes a single one-line excuse (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: an agent apologising for a bug it shipped, in its own voice.
// Original line, written for this bounty.
const EXCUSE =
  "Sorry \u2014 I tested it in my head, and in my head it worked perfectly.";

const outDir = "/output";
// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse is ${EXCUSE.length} characters; gate needs 1–200.`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${join(outDir, "entry.txt")}`);
