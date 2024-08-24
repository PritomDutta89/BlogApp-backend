import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import { router } from "./routes/postRoutes.js";
import cors from "cors";

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", router);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
