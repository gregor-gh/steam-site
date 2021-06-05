import express, { Application } from "express";
import config from "./config";
import path from "path";
import dotenv from "dotenv";
import passport from "passport";
import util from "util";
import session from "express-session";
const SteamStrategy = require("passport-steam");
import authRouter from "./routes/auth"
dotenv.config();

const app: Application = express();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj: any, done) {
  done(null, obj);
});

// Use the SteamStrategy within Passport.
passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:3000/api/auth/callback",
      realm: "http://localhost:3000/",
      apiKey: "40966C4AD8B50D3BBBE04DC0ABF1F7EA",
    },
    function (identifier: any, profile: any, done: any) {
      // asynchronous verification, for effect...
      console.log(profile)
      process.nextTick(function () {
        profile.identifier = identifier;
        console.log("THIS");
        return done(null, profile);
      }); //TODO come back to this
    }
  )
);

// Initialise passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//if (config.node_env === "prod") {
  app.use(express.static(path.join(__dirname,"..", "frontend")));
//}

const router = express.Router();
app.use("/", router);

router.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname,"..", "frontend", "/index.html"))
});
// app.listen(config.port, () =>
//   console.log(`Server started on port ${config.port}`)
// );

const server = http.createServer(app)
server.listen(3000)