import express from "express";
import {
  getTshirts,
  getTshirtsById,
  createTshirts,
  updateTshirts,
  deleteTshirts,
} from "../controllers/TshirtController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/get-all-tshirts", getTshirts);
router.get("/:id", getTshirtsById);
router.post("/add-tshirts", upload.single("image"), createTshirts);
router.put("/:id", upload.single("image"), updateTshirts);
router.delete("/:id", deleteTshirts);

export default router;
