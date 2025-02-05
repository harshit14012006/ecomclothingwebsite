import express from "express";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/", getCartItems);
router.delete("/:id", removeFromCart);

export default router;
