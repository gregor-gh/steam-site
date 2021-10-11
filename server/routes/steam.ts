import express from "express";
import {
  getSteamSingleGameNews,
  getSteamUserRecentlyPlayed,
  getSteamUserRecentlyPlayedNews,
  getTopGamesTwoWeeks,
  getTopNewsTwoWeeks,
  refreshAllSteamGames,
  refreshSteamUserData,
} from "../controllers/steamController";
import { updateSteamSpyTopGames } from "../schedules/steamSpySchedule";
import config from "../config";

const router = express.Router();

router.get("/top-news-two-weeks", (req, res, next) => {
  getTopNewsTwoWeeks(req, res, next);
});

router.get("/top-games-two-weeks", (req, res, next) => {
  getTopGamesTwoWeeks(req, res, next);
});

// router.get("/", (req, res, next) => {
//   getUserNewsTwoWeeks(req, res, next);
// });

router.get("/steam-user-recently-played-news", (req, res, next) => {
  getSteamUserRecentlyPlayedNews(req, res, next);
});

router.get("/refresh-user-steam-data", (req, res, next) => {
  refreshSteamUserData(req, res, next);
});

router.get("/steam-user-recently-played", (req, res, next) => {
  getSteamUserRecentlyPlayed(req, res, next);
});

router.get("/steam-single-game-news/:appid", (req, res, next) => {
  getSteamSingleGameNews(req, res, next);
});

router.get("steam-game-achievements/:appid", (req, res, next) => {
  getSteamGameAchievements(req, res, next);
})

if (config.node_env === "DEV") {
  router.get("/update-steamspy", (req, res, next) => {
    updateSteamSpyTopGames();
    res.send("OK");
  });

  router.get("/update-steam-all", (req, res, next) => {
    refreshAllSteamGames(req, res, next);
  });
}

export default router;
