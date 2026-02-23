import fs from "fs";
import path from "path";

/**
 * Loads AI-generated chapter content from:
 *   content/generated/<subtopic>__<chapter>.json
 *
 * Returns null if file doesn't exist.
 */
export function loadGeneratedChapter(subtopic, chapterSlug) {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "generated",
      `${subtopic}__${chapterSlug}.json`
    );

    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load generated chapter:", e);
    return null;
  }
}