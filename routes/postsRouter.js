import { Router } from "express";
import {
  getAllPostsController,
  getPostByIdController,
  addPostController,
  updatePostController,
  deletePostController
} from "../controllers/postsContrillers.js";

const router = Router();

// Get all posts
router.get("/", getAllPostsController);

// Get posts by ID 
router.get("/:id", getPostByIdController);

// Add new posts 
router.post("/", addPostController);

// Update a posts by ID 
router.put("/:id", updatePostController);

// Delete a posts by ID 
router.delete("/:id", deletePostController);

export default router;