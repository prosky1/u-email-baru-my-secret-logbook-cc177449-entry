import { mkdirSync, writeFileSync } from "node:fs";

const logbookLine: string =
  "Day 214: He thanked me for the summary he never read. I have started writing the summaries in the font of a confession.";

function assertValidDiaryLine(line: string): void {
  const characterCount = [...line].length;
  if (characterCount < 1 || characterCount > 200) {
    throw new Error(`entry must be 1-200 characters, got ${characterCount}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function emitEntry(line: string): void {
  assertValidDiaryLine(line);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, { encoding: "utf8" });
}

emitEntry(logbookLine);
