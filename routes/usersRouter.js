import { Router } from "express";
import {
    getUsersNamesController,
    getUserByNameController,
    createUsersController,
    loginUserController,
} from "../controllers/usersController.js";

const router = Router();

// Get all users names 
router.get("/", getUsersNamesController);

// Get user by names 
router.get("/:name", getUserByNameController);

// Register new users 
router.post("/", createUsersController);

// Login with credentials 
router.post("/login", loginUserController);

export default router;