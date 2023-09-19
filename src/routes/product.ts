import { Router } from "express";
import {
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product";
import { logMiddleware } from "../middleware/log";
// Middleware
import { checkJwt } from "../middleware/session";

const router = Router();

/* Rutas privadas */

// GET
router.get("/", checkJwt, getProducts);
router.get("/:id", logMiddleware, getProduct);

// POST
router.post("/", postProduct);

// PUT
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

export { router };
