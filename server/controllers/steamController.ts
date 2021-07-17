import { Request, Response, NextFunction } from "express";
import { selectSteamSpyTopGamesTwoWeeks } from "../models/mssqlModel";
import {
  fetchTopNewsTwoWeeks,
  fetchUserNews,
  getAllGames,
  getUserSteamGames,
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

export async function getUserNewsTwoWeeks(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.user) {
      const newsList = await fetchUserNews(req.user?.steamId);
      return res.status(200).send(newsList);
    } else {
      return res.status(401).send();
    }
  } catch (err) {
    next(err);
  }
}

export async function refreshUserSteamData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.user);
    if (req.user?.steamId) {
      const steamGames = await getUserSteamGames(req.user?.steamId);

      res.send("OK");
    } else {
      res.status(401).send("NO");
    }
  } catch (err) {
    next(err);
  }
}

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
