import { DbSteamUser } from "./database";

export {};

declare global {
  namespace Express {
    interface User extends DbSteamUser {}
  }
}
