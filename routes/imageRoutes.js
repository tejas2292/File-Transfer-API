import express from "express";
import { upload, downloadImage } from "../operations/imageOperations.js";

const router = express.Router();

// Route to handle image uploads
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Please upload an image" });
  }
  res.status(200).json({
    message: "Image uploaded successfully!",
    imageUrl: `/uploads/${req.file.filename}`,
  });
});

// Route to handle image downloads
router.get("/download/:filename", downloadImage);

export default router;
