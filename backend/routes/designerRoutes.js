// routes/designerRoutes.js
import express from "express";
import { getAllDesigners, addDesigner, getDesignerById, updateDesigner, deleteDesigner } from "../controller/designerController.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

// Public Routes
router.get("/", getAllDesigners);
router.get("/:id", getDesignerById);

// Admin Routes (Developer only)
router.post("/add", singleUpload, addDesigner);
router.put("/:id", singleUpload, updateDesigner);
router.delete("/:id", deleteDesigner);

export default router;
