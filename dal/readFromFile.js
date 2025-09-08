import { readFile } from "node:fs/promises";

// Read all items from file (with optional filter)
export default async function readItemsFromFile(fileName, id = null) {
  const filePath = `./lib/${fileName}`

  try {
    const fileData = await readFile(filePath, "utf8");
    const arr = JSON.parse(fileData);

    if (id) {
      const item = arr.filter(obj => obj.id === id);
      if (item.length > 0){
        return item;
      }
    }

    return arr;
  } catch (err) {
      console.error("Error reading file:", err.message);
      return [];
  }
}
