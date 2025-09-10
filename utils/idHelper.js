import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const RIDDLE_COUNTER_PATH = path.resolve("lib/id.txt");

// Returns the next available riddle ID from riddleId.txt
export default async function genNextPostId() {
  try {
    let lastId = 0;

    try {
      const content = await readFile(RIDDLE_COUNTER_PATH, "utf8");
      lastId = parseInt(content);
    } catch {
      // If file doesn't exist, start from 0
    }

    const newId = lastId + 1;
    await writeFile(RIDDLE_COUNTER_PATH, newId.toString());
    return newId;

  } catch (err) {
    console.error("Failed to get next post ID:", err.message);
    return Date.now(); // fallback if error
  }
}
