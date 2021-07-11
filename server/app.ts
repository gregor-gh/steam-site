import express, { Application, Request, Response, NextFunction } from "express";
import config from "./config";
import path from "path";
import http from "http";
import passport from "passport";
import { steamStrategy } from "./strategies/steamStrategy";
// import util from "util";
// import session from "express-session";
import cors from "cors";
import authRouter from "./routes/auth";
import steamRouter from "./routes/steam";
import { runSteamSpySchedule } from "./schedules/steamSpySchedule";

const app: Application = express();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj: any, done) {
  done(null, obj);
});

// Use the SteamStrategy within Passport.
passport.use(steamStrategy);

// Initialise passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//if (config.node_env === "prod") {
app.use(express.static(path.join(__dirname, "..", "frontend")));
//}

const router = express.Router();
app.use("/", router);
app.use("/api/auth", authRouter);
app.use("/api/steam", steamRouter);

router.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "/index.html"));
});

router.get("/api/test", (req, res) => {
  console.log("TEST");
  res.send("OK");
});
// app.listen(config.port, () =>
//   console.log(`Server started on port ${config.port}`)
// );

// Error Handler
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send(err.description);
});

const server = http.createServer(app);
server.listen(config.port || 3000);

// Run data update schedules
runSteamSpySchedule();
