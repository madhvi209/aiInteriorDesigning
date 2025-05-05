import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Create Cloudinary storage configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "designers", // Cloudinary folder name
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    },
});

// Multer middleware setup
const multerErrorHandler = (err, req, res, next) => {
    if (err) {
        console.error("Multer Error: ", err);
        return res.status(400).json({ message: "File upload error", error: err.message });
    }
    next();
};

// Single file upload
const singleUpload = multer({ storage }).single("file");

export { singleUpload };
