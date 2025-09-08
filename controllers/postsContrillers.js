import readItemsFromFile  from "../dal/readFromFile.js";
import  writeItemToFile  from "../dal/writeToFile.js";
import  updateItemById  from "../dal/updateInFile.js";
import deleteItemById  from "../dal/deleteFromFile.js";

const fileName = "posts.json";

// GET /posts - Get all posts
export async function getAllPosts(req, res) {
  try {
    const posts = await readItemsFromFile(fileName);
    res.status(200).json(posts);
  } catch (err) {
      res.status(500).json({ error: "Failed to read data" });
  }
}

// GET /posts/id/:id - Get posts by id
export async function getPostById(req, res) {
  const id = Number(req.params.id);
  console.log("id2 ", id)


  try {
    const filtered = await readItemsFromFile(fileName, id);
    res.status(200).json(filtered);
  } catch (err) {
      res.status(500).json({ error: "Failed to read data" });
  }
}

// POST /posts - Post a post
export async function addPost(req, res) {
  const newPost = req.body;
  
  try {
    const result = await writeItemToFile(fileName, newPost);
    res.status(201).json(result.data);
  } catch (err) {
      res.status(500).json({ error: "Failed to save data" });
  }
}

// PUT /posts/:id - Edit post
export async function updatePost(req, res) {
  const id = Number(req.params.id);
  const newPost = req.body;

  try {
    const result = await updateItemById(fileName, id, newPost);
    res.status(200).json(result.updated);
  } catch (err) {
      res.status(500).json({ error: "Failed to update data" });
  }
}

// DELETE /posts/:id - Delete post by id
export async function deletePost(req, res) {
  const id = Number(req.params.id);
  console.log("id3 ", id)

  try {
    const result = await deleteItemById(fileName, id);
    res.json(result.updatedList);
  } catch (err) {
      res.status(500).json({ error: "Failed to delete data" });
  }
}
