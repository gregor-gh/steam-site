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
    id: "76561198044893617",
    photos: [
      {
        value:
          "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
      },
    ],
  };
  const dbUser = await createReturnSteamUser(demoProfile);
  await downloadUserSteamGames(dbUser.steamId);
  return done(null, dbUser);
});
