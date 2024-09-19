import fs from "fs";
import path from "path";
import multer from "multer";

// Setting up the multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

export const upload = multer({ storage: storage });

// Function to serve the uploaded image for download
export const downloadImage = (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(process.cwd(), "uploads", filename);

  if (fs.existsSync(filepath)) {
    res.download(filepath, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "Error occurred while downloading the file" });
      }
    });
  } else {
    res.status(404).json({ message: "File not found" });
  }
};
