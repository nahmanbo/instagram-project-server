import express from "express";
import cors from "cors";

import postRouter from "./routes/postsRouter.js"
import { logger } from "./utils/loggerHelper.js";

const PORT = 1212;
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(logger);

// Routes
app.use("/api/posts", postRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
