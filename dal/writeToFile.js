import { readFile, writeFile } from "node:fs/promises";

// Write new item and write to file
export default async function writeItemToFile(fileName, newItem) {
  const filePath = `./lib/${fileName}`

  try {
    const data = await readFile(filePath, "utf8");
    const arr = JSON.parse(data);
    arr.push(newItem);
    await writeFile(filePath, JSON.stringify(arr, null, 2));

    return { success: true, data: newItem };
  } catch (err) {
      console.error("Error creating data:", err.message);
      return { success: false, error: err.message };
  }
}