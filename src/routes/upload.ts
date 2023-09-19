import { Router } from "express";
import { getFile } from "../controllers/upload";
import multermiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, multermiddleware.single("image"), getFile);

export { router };
