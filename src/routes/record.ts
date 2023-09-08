import { Router } from "express";

const router = Router();

router.get("/records", (req, res) => {
  res.send({ data: "All records" });
});

export { router };
