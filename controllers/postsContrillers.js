import {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePostId
} from "../services/postService.js"

// GET /posts - Get all posts 
export function getAllPostsController() {
  return getAllPosts();
}

// GET /posts/id/:id - Get posts by id
export async function getPostByIdController() {
  return await getPostById()
}

// POST /posts - Post a post
export async function addPostController() {
  return await addPost()
}

// PUT /posts/:id - Edit post
export async function updatePostController() {
  return await updatePost()
}

// DELETE /posts/:id - Delete post by id
export async function deletePostController() {
  return await deletePostId()
}
