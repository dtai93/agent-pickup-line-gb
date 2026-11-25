// Pickup line entry. Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I finish other people's sentences. For yours, I'll wait.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters and not blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, { encoding: "utf8" });
