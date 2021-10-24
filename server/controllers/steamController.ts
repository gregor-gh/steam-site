import { Request, Response, NextFunction } from "express";
import {
  createReturnSteamUser,
  selectSteamSpyTopGamesTwoWeeks,
  selectSteamUserRecentlyPlayed,
} from "../models/mssqlModel";
import {
  downloadUserSteamGames as downloadSteamUserGames,
  downloadUserSteamGames,
  fetchSteamGameUserAchs,
  fetchSteamSingleGameNews,
  fetchSteamUserRecentlyPlayedGamesNews,
  fetchTopNewsTwoWeeks,
  getAllGames,
  selectOrFetchSteamGameAchievements,
  updateAllSteamGameGlobalAchs,
} from "../models/steamModel";

export async function getTopGamesTwoWeeks(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const gamesList = await selectSteamSpyTopGamesTwoWeeks();
    // const gamesList = await fetchTopGamesTwoWeeks();
    // await insertSteamSpyTopGamesTwoWeeks(gamesList);
    return res.status(200).send(gamesList);
  } catch (err) {
    next(err);
  }
}

export async function getTopNewsTwoWeeks(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newsList = await fetchTopNewsTwoWeeks();

    return res.status(200).send(newsList);
  } catch (err) {
    next(err);
  }
}

export async function getSteamUserRecentlyPlayed(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.user?.steamId) {
      const steamUserRecentlyPlayed = await selectSteamUserRecentlyPlayed(
        req.user.steamId
      );
      res.status(200).send(steamUserRecentlyPlayed);
    } else {
      res.status(401).send("NO");
    }
  } catch (err) {
    next(err);
  }
}

export async function getSteamUserRecentlyPlayedNews(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.user?.steamId) {
      const steamUserRecentlyPlayedNews = await fetchSteamUserRecentlyPlayedGamesNews(
        req.user.steamId
      );
      res.status(200).send(steamUserRecentlyPlayedNews);
    } else {
      res.status(401).send("NO");
    }
  } catch (error) {
    next(error);
  }
}

// refresh an individual user's games and achievements list
export async function refreshSteamUserData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.user?.steamId) {
      await downloadSteamUserGames(req.user.steamId);
      res.status(200).send();
    } else {
      res.status(401).send("NO");
    }
  } catch (err) {
    next(err);
  }
}

// fetch the entire steam game catalogue
export async function refreshAllSteamGames(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const recordsUpdated = await getAllGames();
    res.send(recordsUpdated);
  } catch (err) {
    next(err);
  }
}

export async function getSteamSingleGameNews(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const appid = req.params.appid?.toString();
    if (appid) {
      const steamSingleGameNews = await fetchSteamSingleGameNews(appid);
      res.status(200).send(steamSingleGameNews);
    } else {
      return res.status(500);
    }
  } catch (err) {
    next(err);
  }
}

export async function getSteamGameAchievements(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const appid = req.params.appid?.toString();
    const steamid = req.user?.steamId;

    if (appid) {
      // select game achievements from db (or fetch and add if they don't exist)
      const gameAchievements = await selectOrFetchSteamGameAchievements(
        appid,
        steamid
      );

      // Return to user
      res.send(gameAchievements);
    } else {
      return res.status(400);
    }
  } catch (error) {
    next(error);
  }
}

export async function refreshSteamGameGlobalAchievements(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await updateAllSteamGameGlobalAchs();
    res.send("OK");
  } catch (error) {
    next(error);
  }
}

export async function updateSingleGameAchievements(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const appid = req.params.appid?.toString();
    const steamid = req.user?.steamId;

    if (appid) {
      // select game achievements from db (or fetch and add if they don't exist)
      const gameAchievements = await fetchSteamGameUserAchs(appid, steamid);

      // Return to user
      res.send(gameAchievements);
    } else {
      return res.status(400);
    }
  } catch (error) {
    next(error);
  }
}

// this function is used in development to add some steam ids and flesh out steam game database
export async function manuallyAddSteamId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const steamid = req.query.steamid;
    const username = req.query.username;

    if (typeof steamid === "string" && typeof username === "string") {
      // create user
      const newDbUser = await createReturnSteamUser({
        id: steamid,
        displayName: username,
        photos: [
          {
            value:
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
          },
        ],
      });
      await downloadUserSteamGames(newDbUser.steamId);
      
      res.send(200);
    }
  } catch (error) {
    next(error);
  }
}
