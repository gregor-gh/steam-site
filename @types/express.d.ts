export {};

declare global {
  namespace Express {
    interface User extends SteamUser {
      username: string;
      // Add whatever you're missing
    }
  }
}
