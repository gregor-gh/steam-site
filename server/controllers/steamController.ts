import { Request, Response, NextFunction } from "express";
import { fetchTopGamesTwoWeeks } from "../models/steamModel";

export async function getTopGamesTwoWeeks(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
    const data = fetchTopGamesTwoWeeks();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500);
  }
}
