import { createReturnSteamUser, returnSteamUser } from "../models/mssqlModel";
import { downloadUserSteamGames } from "../models/steamModel";
import * as passportLocal from "passport-local";
import config from "../config";
const LocalStrategy = passportLocal.Strategy;

// note, this strategy is used for the demo account only
export const demoStrategy = new LocalStrategy(async function (
  _username,
  _password,
  done
) {
  const demoProfile: SteamUser = {
    displayName: "demo",
    id: config.steamDemoUserId,
    photos: [
      {
        value: "demo", // the client will replace this with a demo profile avatar
      },
    ],
  };

  // check if user already exists
  const dbUser = await returnSteamUser(config.steamDemoUserId);

  // return existing user if so
  if (dbUser) {
    return done(null, dbUser);
  }

  // otherwise create new user and sync games
  const newDbUser = await createReturnSteamUser(demoProfile);
  await downloadUserSteamGames(newDbUser.steamId);
  return done(null, newDbUser);
});
