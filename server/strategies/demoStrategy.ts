import { createReturnSteamUser } from "../models/mssqlModel";
import { downloadUserSteamGames } from "../models/steamModel";
import * as passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;

// note, this strategy is used for the demo account only
export const demoStrategy = new LocalStrategy(async function (
  _username,
  _password,
  done
) {
  const demoProfile: SteamUser = {
    displayName: "demo",
    id: "76561197960435530",
  };
  const dbUser = await createReturnSteamUser(demoProfile);
  await downloadUserSteamGames(dbUser.steamId);
  return done(null, dbUser);
});
