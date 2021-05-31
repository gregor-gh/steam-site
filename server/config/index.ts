import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.port || 3000,
  node_env: process.env.NODE_ENV || "prod",
};
