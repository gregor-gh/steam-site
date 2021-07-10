import express from "express";
import { getTopGamesTwoWeeks, getTopNewsTwoWeeks } from "../controllers/steamController";
import { updateSteamSpyTopGames } from "../schedules/steamSpySchedule";

const router = express.Router();

router.get("/top-news-two-weeks", (req, res, next) => {
  getTopNewsTwoWeeks(req, res, next);
});

router.get("/top-games-two-weeks", (req, res, next) => {
  getTopGamesTwoWeeks(req, res, next);
});

router.get("/update", (req, res, next) => {
  updateSteamSpyTopGames();
  res.send("OK");
});

export default router;
