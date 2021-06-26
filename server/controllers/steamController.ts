import { Request, Response, NextFunction } from "express";
import {
  fetchTopGamesTwoWeeks,
  fetchTopNewsTwoWeeks,
} from "../models/steamModel";

export async function getTopGamesTwoWeeks(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
    const gamesList = await fetchTopGamesTwoWeeks();
    return res.status(200).send(gamesList);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
}

export async function getTopNewsTwoWeeks(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
    const newList = await fetchTopNewsTwoWeeks().catch((err) => {
      console.error(err);
    });
    
    return res.status(200).send(newList);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
