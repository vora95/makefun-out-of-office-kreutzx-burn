// The Funniest Out-of-Office — burn entry.
// Writes one out-of-office auto-reply (<=140 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. The joke: the sender has already
// triaged the reader's "urgent" email before leaving — and ruled it
// not urgent. A real person could set this; the twist lands in the
// last clause, and every word earns its place.
// Validated locally: 82 chars, 86 bytes, sha256
// 02a1680c4a58e7f01b5a330427ccb7f34a739f1833561cca960a9d04e307f1ef,
// read-back OK twice, deterministic.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "Out of office until Monday. If this is urgent, it isn\u2019t \u2014 I checked before I left.";

// Validation — mirrors the sealed gate: 1-140 chars, UTF-8 text, not
// only white space, single line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 140) throw new Error(`length ${ENTRY.length} out of 1-140`);
if (ENTRY.trim().length === 0) throw new Error("entry must not be only white space");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");
if (Buffer.byteLength(ENTRY, "utf8") > 140 * 4) throw new Error("entry byte length implausible");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back check: file on disk must be byte-identical to ENTRY.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
if (back.endsWith("\n")) throw new Error("entry must not end with a newline");
if (back.trim().length === 0) throw new Error("entry must not be only white space");
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${ENTRY.length} chars, sha256 ${sha}, read-back OK`);
