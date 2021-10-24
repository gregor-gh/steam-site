import express from "express";
import {
  getSteamGameAchievements,
  getSteamSingleGameNews,
  getSteamUserRecentlyPlayed,
  getSteamUserRecentlyPlayedNews,
  getTopGamesTwoWeeks,
  getTopNewsTwoWeeks,
  manuallyAddSteamId,
  refreshAllSteamGames,
  refreshSteamGameGlobalAchievements,
  refreshSteamUserData,
  updateSingleGameAchievements,
} from "../controllers/steamController";
import { updateSteamSpyTopGames } from "../schedules/steamSpySchedule";
import config from "../config";

const router = express.Router();

router.get("/top-news-two-weeks", getTopNewsTwoWeeks);

router.get("/top-games-two-weeks", getTopGamesTwoWeeks);

router.get("/steam-user-recently-played-news", getSteamUserRecentlyPlayedNews);

router.get("/refresh-user-steam-data", refreshSteamUserData);

router.get("/steam-user-recently-played", getSteamUserRecentlyPlayed);

router.get("/steam-single-game-news/:appid", getSteamSingleGameNews);

router.get("/steam-game-achievements/:appid", getSteamGameAchievements);

if (config.node_env === "DEV") {
  router.get("/update-steamspy", (req, res, next) => {
    updateSteamSpyTopGames();
    res.send("OK");
  });

  router.get("/update-steam-all", refreshAllSteamGames);

  router.get("/update-global-achs", refreshSteamGameGlobalAchievements);

  router.get(
    "/update-single-game-achievements/:appid",
    updateSingleGameAchievements
  );

  router.get("/manually-add-steamid", manuallyAddSteamId);
}
export default router;
