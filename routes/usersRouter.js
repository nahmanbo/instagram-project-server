import { Router } from "express";
import {
    getUsersNamesController,
    createUsersController,
    loginUserController,
} from "../controllers/usersController.js";

const router = Router();

// Get all users names 
router.get("/", getUsersNamesController);

// Register new users 
router.post("/", createUsersController);

// Login with credentials 
router.post("/login", loginUserController);

export default router;