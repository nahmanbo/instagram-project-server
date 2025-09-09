import { Router } from "express";
import {
    getUsersNamesController,
    getUsersNamesController,
    loginUserController,
} from "../controllers/playerController.js";

const router = Router();

// Get all users names 
router.get("/", getUsersNamesController);

// Register new users 
router.post("/", getUsersNamesController);

// Login with credentials 
router.post("/login", loginUserController);

export default router;