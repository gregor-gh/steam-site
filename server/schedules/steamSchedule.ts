import schedule from "node-schedule";
import { getAllGames, updateAllSteamGameGlobalAchs } from "../models/steamModel";

export function runSteamSchedule() {
  schedule.scheduleJob("0 0 7 1-31 1-12 1-7", async () => {
    getAllGames();
    // TODO add a schedule for updating all users' achievement data
    updateAllSteamGameGlobalAchs();
  });
}
