import {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePostId
} from "../services/postService.js"

// GET /posts - Get all posts 
export async function getAllPostsController(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
      res.status(500).json({ error: "Failed to read data" });
  }
}

// GET /posts/id/:id - Get posts by id
export async function getPostByIdController(req, res) {
  const id = Number(req.params.id);

  try {
    const filtered = await getPostById(id);
    res.status(200).json(filtered);
  } catch (err) {
      res.status(500).json({ error: "Failed to read data" });
  }}

// POST /posts - Post a post
export async function addPostController(req, res) {
  const newPost = req.body;
  
  try {
    const result = await addPost(newPost);
    res.status(201).json(result.data);
  } catch (err) {
      res.status(500).json({ error: "Failed to save data" });
  }}

// PUT /posts/:id - Edit post
export async function updatePostController(req, res) {
  const id = Number(req.params.id);
  const newPost = req.body;

  try {
    const result = await updatePost(id, newPost);
    res.status(200).json(result.updated);
  } catch (err) {
      res.status(500).json({ error: "Failed to update data" });
  }}

// DELETE /posts/:id - Delete post by id
export async function deletePostController(req, res) {
  const id = Number(req.params.id);

  try {
    const result = await deletePostId(id);
    res.json(result.updatedList);
  } catch (err) {
      res.status(500).json({ error: "Failed to delete data" });
  }
}
