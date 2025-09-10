import fs from 'fs';
import readItemsFromFile  from "../dal/readFromFile.js";
import  writeItemToFile  from "../dal/writeToFile.js";
import  updateItemById  from "../dal/updateInFile.js";
import deleteItemById  from "../dal/deleteFromFile.js";
import generateTime from "../utils/timeHelper.js"
import genNextPostId from "../utils/idHelper.js"

const fileName = "posts.json";

// GET /posts - Get all posts
export async function getAllPosts() {
    return await readItemsFromFile(fileName);
}

// GET /posts/id/:id - Get posts by id
export async function getPostById(id) {
  return await readItemsFromFile(fileName,id);
}

// POST /posts - Post a post
export async function addPost(newPost) {
   const id = await genNextPostId();
  const name = newPost.name;
  const img = newPost.img;
  const description = newPost.description;
  const time = generateTime()
  const post = {id, name, img, description, time};

  return await writeItemToFile(fileName, post)
}

// PUT /posts/:id - Edit post
export async function updatePost(id, newPost) {
  return await updateItemById(fileName, id, newPost);
}

// DELETE /posts/:id - Delete post by id
export async function deletePostId(id) {
  return await deleteItemById(fileName, id);
}

export async function getAllImgNames() {
  const folderPath = 'assets/images'; 
  const filenames = fs.readdirSync(folderPath);
  return filenames;
}