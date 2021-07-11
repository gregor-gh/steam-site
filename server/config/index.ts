import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.port || 3000,
  node_env: process.env.NODE_ENV || "prod",
  sqlHost: process.env.SQLHOST || "127.0.0.1",
  sqlUser: process.env.SQLUSER || "sa",
  sqlPw: process.env.SQLPW || "Password1",
  sqlDb: process.env.SQLDB || "SteamSite",
  steamApiKey: process.env.STEAM_API_KEY || "",
};
