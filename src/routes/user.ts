import { Router } from "express";
import { getUser, deleteUser, postUser } from "../controllers/user";

const router = Router();

// GET
router.get("/", getUser);

// POST
router.post("/", postUser);

// DELETE
router.delete("/:id", deleteUser);

export { router };
