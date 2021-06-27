import { Request, Response, NextFunction } from "express";
import { insertSteamSpyTopGamesTwoWeeks } from "../models/mssqlModel";
import {
  fetchTopGamesTwoWeeks,
  fetchTopNewsTwoWeeks,
} from "../models/steamModel";

export async function getTopGamesTwoWeeks(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //const gamesList = await fetchTopGamesTwoWeeks();
    // const gamesList = await fetchTopGamesTwoWeeks();
    // await insertSteamSpyTopGamesTwoWeeks(gamesList);
    return res.status(200).send("Tofinish");
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
