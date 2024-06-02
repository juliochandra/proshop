import express from "express";
const router = express.Router();
import Products from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";


router.get("/", asyncHandler(getProducts));

router.get("/:id", asyncHandler(getProductById));
export default router;
