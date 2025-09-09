import express from "express";
import cors from "cors";
import path from 'path';

import postRouter from "./routes/postsRouter.js"
import { logger } from "./utils/loggerHelper.js";

const PORT = 1212;
const __dirname = path.resolve();
const app = express();


// Middleware
app.use(express.json());
app.use(cors()); 
app.use(logger);
app.use(express.static(__dirname + '/assets/images'));

// Routes
app.use("/api/posts", postRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
