import express, { Application, Request, Response, NextFunction } from "express";
import config from "./config";
import path from "path";
import http from "http";
import session from "express-session";
import passport from "passport";
import { steamStrategy } from "./strategies/steamStrategy";
import { demoStrategy } from "./strategies/demoStrategy";
// import util from "util";
import cors from "cors";
import authRouter from "./routes/auth";
import steamRouter from "./routes/steam";
import { runSteamSpySchedule } from "./schedules/steamSpySchedule";
import { returnSteamUser } from "./models/mssqlModel";
import { runSteamSchedule } from "./schedules/steamSchedule";

const app: Application = express();
// Initialise passport
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "TESTEROONI",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.authenticate("session"));

// Use the SteamStrategy within Passport.
passport.use(steamStrategy);
// Use the LocalStategy for use with the demo account
passport.use("demo",demoStrategy);

passport.serializeUser((user, done) => {
  done(null, user.steamId);
});

passport.deserializeUser(async (id: string, done) => {
  const dbUser = await returnSteamUser(id);
  done(null, dbUser);
});

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

// app.listen(config.port, () =>
//   console.log(`Server started on port ${config.port}`)
// );

// Error Handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).send(err.description);
});

const server = http.createServer(app);
server.listen(config.port || 3000);

// Run data update schedules
runSteamSpySchedule();
runSteamSchedule();
