import { Router } from "express";
import { checkJwt } from "../middleware/session";
import {
  getOrders,
  getOrder,
  postOrder,
  deleteOrder,
} from "../controllers/order";

const router = Router();

// GET
router.get("/", checkJwt, getOrders);
router.get("/", checkJwt, getOrder);

// POST
router.post("/", checkJwt, postOrder);

// DELETE
router.delete("/:id", checkJwt, deleteOrder);

export { router };
