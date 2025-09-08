import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
} from "../controllers/postsContrillers.js";

const router = Router();

// Get all posts
router.get("/", getAllPosts);

// Get posts by ID 
router.get("/id/:id", getPostById);

// Add new posts 
router.post("/", addPost);

// Update a posts by ID 
router.put("/:id", updatePost);

// Delete a posts by ID 
router.delete("/:id", deletePost);

export default router;