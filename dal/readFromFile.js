import { readFile } from "node:fs/promises";

// Read all items from file (with optional filter)
export default async function readItemsFromFile(fileName, id = null) {
  const filePath = `./lib/${fileName}`
  console.log("id ", id)

  try {
    const fileData = await readFile(filePath, "utf8");
    const arr = JSON.parse(fileData);

    if (id) {
      console.log("id ", id)
      return arr.filter(obj => obj.id === id);;
    }

    return arr;
  } catch (err) {
      console.error("Error reading file:", err.message);
      return [];
  }
}
