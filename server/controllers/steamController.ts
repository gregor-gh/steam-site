import { Request, Response, NextFunction } from "express";
import {
  selectSteamSpyTopGamesTwoWeeks,
  selectSteamUserRecentlyPlayed,
} from "../models/mssqlModel";
import {
  downloadUserSteamGames as downloadSteamUserGames,
  fetchSteamSingleGameNews,
  fetchSteamUserRecentlyPlayedGamesNews,
  fetchTopNewsTwoWeeks,
  getAllGames,
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

// export async function getUserNewsTwoWeeks(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     if (req.user) {
//       const newsList = await fetchUserNews(req.user?.steamId);
//       return res.status(200).send(newsList);
//     } else {
//       return res.status(401).send();
//     }
//   } catch (err) {
//     next(err);
//   }
// }

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
