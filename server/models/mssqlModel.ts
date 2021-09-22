import {
  ConnectionPool,
  config as SqlConfig,
  Table,
  VarChar,
  Int,
  TinyInt,
  IRecordSet,
  MAX,
} from "mssql";
import {
  DbSteamUser,
  SteamSpyGameListBasic,
  TableCreation,
} from "../../@types/database";
import config from "../config";

const sqlConfig: SqlConfig = {
  user: config.sqlUser,
  password: config.sqlPw,
  server: config.sqlHost,
  database: config.sqlDb,
  requestTimeout: 120_000,
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};

const sqlPool = new ConnectionPool(sqlConfig);
// check if SQL Pool is connected, return if it is, connect if not
async function connectSqlPool() {
  try {
    const sqlConn = await sqlPool;
    if (sqlConn.connected) {
      return sqlConn;
    } else {
      return (await sqlPool).connect();
    }
  } catch (err) {
    throw err;
  }
}

export async function selectSteamSpyTopGamesTwoWeeks(): Promise<
  IRecordSet<SteamSpyGameListBasic>
> {
  try {
    const sql = await connectSqlPool();

    const { recordset } = await sql.query(
      "select appid,name,ccu from dbo.SteamSpyTopGamesTwoWeeks order by ccu desc"
    );

    return recordset;
  } catch (err) {
    throw err;
  }
}

export async function insertSteamSpyTopGamesTwoWeeks(
  topGames: SteamSpyGameList[]
) {
  try {
    const sql = await connectSqlPool();

    await sql.query("delete from dbo.SteamSpyTopGamesTwoWeeks");

    const table = createTable("dbo.SteamSpyTopGamesTwoWeeks", false, [
      ["appid", Int, false],
      ["average_2weeks", Int, false],
      ["average_forever", Int, false],
      ["ccu", Int, false],
      ["developer", VarChar(100), false],
      ["discount", VarChar(10), false],
      ["initialprice", VarChar(10), false],
      ["median_2weeks", Int, false],
      ["median_forever", Int, false],
      ["name", VarChar(500), false],
      ["negative", Int, false],
      ["owners", VarChar(100), false],
      ["positive", Int, false],
      ["price", VarChar(10), false],
      ["publisher", VarChar(100), false],
      ["score_rank", VarChar(10), false],
      ["userscore", TinyInt, false],
    ]);

    topGames.forEach((game) => {
      table.rows.add(
        game.appid,
        game.average_2weeks,
        game.average_forever,
        game.ccu,
        game.developer,
        game.discount,
        game.initialprice,
        game.median_2weeks,
        game.median_forever,
        game.name,
        game.negative,
        game.owners,
        game.positive,
        game.price,
        game.publisher,
        game.score_rank,
        game.userscore
      );
    });

    sql.request().bulk(table);
  } catch (error) {
    throw error;
  }
}

function createTable(
  name: string,
  create: boolean,
  columns: TableCreation
): Table {
  const table = new Table(name);
  table.create = create;
  columns.forEach((column) => {
    table.columns.add(column[0], column[1], { nullable: column[2] });
  });
  return table;
}

export async function steamCreateReturnUser(
  user: SteamUser
): Promise<IRecordSet<DbSteamUser>> {
  const sql = await connectSqlPool();
  const { recordset: dbUser } = await sql.query(
    `exec createReturnUser @steamId='${user.id}', @displayName='${
      user.displayName
    }', @photoUrl='${user.photos && user.photos[0].value}'`
  );

  return dbUser[0];
}

export async function steamReturnUser(steamId: string): Promise<DbSteamUser> {
  try {
    const sql = await connectSqlPool();

    const {
      recordset: dbUser,
    }: { recordset: IRecordSet<DbSteamUser> } = await sql.query(
      `exec returnUser @steamId='${steamId}'`
    );

    return dbUser[0];
  } catch (error) {
    throw error;
  }
}

// FIXME this throws Violation of PRIMARY KEY constraint 'PK__SteamGam__C00F024D2C779ACA'. Cannot insert duplicate key in object 'dbo.SteamGamesStaging'. The duplicate key value is (758570).'
export async function steamUpdateAllGames(gameList: SteamGameListItem[]) {
  try {
    const sql = await connectSqlPool();

    const table = createTable("dbo.SteamGamesStaging", false, [
      ["appid", Int, false],
      ["name", VarChar(MAX), false],
    ]);

    gameList.forEach((game) => {
      table.rows.add(game.appid, game.name);
    });

    await sql.query("delete from dbo.SteamGamesStaging");

    await sql.request().bulk(table);

    const { recordset } = await sql.query("exec dbo.UpdateSteamGames");
    return recordset[0];
  } catch (err) {
    throw err;
  }
}

// Update the database with a given user's list of steam games,
// inserting new games, updating their playtime_forever and
// deleting games that are no longer in the game library.
export async function steamMergeUserOwnedGames(
  gameList: SteamUserGameListItem[],
  steamId: string
) {
  try {
    const sql = await connectSqlPool();

    const table = createTable("dbo.SteamUserGamesStaging", false, [
      ["steamId", VarChar(60), false],
      ["appid", Int, false],
      ["name", VarChar(MAX), false],
      ["playtime_forever", Int, true],
      ["playtime_2weeks", Int, true],
    ]);

    gameList.forEach((game) => {
      table.rows.add(steamId, game.appid, game.name, game.playtime_forever, 0); // Add 0 for playtime 2 weeks, this will be updated later
    });

    const query = `exec dbo.DeleteFromSteamUserGamesStaging ${steamId}`;

    await sql.query(query);

    await sql.request().bulk(table);

    const { recordset } = await sql.query(
      `exec dbo.UpdateSteamUserOwnedGames ${steamId}`
    );

    return recordset;
  } catch (error) {
    throw error;
  }
}

export async function steamUpdateRecentlyPlayedGameTime(
  gameList: SteamUserGameListItem[],
  steamId: string
) {
  try {
    const sql = await connectSqlPool();

    // await sql.query(

    // )
  } catch (error) {
    throw error;
  }
}
