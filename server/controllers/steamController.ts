import { Request, Response, NextFunction } from "express";
import { selectSteamSpyTopGamesTwoWeeks } from "../models/mssqlModel";
import { fetchTopNewsTwoWeeks, getUserSteamGames } from "../models/steamModel";

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
    const newList = await fetchTopNewsTwoWeeks();

    return res.status(200).send(newList);
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
    console.log(req.user)
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
