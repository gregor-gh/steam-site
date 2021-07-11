import config from "../config"
const SteamStrategy = require("passport-steam");

export const steamStrategy =
  new SteamStrategy(
    {
      returnURL: "http://localhost:3000/api/auth/callback", //TODO change this to work in production too
      realm: "http://localhost:3000/", //TODO change this to work in production
      apiKey: config.steamApiKey,
    },
    function (identifier: any, profile: any, done: any) {
      // TODO use profile here
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )


