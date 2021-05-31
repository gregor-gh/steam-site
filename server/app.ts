import express, { Application } from "express";
import config from "./config";
import path from "path";
import dotenv from "dotenv";
import http from "http"
dotenv.config();

const app: Application = express();

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