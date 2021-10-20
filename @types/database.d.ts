import {
  ISqlType,
  ISqlTypeFactoryWithNoParams,
  ISqlTypeWithLength,
  ISqlTypeWithNoParams,
} from "mssql";

type SqlColumnTypes = ISqlTypeFactoryWithNoParams | ISqlTypeWithNoParams;
type TableCreationColumn = [string, SqlColumnTypes, boolean];
type TableCreation = TableCreationColumn[];

interface DbSteamUser {
  steamId: string;
  displayName: string;
  photoUrl: string;
}

type SteamSpyGameListBasic = Pick<SteamSpyGameList, "appid" | "name" | "ccu">;

interface DbSteamUserRecentlyPlayed {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
}

interface DbSteamSingleGameAchievements {
  apiname: string;
  name: string;
  description: string;
  globalAchievementPercent: number;
  unlocktime: datetime | null;
}
