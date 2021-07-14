import { ISqlType, ISqlTypeFactoryWithNoParams, ISqlTypeWithLength, ISqlTypeWithNoParams } from "mssql";

type SqlColumnTypes = ISqlTypeFactoryWithNoParams | ISqlTypeWithNoParams
type TableCreationColumn = [string, SqlColumnTypes, boolean];
type TableCreation = TableCreationColumn[];

interface DbSteamUser {
  id: number;
  steamId: string;
  displayName: string;
  photoUrl: string;
}
