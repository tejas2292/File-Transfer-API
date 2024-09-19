import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

// Import routes
import imageRoutes from "./routes/imageRoutes.js";

// Middleware
app.use(cors());
app.use(express.static("uploads")); // Serve uploaded files

// API Routes
app.use("/api", imageRoutes);

// Serve static files (HTML or public resources)
app.get("/", (req, res) => {
  res.send("Welcome to the Moible Camera Server!");
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}/`);
});
