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
