import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "WARNING: If you meet yourself, do not panic. One of you is the spare.";

// Fail loud if the entry ever breaks the gate: 1-120 chars, one line.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-120 chars, single line; got ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
