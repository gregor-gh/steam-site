import sql from "mssql";
import config from "../config";

const pool = new sql.ConnectionPool({
  user: config.sqlUser,
  password: config.sqlPw,
  server: config.sqlHost,
  database: config.sqlDb,
  options: {
    trustServerCertificate: true,
    enableArithAbort:true,
  },
  
});

// const test = async () => {
//   try {
//     console.log(pool)
//     await pool.connect();
//     const data = await pool.query("select * from sys.views");
//     console.log(data)
//   } catch (err) {
//     console.error(err);
//   }
// };

export async function insertSteamSpyTopGamesTwoWeeks(topGames: SteamSpyGameList[]) {
  // insert to db
}

// test();
