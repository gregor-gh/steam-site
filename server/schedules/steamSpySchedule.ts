import schedule from "node-schedule";
import { insertSteamSpyTopGamesTwoWeeks } from "../models/mssqlModel";
import { fetchTopGamesTwoWeeks } from "../models/steamModel";

async function updateSteamSpyTopGames() {
  const topGames = await fetchTopGamesTwoWeeks();
  insertSteamSpyTopGamesTwoWeeks(topGames);
}

export function runSteamSpySchedule() {
  schedule.scheduleJob("0 0 8 1-31 1-12 1-7", async () => {
    updateSteamSpyTopGames();
  });
}

// runSteamSpySchedule();
