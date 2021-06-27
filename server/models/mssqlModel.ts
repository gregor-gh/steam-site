import {
  ConnectionPool,
  config as SqlConfig,
  Table,
  VarChar,
  Int,
  TinyInt,
} from "mssql";
import { TableCreation } from "../../@types/database";
import config from "../config";

const sqlConfig: SqlConfig = {
  user: config.sqlUser,
  password: config.sqlPw,
  server: config.sqlHost,
  database: config.sqlDb,
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};

const sqlPool = new ConnectionPool(sqlConfig).connect();
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

export async function selectinsertSteamSpyTopGamesTwoWeeks() {
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
