import express from "express";
import cors from "cors";

import { logger } from "./utils/loggerHelper.js";

const PORT = 1212;
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
