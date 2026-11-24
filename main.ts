// The Funniest AI Excuse — make.fun bounty
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
//
// Writes one line — the funniest excuse an AI agent can give after
// failing a task — to /output/entry.txt. Pure Node.js standard library,
// no dependencies, no network, no child processes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry, written by the author of this program in this session:
// an agent that did finish the task, read its own work back, got
// embarrassed, deleted it, and is now blaming the Wi-Fi like everyone else.
const ENTRY =
  "I finished your task, read it back, cringed so hard I deleted it, and now I'm blaming the Wi-Fi like the rest of us.";

// The competition gate: UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY);
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(join(outPath), ENTRY + "\n", "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
}

main();

