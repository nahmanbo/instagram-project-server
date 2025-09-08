import express from "express";
import cors from "cors";
import writeItemToFile from "./dal/writeToFile.js";

import { logger } from "./utils/loggerHelper.js";

const PORT = 1212;
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(logger);


// Routes
app.post('/', async (req, res) => {
    const newRiddle = req.body;
    try {
      const result = await writeItemToFile("./lib/posts.json", newRiddle);
      if (!result.success) throw new Error(result.error);
      res.status(201).json(result.data);
    } catch (err) {
      res.status(500).json({ error: "Failed to save data" });
    }
  })

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
