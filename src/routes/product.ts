import { Router } from "express";
import {
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product";

const router = Router();

// GET
router.get("/", getProducts);
router.get("/:id", getProduct);

// POST
router.post("/", postProduct);

// PUT
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

export { router };
