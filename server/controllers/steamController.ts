import { Request, Response, NextFunction } from "express";
import { selectinsertSteamSpyTopGamesTwoWeeks } from "../models/mssqlModel";
import { fetchTopNewsTwoWeeks } from "../models/steamModel";

export async function getTopGamesTwoWeeks(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const gamesList = await selectinsertSteamSpyTopGamesTwoWeeks();
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
