import config from "../config";
import { createReturnSteamUser } from "../models/mssqlModel";
import { downloadUserSteamGames } from "../models/steamModel";
const SteamStrategy = require("passport-steam");

export const steamStrategy = new SteamStrategy(
  {
    returnURL: "http://localhost:3000/api/auth/callback", //TODO change this to work in production too
    realm: "http://localhost:3000/", //TODO change this to work in production
    apiKey: config.steamApiKey,
  },
  async function (_identifier: any, profile: SteamUser, done: any) {
    try {
      const dbUser = await createReturnSteamUser(profile);
      await downloadUserSteamGames(dbUser.steamId);
      return done(null, dbUser);
    } catch (error) {
      console.error(error);
      done(null, null);
    }
  }
);
