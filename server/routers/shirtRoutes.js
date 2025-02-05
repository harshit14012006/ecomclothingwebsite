import express from "express";
import {
    getShirts,
    getShirtsById,
    createShirts,
    updateShirts,
    deleteShirts,
} from "../controllers/shirtController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/get-all-shirts", getShirts);
router.get("/:id", getShirtsById);
router.post("/add-shirts", upload.single("image"), createShirts);
router.put("/:id", upload.single("image"), updateShirts);
router.delete("/:id", deleteShirts);

export default router;
