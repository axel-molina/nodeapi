import { Router } from "express";
import {
  getProduct,
  getProductsForPage,
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
router.get("/paginated", checkJwt, getProductsForPage);
router.get("/:id", logMiddleware, getProduct);

// POST
router.post("/", checkJwt, postProduct);

// PUT
router.put("/:id", checkJwt, updateProduct);

// DELETE
router.delete("/:id", checkJwt, deleteProduct);

export { router };
