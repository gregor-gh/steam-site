import express from "express";
import { getTopGamesTwoWeeks } from "../controllers/steamController";

const router = express.Router();

router.get("/top-games-two-weeks", (req, res, next) => {
  getTopGamesTwoWeeks(req, res, next);
});

export default router;